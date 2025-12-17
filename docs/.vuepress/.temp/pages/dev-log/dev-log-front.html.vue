<template><div><h1 id="权限设计" tabindex="-1"><a class="header-anchor" href="#权限设计"><span>权限设计</span></a></h1>
<blockquote>
<p>1.思考</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">因为想设计的容易理解。</span>
<span class="line">所以一开始想的就是RBAC模型。</span>
<span class="line"></span>
<span class="line">但是RBAC模型所有的权限都是基于分配给角色再计算出用户权限的，</span>
<span class="line">而且我希望的一个问题是系统后续维护的时候，如果新增功能菜单，不需要手动更新角色权限。</span>
<span class="line">还一个希望是，不希望配置的角色过多，最后角色即便冗余了，但是因为已经配置给用户使用了，也不敢进行删除。无法进行管理。</span>
<span class="line"></span>
<span class="line">构思设计三种用户授权模式，1、基于角色。2、直接授权。3、混合模式（角色+授权）</span>
<span class="line">构思是否采取RBAC的变形，如增加用户组、增加继承功能。</span>
<span class="line">构思是否采取部门角色，如此新增用户的时候若给他设置了部门，则默认有部门角色权限。</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>2.设计</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">由于RBAC的经典，以及个人设计系统的思维是除非是必须解决的问题，</span>
<span class="line">否则以系统简便易用为主，不追求过度设计功能。</span>
<span class="line"></span>
<span class="line">所以个人准备设计的方案是以RBAC为基础，</span>
<span class="line">在这个方案的基础上，个人感觉的问题有如下几个</span>
<span class="line"><span class="token number">1</span>.角色设计的过多，无法进行管理。</span>
<span class="line"><span class="token number">2</span>.新增用户的时候还需给其配置角色。</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">对于上述问题1，个人打算采取授权模式解决。</span>
<span class="line">对于问题2，</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


