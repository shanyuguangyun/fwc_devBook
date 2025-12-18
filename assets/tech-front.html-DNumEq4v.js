import{_ as n,c as e,b as a,o as l}from"./app-BSc7Ew53.js";const i="/fwc_devBook/assets/vue2struct-Dulw59B3.png",t={};function c(d,s){return l(),e("div",null,[...s[0]||(s[0]=[a(`<h1 id="前端选型" tabindex="-1"><a class="header-anchor" href="#前端选型"><span>前端选型</span></a></h1><blockquote><p>1.工具</p></blockquote><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line">本次前端可能会使用多种技术，</span>
<span class="line">首先fwc_hrms系统还是使用vue2+element-ui进行开发。</span>
<span class="line">后期可能其他系统会采用vue3、react等技术栈。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>2.版本</p></blockquote><p>1.fwc_hrms</p><table><thead><tr><th>名称</th><th>版本</th><th>描述</th></tr></thead><tbody><tr><td>nodejs</td><td>20.14.0</td><td></td></tr><tr><td>npm</td><td>10.7.0</td><td></td></tr><tr><td>vue-cli</td><td>5.0.9</td><td></td></tr><tr><td>vue</td><td>2.6.14</td><td>选项式api</td></tr><tr><td>element-ui</td><td>2.15.14</td><td>ui组件</td></tr></tbody></table><blockquote><p>3.脚本</p></blockquote><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token comment"># 创建vue2项目有几种方式，使用vite、使用vue-cli、使用webpack手动创建</span></span>
<span class="line"><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> @vue/cli</span>
<span class="line">vue <span class="token parameter variable">--version</span> <span class="token comment">#5.0.9</span></span>
<span class="line"><span class="token comment"># 创建vue项目</span></span>
<span class="line">vue create fwc_hrms</span>
<span class="line"><span class="token comment"># 选择选项3，手动选择功能 Manually select features</span></span>
<span class="line"><span class="token comment"># 选上Babel、vue2、Router、Vuex等功能 保存为模板</span></span>
<span class="line"><span class="token comment"># 进入项目，运行</span></span>
<span class="line"><span class="token function">npm</span> <span class="token function">install</span></span>
<span class="line"><span class="token function">npm</span> run serve</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>4.项目结构</p></blockquote><p>本项目使用vue-cli5.x创建项目，结构如下。如果是vue-cli2.x，则会包含static目录、build目录等。而build目录被vue.config.js替代。</p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre><code><span class="line">project-root/</span>
<span class="line">├── node_modules/         # 依赖包（无需提交）</span>
<span class="line">├── public/               # 静态资源（直接复制到 dist，不经过 Webpack 处理）</span>
<span class="line">│   ├── favicon.ico       # 网站图标</span>
<span class="line">│   └── index.html        # 主页面模板（支持 HTML 插值）</span>
<span class="line">├── src/                  # 核心源码目录（必须保留）</span>
<span class="line">│   ├── assets/           # 资源文件（图片、样式、字体，需经过 Webpack 处理）</span>
<span class="line">│   ├── components/       # 公共组件（可复用，如 Button、Header）</span>
<span class="line">│   ├── views/            # 视图组件（路由级组件，如 Home、About）</span>
<span class="line">│   ├── router/           # 路由配置（vue-router 实例）</span>
<span class="line">│   ├── store/            # 状态管理（Vuex 实例，可选）</span>
<span class="line">│   ├── App.vue           # 根组件（所有组件的入口）</span>
<span class="line">│   └── main.js           # 入口文件（初始化 Vue 实例，引入 router/store）</span>
<span class="line">├── .browserslistrc       # 浏览器兼容配置（替代旧版 .browserslist）</span>
<span class="line">├── .eslintrc.js          # ESLint 代码规范配置（支持 Airbnb、Standard 等预设）</span>
<span class="line">├── babel.config.js       # Babel 编译配置（支持 ES6+ 语法转译）</span>
<span class="line">├── package.json          # 项目依赖与脚本（核心配置文件）</span>
<span class="line">└── vue.config.js         # Vue CLI 自定义配置（关键！替代旧版 build/ 目录）</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+i+'" alt="ss"></p>',12)])])}const r=n(t,[["render",c]]),u=JSON.parse('{"path":"/dev-log/tech-front.html","title":"前端选型","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1765966818000,"contributors":[{"name":"shanyuguangyun","username":"shanyuguangyun","email":"983393186@qq.com","commits":1,"url":"https://github.com/shanyuguangyun"}],"changelog":[{"hash":"a63a27508948c53c206b7bf385308ca9fd5f7902","time":1765966818000,"email":"983393186@qq.com","author":"shanyuguangyun","message":"init"}]},"filePathRelative":"dev-log/tech-front.md"}');export{r as comp,u as data};
