# RPC序列化方式介绍及对比

## RPC序列化方式介绍

### 为什么需要序列化？

网络传输的数据须是二进制数据，但调用方请求的出入参数都是对象：

对象不能直接在网络传输，需提前转成可传输的二进制，且要求可逆，即“序列化”，

这时，服务提供方就能正确从二进制数据中分割出不同请求，同时根据请求类型和序列化类型，把二进制的消息体逆向还原成请求对象，即“反序列化”

### RPC（远程过程调用）的序列化方式主要有以下几种：

**JDK原生序列化**：这是Java默认的序列化方式，但安全性较差，且性能不是最优。

**JSON**：JSON是一种轻量级的数据交换格式，但它是一种文本型序列化框架，没有数据类型信息，因此序列化后的数据体积较大，对于大数据量服务可能会导致巨大的内存和磁盘开销。JSON序列化需要通过反射解决类型问题，所以性能相对较差。

**XML**：XML也是一种文本型序列化方式，序列化的额外空间开销比较大。

**Hessian**：Hessian是一种动态类型、二进制、紧凑的序列化框架，可以跨语言使用。它比JDK和JSON序列化更加高效，生成的字节数也更小，具有良好的兼容性和稳定性。

**Protobuf**：Protobuf是Google开发的一种轻便、高效的结构化数据存储格式，支持多种语言。它序列化后的体积相对较小，且不需要通过反射获取类型，因此序列化和反序列化速度快。Protobuf使用IDL（Interface Description Language）定义数据结构，保证了类型安全。

**Thrift**：Thrift是Facebook开源的一个高性能、轻量级的RPC服务框架，它不仅提供了序列化协议，还包括了RPC框架的实现。Thrift在空间开销和解析性能上相比JSON和XML有较大提升。

**Dubbo序列化**：Dubbo默认使用的是阿里修改的Hessian2作为序列化方式，而不是原生的Hessian2。Dubbo还提供了其他序列化方案，如Java原生态序列化、JSON序列化和自定义的Dubbo序列化。

在选择RPC序列化方式时，需要考虑数据的复杂性、性能需求、安全性以及是否支持跨语言等因素。不同的序列化方式适用于不同的场景和需求。

## RPC序列化方式对比

### JDK原生序列化

案例：

```
import java.io.*;

public class Student implements Serializable {
//学号
private int no;
//姓名
private String name;

    public int getNo() {
        return no;
    }

    public void setNo(int no) {
        this.no = no;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "Student{" +
                "no=" + no +
                ", name='" + name + '\'' +
                '}';
    }

    public static void main(String[] args) throws IOException, ClassNotFoundException {
        String home = System.getProperty("user.home");
        String basePath = home + "/Desktop";
        FileOutputStream fos = new FileOutputStream(basePath + "student.dat");
        Student student = new Student();
        student.setNo(100);
        student.setName("TEST_STUDENT");
        ObjectOutputStream oos = new ObjectOutputStream(fos);
        oos.writeObject(student);
        oos.flush();
        oos.close();

        FileInputStream fis = new FileInputStream(basePath + "student.dat");
        ObjectInputStream ois = new ObjectInputStream(fis);
        Student deStudent = (Student) ois.readObject();
        ois.close();

        System.out.println(deStudent);

    }
}
```

序列化具体由ObjectOutputStream完成

反序列化的具体实现是由ObjectInputStream完成

**JDK序列化过程：**

序列化过程就是在读取对象数据的时候，不断加入一些特殊分隔符，这些特殊分隔符用于在反序列化过程中截断用。

头部数据，声明序列化协议、序列化版本，用于高低版本向后兼容。

对象数据主要包括类名、签名、属性名、属性类型及属性值，当然还有开头结尾等数据，除了属性值属于真正的对象值，其他都是为了反序列化用的元数据。

存在对象引用、继承的情况下，就是递归遍历“写对象”逻辑。

将对象的类型、属性类型、属性值按固定格式写到二进制字节流中来完成序列化，再按固定格式读出对象的类型、属性类型、属性值，通过这些信息重建一个新的对象，完成反序列化。

### JSON

典型KV方式，没有数据类型，是一种文本型序列化框架。

JSON进行序列化的额外空间开销较大

JSON没有类型，但像Java这种强类型语言，需通过反射统一解决，性能不太好

