# Java数据类型

Java 是一种静态类型的编程语言，意味着在声明变量时必须明确指定其数据类型。Java 中的数据类型主要可以分为两大类：基本数据类型（Primitive Data Types）和引用数据类型（Reference Data Types）。

## 基本数据类型
Java 提供了八种基本数据类型，它们都是预先定义好的，并且存储在栈内存中。这八种基本数据类型包括：

**整数类型：**

·   byte：8 位有符号二进制整数

·   short：16 位有符号二进制整数

·   int：32 位有符号二进制整数（默认整数类型）

·   long：64 位有符号二进制整数（使用 L 或 l 后缀）

**浮点类型：**

·   float：单精度 32 位 IEEE 754 浮点数（使用 F 或 f 后缀）

·   double：双精度 64 位 IEEE 754 浮点数（默认浮点类型）

**字符类型：**

·   char：16 位 Unicode 字符

**布尔类型：**

·   boolean：只有两个可能的值，true 和 false

## 引用数据类型
引用数据类型是对象类型的统称，包括类、接口、数组等。它们存储在堆内存中，并且引用（即变量的值）存储在栈内存中。

**类（Class Types）：**
    在 Java 中，你可以创建自定义的类类型。例如，String、Integer 等都是 Java 标准库中的类类型。

**接口（Interface Types）：**
    接口也是一种引用类型，它是方法的集合。一个类可以实现一个或多个接口。

**数组（Array Types）：**
    数组是相同类型的元素的集合。Java 支持一维和多维数组。

## 示例
下面是一些 Java 数据类型的示例：

```

java
byte b = 10;  
short s = 20;  
int i = 30;  
long l = 40L;

float f = 50.0F;  
double d = 60.0;

char c = 'a';  
boolean bool = true;

String str = "Hello, World!"; // String 是引用类型

// 数组  
int[] intArray = new int[5];  
double[][] doubleArray = new double[2][3];

```

需要注意的是，Java 中的基本数据类型和引用数据类型在内存分配、赋值、比较等方面都有显著的不同。基本数据类型的变量直接存储值，而引用类型的变量存储的是对对象的引用（内存地址）。