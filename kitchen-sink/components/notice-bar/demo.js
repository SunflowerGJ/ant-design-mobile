webpackJsonp([39,94],{403:function(n,a,s){n.exports={content:[],meta:{order:0,title:"\u901a\u544a\u680f",filename:"components/notice-bar/demo/basic.md",id:"components-notice-bar-demo-basic"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> NoticeBar<span class="token punctuation">,</span> WhiteSpace<span class="token punctuation">,</span> Icon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> NoticeBarExample <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createClass</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token function">onClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">\'clicked\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lg<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NoticeBar</span>\n          <span class="token attr-name">marqueeProps</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> loop<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> style<span class="token punctuation">:</span> <span class="token punctuation">{</span> padding<span class="token punctuation">:</span> <span class="token string">\'0 0.15rem\'</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span></span><span class="token attr-name">}</span>\n        <span class="token punctuation">></span></span>\n          \u56fd\u5e86\u671f\u95f4\u4f59\u989d\u5b9d\u6536\u76ca\u548c\u8f6c\u51fa\u5230\u8d26\u65f6\u95f4\u901a\u77e5\uff1a\u7531\u4e8e\u56fd\u5e86\u5230\u6765\uff0c\u4f59\u989d\u5b9d\u6536\u76ca\u5230\u8d26\u5c06\u5ef6\u8fdf\uff0c\u7279\u6b64\u901a\u77e5\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>NoticeBar</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lg<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NoticeBar</span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>link<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onClick<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n          \u56fd\u5e86\u671f\u95f4\u4f59\u989d\u5b9d\u6536\u76ca\u548c\u8f6c\u51fa\u5230\u8d26\u65f6\u95f4\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>NoticeBar</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lg<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NoticeBar</span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>closable<span class="token punctuation">"</span></span> <span class="token attr-name">icon</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">null</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\u53bb\u9664 NoticeBar \u9ed8\u8ba4\u7684\u5587\u53ed\u56fe\u6807<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>NoticeBar</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lg<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NoticeBar</span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>closable<span class="token punctuation">"</span></span> <span class="token attr-name">icon={&lt;Icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>check-circle-o<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>xxs<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span><span class="token operator">></span>\n          \u81ea\u5b9a\u4e49 NoticeBar \u524d\u9762\u7684\u5c0f\u56fe\u6807\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>NoticeBar</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NoticeBarExample</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n){return n&&n.__esModule?n:{"default":n}}var a=s(1),t=(s(3),s(20),s(19)),p=n(t),e=(s(201),s(200)),c=n(e),o=(s(16),s(15)),l=n(o),u=a.createClass({displayName:"NoticeBarExample",onClick:function(){alert("clicked")},render:function(){return a.createElement("div",null,a.createElement(l["default"],{size:"lg"}),a.createElement(c["default"],{marqueeProps:{loop:!0,style:{padding:"0 0.15rem"}}},"\u56fd\u5e86\u671f\u95f4\u4f59\u989d\u5b9d\u6536\u76ca\u548c\u8f6c\u51fa\u5230\u8d26\u65f6\u95f4\u901a\u77e5\uff1a\u7531\u4e8e\u56fd\u5e86\u5230\u6765\uff0c\u4f59\u989d\u5b9d\u6536\u76ca\u5230\u8d26\u5c06\u5ef6\u8fdf\uff0c\u7279\u6b64\u901a\u77e5"),a.createElement(l["default"],{size:"lg"}),a.createElement(c["default"],{mode:"link",onClick:this.onClick},"\u56fd\u5e86\u671f\u95f4\u4f59\u989d\u5b9d\u6536\u76ca\u548c\u8f6c\u51fa\u5230\u8d26\u65f6\u95f4"),a.createElement(l["default"],{size:"lg"}),a.createElement(c["default"],{mode:"closable",icon:null},"\u53bb\u9664 NoticeBar \u9ed8\u8ba4\u7684\u5587\u53ed\u56fe\u6807"),a.createElement(l["default"],{size:"lg"}),a.createElement(c["default"],{mode:"closable",icon:a.createElement(p["default"],{type:"check-circle-o",size:"xxs"})},"\u81ea\u5b9a\u4e49 NoticeBar \u524d\u9762\u7684\u5c0f\u56fe\u6807"))}});return a.createElement(u,null)}}},500:function(n,a,s){n.exports={basic:s(403)}}});