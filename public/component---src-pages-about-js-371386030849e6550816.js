(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{150:function(e,t,a){"use strict";a.r(t);a(35),a(216);var n=a(7),r=a.n(n),i=a(0),l=a.n(i),s=a(4),o=a.n(s),c=a(158),d=a(166),m=a.n(d),u=a(153),p=a(190),h=a.n(p),f=a(154),E=a(155),g=a(163),v=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=(e.key,e.name),a=e.position,n=(e.year,e.major),r=e.portfolio_url,i=e.github_url,s=e.linkedin_url,o=e.image_sizes;return console.log(n),l.a.createElement("div",{className:"biocard-column"},l.a.createElement("div",{className:"biocard"},l.a.createElement("div",{className:"img-container"},l.a.createElement(h.a,{title:t,sizes:o})),l.a.createElement("div",{className:"info-container"},l.a.createElement("p",{className:"name"},t),l.a.createElement("p",{className:"position"},l.a.createElement("i",null,a)),l.a.createElement("p",{className:"major"},n)),l.a.createElement("div",{className:"icons-container"},s&&l.a.createElement("a",{target:"_blank",href:s},l.a.createElement(f.a,{icon:g.d})),i&&l.a.createElement("a",{target:"_blank",href:i},l.a.createElement(f.a,{icon:g.b})),r&&l.a.createElement("a",{target:"_blank",href:r},l.a.createElement(f.a,{icon:E.h})))))},t}(l.a.Component);v.defaultProps={name:"",position:"",year:"",major:"",portfolio_url:"",github_url:"",linkedin_url:"",image_sizes:null},v.propTypes={name:o.a.string.isRequired,position:o.a.string.isRequired,year:o.a.string.isRequired,major:o.a.string.isRequired,portfolio_url:o.a.string.isRequired,github_url:o.a.string.isRequired,linkedin_url:o.a.string.isRequired,image_sizes:o.a.object.isRequired};var b=v,y=(a(350),a(157));a.d(t,"query",function(){return N});var N="1621189891",w=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={imageData:null,memberData:null},t}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){for(var e={},t=this.props.data.headshots.edges,a=0;a<t.length;a++)e[t[a].node.name]={name:t[a].node.name,sizes:t[a].node.childImageSharp.sizes};this.setState({memberData:this.props.data.members.edges[0].node.Teams,imageData:e})},a.render=function(){var e=this.state,t=e.memberData,a=e.imageData;return l.a.createElement(u.a,{title:"ABOUT US",subtitle:"Learn more about who we are and what we do"},l.a.createElement(m.a,{title:"ABOUT US"}),l.a.createElement("section",{id:"two",className:"main style1"},l.a.createElement("ul",{className:"major-icons card-container"},l.a.createElement("li",null,l.a.createElement("div",{className:"grid-card"},l.a.createElement(f.a,{icon:E.f,className:"icon style4 major"}),l.a.createElement("h3",null,"Who We Are"),l.a.createElement("p",null,"We are a group of Columbia students passionate about working on real-world data problems."," "))),l.a.createElement("li",null,l.a.createElement("div",{className:"grid-card"},l.a.createElement(f.a,{icon:E.b,className:"icon style4 major"}),l.a.createElement("h3",null,"What We Do"),l.a.createElement("p",null,"We focus on exploring data projects related to Data Analytics, Machine Learning, NLP, Statistical Analysis, and more."))),l.a.createElement("li",null,l.a.createElement("div",{className:"grid-card"},l.a.createElement(f.a,{icon:E.d,className:"icon style4 major"}),l.a.createElement("h3",null,"How We Work"),l.a.createElement("p",null,"Students learn through exploratory projects for companies while building genuine relationships.")))),l.a.createElement("div",{className:"grid-wrapper"})),l.a.createElement("section",{id:"two",className:"main style4 statistics"},l.a.createElement("ul",{className:"major-icons card-container"},l.a.createElement("li",null,l.a.createElement("div",{className:"grid-card"},l.a.createElement("h1",null,"18%"),l.a.createElement("p",null,"Underrepresented Minority"))),l.a.createElement("li",null,l.a.createElement("div",{className:"grid-card"},l.a.createElement("h1",null,"34%"),l.a.createElement("p",null,"Female"))),l.a.createElement("li",null,l.a.createElement("div",{className:"grid-card"},l.a.createElement("h1",null,"48%"),l.a.createElement("p",null,"Receiving Financial Aid"))),l.a.createElement("li",null,l.a.createElement("div",{className:"grid-card"},l.a.createElement("h1",null,"28%"),l.a.createElement("p",null,"First-Generation Students"))))),l.a.createElement("section",{id:"two",className:"main style7 statistics"},l.a.createElement("ul",{className:"major-icons card-container"},l.a.createElement("li",null,l.a.createElement("div",{className:"grid-card"},l.a.createElement("h1",null,"44%"),l.a.createElement("p",null,"Computer Science"))),l.a.createElement("li",null,l.a.createElement("div",{className:"grid-card"},l.a.createElement("h1",null,"16%"),l.a.createElement("p",null,"Operations Research"))),l.a.createElement("li",null,l.a.createElement("div",{className:"grid-card"},l.a.createElement("h1",null,"22%"),l.a.createElement("p",null,"Applied Math or Statistics"))),l.a.createElement("li",null,l.a.createElement("div",{className:"grid-card"},l.a.createElement("h1",null,"18%"),l.a.createElement("p",null,"Other"))))),l.a.createElement(y.a,{header:"Our Core Values",subheader:l.a.createElement("p",null,"LionBase is a data product development group that aims to connect driven students interested in data science, product design, statistics, or computer science with meaningful industry applications.")},l.a.createElement("div",{className:"grid-wrapper"},l.a.createElement("div",{className:"col-4"},l.a.createElement(f.a,{icon:E.o,className:"icon style13 major naked"}),l.a.createElement("h3",null,"Clients First"),l.a.createElement("p",null,"Build relationships together and place our clients at the center of our work")),l.a.createElement("div",{className:"col-4"},l.a.createElement(f.a,{icon:E.k,className:"icon style10 major naked"}),l.a.createElement("h3",null,"Innovation"),l.a.createElement("p",null,"Approach problems from creative perspectives")),l.a.createElement("div",{className:"col-4"},l.a.createElement(f.a,{icon:E.m,className:"icon style12 major naked"}),l.a.createElement("h3",null,"Diversity"),l.a.createElement("p",null,"Build diverse teams that value equity, inclusion, and dignity for all")))),l.a.createElement(y.a,{header:"Our Team Structure",subheader:l.a.createElement("p",null,"We have three primary groups: client teams, research teams, and the executive team")},l.a.createElement("div",{className:"grid-wrapper"},l.a.createElement("div",{className:"col-4"},l.a.createElement(f.a,{icon:E.p,className:"icon style7 major naked"}),l.a.createElement("h3",null,"Client Teams"),l.a.createElement("p",null,"Each client team consists of 6-8 students with significant experience in data science or product development.")),l.a.createElement("div",{className:"col-4"},l.a.createElement(f.a,{icon:E.j,className:"icon style8 major naked"}),l.a.createElement("h3",null,"Research Teams"),l.a.createElement("p",null,"Our research teams perform regular exploration of various data science fields to improve our work internally.")),l.a.createElement("div",{className:"col-4"},l.a.createElement(f.a,{icon:E.c,className:"icon style9 major naked"}),l.a.createElement("h3",null,"Executive Team"),l.a.createElement("p",null,"The executive team supports the client and research teams through business and operations.")))),l.a.createElement(y.a,{header:"Executive Team",subheader:l.a.createElement("p",null,"Meet the organizers of LionBase")},l.a.createElement("div",{className:"biocards-holder"},t&&t[0].Executive.map(function(e,t){var n=e.photo_id?e.photo_id:e.name.replace(/[^A-Z0-9]/gi,"");return l.a.createElement(b,{key:t,name:e.name,position:e.position,year:e.year,major:e.major,portfolio_url:e.portfolio_url,github_url:e.github_url,linkedin_url:e.linkedin_url,image_sizes:a[n].sizes})}))),l.a.createElement(y.a,{header:"Team Leads",subheader:l.a.createElement("p",null,"Meet the client-facing project leads")},l.a.createElement("div",{className:"biocards-holder"},t&&t[1].Team_Lead.map(function(e,t){var n=e.photo_id?e.photo_id:e.name.replace(/[^A-Z0-9]/gi,"");return l.a.createElement(b,{key:t,name:e.name,position:e.position,year:e.year,major:e.major,portfolio_url:e.portfolio_url,github_url:e.github_url,linkedin_url:e.linkedin_url,image_sizes:a[n].sizes})}))),l.a.createElement(y.a,{header:"Client Team Members",subheader:l.a.createElement("p",null,"Meet the people who build our products alongside the team leads")},l.a.createElement("div",{className:"biocards-holder"},t&&t[2].Client.map(function(e,t){var n=e.photo_id?e.photo_id:e.name.replace(/[^A-Z0-9]/gi,"");return l.a.createElement(b,{key:t,name:e.name,position:e.position,year:e.year,major:e.major,portfolio_url:e.portfolio_url,github_url:e.github_url,linkedin_url:e.linkedin_url,image_sizes:a[n].sizes})}))),l.a.createElement(y.a,{header:"Research Team Members",subheader:l.a.createElement("p",null,"Meet the people expanding our understanding of data science")},l.a.createElement("div",{className:"biocards-holder"},t&&t[3].Research.map(function(e,t){var n=e.photo_id?e.photo_id:e.name.replace(/[^A-Z0-9]/gi,"");return l.a.createElement(b,{key:t,name:e.name,position:e.position,year:e.year,major:e.major,portfolio_url:e.portfolio_url,github_url:e.github_url,linkedin_url:e.linkedin_url,image_sizes:a[n].sizes})}))))},t}(i.Component);w.propTypes={};t.default=Object(c.compose)()(w)},151:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(4),l=a.n(i),s=a(32),o=a.n(s);a.d(t,"a",function(){return o.a});a(152),r.a.createContext({});l.a.object,l.a.string.isRequired,l.a.func,l.a.func},152:function(e,t,a){var n;e.exports=(n=a(159))&&n.default||n},153:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=a(0),l=a.n(i),s=(a(167),a(151)),o=(a(4),a(158)),c=(a(168),a(169)),d=a(154),m=a(155),u=function(e){function t(t){return e.call(this,t)||this}return r()(t,e),t.prototype.render=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{id:"burger-wrap"},l.a.createElement("div",{className:"nav-item"},l.a.createElement(s.a,{to:"/"},"LionBase")),l.a.createElement("div",{className:"grow"}),l.a.createElement(c.bubble,{right:!0,customBurgerIcon:l.a.createElement(d.a,{icon:m.a}),customCrossIcon:l.a.createElement(d.a,{icon:m.n}),disableCloseOnEsc:!0,noOverlay:!0},l.a.createElement(s.a,{id:"home",className:"menu-item",to:"/"},"Home"),l.a.createElement("div",{className:"divider"}),l.a.createElement(s.a,{id:"about",className:"menu-item",to:"/about"},"About"),l.a.createElement("div",{className:"divider"}),l.a.createElement(s.a,{id:"projects",className:"menu-item",to:"/projects"},"Projects"),l.a.createElement("div",{className:"divider"}),l.a.createElement(s.a,{id:"contact",className:"menu-item",to:"/contact"},"Contact Us"),l.a.createElement("div",{className:"divider"}),l.a.createElement(s.a,{id:"apply",className:"menu-item action",to:"/apply"},"Schedule a Consultation"),l.a.createElement("div",{className:"divider"}))),l.a.createElement("div",{id:"navbar"},l.a.createElement("div",{className:"nav-item title-item"},l.a.createElement(s.a,{to:"/"},"LionBase")),l.a.createElement("div",{className:"grow"}),l.a.createElement("div",{className:"nav-item"},l.a.createElement(s.a,{to:"/about"},"About")),l.a.createElement("div",{className:"nav-item"},l.a.createElement(s.a,{to:"/projects"},"Projects")),l.a.createElement("div",{className:"nav-item"},l.a.createElement("a",{target:"_blank",href:"https://medium.com/@lionbase.nyc"},"Blog")),l.a.createElement("div",{className:"nav-item"},l.a.createElement(s.a,{to:"/contact"},"Contact Us")),l.a.createElement("div",{className:"nav-item action"},l.a.createElement(s.a,{to:"/apply"},"Schedule a Consultation"))))},t}(i.Component),p=Object(o.compose)()(u),h=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.subtitle,n=e.icon,r=e.navbar_children;return l.a.createElement(i.Fragment,null,l.a.createElement("div",{id:"header-container"},l.a.createElement(p,null),l.a.createElement("section",{id:"header"},l.a.createElement("div",{className:"inner"},n,l.a.createElement("h1",{className:"header-title"},t),l.a.createElement("p",null,a),r))),l.a.createElement("div",{id:"subtitle-container"}))},t}(l.a.Component);h.defaultProps={title:"LionBase",subtitle:"Subtitle here",icon:null,navbar_children:null};var f=h,E=a(163),g=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return l.a.createElement("section",{id:"footer"},l.a.createElement("div",{className:"footer-sub"},l.a.createElement("ul",{className:"icons"},l.a.createElement("li",null,l.a.createElement("a",{target:"_blank",href:"https://www.facebook.com/lionbase.nyc",className:"footer-link"},l.a.createElement(d.a,{icon:E.a,className:"icon footer-icon"}))),l.a.createElement("li",null,l.a.createElement("a",{target:"_blank",href:"https://github.com/LionBase ",className:"footer-link"},l.a.createElement(d.a,{icon:E.c,className:"icon footer-icon"}))),l.a.createElement("li",null,l.a.createElement("a",{target:"_blank",href:"https://medium.com/@lionbase.nyc",className:"footer-link"},l.a.createElement(d.a,{icon:E.e,className:"icon footer-icon"}))),l.a.createElement("li",null,l.a.createElement("a",{target:"_blank",href:"mailto:lionbase.nyc@gmail.com",className:"footer-link"},l.a.createElement(d.a,{icon:m.g,className:"icon footer-icon"})))),l.a.createElement("ul",{className:"copyright"},l.a.createElement("li",null,"© lionbase.nyc"))))},t}(l.a.Component),v=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={loading:"is-loading"},a}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;this.timeoutId=setTimeout(function(){e.setState({loading:""})},100)},a.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId)},a.render=function(){var e=this.props.children;return l.a.createElement("div",{className:"body "+this.state.loading},l.a.createElement(f,this.props),e,l.a.createElement(g,null))},t}(l.a.Component);t.a=v},157:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=(a(153),a(0)),l=a.n(i),s=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.header,a=e.subheader,n=e.className,r=e.children;return l.a.createElement("div",null,l.a.createElement("section",{id:"one",className:"main "+n},l.a.createElement("div",{className:"page-section-wrapper"},l.a.createElement("div",{className:"page-section"},l.a.createElement("header",{className:"major"},l.a.createElement("h2",null,t)),a)),r))},t}(i.Component);s.defaultProps={header:"Header",subheader:"Subheader",className:"style1"},t.a=s},159:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),l=a.n(i),s=a(54),o=a(2),c=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=c},190:function(e,t,a){"use strict";var n=a(8);t.__esModule=!0,t.default=void 0;var r,i=n(a(7)),l=n(a(34)),s=n(a(74)),o=n(a(75)),c=n(a(0)),d=n(a(4)),m=function(e){var t=(0,o.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},u={},p=function(e){var t=m(e),a=t.fluid?t.fluid.src:t.fixed.src;return u[a]||!1},h=[];var f=function(e,t){(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){h.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),r).observe(e),h.push([e,t])},E=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",l=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",c=e.opacity?e.opacity:"1";return"<picture>"+n+"<img "+s+o+a+r+t+l+i+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+c+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},g=c.default.forwardRef(function(e,t){var a=e.sizes,n=e.srcSet,r=e.src,i=e.style,l=e.onLoad,d=e.onError,m=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return c.default.createElement("img",(0,o.default)({sizes:a,srcSet:n,src:r},m,{onLoad:l,onError:d,ref:t,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))});g.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var v=function(e){function t(t){var a;a=e.call(this,t)||this;var n=!0,r=!1,i=t.fadeIn,s=p(t);!s&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=!1,r=!0),"undefined"==typeof window&&(n=!1),t.critical&&(n=!0,r=!1);var o=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:n,imgLoaded:!1,IOSupported:r,fadeIn:i,hasNoScript:o,seenBefore:s},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,l.default)((0,l.default)(a))),a.handleRef=a.handleRef.bind((0,l.default)((0,l.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&f(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0,imgLoaded:e})})},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=m(e),a=t.fluid?t.fluid.src:t.fixed.src,u[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=m(this.props),t=e.title,a=e.alt,n=e.className,r=e.style,i=void 0===r?{}:r,l=e.imgStyle,s=void 0===l?{}:l,d=e.placeholderStyle,u=void 0===d?{}:d,p=e.placeholderClassName,h=e.fluid,f=e.fixed,v=e.backgroundColor,b=e.Tag,y=e.itemProp,N="boolean"==typeof v?"lightgray":v,w=(0,o.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},s,u),S=(0,o.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},s),_={title:t,alt:this.state.isVisible?"":a,style:w,className:p};if(h){var j=h;return c.default.createElement(b,{className:(n||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(j.srcSet)},c.default.createElement(b,{style:{width:"100%",paddingBottom:100/j.aspectRatio+"%"}}),j.base64&&c.default.createElement(g,(0,o.default)({src:j.base64},_)),j.tracedSVG&&c.default.createElement(g,(0,o.default)({src:j.tracedSVG},_)),N&&c.default.createElement(b,{title:t,style:{backgroundColor:N,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&c.default.createElement("picture",null,j.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:j.srcSetWebp,sizes:j.sizes}),c.default.createElement(g,{alt:a,title:t,sizes:j.sizes,src:j.src,srcSet:j.srcSet,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:E((0,o.default)({alt:a,title:t},j))}}))}if(f){var k=f,L=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:k.width,height:k.height},i);return"inherit"===i.display&&delete L.display,c.default.createElement(b,{className:(n||"")+" gatsby-image-wrapper",style:L,ref:this.handleRef,key:"fixed-"+JSON.stringify(k.srcSet)},k.base64&&c.default.createElement(g,(0,o.default)({src:k.base64},_)),k.tracedSVG&&c.default.createElement(g,(0,o.default)({src:k.tracedSVG},_)),N&&c.default.createElement(b,{title:t,style:{backgroundColor:N,width:k.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:k.height}}),this.state.isVisible&&c.default.createElement("picture",null,k.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:k.srcSetWebp,sizes:k.sizes}),c.default.createElement(g,{alt:a,title:t,width:k.width,height:k.height,sizes:k.sizes,src:k.src,srcSet:k.srcSet,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:E((0,o.default)({alt:a,title:t,width:k.width,height:k.height},k))}}))}return null},t}(c.default.Component);v.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var b=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),y=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});v.propTypes={resolutions:b,sizes:y,fixed:b,fluid:y,fadeIn:d.default.bool,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string};var N=v;t.default=N},216:function(e,t,a){var n=a(25).f,r=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in r||a(17)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=component---src-pages-about-js-371386030849e6550816.js.map