所以如果RPC框架选用JSON序列化，服务提供者与服务调用者之间传输的数据量要相对较小。

### Hessian
动态类型、二进制、紧凑的，并且可跨语言移植的一种序列化框架。比JDK、JSON更加紧凑，性能上要比JDK、JSON序列化高效很多，而且生成的字节数更小。

使用代码示例如下：
```
Student student = new Student();
student.setNo(101);
student.setName("HESSIAN");

//把student对象转化为byte数组
ByteArrayOutputStream bos = new ByteArrayOutputStream();
Hessian2Output output = new Hessian2Output(bos);
output.writeObject(student);
output.flushBuffer();
byte[] data = bos.toByteArray();
bos.close();

//把刚才序列化出来的byte数组转化为student对象
ByteArrayInputStream bis = new ByteArrayInputStream(data);
Hessian2Input input = new Hessian2Input(bis);
Student deStudent = (Student) input.readObject();
input.close();

System.out.println(deStudent);
```

相对于JDK、JSON，由于Hessian更加高效，生成的字节数更小，有非常好的兼容性和稳定性，所以Hessian更加适合作为RPC框架远程通信的序列化协议。

但Hessian本身也有问题，官方版本对Java里面一些常见对象的类型不支持，比如：

Linked系列，LinkedHashMap、LinkedHashSet等，但是可以通过扩展CollectionDeserializer类修复；
Locale类，可以通过扩展ContextSerializerFactory类修复；
Byte/Short反序列化的时候变成Integer。

### Protobuf

Protobuf 是 Google 公司内部的混合语言数据标准，是一种轻便、高效的结构化数据存储格式，可以用于结构化数据序列化，支持Java、Python、C++、Go等语言。Protobuf使用的时候需要定义IDL（Interface description language），然后使用不同语言的IDL编译器，生成序列化工具类，它的优点是：

序列化后体积相比 JSON、Hessian小很多；

IDL能清晰地描述语义，所以足以帮助并保证应用程序之间的类型不会丢失，无需类似 XML 解析器；
序列化反序列化速度很快，不需要通过反射获取类型；
消息格式升级和兼容性不错，可以做到向后兼容。
使用代码示例如下：

```
/**
*
* // IDl 文件格式
* synax = "proto3";
* option java_package = "com.test";
* option java_outer_classname = "StudentProtobuf";
*
* message StudentMsg {
* //序号
* int32 no = 1;
* //姓名
* string name = 2;
* }
*
*/

StudentProtobuf.StudentMsg.Builder builder = StudentProtobuf.StudentMsg.newBuilder();
builder.setNo(103);
builder.setName("protobuf");

//把student对象转化为byte数组
StudentProtobuf.StudentMsg msg = builder.build();
byte[] data = msg.toByteArray();

//把刚才序列化出来的byte数组转化为student对象
StudentProtobuf.StudentMsg deStudent = StudentProtobuf.StudentMsg.parseFrom(data);

System.out.println(deStudent);
```

Protobuf 非常高效，但是对于具有反射和动态能力的语言来说，这样用起来很费劲，这一点就不如Hessian，比如用Java的话，这个预编译过程不是必须的，可以考虑使用Protostuff。

Protostuff不需要依赖IDL文件，可以直接对Java领域对象进行反/序列化操作，在效率上跟Protobuf差不多，生成的二进制格式和Protobuf是完全相同的，可以说是一个Java版本的Protobuf序列化框架。但在使用过程中，我遇到过一些不支持的情况，也同步给你：

不支持null；
ProtoStuff不支持单纯的Map、List集合对象，需要包在对象里面。

## RPC序列化选型

**性能和效率：**

**空间开销：**
即序列化之后的二进制数据的体积大小。序列化后的字节数据体积越小，网络传输的数据量就越小，传输数据的速度也就越快，由于RPC是远程调用，那么网络传输的速度将直接关系到请求响应的耗时。

**通用性和兼容性：**
某类型为集合类的入参服务调用者不能解析了，服务提供方将入参类加一个属性之后服务调用方不能正常调用，升级了RPC版本后发起调用时报序列化异常…

通用性和兼容性的优先级考虑很高，直接关系到服务调用稳定性和可用率。看重这种序列化协议在版本升级后的兼容性，是否支持更多的对象类型，是否跨平台、跨语言，是否有很多人已用过并踩过很多坑，其次考虑性能、效率和空间开销。

