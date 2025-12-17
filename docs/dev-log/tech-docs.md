# 文档记录

> 1.工具

本次文档使用[vuepress](https://vuepress.vuejs.org/zh/guide/getting-started.html#%E7%9B%AE%E5%BD%95%E7%BB%93%E6%9E%84)

> 2.版本

 | 名称 | 版本 | 描述       |
 | - | - |----------|
 | vuepress | v2.0.0-rc.26 | 快速静态生成文档 |

> 3.脚本
```shell
# 本次使用npm 也可使用yarn或者pnpm
npm init vuepress fwc-devBook
# 启动
cd fwc-devBook
npm run docs:dev
```

> 4.使用说明

1.配置config.js,修改logo，导航栏、侧边栏配置

<br />  
<details>
<summary>查看config.js</summary>

```js
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'zh-CN',

  title: 'FWC开发日志',
  description: 'FWC系统开发日志',

  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png',
    navbar: ['/', '/dev-log/dev-log-front.md', '/fwc-hr/fwc-hr.md'],
    sidebar: {
      '/': [
        {
          text: '首页',
          children: [
            '/README.md',
          ]
        }
      ],
      '/dev-log/': [
        {
          text: '技术选型',
          children: [
            '/dev-log/tech-docs.md',
          ]
        },
        {
          text: '开发日志',
          children: [
            '/dev-log/dev-log-front.md',
            '/dev-log/dev-log-backend.md'
          ]
        }
      ],
      '/fwc-hr/': [
        {
          text: 'HR系统',
          children: [
            '/fwc-hr/fwc-hr.md'
          ]
        }
      ]
    }
  }),

  bundler: viteBundler(),
})
```

</details>
<br />  

2.按下文件目录创建文件
```shell
$ ls -R docs/
# docs下有README.md dev-log/ fwc-hr/
docs/:
README.md  dev-log/  fwc-hr/
# dev-log下有tech-select.md dev-log-front.md dev-log-backend.md
docs/dev-log:
dev-log-backend.md  dev-log-front.md  tech-docs.md
# fwc-hr下有fwc-hr.md
docs/fwc-hr:
fwc-hr.md
```

3.撰写文章  
```
在具体md文件中撰写文章。标题1为文章标题以及侧边栏标题
```