import{_ as s,o as a,c as n,V as p}from"./chunks/framework.98960eec.js";const m=JSON.parse('{"title":"开始浏览","description":"","frontmatter":{},"headers":[],"relativePath":"start.md","filePath":"start.md"}'),l={name:"start.md"},o=p(`<h1 id="开始浏览" tabindex="-1">开始浏览 <a class="header-anchor" href="#开始浏览" aria-label="Permalink to &quot;开始浏览&quot;">​</a></h1><h2 id="说明" tabindex="-1">说明 <a class="header-anchor" href="#说明" aria-label="Permalink to &quot;说明&quot;">​</a></h2><p>本网站内容信息从网络搜集整合而成，仅供娱乐</p><h2 id="有关反馈" tabindex="-1">有关反馈 <a class="header-anchor" href="#有关反馈" aria-label="Permalink to &quot;有关反馈&quot;">​</a></h2><p>帮助和反馈请点击右上角图标进行反馈。</p><p>你也可以点击蓝色小字 <a href="https://support.qq.com/product/595820" target="_blank" rel="noreferrer">点我去反馈和贡献词条</a></p><h2 id="有关贡献" tabindex="-1">有关贡献 <a class="header-anchor" href="#有关贡献" aria-label="Permalink to &quot;有关贡献&quot;">​</a></h2><p>我们会开放一个Github仓库，你可以向里面贡献内容，提交PR后我们会对词条进行审核，并以内容更新的形式进行发布</p><p>GitHub仓库地址：<a href="https://github.com/XihongshiBaike/yonghugongxiancitiao" target="_blank" rel="noreferrer">https://github.com/XihongshiBaike/yonghugongxiancitiao</a></p><h3 id="贡献词条的一些规矩" tabindex="-1">贡献词条的一些规矩 <a class="header-anchor" href="#贡献词条的一些规矩" aria-label="Permalink to &quot;贡献词条的一些规矩&quot;">​</a></h3><p>我们鼓励你贡献Markdown格式的词条，一个词条是一个markdown文件，由以下部分组成，这些部分可以不同时具备。</p><p>一级标题：词条名（必须）</p><p>二级标题：解释：对梗的解释（必须），其正文用来解释该梗（即该词条）</p><p>二级标题：问题价值。其正文为0-5个西红柿，你可以使用<code>:tomato:</code>来表示一个西红柿（必须）</p><p>二级标题：使用场景（必须）</p><p>二级标题：相关图片链接，视频（可选）</p><p>在markdown文件中给词条打标签，可以在词条名（大标题）前插入如下代码，并把英文单引号<code>&#39;&#39;</code>中的内容换成自己的，每打一个标签都需要再打一组大括号，每组大括号之间用英文逗号隔开，最后将省略号删除：</p><div class="language-JavaScript"><button title="Copy Code" class="copy"></button><span class="lang">JavaScript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">---</span></span>
<span class="line"><span style="color:#FFCB6B;">tags</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">标签名</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">},......</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#89DDFF;">---</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import tag from &#39;../components/tag.vue&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><div class="danger custom-block"><p class="custom-block-title">特别注意</p><p><code>tags: [{text: &#39;标签名&#39;},......]</code>中，英文的<code>:</code>和英文的单引号<code>&#39;</code>之间有一个空格（Space）<code></code></p></div><p>然后在词条名（大标题）后插入如下代码，无需更改：</p><div class="language-Vue"><button title="Copy Code" class="copy"></button><span class="lang">Vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">tag</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">v-for</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">item </span><span style="color:#89DDFF;">in</span><span style="color:#A6ACCD;"> $frontmatter</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">tags</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">tagName</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">text</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">/&gt;</span></span></code></pre></div><p>如果你没有看懂上面的话，请看以下示例，可以帮助你进行理解</p><p>一个完整的带标签词条实例：</p><div class="language-markdown"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">---</span></span>
<span class="line"><span style="color:#F07178;">tags</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[{</span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">梗</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">},{</span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">蔡徐坤</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">}]</span></span>
<span class="line"><span style="color:#A6ACCD;">---</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import tag from &#39;../components/tag.vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">小黑子</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;tag v-for=&quot;item in $frontmatter.tags&quot; :tagName=&#39;item.text&#39;/&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">## </span><span style="color:#FFCB6B;">解释</span></span>
<span class="line"><span style="color:#A6ACCD;">小黑子特指蔡徐坤的黑粉，即标榜自己是真爱粉（</span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">ikun</span><span style="color:#89DDFF;">](</span><span style="color:#F07178;text-decoration:underline;">./ikun.md</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">）的黑粉，这些粉丝在各大平台标榜自己是真爱粉，但是却做着黑蔡徐坤的事情，从而被调侃为“小黑子”。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">:::info 注：</span></span>
<span class="line"><span style="color:#A6ACCD;">此称号并没有得到蔡徐坤本人的官方公告，因此不可以认为是官方称号，仅供娱乐。</span></span>
<span class="line"><span style="color:#A6ACCD;">:::</span></span>
<span class="line"><span style="color:#89DDFF;">## </span><span style="color:#FFCB6B;">相关图片链接</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">百度图片-小黑子</span><span style="color:#89DDFF;">](</span><span style="color:#F07178;text-decoration:underline;">https://image.baidu.com/search/index?tn=baiduimage&amp;ipn=r&amp;ct=201326592&amp;cl=2&amp;lm=-1&amp;st=-1&amp;fm=result&amp;fr=&amp;sf=1&amp;fmq=1686059868360_R&amp;pv=&amp;ic=&amp;nc=1&amp;z=&amp;hd=&amp;latest=&amp;copyright=&amp;se=1&amp;showtab=0&amp;fb=0&amp;width=&amp;height=&amp;face=0&amp;istype=2&amp;dyTabStr=MCwzLDYsMSw0LDUsNyw4LDIsOQ%3D%3D&amp;ie=utf-8&amp;sid=&amp;word=%E5%B0%8F%E9%BB%91%E5%AD%90+%E8%94%A1%E5%BE%90%E5%9D%A4</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">## </span><span style="color:#FFCB6B;">相关视频链接</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">哔哩哔哩-小黑子</span><span style="color:#89DDFF;">](</span><span style="color:#F07178;text-decoration:underline;">https://search.bilibili.com/all?keyword=%E5%B0%8F%E9%BB%91%E5%AD%90&amp;from_source=webtop_search&amp;spm_id_from=333.788&amp;search_source=5</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">## </span><span style="color:#FFCB6B;">相关梗</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">ikun</span><span style="color:#89DDFF;">](</span><span style="color:#F07178;text-decoration:underline;">./ikun.md</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">坤坤</span><span style="color:#89DDFF;">](</span><span style="color:#F07178;text-decoration:underline;">./kunkun.md</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">## </span><span style="color:#FFCB6B;">问题价值</span></span>
<span class="line"><span style="color:#A6ACCD;">:tomato::tomato::tomato:（3个西红柿）</span></span></code></pre></div><p>当然如果你不会编写markdown也想贡献词条也没有关系，你可以向反馈平台中贡献词条，我们会挑选良好的词条进行格式上的编辑和发布。</p><blockquote><p>反馈平台中贡献词条需要遵循一定格式，这将便于我们在反馈中进行筛选，其格式如下：</p></blockquote><blockquote><p>【贡献词条】词条名称</p></blockquote><blockquote><p>正文内容</p></blockquote><blockquote><p>【贡献者】XXX</p></blockquote><h3 id="版本号" tabindex="-1">版本号 <a class="header-anchor" href="#版本号" aria-label="Permalink to &quot;版本号&quot;">​</a></h3><p>1.2.1</p><h4 id="版本号解释" tabindex="-1">版本号解释 <a class="header-anchor" href="#版本号解释" aria-label="Permalink to &quot;版本号解释&quot;">​</a></h4><p>第一位数 - 大版本号</p><p>第二位数 - Bug修复次数</p><p>第三位数 - 内容更新次数</p><h2 id="开发者的一些瞎叨叨" tabindex="-1">开发者的一些瞎叨叨 <a class="header-anchor" href="#开发者的一些瞎叨叨" aria-label="Permalink to &quot;开发者的一些瞎叨叨&quot;">​</a></h2><p>本来小伙伴们没打算写这段话的 <s>（但我是开发我不管）</s> 做这个网站的只是一群沙雕 <s>且有些精神失常</s> 的初中生。这个网站不光是小伙伴们心血来潮 <s>（蓄谋已久）</s> 的产物，也是看到小鸡词典暂停服务后开发者十分痛心的产物。我们希望这个网站能成为一片净土，帮大家了解最近的一些梗，给大家带去一些欢乐。现在网站由于没有经济来源，使用VitePress构建，部署在Vercel上，等我们有了足够的精力和财力后，我们会对网站进行彻头彻尾的重构，增加更多的功能，同时把网站部署在服务器上。一颗西红柿种子的成长需要时间，现在的西红柿百科还是一棵才刚刚露出土壤的幼苗。还请大家多多担待，耐心等待。同时我们十分欢迎小伙伴们给我们贡献词条，给这棵西红柿的幼苗浇水施肥（添加内容），修剪旁生的枝茎（纠正错误），让它长大、开花、结果。</p><p>开发者和他的小伙伴们</p><p>2023年6月</p>`,39),e=[o];function t(c,r,i,D,F,y){return a(),n("div",null,e)}const h=s(l,[["render",t]]);export{m as __pageData,h as default};
