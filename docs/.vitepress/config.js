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
                    {
                        text: "作者简介",
                        link: "/aboutme/0.md",
                    }
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
                 text: "架构师知识体系",
                 collapsible: true,
                 collapsed: true,
                 items: [
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
                            },{
                                 text: "设计模式",
                                 link: "/java/设计模式/Java设计模式介绍.md"
                            }
                         ]
                     },{
                         text: "Spring 全家桶",
                         collapsible: true,
                         collapsed: true,
                         items: [
                            {
                                text: "Spring 框架",
                                link: "/spring全家桶/spring框架/Spring框架介绍.md"
                            },{
                                 text: "Spring MVC 框架",
                                 link: "/spring全家桶/springMVC框架/SpringMVC框架介绍.md"
                            },{
                                 text: "Spring Boot 框架",
                                 link: "/spring全家桶/springboot框架/SpringBoot框架介绍.md"
                            },{
                                 text: "Spring Cloud 框架",
                                 link: "/spring全家桶/springcloud框架/SpringCloud框架介绍.md"
                            }
                         ]
                    },{
                        text: "框架、中间件、技术栈",
                        collapsible: true,
                        collapsed: true,
                        items: [
                            {
                                text: "Dubbo 框架",
                                link: "/框架、中间件、技术栈/dubbo/Dubbo框架介绍.md"
                            },
                            {
                                text: "Netty 框架",
                                link: "/框架、中间件、技术栈/netty/Netty框架介绍.md"
                            },
                            {
                                text: "MyBatis 框架",
                                link: "/框架、中间件、技术栈/mybatis/MyBatis框架介绍.md"
                            },
                            {
                                text: "MySQL",
                                link: "/框架、中间件、技术栈/mysql/MySQL介绍.md"
                            },
                            {
                                text: "Redis",
                                link: "/框架、中间件、技术栈/redis/Redis介绍.md"
                            },
                            {
                                text: "Kafka",
                                link: "/框架、中间件、技术栈/kafka/Kafka介绍.md"
                            },
                            {
                                text: "ElasticSearch",
                                link: "/框架、中间件、技术栈/es/ElasticSearch介绍.md"
                            }
                        ]
                    },{
                        text: "架构方法论",
                        collapsible: true,
                        collapsed: true,
                        items: [
                            {
                                text: "架构初识",
                                link: "/架构方法论/架构初识.md"
                            }
                        ]
                    },{
                        text: "服务稳定性治理",
                        collapsible: true,
                        collapsed: true,
                        items: [
                            {
                                text: "服务架构",
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
                            }
                        ]
                    },{
                        text: "线上问题处理经验",
                        link: "/线上问题处理/线上问题处理经验.md"
                    }
                 ]
            },
             {
                  text: "数据结构与算法",
                  collapsible: true,
                  collapsed: true,
                  items: [
                      {
                          text: "排序算法",
                          link: "/algorithm/0.md",
                      }
                  ],
             },
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
