import{h as $,i as y,o as a,b as i,f as s,e as d,w as r,j as p,H as L,l as b,F as v,r as u,u as g,k as w,t as m,I as j,c as S}from"./entry.503b46b5.js";import{_ as I}from"./logo-light.14787d16.js";import{_ as f}from"./nuxt-link.0172061d.js";import{_ as M}from"./circle-star.6c51a425.js";import{l as A}from"./loadBackgroudImages.6dc4ef71.js";import{_ as D}from"./StatementSplitter.f20e4c22.js";import{S as U,a as V,_ as H}from"./swiper-slide.4b68a6dc.js";import{N as P}from"./navigation.374f9214.js";import{P as q}from"./pagination.6d765515.js";import{A as E}from"./autoplay.3a2b82ed.js";import{d as x}from"./app-data.c5e7f44e.js";const N=""+globalThis.__publicAssetsURL("dark/assets/imgs/logo-dark.png"),T={class:"navbar navbar-expand-lg static main-bg"},W={class:"container"},F={class:"logo icon-img-100",href:"#"},X={key:0,src:N,alt:"logo"},R={key:1,src:I,alt:"logo"},O=s("span",{class:"icon-bar"},[s("i",{class:"fas fa-bars"})],-1),Z=[O],Y={class:"collapse navbar-collapse justify-content-center",id:"navbarSupportedContent"},G={class:"navbar-nav"},J={class:"nav-item"},K=s("span",{class:"rolling-text"},"Home",-1),Q=[K],ss={class:"nav-item"},ts=s("span",{class:"rolling-text"},"Services",-1),es=[ts],as={class:"nav-item"},os=s("span",{class:"rolling-text"},"About",-1),is=[os],ns={class:"nav-item"},ls=s("span",{class:"rolling-text"},"Portfolio",-1),cs=[ls],rs={class:"nav-item"},ds=s("span",{class:"rolling-text"},"Resume",-1),_s=[ds],hs={class:"nav-item"},gs=s("span",{class:"rolling-text"},"Blog",-1),ms=[gs],ps={class:"nav-item"},vs=s("span",{class:"rolling-text"},"Contact",-1),us=[vs],fs=s("div",{class:"form-group"},[s("input",{type:"text",name:"search",placeholder:"Search"}),s("button",null,[s("span",{class:"pe-7s-search"})])],-1),$s=s("span",{class:"pe-7s-search open-search"},null,-1),bs=s("span",{class:"pe-7s-close close-search"},null,-1),ws=[$s,bs],ka={__name:"Navbar",props:["lightMode"],setup(c){$(()=>(window.addEventListener("scroll",l),()=>window.removeEventListener("scroll",l))),y(()=>{window.removeEventListener("scroll",l)});function l(){const n=window.scrollY,e=document.querySelector(".navbar");n>300?e.classList.add("nav-scroll"):e.classList.remove("nav-scroll")}function _(){document.querySelector(".navbar .navbar-collapse").classList.toggle("show")}function o(){let n=document.querySelector(".navbar .search-form"),e=document.querySelector(".search-form .close-search");n.classList.toggle("open"),n.classList.contains("open")?e.style.display="block":e.style.display="none"}function t(n){setTimeout(()=>{var e;return(e=document.querySelector(`[data-scroll-index="${n}"]`))==null?void 0:e.scrollIntoView({smooth:!0})},700)}return(n,e)=>(a(),i("nav",T,[s("div",W,[s("a",F,[c.lightMode?(a(),i("img",X)):(a(),i("img",R))]),s("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",onClick:_},Z),s("div",Y,[s("ul",G,[s("li",J,[s("a",{class:"nav-link",href:"#0","data-scroll-nav":"0",onClick:e[0]||(e[0]=h=>t(0))},Q)]),s("li",ss,[s("a",{class:"nav-link",href:"#0","data-scroll-nav":"1",onClick:e[1]||(e[1]=h=>t(1))},es)]),s("li",as,[s("a",{class:"nav-link",href:"#0","data-scroll-nav":"2",onClick:e[2]||(e[2]=h=>t(2))},is)]),s("li",ns,[s("a",{class:"nav-link",href:"#0","data-scroll-nav":"3",onClick:e[3]||(e[3]=h=>t(3))},cs)]),s("li",rs,[s("a",{class:"nav-link",href:"#0","data-scroll-nav":"4",onClick:e[4]||(e[4]=h=>t(4))},_s)]),s("li",hs,[s("a",{class:"nav-link",href:"#0","data-scroll-nav":"6",onClick:e[5]||(e[5]=h=>t(6))},ms)]),s("li",ps,[s("a",{class:"nav-link",href:"#0","data-scroll-nav":"7",onClick:e[6]||(e[6]=h=>t(7))},us)])])]),s("div",{class:"search-form"},[fs,s("div",{class:"search-icon",onClick:o},ws)])])]))}},xs=""+globalThis.__publicAssetsURL("dark/assets/imgs/svg-assets/hi.png"),Cs={class:"header-freelancer full-height bord-thin-bottom valign position-re","data-overlay-dark":"5","data-scroll-index":"0"},ks={class:"container"},ys={class:"row"},Ls={class:"col-lg-7"},Ss={class:"caption"},zs=s("h6",{class:"fw-400 mb-15"},[p(" Hello "),s("span",{class:"icon-img-30"},[s("img",{src:xs,alt:""})]),p(" , I'm Chadwick Boseman.")],-1),Bs=s("h1",{class:"fz-60"},"A Visual Designer Specializing in UI & UX",-1),js={class:"row mt-50"},Is={class:"col-lg-3 cal-act order2"},Ms=s("div",{class:"full-width"},[s("span",null,[s("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[s("path",{d:"M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z",fill:"currentColor"})])]),s("span",{class:"full-width"},"View Works")],-1),As=s("img",{src:M,alt:"",class:"circle-star"},null,-1),Ds=s("div",{class:"col-lg-8 offset-lg-1 valign order1 md-mb50"},[s("p",{class:"fz-16"},"We appreciate your trust greatly our clients choose us & our products because they know we are the best.")],-1),Us=s("div",{class:"bg-img","data-background":"/dark/assets/imgs/freelancer/h2.png"},null,-1),ya={__name:"Header",setup(c){return $(()=>{A()}),(l,_)=>{const o=f;return a(),i("header",Cs,[s("div",ks,[s("div",ys,[s("div",Ls,[s("div",Ss,[zs,Bs,s("div",js,[s("div",Is,[d(o,{to:"/dark/portfolio-classic-grid",class:"butn-circle d-flex align-items-center text-center"},{default:r(()=>[Ms,As]),_:1})]),Ds])])])])]),Us])}}},Vs={},Hs={class:"serv-marq bord-thin-bottom"},Ps=b('<div class="container-fluid ontop sub-bg rest pt-20 pb-20"><div class="row"><div class="col-12"><div class="main-marq light-text"><div class="slide-har st1"><div class="box non-strok"><div class="item"><h4 class="d-flex align-items-center"><span>UI-UX Experience</span> <span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Web Development</span> <span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Digital Marketing</span> <span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Product Design</span> <span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Mobile Solutions</span> <span class="fz-50 ml-50 stroke icon">*</span></h4></div></div><div class="box non-strok"><div class="item"><h4 class="d-flex align-items-center"><span>UI-UX Experience</span> <span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Web Development</span> <span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Digital Marketing</span> <span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Product Design</span> <span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Mobile Solutions</span> <span class="fz-50 ml-50 stroke icon">*</span></h4></div></div></div></div></div></div></div>',1),qs=[Ps];function Es(c,l){return a(),i("section",Hs,qs)}const La=L(Vs,[["render",Es]]),C=[{id:1,image:"assets/imgs/serv-icons/0.png",title:"Brand Strategy & <BR> Art Direction",text:"Creating a higher spacing and how people move through a unique."},{id:2,image:"assets/imgs/serv-icons/1.png",title:"UX/UI Design & <BR> Website/App Design",text:"Creating a higher spacing and how people move through a unique."},{id:3,image:"assets/imgs/serv-icons/0.png",title:"Brand Strategy & <BR> Art Direction",text:"Creating a higher spacing and how people move through a unique."},{id:4,image:"assets/imgs/serv-icons/1.png",title:"UX/UI Design & <BR> Website/App Design",text:"Creating a higher spacing and how people move through a unique."}],Ns={class:"serv-box section-padding","data-scroll-index":"1"},Ts={class:"container"},Ws={class:"sec-lg-head mb-80"},Fs={class:"row"},Xs=s("div",{class:"col-lg-7"},[s("div",{class:"position-re"},[s("h6",{class:"dot-titl-non mb-10"},"Featured Services"),s("h2",{class:"fz-50"},"Our Services")])],-1),Rs={class:"col-lg-5 d-flex align-items-center"},Os={class:"full-width d-flex justify-content-end justify-end"},Zs={class:"vew-all"},Ys=s("span",null,[s("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[s("path",{d:"M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z",fill:"currentColor"})])],-1),Gs={class:"row"},Js={class:"icon-img-80"},Ks=["src"],Qs={class:"ml-60"},st={class:"mb-15"},Sa={__name:"Services",props:["lightMode"],setup(c){return(l,_)=>{const o=f;return a(),i("section",Ns,[s("div",Ts,[s("div",Ws,[s("div",Fs,[Xs,s("div",Rs,[s("div",Os,[s("div",Zs,[d(o,{to:"/dark/page-services"},{default:r(()=>[p("View All Services "),Ys]),_:1})])])])])]),s("div",Gs,[(a(!0),i(v,null,u(g(C),(t,n)=>(a(),i("div",{class:"col-lg-6",key:t.id},[s("div",{class:w(`serv-item d-flex ${n!==g(C).length-1?"mb-30":""} radius-10`)},[s("div",Js,[s("img",{src:`/${c.lightMode?"light":"dark"}/${t.image}`,alt:""},null,8,Ks)]),s("div",Qs,[s("h5",st,[d(g(D),{statement:t.title},null,8,["statement"])]),s("p",null,m(t.text),1)])],2)]))),128))])])])}}},tt=""+globalThis.__publicAssetsURL("dark/assets/imgs/freelancer/h2.png"),et=""+globalThis.__publicAssetsURL("dark/assets/imgs/svg-assets/star-shape.png"),at={class:"intro-img-parlx section-padding pb-0 sub-bg","data-scroll-index":"2"},ot=b('<div class="container"><div class="row justify-content-center"><div class="col-lg-5 valign md-hide"><h2 class="max-text" data-text=" Creative UI - UX Designer."> Creative UI - UX Designer.</h2></div><div class="col-lg-3 order2"><div class="img"><img src="'+tt+'" alt="" class="parallax" data-speed="0.01"><span class="star-shape"><img src="'+et+'" alt="" class="parallax" data-speed="-0.01"></span></div></div><div class="col-lg-3 valign order1"><div class="text-qoute"><span class="exp mb-30 main-bg">7+ Years Experience</span><p>I&#39;m Creative Independent Web Developer, and I&#39;m very passionate and dedicated to my work, Using year-over-year design approaches and the latest technologies.</p><div class="stauts mt-50"><div class="item d-flex align-items-center"><h2 class="mr-20">12k</h2><p class="fz-14">Happy Users <br> Around World</p></div></div></div></div></div></div>',1),it=[ot],za={__name:"Intro",setup(c){$(()=>(document.addEventListener("mousemove",l),()=>document.removeEventListener("mousemove",l))),y(()=>{document.removeEventListener("mousemove",l)});function l(_){let o=_.clientX,t=_.clientY;document.querySelectorAll(".parallax").forEach(e=>{let h=e.dataset.speed,z=(window.innerWidth/2-o)*h,B=(window.innerHeight/2-t)*h;e.style.transform=`translate3d(${z/10}rem, ${B/10}rem, 0)`}),requestAnimationFrame(l)}return(_,o)=>(a(),i("section",at,it))}},nt=[{id:1,image:"/dark/assets/imgs/freelancer/works/1.jpg",title:"GeekFolio Architecture",category:"Branding",date:"2023"},{id:2,image:"/dark/assets/imgs/freelancer/works/2.jpg",title:"Luxury Modern Chair",category:"Branding",date:"2023"},{id:3,image:"/dark/assets/imgs/freelancer/works/3.jpg",title:"Partiner BPO",category:"Branding",date:"2023"},{id:4,image:"/dark/assets/imgs/freelancer/works/4.jpg",title:"From our gallery",category:"Branding",date:"2023"},{id:5,image:"/dark/assets/imgs/freelancer/works/5.jpg",title:"Astra Brand Identity",category:"Branding",date:"2023"}],lt={class:"portfolio clasic section-padding","data-scroll-index":"3"},ct={class:"container"},rt={class:"sec-lg-head mb-50"},dt={class:"row"},_t=s("div",{class:"col-lg-7"},[s("div",{class:"position-re"},[s("h6",{class:"dot-titl-non mb-10"},"Portfolio"),s("h2",{class:"fz-50"},"Selected Works")])],-1),ht={class:"col-lg-5 d-flex align-items-center"},gt={class:"full-width d-flex justify-content-end justify-end"},mt={class:"vew-all"},pt=s("span",null,[s("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[s("path",{d:"M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z",fill:"currentColor"})])],-1),vt={class:"row"},ut={class:"item mt-30"},ft={class:"img"},$t=["src"],bt={class:"cont mt-30 d-flex"},wt={class:"line-height-1"},xt={class:"ml-auto"},Ct={class:"fz-14"},Ba={__name:"Portfolio",setup(c){return(l,_)=>{const o=f;return a(),i("section",lt,[s("div",ct,[s("div",rt,[s("div",dt,[_t,s("div",ht,[s("div",gt,[s("div",mt,[d(o,{to:"/dark/portfolio-classic-grid"},{default:r(()=>[p("View All Works "),pt]),_:1})])])])])]),s("div",vt,[(a(!0),i(v,null,u(g(nt),(t,n)=>(a(),i("div",{class:w(`col-lg-${n>1?"4":"6"}`),key:t.id},[s("div",ut,[s("div",ft,[s("img",{src:t.image,alt:"",class:"radius-10"},null,8,$t),d(o,{to:"/dark/project-details1",class:"tag"},{default:r(()=>[s("span",null,m(t.category),1)]),_:2},1024)]),s("div",bt,[s("div",null,[s("h6",wt,[d(o,{to:"/dark/project-details1"},{default:r(()=>[p(m(t.title),1)]),_:2},1024)])]),s("div",xt,[s("p",Ct,"© "+m(t.date),1)])])])],2))),128))])])])}}},kt={class:"skills-exp section-padding sub-bg","data-scroll-index":"4"},yt={class:"container"},Lt={class:"row"},St={class:"col-lg-6"},zt=s("div",{class:"sec-lg-head mb-80"},[s("div",{class:"position-re"},[s("h6",{class:"dot-titl-non mb-10"},"Skills & Experience"),s("h2",{class:"fz-50"},"My Experience")])],-1),Bt={class:"skill-item d-flex justify-content-between md-mb50"},jt={class:"item text-center"},It={class:"icon-img-60 m-auto"},Mt=["src"],At=s("span",{class:"mt-15"},"Figma",-1),Dt={class:"item text-center"},Ut={class:"icon-img-60 m-auto"},Vt=["src"],Ht=s("span",{class:"mt-15"},"WordPress",-1),Pt={class:"item text-center"},qt={class:"icon-img-60 m-auto"},Et=["src"],Nt=s("span",{class:"mt-15"},"Angular",-1),Tt={class:"item text-center"},Wt={class:"icon-img-60 m-auto"},Ft=["src"],Xt=s("span",{class:"mt-15"},"Webflow",-1),Rt={class:"col-lg-5 offset-lg-1 valign"},Ot={class:"exp-items full-width"},Zt={class:"item d-flex pb-30 pt-30 mb-30 bord-thin-top bord-thin-bottom"},Yt=s("div",{class:"title"},[s("h6",null,"Android Studio"),s("p",{class:"fz-12"},"Junior Product Designer")],-1),Gt={class:"date ml-auto text-right"},Jt={class:"icon"},Kt=s("i",{class:"fas fa-arrow-right"},null,-1),Qt=s("p",{class:"fz-12"},"2014 - 2015",-1),se={class:"item d-flex pb-30 mb-30 bord-thin-bottom"},te=s("div",{class:"title"},[s("h6",null,"Slack"),s("p",{class:"fz-12"},"UI/UX Designer & Developer")],-1),ee={class:"date ml-auto text-right"},ae={class:"icon"},oe=s("i",{class:"fas fa-arrow-right"},null,-1),ie=s("p",{class:"fz-12"},"2015 - 2019",-1),ne={class:"item d-flex pb-30 bord-thin-bottom"},le=s("div",{class:"title"},[s("h6",null,"Apple"),s("p",{class:"fz-12"},"ios Developer")],-1),ce={class:"date ml-auto text-right"},re={class:"icon"},de=s("i",{class:"fas fa-arrow-right"},null,-1),_e=s("p",{class:"fz-12"},"2019 - 2021",-1),ja={__name:"Skills",props:["lightMode"],setup(c){return(l,_)=>{const o=f;return a(),i("section",kt,[s("div",yt,[s("div",Lt,[s("div",St,[zt,s("div",Bt,[s("div",jt,[s("div",It,[s("img",{src:`/${c.lightMode?"light":"dark"}/assets/imgs/freelancer/skills/figma.png`,alt:""},null,8,Mt)]),At]),s("div",Dt,[s("div",Ut,[s("img",{src:`/${c.lightMode?"light":"dark"}/assets/imgs/freelancer/skills/wordpress.png`,alt:""},null,8,Vt)]),Ht]),s("div",Pt,[s("div",qt,[s("img",{src:`/${c.lightMode?"light":"dark"}/assets/imgs/freelancer/skills/angular.png`,alt:""},null,8,Et)]),Nt]),s("div",Tt,[s("div",Wt,[s("img",{src:`/${c.lightMode?"light":"dark"}/assets/imgs/freelancer/skills/webflow.png`,alt:""},null,8,Ft)]),Xt])])]),s("div",Rt,[s("div",Ot,[s("div",Zt,[Yt,s("div",Gt,[s("span",Jt,[d(o,{to:"/dark/page-about"},{default:r(()=>[Kt]),_:1})]),Qt])]),s("div",se,[te,s("div",ee,[s("span",ae,[d(o,{to:"/dark/page-about"},{default:r(()=>[oe]),_:1})]),ie])]),s("div",ne,[le,s("div",ce,[s("span",re,[d(o,{to:"/dark/page-about"},{default:r(()=>[de]),_:1})]),_e])])])])])])])}}},he=[{id:1,content:"I have been hiring people in this space for a number of years and I have never seen this level of professionalism. It really feels like you are working with a team that can get the job done.",author:{picture:"/dark/assets/imgs/testim/1.jpg",name:"Leonard Heiser",position:"Ceo"}},{id:2,content:"I have been hiring people in this space for a number of years and I have never seen this level of professionalism. It really feels like you are working with a team that can get the job done.",author:{picture:"/dark/assets/imgs/testim/2.jpg",name:"Leonard Heiser",position:"Ceo"}}],ge={class:"testim-crv section-padding","data-scroll-index":"5"},me={class:"container"},pe={class:"row"},ve=b('<div class="col-lg-4 valign"><div class="sec-lg-head md-mb80"><div class="position-re"><h6 class="dot-titl-non mb-10">What Clients Says?</h6><h2 class="fz-50">Testimonials</h2></div><div class="swiper-controls testim-controls arrow-out d-flex mt-50"><div class="swiper-button-prev"><span class="left"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.2031 10.3281L11.5781 15.9531C11.535 15.9961 11.4839 16.0303 11.4276 16.0536C11.3713 16.077 11.3109 16.089 11.25 16.089C11.1891 16.089 11.1287 16.077 11.0724 16.0536C11.0161 16.0303 10.965 15.9961 10.9219 15.9531C10.8788 15.91 10.8446 15.8588 10.8213 15.8025C10.798 15.7462 10.786 15.6859 10.786 15.6249C10.786 15.564 10.798 15.5036 10.8213 15.4473C10.8446 15.391 10.8788 15.3399 10.9219 15.2968L15.7422 10.4687H3.125C3.00068 10.4687 2.88145 10.4193 2.79354 10.3314C2.70564 10.2435 2.65625 10.1242 2.65625 9.99993C2.65625 9.87561 2.70564 9.75638 2.79354 9.66847C2.88145 9.58056 3.00068 9.53118 3.125 9.53118H15.7422L10.9219 4.70305C10.8349 4.61603 10.786 4.498 10.786 4.37493C10.786 4.25186 10.8349 4.13383 10.9219 4.0468C11.0089 3.95978 11.1269 3.91089 11.25 3.91089C11.3731 3.91089 11.4911 3.95978 11.5781 4.0468L17.2031 9.6718C17.2476 9.71412 17.2829 9.76503 17.3071 9.82143C17.3313 9.87784 17.3438 9.93856 17.3438 9.99993C17.3438 10.0613 17.3313 10.122 17.3071 10.1784C17.2829 10.2348 17.2476 10.2857 17.2031 10.3281Z" fill="currentColor"></path></svg></span></div><div class="swiper-button-next ml-50"><span class="right"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.2031 10.3281L11.5781 15.9531C11.535 15.9961 11.4839 16.0303 11.4276 16.0536C11.3713 16.077 11.3109 16.089 11.25 16.089C11.1891 16.089 11.1287 16.077 11.0724 16.0536C11.0161 16.0303 10.965 15.9961 10.9219 15.9531C10.8788 15.91 10.8446 15.8588 10.8213 15.8025C10.798 15.7462 10.786 15.6859 10.786 15.6249C10.786 15.564 10.798 15.5036 10.8213 15.4473C10.8446 15.391 10.8788 15.3399 10.9219 15.2968L15.7422 10.4687H3.125C3.00068 10.4687 2.88145 10.4193 2.79354 10.3314C2.70564 10.2435 2.65625 10.1242 2.65625 9.99993C2.65625 9.87561 2.70564 9.75638 2.79354 9.66847C2.88145 9.58056 3.00068 9.53118 3.125 9.53118H15.7422L10.9219 4.70305C10.8349 4.61603 10.786 4.498 10.786 4.37493C10.786 4.25186 10.8349 4.13383 10.9219 4.0468C11.0089 3.95978 11.1269 3.91089 11.25 3.91089C11.3731 3.91089 11.4911 3.95978 11.5781 4.0468L17.2031 9.6718C17.2476 9.71412 17.2829 9.76503 17.3071 9.82143C17.3313 9.87784 17.3438 9.93856 17.3438 9.99993C17.3438 10.0613 17.3313 10.122 17.3071 10.1784C17.2829 10.2348 17.2476 10.2857 17.2031 10.3281Z" fill="currentColor"></path></svg></span></div></div></div></div>',1),ue={class:"col-lg-8"},fe={class:"testim-swiper2"},$e={class:"item"},be={class:"cont mb-40"},we=s("div",{class:"rate-stars mb-20 fz-12"},[s("span",{class:"rate main-color"},[s("i",{class:"fas fa-star"}),s("i",{class:"fas fa-star"}),s("i",{class:"fas fa-star"}),s("i",{class:"fas fa-star"}),s("i",{class:"fas fa-star"})])],-1),xe={class:"fw-400"},Ce={class:"d-flex align-items-center"},ke={class:"img circle-60"},ye=["src"],Le={class:"ml-30"},Se={class:"info"},ze={class:"fz-16"},Be={class:"opacity-7 sub-title"},Ia={__name:"Testimonials",setup(c){const l={modules:[P,q,E],spaceBetween:30,speed:1e3,slidesPerView:2,loop:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".testim-controls .swiper-button-next",prevEl:".testim-controls .swiper-button-prev"},breakpoints:{0:{slidesPerView:1},640:{slidesPerView:1},768:{slidesPerView:2},1024:{slidesPerView:2}}};return(_,o)=>{const t=H;return a(),i("section",ge,[s("div",me,[s("div",pe,[ve,s("div",ue,[s("div",fe,[d(t,null,{default:r(()=>[d(g(U),j(l,{id:"content-carousel-container-unq-testim",class:"swiper-container"}),{default:r(()=>[(a(!0),i(v,null,u(g(he),n=>(a(),S(g(V),{key:n.id},{default:r(()=>[s("div",$e,[s("div",be,[we,s("p",xe,m(n.content),1)]),s("div",Ce,[s("div",null,[s("div",ke,[s("img",{src:n.author.picture,alt:"",class:"circle-img"},null,8,ye)])]),s("div",Le,[s("div",Se,[s("h6",ze,m(n.author.name),1),s("span",Be,m(n.author.position),1)])])])])]),_:2},1024))),128))]),_:1},16)]),_:1})])])])])])}}},k=[{id:1,title:"Free advertising for your online business.",image:"/dark/assets/imgs/sass-img/blog/1.jpg",date:"August 6, 2022",tags:["Marketing","Design"]},{id:2,title:"Business meeting 2023 in San Francisco.",image:"/dark/assets/imgs/sass-img/blog/2.jpg",date:"August 6, 2022",tags:["Marketing","Design"]}],je={class:"blog-list-half crev section-padding sub-bg","data-scroll-index":"6"},Ie={class:"container"},Me={class:"sec-lg-head mb-80"},Ae={class:"row"},De=s("div",{class:"col-lg-7"},[s("h6",{class:"dot-titl-non mb-10"},"Our Blog"),s("h2",{class:"fz-50"},"Latest News")],-1),Ue={class:"col-lg-5 d-flex align-items-center"},Ve={class:"full-width d-flex justify-content-end justify-end"},He={class:"vew-all"},Pe=s("span",null,[s("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[s("path",{d:"M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z",fill:"currentColor"})])],-1),qe={class:"row"},Ee={class:"row rest"},Ne={class:"col-md-6"},Te={class:"img"},We=["src"],Fe={class:"col-md-6 valign"},Xe={class:"cont"},Re={class:"date fz-12 ls1 text-u opacity-7 mb-15"},Oe={class:"tags colorbg mt-15"},Ma={__name:"Blog",setup(c){return(l,_)=>{const o=f;return a(),i("section",je,[s("div",Ie,[s("div",Me,[s("div",Ae,[De,s("div",Ue,[s("div",Ve,[s("div",He,[d(o,{to:"/dark/blog-half-img"},{default:r(()=>[p("View All Our News "),Pe]),_:1})])])])])]),s("div",qe,[(a(!0),i(v,null,u(g(k),(t,n)=>(a(),i("div",{class:"col-lg-6",key:t.id},[s("div",{class:w(`item ${n!==g(k).length-1?"md-mb80":""}`)},[s("div",Ee,[s("div",Ne,[s("div",Te,[s("img",{src:t.image,alt:""},null,8,We)])]),s("div",Fe,[s("div",Xe,[s("span",Re,m(t.date),1),s("h5",null,[d(o,{to:"/dark/blog-details"},{default:r(()=>[p(m(t.title),1)]),_:2},1024)]),s("div",Oe,[(a(!0),i(v,null,u(t.tags,(e,h)=>(a(),S(o,{to:"/dark/blog-half-img",key:h,class:"me-1"},{default:r(()=>[p(m(e),1)]),_:2},1024))),128))])])])])],2)]))),128))])])])}}},Ze={},Ye={class:"contact-crev section-padding","data-scroll-index":"7"},Ge=s("div",{class:"container"},[s("div",{class:"row"},[s("div",{class:"col-lg-5"},[s("div",{class:"sec-lg-head md-mb80"},[s("h6",{class:"dot-titl-non mb-10"},"Get In Touch"),s("h2",{class:"fz-50"},"Let's make your brand brilliant!"),s("p",{class:"fz-15 mt-10"},"If you would like to work with us or just want to get in touch, we’d love to hear from you!"),s("div",{class:"phone fz-30 fw-600 mt-30 underline"},[s("a",{href:"#0"},"+1 840 841 25 69")]),s("ul",{class:"rest social-text d-flex mt-60"},[s("li",{class:"mr-30"},[s("a",{href:"#0",class:"hover-this"},[s("span",{class:"hover-anim"},"Facebook")])]),s("li",{class:"mr-30"},[s("a",{href:"#0",class:"hover-this"},[s("span",{class:"hover-anim"},"Twitter")])]),s("li",{class:"mr-30"},[s("a",{href:"#0",class:"hover-this"},[s("span",{class:"hover-anim"},"LinkedIn")])]),s("li",null,[s("a",{href:"#0",class:"hover-this"},[s("span",{class:"hover-anim"},"Instagram")])])])])]),s("div",{class:"col-lg-6 offset-lg-1 valign"},[s("div",{class:"full-width"},[s("form",{id:"contact-form",method:"post",action:"contact.php"},[s("div",{class:"messages"}),s("div",{class:"controls row"},[s("div",{class:"col-lg-6"},[s("div",{class:"form-group mb-30"},[s("input",{id:"form_name",type:"text",name:"name",placeholder:"Name",required:""})])]),s("div",{class:"col-lg-6"},[s("div",{class:"form-group mb-30"},[s("input",{id:"form_email",type:"email",name:"email",placeholder:"Email",required:""})])]),s("div",{class:"col-12"},[s("div",{class:"form-group mb-30"},[s("input",{id:"form_subject",type:"text",name:"subject",placeholder:"Subject"})])]),s("div",{class:"col-12"},[s("div",{class:"form-group"},[s("textarea",{id:"form_message",name:"message",placeholder:"Message",rows:"4",required:""})]),s("div",{class:"mt-30"},[s("button",{type:"submit",class:"butn butn-full butn-bord radius-30"},[s("span",{class:"text"},"Let's Talk")])])])])])])])])],-1),Je=[Ge];function Ke(c,l){return a(),i("section",Ye,Je)}const Aa=L(Ze,[["render",Ke]]),Qe={class:"sub-bg"},sa={class:"sub-footer pt-40 pb-40 bord-thin-top"},ta={class:"container"},ea={class:"row"},aa={class:"col-lg-4"},oa={class:"logo"},ia={href:"#0"},na=["src"],la={class:"col-lg-8"},ca={class:"copyright d-flex"},ra={class:"ml-auto"},da={class:"fz-13"},_a={class:"underline"},ha=["href"],Da={__name:"Footer",props:["lightMode"],setup(c){return(l,_)=>(a(),i("footer",Qe,[s("div",sa,[s("div",ta,[s("div",ea,[s("div",aa,[s("div",oa,[s("a",ia,[s("img",{src:`/dark/assets/imgs/logo-${c.lightMode?"dark":"light"}.png`,alt:""},null,8,na)])])]),s("div",la,[s("div",ca,[s("div",ra,[s("p",da,[p(" © 2023 Geekfolio is Proudly Powered by "),s("span",_a,[s("a",{href:g(x).author_link,target:"_blank"},m(g(x).author),9,ha)])])])])])])])])]))}};export{ka as _,ya as a,La as b,Sa as c,za as d,Ba as e,ja as f,Ia as g,Ma as h,Aa as i,Da as j};