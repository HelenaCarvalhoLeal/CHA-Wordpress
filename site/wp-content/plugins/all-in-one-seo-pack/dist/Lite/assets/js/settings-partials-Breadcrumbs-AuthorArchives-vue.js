(window["aioseopjsonp"]=window["aioseopjsonp"]||[]).push([["settings-partials-Breadcrumbs-AuthorArchives-vue","settings-partials-Breadcrumbs-Preview-vue"],{"0d4c":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("core-settings-row",{key:"Author",attrs:{name:"Author"},scopedSlots:e._u([{key:"content",fn:function(){return[a("div",[a("preview",{attrs:{"preview-data":e.getPreview(),useDefaultTemplate:e.dynamicOptions.breadcrumbs.archives.author.useDefaultTemplate}}),a("grid-row",[a("grid-column",[a("base-toggle",{staticClass:"current-item",model:{value:e.dynamicOptions.breadcrumbs.archives.author.useDefaultTemplate,callback:function(t){e.$set(e.dynamicOptions.breadcrumbs.archives.author,"useDefaultTemplate",t)},expression:"dynamicOptions.breadcrumbs.archives.author.useDefaultTemplate"}}),e._v(" "+e._s(e.strings.useDefaultTemplate)+" ")],1)],1),e.dynamicOptions.breadcrumbs.archives.author.useDefaultTemplate?e._e():a("grid-row",[e.options.breadcrumbs.breadcrumbPrefix&&e.options.breadcrumbs.breadcrumbPrefix.length?a("grid-column",[a("base-toggle",{staticClass:"current-item",model:{value:e.dynamicOptions.breadcrumbs.archives.author.showPrefixCrumb,callback:function(t){e.$set(e.dynamicOptions.breadcrumbs.archives.author,"showPrefixCrumb",t)},expression:"dynamicOptions.breadcrumbs.archives.author.showPrefixCrumb"}}),e._v(" "+e._s(e.strings.showPrefixLabel)+" ")],1):e._e(),a("grid-column",[a("base-toggle",{staticClass:"current-item",model:{value:e.dynamicOptions.breadcrumbs.archives.author.showHomeCrumb,callback:function(t){e.$set(e.dynamicOptions.breadcrumbs.archives.author,"showHomeCrumb",t)},expression:"dynamicOptions.breadcrumbs.archives.author.showHomeCrumb"}}),e._v(" "+e._s(e.strings.showHomeLabel)+" ")],1),a("grid-column",[a("core-html-tags-editor",{attrs:{"line-numbers":!0,checkUnfilteredHtml:"","tags-context":"breadcrumbs-author","minimum-line-numbers":3,"default-tags":["breadcrumb_author_display_name","breadcrumb_link"]},model:{value:e.dynamicOptions.breadcrumbs.archives.author.template,callback:function(t){e.$set(e.dynamicOptions.breadcrumbs.archives.author,"template",t)},expression:"dynamicOptions.breadcrumbs.archives.author.template"}})],1)],1)],1)]},proxy:!0}])})},s=[],i=a("5530"),o=(a("ac1f"),a("5319"),a("2f62")),u=a("c468"),n={components:{preview:u["default"]},data:function(){return{strings:{useDefaultTemplate:this.$t.__("Use a default template",this.$td),showHomeLabel:this.$t.__("Show homepage link",this.$td),showPrefixLabel:this.$t.__("Show prefix link",this.$td),authorName:this.$t.__("Author name",this.$td),authorNameFirst:this.$t.__("First name",this.$td),authorNameLast:this.$t.__("Last name",this.$td)}}},methods:{getPreview:function(){var e=this.options.breadcrumbs,t=this.dynamicOptions.breadcrumbs.archives.author,a=t.useDefaultTemplate;return[a&&e.breadcrumbPrefix||!a&&t.showPrefixCrumb?e.breadcrumbPrefix:"",a&&e.homepageLink||!a&&t.showHomeCrumb?e.homepageLabel?e.homepageLabel:"Home":"",this.getTemplate()]},getTemplate:function(){var e=this.dynamicOptions.breadcrumbs.archives.author.useDefaultTemplate?this.$aioseo.breadcrumbs.defaultTemplates.archives.author:this.dynamicOptions.breadcrumbs.archives.author.template;return e=e.replace(/#breadcrumb_author_display_name/g,this.strings.authorName),e=e.replace(/#breadcrumb_author_first_name/g,this.strings.authorNameFirst),e=e.replace(/#breadcrumb_author_last_name/g,this.strings.authorNameLast),e}},computed:Object(i["a"])({},Object(o["e"])(["options","dynamicOptions"]))},c=n,m=a("2877"),l=Object(m["a"])(c,r,s,!1,null,null,null);t["default"]=l.exports},c468:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"preview-box"},[e.label?a("span",{staticClass:"label"},[e._v(" "+e._s(e.label)+": ")]):e._e(),e._l(this.getPreviewData(),(function(t,r){return[1<e.previewLength&&r>0&&r<e.previewLength?a("span",{key:r+"sep",staticClass:"aioseo-breadcrumb-separator",domProps:{innerHTML:e._s(e.options.breadcrumbs.separator)}}):e._e(),r<e.previewLength-1?a("span",{key:r+"crumb",class:{"aioseo-breadcrumb":!t.match(/aioseo-breadcrumb/),link:t!==e.options.breadcrumbs.breadcrumbPrefix&&!t.match(/<a /)},domProps:{innerHTML:e._s(t)}}):e._e(),r===e.previewLength-1?a("span",{key:r+"crumbLast",class:{last:!0,link:e.options.breadcrumbs.linkCurrentItem&&e.useDefaultTemplate&&!t.match(/<a /),noLink:!e.options.breadcrumbs.linkCurrentItem&&e.useDefaultTemplate,"aioseo-breadcrumb":!t.match(/aioseo-breadcrumb/)},domProps:{innerHTML:e._s(t)}}):e._e()]}))],2)},s=[],i=a("5530"),o=(a("d81d"),a("4de4"),a("ac1f"),a("5319"),a("fb6a"),a("2f62")),u={props:{previewData:{type:Array,default:null},useDefaultTemplate:{type:Boolean,default:!0},label:String},computed:Object(i["a"])(Object(i["a"])({},Object(o["e"])(["options"])),{},{previewLength:function(){return this.getPreviewData()?this.getPreviewData().length:0}}),methods:{getPreviewData:function(){var e=this,t=this.previewData.filter((function(e){return!!e})).map((function(t){return e.$tags.decodeHTMLEntities(t).replace(/#breadcrumb_separator/g,'<span class="aioseo-breadcrumb-separator">'+e.options.breadcrumbs.separator+"</span>").replace(/#breadcrumb_link/g,"Permalink")}));return this.useDefaultTemplate&&!this.options.breadcrumbs.showCurrentItem&&(t=t.slice(0,t.length-1)),t}}},n=u,c=a("2877"),m=Object(c["a"])(n,r,s,!1,null,null,null);t["default"]=m.exports}}]);