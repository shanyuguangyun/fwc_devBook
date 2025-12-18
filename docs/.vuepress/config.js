import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'zh-CN',
  base: "/fwc_devBook/",
  title: 'FWC开发日志',
  description: 'FWC系统开发日志',

  theme: defaultTheme({
    // logo: '/navicon.png',
    logo: 'https://vuepress.vuejs.org/images/hero.png',
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
            '/dev-log/tech-front.md',
            '/dev-log/tech-back.md',
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
