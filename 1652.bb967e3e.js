(window.webpackJsonp=window.webpackJsonp||[]).push([[1652],{1806:function(e,a,t){"use strict";var n=t(1),l=(t(1797),t(52),t(77),t(1794),t(9)),r=(t(1798),t(1799),t(1802),t(0)),c=t.n(r),i=t(1792),s=t.n(i),o=t(1793),m=t(1791),h=t(1795),v=t(1796),d=t(1807),b=t(1808),u=t(1800),_=t(1811),E=t(1803),f=t(1804),p=t(131),g=t.n(p);function k(e){var a=e.activeBasePath,t=e.activeRegxp,r=e.to,i=e.href,s=e.label,d=(e.position,Object(l.a)(e,["activeBasePath","activeRegxp","to","href","label","position"])),b=function(){var e,a=Object(m.a)().siteConfig.customFields.versions,t=void 0===a?[]:a,n=t[0],l=Object(v.d)(),r=t.find((function(e){return l.pathname.includes(e)}));return l.pathname.includes("/docs/next")&&(r="next"),[n,null!=(e=r)?e:n]}(),u=b[0],_=b[1];if(u!==_&&d.version&&(s=("next"===_?"":"v")+_),r&&r.startsWith("docs/")&&u!==_){var E=r.split("/"),f=E[0],p=E.slice(1);r=[f,_].concat(p).join("/");var g=a.split("/"),k=g[0],N=g.slice(1);a=[k,_].concat(N).join("/")}var j=Object(h.a)(r),w=Object(h.a)(a);return c.a.createElement(o.a,Object(n.a)({},i?{target:"_blank",rel:"noopener noreferrer",href:i}:Object.assign({isNavLink:!0,activeClassName:"navbar__link--active",to:j},a?{isActive:function(e,n){return t?new RegExp(a).test(n.pathname):n.pathname.startsWith(w)}}:null),d),s)}function N(e){var a=e.items,t=e.position,r=Object(l.a)(e,["items","position"]);return a?c.a.createElement("div",{className:s()("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===t,"dropdown--right":"right"===t})},c.a.createElement(k,Object(n.a)({className:"navbar__item navbar__link"},r),r.label),c.a.createElement("ul",{className:"dropdown__menu"},a.map((function(e,a){return c.a.createElement("li",{key:a},c.a.createElement(k,Object(n.a)({className:"navbar__item navbar__link"},e)))})))):c.a.createElement(k,Object(n.a)({},r,{className:s()(["navbar__item","navbar__link",r.className])}))}function j(e){var a=e.items,t=Object(l.a)(e,["items"]);return a?c.a.createElement("li",{className:"menu__list-item"},c.a.createElement(k,Object(n.a)({className:"menu__link menu__link--sublist"},t),t.label),c.a.createElement("ul",{className:"menu__list"},a.map((function(e,a){return c.a.createElement("li",{className:"menu__list-item",key:a},c.a.createElement(k,Object(n.a)({className:"menu__link"},e)))})))):c.a.createElement("li",{className:"menu__list-item"},c.a.createElement(k,Object(n.a)({className:"menu__link"},t)))}a.a=function(){var e,a,t=Object(m.a)(),l=t.siteConfig.themeConfig,i=l.navbar,h=(i=void 0===i?{}:i).title,v=i.links,p=void 0===v?[]:v,k=i.hideOnScroll,w=void 0!==k&&k,O=l.disableDarkMode,M=void 0!==O&&O,z=t.isClient,C=Object(r.useState)(!1),x=C[0],y=C[1],B=Object(r.useState)(!1),T=B[0],W=B[1],S=Object(u.a)(),A=S.isDarkTheme,L=S.setLightTheme,R=S.setDarkTheme,D=Object(_.a)(w),P=D.navbarRef,I=D.isNavbarVisible,U=Object(f.a)(),F=U.logoLink,H=U.logoLinkProps,J=U.logoImageUrl,V=U.logoAlt;Object(E.a)(x);var q=Object(r.useCallback)((function(){y(!0)}),[y]),G=Object(r.useCallback)((function(){y(!1)}),[y]),K=Object(r.useCallback)((function(e){return e.target.checked?R():L()}),[L,R]);return c.a.createElement("nav",{ref:P,className:s()("navbar","navbar--light","navbar--fixed-top",(e={"navbar-sidebar--show":x},e[g.a.navbarHideable]=w,e[g.a.navbarHidden]=!I,e))},c.a.createElement("div",{className:"navbar__inner"},c.a.createElement("div",{className:"navbar__items"},c.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:q,onKeyDown:q},c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},c.a.createElement("title",null,"Menu"),c.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),c.a.createElement(o.a,Object(n.a)({className:"navbar__brand",to:F},H),null!=J&&c.a.createElement("img",{key:z,className:"navbar__logo",src:J,alt:V}),null!=h&&c.a.createElement("strong",{className:s()("navbar__title",(a={},a[g.a.hideLogoText]=T,a))},h)),p.filter((function(e){return"left"===e.position})).map((function(e,a){return c.a.createElement(N,Object(n.a)({},e,{key:a}))}))),c.a.createElement("div",{className:"navbar__items navbar__items--right"},p.filter((function(e){return"right"===e.position})).map((function(e,a){return c.a.createElement(N,Object(n.a)({},e,{key:a}))})),!M&&c.a.createElement(b.a,{className:g.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:A,onChange:K}),c.a.createElement(d.a,{handleSearchBarToggle:W,isSearchBarExpanded:T}))),c.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:G}),c.a.createElement("div",{className:"navbar-sidebar"},c.a.createElement("div",{className:"navbar-sidebar__brand"},c.a.createElement(o.a,Object(n.a)({className:"navbar__brand",onClick:G,to:F},H),null!=J&&c.a.createElement("img",{key:z,className:"navbar__logo",src:J,alt:V}),null!=h&&c.a.createElement("strong",{className:"navbar__title"},h)),!M&&x&&c.a.createElement(b.a,{"aria-label":"Dark mode toggle in sidebar",checked:A,onChange:K})),c.a.createElement("div",{className:"navbar-sidebar__items"},c.a.createElement("div",{className:"menu"},c.a.createElement("ul",{className:"menu__list"},p.map((function(e,a){return c.a.createElement(j,Object(n.a)({},e,{onClick:G,key:a}))})))))))}},1809:function(e,a,t){"use strict";var n=t(0),l=t.n(n);a.a=function(){return l.a.createElement("footer",{className:"footer",id:"footer"},l.a.createElement("div",{className:"grid_c1 footer_cont"},l.a.createElement("div",{className:"footer_logo_container"},l.a.createElement("div",{className:"footer_logo"}),l.a.createElement("span",{className:"footer_designedby"})),l.a.createElement("div",{className:"footer_link_container"},l.a.createElement("div",{className:"footer_link"},l.a.createElement("h3",{className:"footer_link_tit footer_link_tit1"},"\u76f8\u5173\u8d44\u6e90"),l.a.createElement("p",null,l.a.createElement("a",{className:"link",href:"https://taro.jd.com/",target:"_blank"},"Taro")),l.a.createElement("p",null,l.a.createElement("a",{className:"link",href:"https://taro-ui.jd.com/",target:"_blank"},"Taro UI")),l.a.createElement("p",null,l.a.createElement("a",{className:"link",href:"https://at-ui.github.io/at-ui/#/zh",target:"_blank"},"At-UI")),l.a.createElement("p",null,l.a.createElement("a",{className:"link",href:"https://nerv.aotu.io/",target:"_blank"},"Nerv")),l.a.createElement("p",null,l.a.createElement("a",{className:"link",href:"https://athena.aotu.io/",target:"_blank"},"Athena"))),l.a.createElement("div",{className:"footer_link"},l.a.createElement("h3",{className:"footer_link_tit footer_link_tit2"},"\u793e\u533a"),l.a.createElement("p",null,l.a.createElement("a",{href:"https://github.com/NervJS/taro/issues",target:"_blank"},"GitHub")),l.a.createElement("p",null,l.a.createElement("a",{href:"https://taro-club.jd.com",target:"_blank"},"Taro BBS")),l.a.createElement("p",{className:"footer_link_connect_wrap"},l.a.createElement("span",{className:"footer_link_connect footer_link_wechat"},"\u5fae\u4fe1",l.a.createElement("span",{className:"wechat_qrcode_icon"},l.a.createElement("svg",{t:"1554966525626",className:"icon svgicon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2588","data-spm-anchor-id":"a313x.7781069.0.i0"},l.a.createElement("path",{d:"M240.071 241.095h59.278v59.278h-59.278v-59.278z",fill:"","p-id":"2589"}),l.a.createElement("path",{d:"M405.959 134.485h-272.611v272.611h106.723v47.445h59.278v-47.445h106.723v-59.278h47.445v-47.445h-47.445l-0.114-165.888zM346.795 347.819h-154.169v-154.055h154.055v154.055h0.114zM240.071 727.154h59.278v59.278h-59.278v-59.278zM726.016 241.095h59.278v59.278h-59.278v-59.278zM512.683 509.042v63.943h59.278v-59.165h47.445v-59.278h-47.445v-47.445h-59.278v101.945zM512.683 725.789v60.643h59.278v-106.723h47.445v-59.278h-106.723v105.358zM571.961 786.432h47.445v47.445h-47.445v-47.445zM453.405 833.877v59.165h118.557v-59.165h-118.557z",fill:"","p-id":"2590"}),l.a.createElement("path",{d:"M678.685 679.709h-59.278v106.723h106.61v-59.278h-47.331v-47.445zM726.016 893.042h166.002v-59.165h-106.723v-47.445h-59.278v106.61zM892.018 513.821v-59.278h-106.723v59.278h106.723zM832.739 727.154h59.278v59.278h-59.278v-59.278zM453.405 347.819h59.278v59.278h-59.278v-59.278zM726.016 454.542v-47.445h166.002v-272.611h-272.611v59.278h-106.723v47.445h106.723v59.165h-47.445v47.445h47.445v59.278h59.278v47.445h47.331zM678.685 193.763h154.055v154.055h-154.055v-154.055zM678.685 572.985h47.331v47.445h-47.331v-47.445zM785.294 679.709h-59.278v47.445h106.723v-106.723h59.278v-47.445h-106.723v106.723zM453.405 241.095h59.278v59.278h-59.278v-59.278zM299.349 513.821h47.445v59.165h-47.445v-59.165zM453.405 454.542h-106.61v59.278h59.165v59.165h47.445v-118.443z",fill:"","p-id":"2591"}),l.a.createElement("path",{d:"M405.959 786.432v-106.723h47.445v-59.278h-213.333v-106.61h-106.723v59.278h59.278v47.445h-59.278v272.611h272.611v-59.278h47.445v-47.445h-47.445zM346.795 833.877h-154.169v-154.169h154.055v154.169h0.114zM453.405 572.985h59.278v47.445h-59.278v-47.445zM619.406 513.821h59.278v59.165h-59.278v-59.165zM726.016 513.821h59.278v59.165h-59.278v-59.165z",fill:"","p-id":"2592"})))),l.a.createElement("span",{className:"footer_link_wechat_img"},l.a.createElement("img",{src:"https://camo.githubusercontent.com/10834a234b99a5880b5dff7c0ca7235e2a0772e7/687474703a2f2f696d6732302e333630627579696d672e636f6d2f7562612f6a66732f7432303139372f3238332f313638373136383837342f3133363034322f32623464383131662f35623330613635634e39643166303366312e706e67"})))),l.a.createElement("div",{className:"footer_link"},l.a.createElement("h3",{className:"footer_link_tit footer_link_tit3"},"\u5173\u4e8e\u6211\u4eec"),l.a.createElement("p",null,l.a.createElement("a",{href:"https://aotu.io/",target:"_blank"},"\u51f9\u51f8\u5b9e\u9a8c\u5ba4")),l.a.createElement("p",null,l.a.createElement("a",{href:"https://aotu.io/join/",target:"_blank"},"\u52a0\u5165\u6211\u4eec")),l.a.createElement("p",null,l.a.createElement("a",{href:"mailto:taro@jd.com?subject=\u3010Taro \u5408\u4f5c\u3011\u5408\u4f5c\u6807\u9898"},"\u8054\u7cfb\u6211\u4eec"))),l.a.createElement("div",{className:"footer_link"},l.a.createElement("h3",{className:"footer_link_tit footer_link_tit4"},"\u611f\u8c22"),l.a.createElement("p",null,l.a.createElement("a",{href:"http://jdc.jd.com/",target:"_blank"},"\u7528\u6237\u4f53\u9a8c\u8bbe\u8ba1\u90e8")),l.a.createElement("p",null,l.a.createElement("a",{href:"https://github.com/nervjs/taro#%E8%B4%A1%E7%8C%AE%E8%80%85%E4%BB%AC",target:"_blank"},"Taro \u8d21\u732e\u8005\u4eec"))))),l.a.createElement("div",{className:"copyright"},l.a.createElement("div",{className:"in"},"Copyright \xa9 ",(new Date).getFullYear(),". All Rights Reserved. \u7ca4ICP\u590715077732\u53f7-2")))}},1825:function(e,a,t){"use strict";var n=t(12),l=t(25),r=t(1812),c="".endsWith;n(n.P+n.F*t(1813)("endsWith"),"String",{endsWith:function(e){var a=r(this,e,"endsWith"),t=arguments.length>1?arguments[1]:void 0,n=l(a.length),i=void 0===t?n:Math.min(l(t),n),s=String(e);return c?c.call(a,s,i):a.slice(i-s.length,i)===s}})},1832:function(e,a,t){"use strict";t.r(a);t(1794),t(1825),t(80),t(1797);var n=t(0),l=t.n(n),r=t(1805),c=t(1796),i=t(1791),s=t(1795);a.default=function(){var e,a,t,n,o=Object(c.d)().pathname,m=void 0===o?"":o,h=Object(i.a)().siteConfig.baseUrl,v=void 0===h?"":h,d=Object(s.a)(m);if(d.endsWith(".html")){var b=(e=[v,v],t=a||"/",n=new RegExp(t+"{1,}","g"),e.join(t).replace(n,t));return l.a.createElement(c.a,{to:d.slice(d.startsWith(b)?v.length-1:0,-5)})}return l.a.createElement(r.a,{title:"Page Not Found"},l.a.createElement("div",{className:"container margin-vert--xl"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--6 col--offset-3"},l.a.createElement("h1",{className:"hero__title"},"404"),l.a.createElement("p",null,"We could not find what you were looking for."),l.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);