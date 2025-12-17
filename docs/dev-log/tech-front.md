# 前端选型

> 1.工具
```shell
本次前端可能会使用多种技术，
首先fwc_hrms系统还是使用vue2+element-ui进行开发。
后期可能其他系统会采用vue3、react等技术栈。
```

> 2.版本

1.fwc_hrms

 | 名称         | 版本      | 描述     |
 |------------|---------|--------|
 | nodejs     | 20.14.0 |  |
 | npm        | 10.7.0  |  |
 | vue-cli    | 5.0.9   |  |
 | vue        | 2.6.14  | 选项式api |
 | element-ui | 2.15.14 | ui组件   |

> 3.脚本
```shell
# 创建vue2项目有几种方式，使用vite、使用vue-cli、使用webpack手动创建
npm install -g @vue/cli
vue --version #5.0.9
# 创建vue项目
vue create fwc_hrms
# 选择选项3，手动选择功能 Manually select features
# 选上Babel、vue2、Router、Vuex等功能 保存为模板
# 进入项目，运行
npm install
npm run serve
```

> 4.项目结构  

本项目使用vue-cli5.x创建项目，结构如下。如果是vue-cli2.x，则会包含static目录、build目录等。而build目录被vue.config.js替代。
```html
project-root/
├── node_modules/         # 依赖包（无需提交）
├── public/               # 静态资源（直接复制到 dist，不经过 Webpack 处理）
│   ├── favicon.ico       # 网站图标
│   └── index.html        # 主页面模板（支持 HTML 插值）
├── src/                  # 核心源码目录（必须保留）
│   ├── assets/           # 资源文件（图片、样式、字体，需经过 Webpack 处理）
│   ├── components/       # 公共组件（可复用，如 Button、Header）
│   ├── views/            # 视图组件（路由级组件，如 Home、About）
│   ├── router/           # 路由配置（vue-router 实例）
│   ├── store/            # 状态管理（Vuex 实例，可选）
│   ├── App.vue           # 根组件（所有组件的入口）
│   └── main.js           # 入口文件（初始化 Vue 实例，引入 router/store）
├── .browserslistrc       # 浏览器兼容配置（替代旧版 .browserslist）
├── .eslintrc.js          # ESLint 代码规范配置（支持 Airbnb、Standard 等预设）
├── babel.config.js       # Babel 编译配置（支持 ES6+ 语法转译）
├── package.json          # 项目依赖与脚本（核心配置文件）
└── vue.config.js         # Vue CLI 自定义配置（关键！替代旧版 build/ 目录）
```

![ss](./images/vue2struct.png)
