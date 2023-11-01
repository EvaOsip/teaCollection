"use strict";(self.webpackChunkAngularControl22=self.webpackChunkAngularControl22||[]).push([[534],{1534:(y,p,o)=>{o.r(p),o.d(p,{ProductsModule:()=>P});var d=o(6814),c=o(2098),t=o(9468),a=o(7942),m=o(9862);const g=function(e){return["/products",e]};let f=(()=>{class e{constructor(){this.product={description:"",id:0,image:"",price:0,title:""}}static#t=this.\u0275fac=function(r){return new(r||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-product-card"]],inputs:{product:"product"},decls:7,vars:5,consts:[[1,"card","d-flex","justify-content-center","align-items-center"],["alt","\u0427\u0430\u0439",1,"product-card-img","card-img-top","mb-1",3,"src"],[1,"card-body","text-center"],[1,"card-title","mb-2","fw-bolder"],[1,"btn","btn-primary","px-5","mb-1",3,"routerLink"]],template:function(r,s){1&r&&(t.TgZ(0,"div",0),t._UZ(1,"img",1),t.TgZ(2,"div",2)(3,"h5",3),t._uU(4),t.qZA(),t.TgZ(5,"a",4),t._uU(6,"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"),t.qZA()()()),2&r&&(t.xp6(1),t.s9C("src",s.product.image,t.LSH),t.xp6(3),t.Oqu(s.product.title),t.xp6(1),t.Q6J("routerLink",t.VKq(3,g,s.product.id)))},dependencies:[c.rH]})}return e})();function b(e,h){1&e&&t._UZ(0,"app-product-card",7),2&e&&t.Q6J("product",h.$implicit)}function v(e,h){1&e&&(t.TgZ(0,"div",8),t._UZ(1,"div",9),t.qZA())}const x=[{path:"",component:(()=>{class e{constructor(i,r,s,u){this.productService=i,this.http=r,this.activatedRoute=s,this.router=u,this.loading=!1,this.subscriptionParams=null,this.subscription=null,this.subject=null,this.products=[]}ngOnInit(){sessionStorage.setItem("param","true"),this.loading=!0;const i=document.getElementById("search-title");this.subscriptionParams=this.activatedRoute.queryParams.subscribe(r=>{this.subject=r.search,this.subject?this.subscription=this.productService.searchTea(this.subject).subscribe({next:s=>{this.loading=!1;const u=[];if(0===s.length)i.innerText="\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e",this.products=[];else{i.innerText='\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u043f\u043e\u0438\u0441\u043a\u0430 \u043f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443 "'+this.subject+'"';for(let n=0;n<=100;n++)s[n]&&(u.push(s[n]),this.products=u)}},error:s=>{console.log(s),this.router.navigate(["/"])}}):(i.innerText="",this.showAllProducts())})}showAllProducts(){this.subscription=this.productService.getProducts().subscribe({next:i=>{this.loading=!1,this.products=i},error:i=>{console.log(i),this.router.navigate(["/"])}})}ngOnDestroy(){this.subscription?.unsubscribe(),this.subscriptionParams?.unsubscribe()}static#t=this.\u0275fac=function(r){return new(r||e)(t.Y36(a.M),t.Y36(m.eN),t.Y36(c.gz),t.Y36(c.F0))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-products"]],decls:8,vars:2,consts:[[1,"products","text-black"],[1,"container","text-center"],["id","products",1,"products-title","fw-bolder","mb-5","text-black"],["id","search-title",1,"mb-3","text-black"],[1,"product-items","row","d-flex","justify-content-center","align-items-center","gap-2","mb-4"],["class","product-item d-flex justify-content-center align-items-center","style","width: 320px",3,"product",4,"ngFor","ngForOf"],["class","loader-bg",4,"ngIf"],[1,"product-item","d-flex","justify-content-center","align-items-center",2,"width","320px",3,"product"],[1,"loader-bg"],[1,"loader"]],template:function(r,s){1&r&&(t.TgZ(0,"section",0)(1,"div",1)(2,"h2",2),t._uU(3,"\u041d\u0430\u0448\u0438 \u0447\u0430\u0439\u043d\u044b\u0435 \u043a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u0438"),t.qZA(),t._UZ(4,"h5",3),t.TgZ(5,"div",4),t.YNc(6,b,1,1,"app-product-card",5),t.qZA(),t.YNc(7,v,2,0,"div",6),t.qZA()()),2&r&&(t.xp6(6),t.Q6J("ngForOf",s.products),t.xp6(1),t.Q6J("ngIf",s.loading))},dependencies:[d.sg,d.O5,f]})}return e})()},{path:":id",component:(()=>{class e{constructor(i,r,s){this.activatedRoute=i,this.productService=r,this.router=s,this.product={description:"",id:0,image:"",price:0,title:""}}ngOnInit(){this.activatedRoute.params.subscribe(i=>{i.id&&this.productService.getProduct(+i.id).subscribe({next:r=>{this.product=r,localStorage.removeItem("teaProduct"),localStorage.setItem("teaProduct",this.product.title)},error:r=>{this.router.navigate(["/"])}})})}static#t=this.\u0275fac=function(r){return new(r||e)(t.Y36(c.gz),t.Y36(a.M),t.Y36(c.F0))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-product"]],decls:14,vars:5,consts:[[1,"container","text-center"],[1,"products-title","fw-bolder","pb-5","pt-5","text-black"],[1,"product-container","d-flex"],[1,"product-tea"],[1,"product-image"],["alt","\u0427\u0430\u0439",1,"card-img-top","mb-1",3,"src"],[1,"btn","btn-primary","px-5","mt-3",3,"routerLink"],[1,"product-description","py-2","px-5"]],template:function(r,s){1&r&&(t.TgZ(0,"section")(1,"div",0)(2,"h2",1),t._uU(3),t.qZA(),t.TgZ(4,"div",2)(5,"div",3)(6,"div",4),t._UZ(7,"img",5),t.qZA(),t.TgZ(8,"div"),t._uU(9),t.qZA(),t.TgZ(10,"a",6),t._uU(11,"\u041a\u0443\u043f\u0438\u0442\u044c"),t.qZA()(),t.TgZ(12,"p",7),t._uU(13),t.qZA()()()()),2&r&&(t.xp6(3),t.Oqu(s.product.title),t.xp6(4),t.s9C("src",s.product.image,t.LSH),t.xp6(2),t.hij(" \u0426\u0435\u043d\u0430: ",s.product.price," / 100 \u0433\u0440. "),t.xp6(1),t.Q6J("routerLink","/order"),t.xp6(3),t.Oqu(s.product.description))},dependencies:[c.rH]})}return e})()}];let l=(()=>{class e{static#t=this.\u0275fac=function(r){return new(r||e)};static#e=this.\u0275mod=t.oAB({type:e});static#r=this.\u0275inj=t.cJS({imports:[c.Bz.forChild(x),c.Bz]})}return e})();var Z=o(6208);let P=(()=>{class e{static#t=this.\u0275fac=function(r){return new(r||e)};static#e=this.\u0275mod=t.oAB({type:e});static#r=this.\u0275inj=t.cJS({imports:[d.ez,l,Z.m,c.Bz,l]})}return e})()}}]);