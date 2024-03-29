export default {
    title: '个人博客',
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
            }, {
                text: "DDD领域驱动设计",
                collapsible: true,
                items: [
                    {
                        text: "整体理解",
                        link: "/ddd/0.md",
                    },{
                        text: "战术设计",
                        link: "/ddd/1.md",
                    }
                ],
            }
        ]
    }
}
