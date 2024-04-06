export default {
    title: 'ZhouDing个人技术博客',
    description: '个人技术博客',
    // 打包目录
    dest: './dist',
    base: "/",
    head: [
        // 添加图标
        ['link', {rel: 'icon', href: '/favicon.ico'}]
    ],
    themeConfig: {
        logo: '/logo.jpg',
        nav: [
            {text: '博客', link: '/'},
            {text: 'GitHub', link: 'https://github.com/zhouding030'},
            {text: '联系', link: '/public/0.md'}
        ],
        sidebar: [
            {
                text: "关于",
                collapsible: true,
                collapsed: true,
                items: [
                    {text: "作者简介",link: "/aboutme/0.md"},
                    /*{text: "开源项目",link: "/aboutme/0.md"},*/
                ],
            },
            {
                text: "DDD领域驱动设计",
                collapsible: true,
                collapsed: true,
                items: [
                    {
                        text: "DDD整体理解",
                        link: "/ddd/DDD整体理解.md",
                    },{
                        ext: "DDD落地实战",
                       link: "/ddd/DDD落地实战.md",
                    },{
                        text: "DDD领域建模",
                        link: "/ddd/DDD领域建模.md",
                    },{
                        text: "DDD划分限界上下文",
                        link: "/ddd/DDD划分限界上下文.md",
                    },{
                         text: "DDD战术设计",
                         link: "/ddd/DDD战术设计.md",
                     },{
                         text: "DDD构建代码结构",
                         link: "/ddd/DDD构建代码结构.md",
                     }
                ],
            },
            {

                 text: "Java",
                 collapsible: true,
                 collapsed: true,
                 items: [
                    {
                         text: "java基础知识",
                         items: [
                            {
                                text: "java数据类型",
                                link: "/java/java基础知识/java数据类型.md",
                            },
                             {
                                  text: "Object对象",
                                  link: "/java/java基础知识/Object对象.md",
                             },
                             {
                                  text: "其他...",
                                  link: "/java/java基础知识/其他.md",
                             }
                         ]
                    },{
                        text: "并发编程与多线程",
                        link: "/java/并发编程与多线程/Java并发编程介绍.md"
                    },{
                         text: "集合原理",
                         link: "/java/集合原理/Java集合基础介绍.md"
                    },{
                         text: "JVM原理",
                         link: "/java/JVM原理/JVM内存模型.md"
                    },{
                         text: "IO与网络编程",
                         link: "/java/IO与网络编程/IO与网络编程介绍.md"
                    }
                 ]
            },
            {
                 text: "设计模式",
                 collapsible: true,
                 collapsed: true,
                 items: [
                     {text: "Java设计模式介绍",link: "/设计模式/Java设计模式介绍.md"},
                     {text: "设计模式总结",link: "/设计模式/设计模式总结.md"}
                 ]
            },
            {
                text: "Spring 框架",
                collapsible: true,
                collapsed: true,
                items: [
                    {text: "Spring框架介绍",link: "/spring框架/Spring框架介绍.md"},
                    {text: "Spring知识点",link: "/spring框架/Spring知识点.md"}
                ]
            },
            {
                text: "Spring MVC 框架",
                collapsible: true,
                collapsed: true,
                items: [
                    {text: "SpringMVC框架介绍",link: "/springMVC框架/SpringMVC框架介绍.md"},
                    {text: "SpringMVC知识点",link: "/springMVC框架/SpringMVC知识点.md"}
                ]
            },
            {
                text: "Spring Boot 框架",
                collapsible: true,
                collapsed: true,
                items: [
                    {text: "SpringBoot框架介绍",link: "/springboot框架/SpringBoot框架介绍.md"},
                    {text: "SpringBoot知识点",link: "/springboot框架/SpringBoot知识点.md"}
                ]
            },
            {
                text: "MyBatis 框架",
                collapsible: true,
                collapsed: true,
                items: [
                    {text: "MyBatis框架介绍",link: "/mybatis/MyBatis框架介绍.md"},
                    {text: "MyBatis知识点",link: "/mybatis/MyBatis知识点.md"}
                ]
            },
            {
                text: "Spring Cloud 生态",
                collapsible: true,
                collapsed: true,
                items: [
                    {text: "Spring Cloud框架介绍",link: "/springcloud框架/SpringCloud框架介绍.md"},
                    {text: "Spring Cloud知识点",link: "/springcloud框架/SpringCloud知识点.md"}
                ]
            },{
                text: "Dubbo 框架",
                collapsible: true,
                collapsed: true,
                items: [
                    {text: "Dubbo框架介绍",link: "/dubbo/Dubbo框架介绍.md"},
                    {text: "Dubbo知识点",link: "/dubbo/Dubbo知识点.md"}
                ]
            },
            {
                text: "Netty 框架",
                collapsible: true,
                collapsed: true,
                items: [
                    {text: "Netty框架介绍",link: "/netty/Netty框架介绍.md"},
                    {text: "Netty知识点",link: "/netty/Netty知识点.md"}
                ]
            },
            {
                text: "MySQL",
                collapsible: true,
                collapsed: true,
                items: [
                    {text: "MySQL介绍",link: "/mysql/MySQL介绍.md"},
                    {text: "MySQL知识点",link: "/mysql/MySQL知识点.md"}
                ]
            },
            {
                text: "Redis",
                collapsible: true,
                collapsed: true,
                items: [
                    {text: "Redis介绍",link: "/redis/Redis介绍.md"},
                    {text: "Redis知识点",link: "/redis/Redis知识点.md"}
                ]
            },
            {
                text: "Kafka",
                collapsible: true,
                collapsed: true,
                items: [
                    {text: "Kafka介绍",link: "/kafka/Kafka介绍.md"},
                    {text: "Kafka知识点",link: "/kafka/Kafka知识点.md"}
                ]
            },
            {
                text: "ElasticSearch",
                collapsible: true,
                collapsed: true,
                items: [
                    {text: "ElasticSearch介绍",link: "/es/ElasticSearch介绍.md"}
                ]
            },
            {
                text: "docker",
                collapsible: true,
                collapsed: true,
                items: [
                    {text: "Docker介绍",link: "/docker/Docker介绍.md"}
                ]
            },
            {
                text: "k8s",
                collapsible: true,
                collapsed: true,
                items: [
                    {text: "k8s介绍",link: "/k8s/k8s介绍.md"}
                ]
            },
            {
                text: "计算机系统",
                collapsible: true,
                collapsed: true,
                items: [
                    {text: "计算机网络知识点",link: "/计算机系统/计算机网络知识点.md"}
                ]
            },{
                text: "架构方法论",
                collapsible: true,
                collapsed: true,
                items: [
                    {text: "架构初识",link: "/架构方法论/架构初识.md"},
                    {text: "TOGAF",link: "/架构方法论/TOGAF.md"}
                ]
            },{
                text: "服务稳定性治理",
                collapsible: true,
                collapsed: true,
                items: [
                    {
                        text: "服务架构治理",
                        link: "/服务稳定性治理/服务架构治理/0.md"
                    },{
                        text: "代码健康度治理",
                        collapsible: true,
                        collapsed: true,
                        items: [
                            {
                                text: "代码扫描",
                                link: "/服务稳定性治理/代码健康度治理/代码扫描.md"
                            },{
                                text: "CodeReview",
                                link: "/服务稳定性治理/代码健康度治理/CodeReview.md"
                            }
                        ]
                    },{
                        text: "标准化测试",
                        collapsible: true,
                        collapsed: true,
                        items: [
                            {
                                text: "单测",
                                link: "/服务稳定性治理/标准化测试/单测.md"
                            },{
                                text: "功能测试",
                                link: "/服务稳定性治理/标准化测试/功能测试.md"
                            },{
                                text: "性能测试",
                                link: "/服务稳定性治理/标准化测试/性能测试.md"
                            }
                        ]
                    },{
                        text: "服务运行监控",
                        collapsible: true,
                        collapsed: true,
                        items: [
                            {
                                text: "服务链路追踪",
                                link: "/服务稳定性治理/服务运行监控/服务链路追踪.md"
                            },{
                                text: "服务日志",
                                link: "/服务稳定性治理/服务运行监控/服务日志.md"
                            },{
                                text: "服务监控",
                                link: "/服务稳定性治理/服务运行监控/服务监控.md"
                            },{
                                text: "服务告警",
                                link: "/服务稳定性治理/服务运行监控/服务告警.md"
                            }
                        ]
                    },
                    {
                        text: "线上问题处理经验",
                        collapsible: true,
                        collapsed: true,
                        items: [
                            {
                                text: "常见线上问题",link: "/服务稳定性治理/线上问题处理/线上问题处理经验.md"
                            }
                        ]
                    }
                ]
            },
             /*{
                  text: "数据结构与算法",
                  collapsible: true,
                  collapsed: true,
                  items: [
                      {
                          text: "排序算法",
                          link: "/algorithm/0.md",
                      }
                  ],
             },*/
               {
                    text: "项目管理经验",
                    collapsible: true,
                    collapsed: true,
                    items: [
                        {
                            text: "项目管理经验浅谈",
                            link: "/项目管理经验/0.md",
                        }
                    ],
               }
        ]
    }
}
