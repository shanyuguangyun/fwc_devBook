<template><div><h1 id="文档记录" tabindex="-1"><a class="header-anchor" href="#文档记录"><span>文档记录</span></a></h1>
<blockquote>
<p>1.工具</p>
</blockquote>
<p>本次文档使用<a href="https://vuepress.vuejs.org/zh/guide/getting-started.html#%E7%9B%AE%E5%BD%95%E7%BB%93%E6%9E%84" target="_blank" rel="noopener noreferrer">vuepress</a></p>
<blockquote>
<p>2.版本</p>
</blockquote>
<table>
<thead>
<tr>
<th>名称</th>
<th>版本</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>vuepress</td>
<td>v2.0.0-rc.26</td>
<td>快速静态生成文档</td>
</tr>
</tbody>
</table>
<blockquote>
<p>3.脚本</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token comment"># 本次使用npm 也可使用yarn或者pnpm</span></span>
<span class="line"><span class="token function">npm</span> init vuepress fwc-devBook</span>
<span class="line"><span class="token comment"># 启动</span></span>
<span class="line"><span class="token builtin class-name">cd</span> fwc-devBook</span>
<span class="line"><span class="token function">npm</span> run docs:dev</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>4.基本介绍</p>
</blockquote>
<p>1.配置config.js,修改logo，导航栏、侧边栏配置</p>
<br />  
<details>
<summary>查看config.js</summary>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defaultTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/theme-default'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuepress'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> viteBundler <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/bundler-vite'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">lang</span><span class="token operator">:</span> <span class="token string">'zh-CN'</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'FWC开发日志'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">'FWC系统开发日志'</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">'https://vuejs.press/images/hero.png'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">navbar</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'/'</span><span class="token punctuation">,</span> <span class="token string">'/dev-log/dev-log-front.md'</span><span class="token punctuation">,</span> <span class="token string">'/fwc-hr/fwc-hr.md'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">sidebar</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string-property property">'/'</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'首页'</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">            <span class="token string">'/README.md'</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token punctuation">]</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">'/dev-log/'</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'技术选型'</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">            <span class="token string">'/dev-log/tech-select.md'</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token punctuation">]</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'开发日志'</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">            <span class="token string">'/dev-log/dev-log-front.md'</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string">'/dev-log/dev-log-backend.md'</span></span>
<span class="line">          <span class="token punctuation">]</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">'/fwc-hr/'</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'HR系统'</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">            <span class="token string">'/fwc-hr/fwc-hr.md'</span></span>
<span class="line">          <span class="token punctuation">]</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">  <span class="token literal-property property">bundler</span><span class="token operator">:</span> <span class="token function">viteBundler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<br />  
<p>2.按下文件目录创建文件</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">$ <span class="token function">ls</span> <span class="token parameter variable">-R</span> docs/</span>
<span class="line"><span class="token comment"># docs下有README.md dev-log/ fwc-hr/</span></span>
<span class="line">docs/:</span>
<span class="line">README.md  dev-log/  fwc-hr/</span>
<span class="line"><span class="token comment"># dev-log下有tech-select.md dev-log-front.md dev-log-backend.md</span></span>
<span class="line">docs/dev-log:</span>
<span class="line">dev-log-backend.md  dev-log-front.md  tech-select.md</span>
<span class="line"><span class="token comment"># fwc-hr下有fwc-hr.md</span></span>
<span class="line">docs/fwc-hr:</span>
<span class="line">fwc-hr.md</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.撰写文章</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">在具体md文件中撰写文章。标题1为文章标题以及侧边栏标题</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div></template>


