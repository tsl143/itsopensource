(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"6Gk8":function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),l=a("Wbzz"),o=a("p3AD"),i=a("8qja");t.a=function(e){var t=e.author,a=void 0===t?"":t,r=Object(l.c)("4268877247"),u={slug:"",name:"",twitter:"",drupal:""};if(i.a[a])u.name=i.a[a].name,u.slug=a,u.twitter=i.a[a].twitter,u.drupal=i.a[a].drupal,u.bio=i.a[a].bio;else{var c=r.site.siteMetadata,m=c.author,s=c.social;u.name=m,u.slug="trishul",u.twitter=s.twitter,u.drupal=s.drupal}return n.a.createElement("div",{style:{display:"flex",marginBottom:Object(o.a)(2.5)}},n.a.createElement(l.a,{to:"/author/"+u.slug,style:{minWidth:50,minHeight:50,marginRight:Object(o.a)(.5),marginBottom:0,overflow:"hidden",boxShadow:"none"}},n.a.createElement("img",{alt:u.name,style:{width:50,height:"auto",borderRadius:"100%"},src:"/"+u.slug+".jpg"})),n.a.createElement("p",null,n.a.createElement("strong",null,u.name)," ",u.bio,".",n.a.createElement("br",null),u.twitter&&""!==u.twitter?n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://twitter.com/"+u.twitter},"@",u.twitter):null,u.drupal&&""!==u.drupal?n.a.createElement("div",null," Drupal Profile: ",n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://drupal.org/u/"+u.drupal},u.drupal)):null))}},"7R6r":function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return c}));var r=a("q1tI"),n=a.n(r),l=a("Bl7J"),o=a("vrFN"),i=a("6Gk8"),u=a("eWDE"),c="696361366";t.default=function(e){var t=e.location,a=e.pageContext,r=e.data,c=a.author,m='Blogs by "'+c+'"';return n.a.createElement(l.a,{location:t,title:m},n.a.createElement(o.a,{title:m}),n.a.createElement(i.a,{author:c}),n.a.createElement(u.a,{data:r}))}},eWDE:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var r=a("dI71"),n=a("q1tI"),l=a.n(n),o=a("Wbzz"),i=a("p3AD"),u=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){var e=this.props.data.allMarkdownRemark.edges;return l.a.createElement(l.a.Fragment,null,e.map((function(e){var t=e.node,a=t.frontmatter.title||t.fields.slug;return l.a.createElement("article",{key:t.fields.slug},l.a.createElement("header",null,l.a.createElement("h3",{style:{marginBottom:Object(i.a)(1/4)}},l.a.createElement(o.a,{style:{boxShadow:"none"},to:t.fields.slug},a)),l.a.createElement("small",null,t.frontmatter.date)),l.a.createElement("section",null,l.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.frontmatter.description||t.excerpt}})))})))},t}(l.a.Component)}}]);
//# sourceMappingURL=component---src-templates-author-js-e064cdeb77b3a1400ef5.js.map