**安全性：**
JDK原生序列化存在漏洞。如果序列化存在安全漏洞，线上服务可能被入侵：



首选Hessian与Protobuf，性能、时间开销、空间开销、通用性、兼容性和安全性上，都满足要求：

Hessian使用更方便，在对象的兼容性上更好
Protobuf则更加高效，更通用

## FAQ
**1 对象构造得太复杂**

属性很多，并且存在多层的嵌套，比如A对象关联B对象，B对象又聚合C对象，C对象又关联聚合很多其他对象，对象依赖关系过于复杂。

序列化框架在序列化与反序列化对象时，对象越复杂就越浪费性能，消耗CPU，这会严重影响RPC框架整体的性能。

**2 对象太庞大**

RPC请求经常超时，排查后发现他们的入参对象非常得大，比如为一个大List或者大Map，序列化之后字节长度达到了上兆字节。这种情况同样会严重地浪费性能、CPU，并且序列化一个如此大的对象是很耗费时间的，这肯定会直接影响到请求耗时。

**3 使用序列化框架不支持的类作为入参类**

如Hessian天然不支持LinkHashMap、LinkedHashSet等，而且大多数情况下最好不要使用第三方集合类，如Guava中的集合类，很多开源的序列化框架都是优先支持编程语言原生的对象。因此如果入参是集合类，应尽量选用原生的、最为常用的集合类，如HashMap、ArrayList。

**4 对象有复杂继承关系**

序列化对象时会将对象属性一一序列化，当有继承关系时，会不停寻找父类，遍历属性。就像问题1，对象关系越复杂，越浪费性能。

在RPC框架的使用过程中，尽量构建简单的对象作为入参和返回值对象，避免上述问题。

## 总结
使用RPC框架的过程中，我们构造入参、返回值对象，主要记住以下几点：

对象要尽量简单，没有太多的依赖关系，属性不要太多，尽量高内聚；
入参对象与返回值对象体积不要太大，更不要传太大的集合；
尽量使用简单的、常用的、开发语言原生的对象，尤其是集合类；
对象不要有复杂的继承关系，最好不要有父子类的情况。
实际上，虽然RPC框架可以让我们发起远程调用就像调用本地一样，但在RPC框架的传输过程中，入参与返回值的根本作用就是用来传递信息的，为了提高RPC调用整体的性能和稳定性，我们的入参与返回值对象要构造得尽量简单。

**FAQ**

RPC框架在序列化框架的选型上，你认为还需要考虑哪些因素？你还知道哪些优秀的序列化框架，它们又是否适合在RPC调用中使用？

序列化一般用在协议里面的payload里。

Redis使用的RESP，在做序列化时也是会增加很多冗余的字符，但它胜在实现简单、可读性强易于理解。

JSON和XML使用字符串表示所有的数据，对于非字符数据来说，字面量表达会占用很多额外的存储空间，并且会严重受到数值大小和精度的影响。 一个32位浮点数 1234.5678 在内存中占用 4 bytes 空间，如果存储为 utf8 ，则需要占用 9 bytes空间，在JS这样使用utf16表达字符串的环境中，需要占用 18 bytes空间。 使用正则表达式进行数据解析，在面对非字符数据时显得十分低效，不仅要耗费大量的运算解析数据结构，还要将字面量转换成对应的数据类型。

在面对海量数据时，这种格式本身就能够成为整个系统的IO与计算瓶颈，甚至直接overflow。

常见的序列化协议有：xml json protobuf jdk等
xml和json可读性好，序列化后空间大，性能差，而且json序列化后无类型，需要反射获取对象类型。而protobuf则是可读性差点，序列化后占用空间小，性能好，不需要反序列化获取属性类型等优点。对性能要求高的原则protobuf比较好点

为什么JSON的额外开销大呢？是因为存在大量的换行吗
最明显的就是你说的数据包大，因为字符相对二进制更占空间。

json需要内存去解析能理解，但为什么json序列化还需要磁盘开销啊。json序列化的二进制数据在体量比其他序列化方法小一些吧，可以减少带宽和流量？

说的如果json数据存储在磁盘上，json字节数相对其他数据都偏大。

