exports.default=function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.onRenderLine=t.calculateSpaceWidth=void 0;const n=r(1);let i=0,o=0,g=0;function _(e,t,r){let n=document.createElement("span");r&&n.classList.add(r),n.style.whiteSpace="pre-wrap",n.appendChild(document.createTextNode(t.repeat(10)));const i=e.getWrapperElement().getElementsByClassName("CodeMirror-measure")[0];i.firstChild&&i.removeChild(i.firstChild),i.appendChild(n);const o=n.getBoundingClientRect();return(o.right-o.left)/10||e.defaultCharWidth()}t.calculateSpaceWidth=function(e){i=_(e," ",""),o=_(e," ","cm-rm-monospace"),g=_(e,">","")},t.onRenderLine=function(e,t,r,_){if(e.state.richMarkdown&&e.state.richMarkdown.settings.alignIndent){const s=t.text.match(n.list_token_regex);if(!s)return;let a=_.countColumn(t.text,s[0].length,e.getOption("tabSize"))*i;e.state.richMarkdown.settings.enforceMono&&s[0].indexOf("[")>0?a+=6*o-6*i:e.state.richMarkdown.settings.enforceMono&&s[0].indexOf(">")>=0&&(a+=g-i),r.style.textIndent="-"+a+"px",r.style.paddingLeft=a+"px"}}},function(e,t,r){"use strict";function n(e,t,r){const n=e.indexOf("tick")>0;return{name:"RichMarkdownOverlay-"+e,requiredSettings:r,token:function(r){const i=function(e,t){return e.lastIndex=t.pos,e.exec(t.string)}(t,r),o=r.baseToken();if((null==o?void 0:o.type)&&(!n&&(o.type.includes("jn-inline-code")||o.type.includes("comment"))||o.type.includes("katex")))r.pos+=o.size;else{if(i&&i.index===r.pos)return r.pos+=i[0].length||1,e;i?r.pos=i.index:r.skipToEnd()}return null}}}Object.defineProperty(t,"__esModule",{value:!0}),t.remove=t.add=t.table_regex=t.blockquote_regex=t.hr_regex=t.list_token_regex=t.header_regex=t.admonition_line_regex=t.admonition_token_regex=t.backtick_block_token_regex=t.backtick_token_regex=t.strike_token_regex=t.sup_token_regex=t.sub_token_regex=t.insert_token_regex=t.highlight_token_regex=t.strong_underline_regex=t.strong_star_regex=t.emph_underline_regex=t.emph_star_regex=t.sup_regex=t.sub_regex=t.insert_regex=t.highlight_regex=t.html_image_regex=t.image_regex=t.link_regex=t.checkbox_inner_regex=t.checkbox_regex=void 0,t.checkbox_regex=/^(\s*)([*+-] )(\[[Xx ]\])\s.*$/g,t.checkbox_inner_regex=/(?<=\[)[Xx ](?=\])/g,t.link_regex=/(?<![\\])\[[^\]]*\]\(([^\(\)]+)\)|<([^>\s]+\.[^>\s]+)>|((?:[a-zA-Z0-9\+\.\-])+:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|(?:[a-zA-Z0-9\+\.\-])+:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,}[^\)])(?<!\))|joplin:\/\/x-callback-url\/.*/g,t.image_regex=/!\[[^\]]*\]\([^\(]+\)/g,t.html_image_regex=/<img([^>]+?)\/?>/g,t.highlight_regex=/(?<!\\)==(?=[^\s])[^=]*[^=\s\\]==/g,t.insert_regex=/(?<!\\)\+\+(?=[^\s])[^\+]*[^\+\s\\]\+\+/g,t.sub_regex=/(?<![\\~])~(?=[^\s])[^~]*[^~\s\\]~/g,t.sup_regex=/(?<![\\[])\^(?=[^\s])[^\^]*[^\^\s\\[]\^/g,t.emph_star_regex=/(?<![\\\*])\*(?!\*)/g,t.emph_underline_regex=/(?<![\\\_])\_(?!\_)/g,t.strong_star_regex=/(?<![\\\*])\*\*(?!\*)/g,t.strong_underline_regex=/(?<![\\\_])\_\_(?!\_)/g,t.highlight_token_regex=/(?<![\\=])==(?!=)/g,t.insert_token_regex=/(?<![\\\+])\+\+(?!\+)/g,t.sub_token_regex=/(?<![\\~])~(?!~)/g,t.sup_token_regex=/(?<![\\\^])\^(?!\^)/g,t.strike_token_regex=/(?<![\\~])~~(?!~~)/g,t.backtick_token_regex=/(?<![\\`])`(?!`)/g,t.backtick_block_token_regex=/^```\S*$/g,t.admonition_token_regex=/^!!!/g,t.admonition_line_regex=/^!!!.*$/g,t.header_regex=/^\s*#+\s/g,t.list_token_regex=/^(\s*)([*+-] \[[Xx ]\]\s|[*+->]\s|(\d+)([.)]\s))(\s*)/g,t.hr_regex=/^([*\-_])(?:\s*\1){2,}\s*$/,t.blockquote_regex=/^\s*\>+\s/g,t.table_regex=/^\|[^\n]+\|/g;const i=[n("rm-checkbox",t.checkbox_regex,[]),n("rm-checkbox-check",t.checkbox_inner_regex,["extraCSS"]),n("rm-link",t.link_regex,[]),n("rm-image",t.image_regex,[]),n("rm-image",t.html_image_regex,[]),n("rm-list-token",t.list_token_regex,[]),n("rm-ins",t.insert_regex,["insertHighlight"]),n("rm-sub",t.sub_regex,["subHighlight"]),n("rm-sup",t.sup_regex,["supHighlight"]),n("rm-header-token",t.header_regex,["extraCSS"]),n("line-cm-rm-blockquote",t.blockquote_regex,["extraCSS"]),n("rm-em-token",t.emph_star_regex,["extraCSS"]),n("rm-em-token",t.emph_underline_regex,["extraCSS"]),n("rm-strong-token",t.strong_star_regex,["extraCSS"]),n("rm-strong-token",t.strong_underline_regex,["extraCSS"]),n("rm-highlight",t.highlight_regex,["markHighlight"]),n("rm-highlight-token",t.highlight_token_regex,["extraCSS","markHighlight"]),n("rm-ins-token",t.insert_token_regex,["extraCSS","insertHighlight"]),n("rm-sub-token",t.sub_token_regex,["extraCSS","subHighlight"]),n("rm-sup-token",t.sup_token_regex,["extraCSS","supHighlight"]),n("rm-strike-token",t.strike_token_regex,["extraCSS"]),n("rm-backtick-token",t.backtick_token_regex,["extraCSS"]),n("rm-triptick-token",t.backtick_block_token_regex,["extraCSS"]),n("rm-hr line-cm-rm-hr",t.hr_regex,["extraCSS"]),n("rm-admonition-token line-cm-rm-admonition line-background-cm-rm-admonition",t.admonition_token_regex,["extraCSS"]),n("rm-admonition",t.admonition_line_regex,["extraCSS"])];function o(e,t){for(let r of t)if(!e[r]&&("extraCSS"!==r||"none"===e.theme&&!e.extraFancy))return!1;return!0}t.add=function(e){if(e.state.richMarkdown)for(let t of i)o(e.state.richMarkdown.settings,t.requiredSettings)&&e.addOverlay(t)},t.remove=function(e){for(let t of i)e.removeOverlay(t)}}]).default;