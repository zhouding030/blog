export default {
    title: 'ZhouDing个人博客',
    description: '我的第一个博客',
    // 打包目录
    dest: './dist',
    base: "/",
    head: [
        // 添加图标
        ['link', {rel: 'icon', href: '/favicon.ico'}]
    ],
    themeConfig: {
        sidebar: [
            {
                text: "关于",
                collapsible: true,
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
                items: [
                    {
                        text: "整体理解",
                        link: "/ddd/0.md",
                    },{
                        text: "战术设计",
                        link: "/ddd/1.md",
                    },{
                         text: "领域建模",
                         link: "/ddd/2.md",
                     },{
                         text: "落地实战",
                         link: "/ddd/3.md",
                     }
                ],
            },
            {
                 text: "架构师知识体系",
                 collapsible: true,
                 items: [
                     {
                         text: "Java",
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
                                link: "/java/并发编程与多线程/0.md"
                            },{
                                 text: "集合原理",
                                 link: "/java/集合原理/0.md"
                            },{
                                 text: "JVM原理",
                                 link: "/java/JVM原理/0.md"
                            },{
                                 text: "IO与网络编程",
                                 link: "/java/IO与网络编程/0.md"
                            },{
                                 text: "设计模式",
                                 link: "/java/设计模式/0.md"
                            }
                         ]
                     },{
                         text: "Spring 全家桶",
                         items: [
                            {
                                text: "Spring 框架",
                                link: "/spring全家桶/spring框架/0.md"
                            },{
                                 text: "Spring MVC 框架",
                                 link: "/spring全家桶/springMVC框架/0.md"
                            },{
                                 text: "Spring Boot 框架",
                                 link: "/spring全家桶/springboot框架/0.md"
                            },{
                                 text: "Spring Cloud 框架",
                                 link: "/spring全家桶/springcloud框架/0.md"
                            }
                         ]
                    },{
                        text: "框架、中间件、技术栈",
                        items: [
                            {
                                text: "Dubbo 框架",
                                link: "/框架、中间件、技术栈/dubbo/0.md"
                            },
                            {
                                text: "Netty 框架",
                                link: "/框架、中间件、技术栈/netty/0.md"
                            },
                            {
                                text: "MyBatis 框架",
                                link: "/框架、中间件、技术栈/mybatis/0.md"
                            },
                            {
                                text: "MySQL",
                                link: "/框架、中间件、技术栈/mysql/mysql工作原理.md"
                            },
                            {
                                text: "Redis",
                                link: "/框架、中间件、技术栈/redis/0.md"
                            },
                            {
                                text: "Kafka",
                                link: "/框架、中间件、技术栈/kafka/0.md"
                            },
                            {
                                text: "ElasticSearch",
                                link: "/框架、中间件、技术栈/es/0.md"
                            }
                        ]
                    }
                 ]
            },
             {
                  text: "数据结构与算法",
                  collapsible: true,
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
