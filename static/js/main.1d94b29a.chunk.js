(this["webpackJsonpmercedes-baking-studio"]=this["webpackJsonpmercedes-baking-studio"]||[]).push([[0],{17:function(e,t,a){},37:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var r=a(2),s=a.n(r),i=a(21),n=a.n(i),c=a(30),l=a(3),o=a(4),d=(a(37),a(22)),j=a(23),m=a(13),b=a(32),h=a(31),k=a(9),p=a(1),g=function(e){var t=e.renderOrder,a=e.order;return Object(p.jsxs)("div",{className:"order-list-item",id:"order-list-item",children:[Object(p.jsxs)("div",{className:"order-item-first-line",children:[Object(p.jsx)("button",{onClick:function(){for(var e,r=JSON.parse(localStorage.getItem("Order")),s=0;0<=r.length;s++)if(r[s].name===a.name){e=s;break}r.splice(e,1),localStorage.setItem("Order",JSON.stringify(r)),t()},className:"order-trash-button",children:Object(p.jsx)(k.d,{className:"order-trash"})}),Object(p.jsx)("div",{className:"order-name",children:a.name})]}),Object(p.jsxs)("div",{className:"order-price",children:[Object(p.jsxs)("div",{className:"order-price-left",children:[a.priceValue," \u20ac x ",a.quantity," ="," "]}),Object(p.jsxs)("div",{className:"order-price-right",children:[a.priceValue*a.quantity," \u20ac"]})]}),Object(p.jsx)("div",{className:"order-line"})]})},u=(a(39),a(40),a(24)),v=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(e){var r;return Object(d.a)(this,a),(r=t.call(this,e)).renderOrder=r.renderOrder.bind(Object(m.a)(r)),r.toggleMenu=r.toggleMenu.bind(Object(m.a)(r)),r.state={showMenu:!1},r}return Object(j.a)(a,[{key:"renderOrder",value:function(){var e=JSON.parse(localStorage.getItem("Order"));this.props.updateOrders(e)}},{key:"toggleMenu",value:function(){this.renderOrder(),this.setState({showMenu:!this.state.showMenu})}},{key:"render",value:function(){var e=this,t=this.props.orders.reduce((function(e,t){return e+t.priceValue*t.quantity}),0),a=this.props.orders.map(O).join("")+"Summa: "+t+" \u20ac",r=this.props.orders.length;return Object(p.jsx)("div",{children:Object(p.jsx)("div",{className:"order-container",children:Object(p.jsxs)("div",{className:"order-button-container",children:[Object(p.jsx)("div",{className:"order-counter",children:r}),Object(p.jsx)("button",{type:"button",onClick:this.toggleMenu,className:"order-button",children:Object(p.jsx)(u.a,{className:this.state.showMenu?"order-icon-open order-icon":"order-icon"})}),this.state.showMenu?Object(p.jsxs)("div",{id:"myOrder",className:"order-content show-order",children:[Object(p.jsx)("div",{className:"order-list",id:"order-list",children:this.props.orders.map((function(t,a){return Object(p.jsx)(g,{renderOrder:e.renderOrder,order:t},a)}))}),Object(p.jsxs)("div",{className:"order-sum",id:"order-sum",children:["Summa: ",t," \u20ac"]}),Object(p.jsx)("div",{className:"order-line"}),Object(p.jsxs)("div",{className:"order-copy",id:"order-copy",children:[Object(p.jsxs)("button",{onClick:function(){return e=a,void navigator.clipboard.writeText(e);var e},children:["Tryck h\xe4r f\xf6r att kopiera ",Object(p.jsx)("br",{})," dina anteckningar."]}),Object(p.jsxs)("p",{children:["Skicka den kopiera texten via"," ",Object(p.jsx)("a",{href:"mailto:mercedesstudioaland@gmail.com",target:"blank",rel:"noopener",children:"mail"})," ","eller"," ",Object(p.jsx)("a",{href:"https://m.me/mu.winquist",target:"blank",rel:"noopener",children:"messenger"})," ","s\xe5 tar vi hand om din best\xe4llning."]}),Object(p.jsx)("div",{className:"order-line"}),Object(p.jsxs)("p",{children:["Om det \xe4r tomt i dina anteckningar s\xe5 kan du g\xe5 till"," ",Object(p.jsx)(l.c,{exact:!0,activeClassName:"active",to:"/Products",children:"produkter"}),"."]})]})]}):null]})})})}}]),a}(s.a.Component);function O(e){var t="",a=e.name+"\n";t=t.concat(a);var r=e.priceValue+" \u20ac x "+e.quantity+" = ";t=t.concat(r);var s=e.priceValue*e.quantity+" \u20ac\n";return t=(t=t.concat(s)).concat("--------\n")}var x=a.p+"static/media/logo.95bd7cbf.png",f=a.p+"static/media/wave.cb99a988.svg",N=function(e){function t(){document.getElementById("myDropdown").classList.contains("show-menu")?document.getElementsByClassName("button-container")[0].classList.add("button-in-focus"):document.getElementsByClassName("button-container")[0].classList.remove("button-in-focus")}return window.onclick=function(e){if(!e.target.matches(".drop-button-part")){var a=document.getElementsByClassName("dropdown-content")[0];a.classList.contains("show-menu")&&(a.classList.remove("show-menu"),t())}},Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{className:"navigation-container",children:[Object(p.jsx)(l.c,{exact:!0,activeClassName:"active",to:"/",className:"logo",children:Object(p.jsx)("img",{src:x,alt:"logo for mercedes baking studio"})}),Object(p.jsx)(v,{updateOrders:e.updateOrders,orders:e.orders}),Object(p.jsxs)("div",{className:"nav-mobile",children:[Object(p.jsx)("button",{type:"button",onClick:function(){document.getElementById("myDropdown").classList.toggle("show-menu"),t()},className:"drop-button drop-button-part",children:Object(p.jsxs)("div",{className:"button-container ",children:[Object(p.jsx)("div",{className:"button-line line1"}),Object(p.jsx)("div",{className:"button-line line2"}),Object(p.jsx)("div",{className:"button-line line3"})]})}),Object(p.jsxs)("div",{id:"myDropdown",className:"dropdown-content",children:[Object(p.jsx)(l.c,{exact:!0,activeClassName:"active",to:"/",children:"HEM"}),Object(p.jsx)(l.c,{exact:!0,activeClassName:"active",to:"/Products",children:"PRODUKTER"}),Object(p.jsx)(l.c,{exact:!0,activeClassName:"active",to:"/About",children:"OM OSS"}),Object(p.jsx)(l.c,{exact:!0,activeClassName:"active",to:"/Contact",children:"KONTAKT"})]})]}),Object(p.jsxs)("div",{className:"nav-desktop",children:[Object(p.jsx)(l.c,{exact:!0,activeClassName:"active",to:"/",children:"HEM"}),Object(p.jsx)(l.c,{exact:!0,activeClassName:"active",to:"/Products",children:"PRODUKTER"}),Object(p.jsx)(l.c,{exact:!0,activeClassName:"active",to:"/About",children:"OM OSS"}),Object(p.jsx)(l.c,{exact:!0,activeClassName:"active",to:"/Contact",children:"KONTAKT"})]})]}),Object(p.jsxs)("div",{className:"nav-wave",children:[Object(p.jsx)("img",{src:f,alt:"chocolate wave"}),Object(p.jsx)("div",{className:"brown-block"})]})]})},y=(a(46),a(26)),w=a(11),C=function(){return Object(p.jsx)("div",{children:Object(p.jsxs)("div",{className:"footer ",children:[Object(p.jsx)("div",{className:"footer-green-product-info",children:Object(p.jsx)("p",{children:"Alla v\xe5ra produkter \xe4r fria fr\xe5n mj\xf6lk, gluten och \xe4gg - l\xe4mpliga f\xf6r veganer."})}),Object(p.jsxs)("div",{className:"footer-information",children:[Object(p.jsx)("p",{children:" Mercedes Studio"}),Object(p.jsx)("p",{children:"Lugn och Ro AB"}),Object(p.jsxs)("p",{children:[Object(p.jsx)(w.a,{className:"contact-fonts-phone"})," +358 40 539 6699"]}),Object(p.jsxs)("a",{href:"mailto:mercedesstudioaland@gmail.com",target:"blank",rel:"noopener",children:[Object(p.jsx)(y.a,{className:"contact-fonts-mail"}),"mercedesstudioaland@gmail.com"]}),Object(p.jsxs)("p",{children:[" ",Object(p.jsx)("a",{href:"https://www.facebook.com/mu.winquist",target:"blank",rel:"noopener",children:Object(p.jsx)(k.a,{className:"social-media-icons"})})," ","|"," ",Object(p.jsx)("a",{href:"https://www.instagram.com/mercedesstudioaland/?hl=en",target:"blank",rel:"noopener",children:Object(p.jsx)(k.c,{className:"social-media-icons"})})," "]})]}),Object(p.jsx)("div",{className:"created",children:Object(p.jsx)("a",{href:"https://theoddesy.github.io/HomePage/",target:"blank",rel:"noopener",children:"Who made this page?"})})]})})},S=(a(47),a.p+"static/media/background.69c2768b.jpeg"),M=function(){return Object(p.jsx)("div",{class:"test-main",children:Object(p.jsxs)("div",{className:"intro",children:[Object(p.jsxs)("div",{className:"intro-picture-wrapper",children:[Object(p.jsx)("img",{src:S,alt:"assorted products",className:"intro-mobile"}),Object(p.jsx)("img",{src:S,alt:"assorted products",className:"intro-desktop"}),Object(p.jsxs)("div",{className:"description intro-desktop",children:[Object(p.jsx)("h1",{children:" Mercedes Studio "}),Object(p.jsx)("h2",{children:"Glutenfritt & veganskt mathantverk"}),Object(p.jsx)("p",{children:"Livstil eller n\xf6dv\xe4ndighet, det spelar ingen roll. Vi skapar bland annat godbitar av choklad som \xe4r fria fr\xe5n mj\xf6lk, gluten och \xe4gg. Med mindre m\xe4ngd socker och massor med ekologiska ingredienser s\xe5 \xe4r de h\xe4r l\xe4ckerheterna l\xe4mpliga f\xf6r veganer och m\xe5nga till."}),Object(p.jsxs)("p",{children:["Ta en titt p\xe5 v\xe5ra ",Object(p.jsx)(l.b,{to:"/Products",children:"produkter"})," och"," ",Object(p.jsx)(l.b,{to:"/Contact",children:"kontakta"})," oss s\xe5 hj\xe4lper vi till!"]})]})]}),Object(p.jsxs)("div",{className:"description intro-mobile",children:[Object(p.jsx)("h1",{children:" Mercedes Studio "}),Object(p.jsx)("h2",{children:"Glutenfritt & veganskt mathantverk"}),Object(p.jsx)("p",{children:"Livstil eller n\xf6dv\xe4ndighet, det spelar ingen roll. Vi skapar bland annat godbitar av choklad som \xe4r fria fr\xe5n mj\xf6lk, gluten och \xe4gg. Med mindre m\xe4ngd socker och massor med ekologiska ingredienser s\xe5 \xe4r de h\xe4r l\xe4ckerheterna l\xe4mpliga f\xf6r veganer och m\xe5nga till."}),Object(p.jsxs)("p",{children:["Ta en titt p\xe5 v\xe5ra ",Object(p.jsx)(l.b,{to:"/Products",children:"produkter"})," och"," ",Object(p.jsx)(l.b,{to:"/Contact",children:"kontakta"})," oss s\xe5 hj\xe4lper vi till!"]})]})]})})},V=(a(48),a(49),function(e){var t=e.product,a=e.updateOrders;return Object(p.jsx)("div",{children:Object(p.jsx)("div",{className:"product-wrapper",children:Object(p.jsxs)("div",{className:"product-image-wrapper",children:[Object(p.jsx)("img",{src:t.image,alt:"assorted product"}),Object(p.jsxs)("div",{className:"product-information-wrapper",children:[Object(p.jsx)("h3",{children:t.name}),Object(p.jsx)("div",{className:"description",children:t.description}),Object(p.jsx)("div",{className:"price",children:t.price}),Object(p.jsxs)("div",{class:"ingredients-wrapper",children:[Object(p.jsx)("button",{type:"button",class:"hover-button",children:"Ingredienser"}),Object(p.jsx)("div",{class:"show-ingredients",children:Object(p.jsx)("p",{children:t.ingredients})})]})]}),Object(p.jsx)("button",{onClick:function(){for(var e=JSON.parse(localStorage.getItem("Order")),r=0;r<=e.length;r++){var s=void 0;try{s=e[r].name}catch(i){}if(s===t.name)return e[r].quantity+=1,localStorage.setItem("Order",JSON.stringify(e)),void a(e)}!function(e){var a={name:t.name,priceValue:t.priceValue,quantity:1};e.push(a),localStorage.setItem("Order",JSON.stringify(e))}(e),a(e)},id:"add-button",className:"add-button",children:Object(p.jsx)(w.b,{})})]})})})}),E=a.p+"static/media/platta.4340ad8c.jpg",K=[{id:1,name:'"Mj\xf6lkchoklad" med lakrits',price:"1st f\xf6r 8.50 \u20ac",priceValue:8.5,description:'Ljuvlig "mj\xf6lkchoklad" med en klick lakritskolakr\xe4m i varje hj\xe4rta. N\xf6tfri.',ingredients:"Ca. 90g. Kakaomassa*, kakaosm\xf6r*, socker*, glykos, sirap*, matsoda, kokosolja*, kokoskr\xe4m*, r\xf6rsocker*, kokos*, vanilj*, lakritspulver, havssalt, (*)Ekologiska ingredienser.",image:E},{id:2,name:'"Mj\xf6lkchoklad" med karamell',price:"1st f\xf6r 8.50 \u20ac",priceValue:8.5,description:'Ljuvlig "mj\xf6lkchoklad" med en klick kolakr\xe4m i varje hj\xe4rta. N\xf6tfri.',ingredients:"Ca. 90g. Kakaomassa*, kakaosm\xf6r*, socker*, glykos, sirap*, kokosolja*, kokoskr\xe4m*, havssalt,  kakaosm\xf6r*, matsoda, r\xf6rsocker*, kokos*,  vanilj*. (*)Ekologiska ingredienser.",image:E},{id:3,name:"Crunchy road",price:"1st f\xf6r 4.00 \u20ac",priceValue:4,description:'V\xe5r finaste 52% "mj\xf6lkchoklad" blandad med h\xe4lsosamma eko bovete flingor, j\xe4tteknaprigt! N\xf6tfri.',ingredients:"Ca. 50g. Kakaomassa*, kakaosm\xf6r*, kokos*, r\xf6rsocker*, bovete flingor*. (*)Ekologiska ingredienser.",image:a.p+"static/media/crunchyRoad.d8b08372.jpg"},{id:4,name:"Cappuccino",price:"6st f\xf6r 4.00 \u20ac",priceValue:4,description:'Kr\xe4mig "vit" choklad och finaste Valencia mandlar blandade med starka kaffe prickar.',ingredients:"Ca. 30g. Mandel*, socker*, kakaosm\xf6r*, vanilj*, kokos*, r\xf6rsocker*, kaffe, matsoda, havssalt. (*)Ekologiska ingredienser.",image:a.p+"static/media/capuccino.eee68810.jpg"},{id:5,name:"Karamellhj\xe4rta",price:"2st f\xf6r 7.00 \u20ac",priceValue:7,description:'"Mj\xf6lkchoklad" hj\xe4rta fyllt med kr\xe4mig karamell och knapriga sm\xe5kakor. N\xf6tfri.',ingredients:"Ca. 60g. Glutenfri mj\xf6lmix, majsst\xe4rkelse, socker*, Carlshamn margarin, pumpafr\xf6n*, havssalt, bakpulver, dadelsirap, \xe4ppels\xe5s*, linfr\xf6*, kakaosm\xf6r*, kokos*, kakaomassa*, r\xf6rsocker*, kokosolja*, vanilj*, glykos, sirap*, kokoskr\xe4m*. (*)Ekologiska ingredienser.",image:a.p+"static/media/karamellhj\xe4rta.278ee4e7.jpg"},{id:6,name:"Mandel gianduja",price:"2st f\xf6r 6.00 \u20ac",priceValue:6,description:"Finaste Valencia mandlar och tv\xe5 toner choklad resulterar i en mycket tillfredst\xe4llande godbit.",ingredients:"Ca. 60g. Mandel*, socker*, sirap*, kakaomassa*, kakaosm\xf6r*, glykos, vanilj*, havssalt, kokos*, r\xf6rsocker*, risst\xe4rkelse*, solroslecitin*. kan inneh\xe5lla sp\xe5r av hasseln\xf6tter. (*)Ekologiska ingredienser.",image:a.p+"static/media/mandelGianduja.f8b69961.jpg"},{id:7,name:"Lakritsgottis",price:"3st f\xf6r 6.00 \u20ac",priceValue:6,description:"Tv\xe5 sm\xe5 chokladplattor fyllda med en h\xe4rlig lakritskolakr\xe4m och rullade i lakritspulver och salmiakpulver. N\xf6tfri.",ingredients:"Ca. 60g. Kakaomassa*, kakaosm\xf6r*, lakritspulver, socker*, glykos, sirap*, kokoskr\xe4m*, kokosolja*, matsoda, havssalt, r\xf6rsocker*, kokos*, salmiakpulver, vanilj*. (*)Ekologiska ingredienser.",image:a.p+"static/media/lakritsgotties.a62213f2.jpg"},{id:8,name:'"Vit" choklad med lakrits',price:"1st f\xf6r 5.00 \u20ac",priceValue:5,description:'Kr\xe4mig "vit" choklad med mycket lakritssmak och toner av karamell. En favorit bland lakrits\xe4lskare. Inneh\xe5ller mandel.',ingredients:"Ca. 50g. Kakaosm\xf6r*, lakritspulver, r\xf6rsocker*, kokos*, matsoda, havssalt, lakritsgranulat, mandel. (*)Ekologiska ingredienser.",image:a.p+"static/media/vitChokladLakrits.9c4ec9ea.jpg"},{id:9,name:'"Vit" choklad & jordgubbssymfoni',price:"1st f\xf6r 8.00 \u20ac",priceValue:8,description:'Kr\xe4mig "vit" choklad laddat upp med massor av frystorkade jordgubbar. Fr\xe4sch och fruktig. N\xf6tfri.',ingredients:"Ca. 80g. Kakaosm\xf6r*, r\xf6rsocker*, kokos*, glykos, vanilj*, frystorkade jordgubbar, hallon och bl\xe5b\xe4r. (*)Ekologiska ingredienser.",image:a.p+"static/media/vitChokladJordgubb.46abbc4c.jpg"},{id:10,name:"Polvorones",price:"4st f\xf6r 4.00 \u20ac",priceValue:4,description:"Fr\xe5n polvo, det spanska ordet f\xf6r pulver. Det \xe4r en mjuk och mycket smulig shortbread fr\xe5n Spanien. V\xe5ra polvorones \xe4r baserade p\xe5 mandel, olivolja och krossade kakaob\xf6nor.",ingredients:"Ca. 80g. Mandel, glutenfri mj\xf6lmix, bovetemj\xf6l*, socker*, olivolja, kanel, havssalt, krossade kakaob\xf6nor*. (*)Ekologiska ingredienser.",image:a.p+"static/media/polvorones.c46d916a.jpg"},{id:11,name:'"Mj\xf6lkchoklad" med mint',price:"1st f\xf6r 5.00 \u20ac",priceValue:5,description:'V\xe5r kr\xe4miga "mj\xf6lkchoklad" med en ljuvig mint fyllning.',ingredients:"Ca. 40g. Kakaomassa, kakaosm\xf6r*, r\xf6rsocker*, kokos*, vanilj*, invertsocker, mintolja. (*)Ekologiska ingredienser.",image:a.p+"static/media/mjolkchokladMint.d760be6e.jpg"},{id:12,name:"Matcha-Latte",price:"3st f\xf6r 9.50 \u20ac",priceValue:9.5,description:"Matcha \xe4r ett japanskt pulver som mals av gr\xf6na teblad. G\xf6r s\xe5 h\xe4r: l\xe4gg en halva av v\xe5r Matcha-latte i en kopp. S\xe4tt den i micron ca. 1 min. H\xe4ll upp 1 dl kokande vatten och 1 dl av din favorit varm \u201cmj\xf6lk\u201d. R\xf6r om.",ingredients:"Ca. 84g. Kakaosm\xf6r*, r\xf6rsocker*, kokos*, matchapulver, kanel*, gurkmeja*, vanilj*. (*)Ekologiska ingredienser.",image:a.p+"static/media/matchaLatte.74c4da35.jpg"}],P=function(e){return window.onload=function(){if(localStorage.getItem("Order"));else{localStorage.setItem("Order",JSON.stringify([]))}},Object(p.jsx)("div",{children:Object(p.jsxs)("div",{className:"products",children:[Object(p.jsx)("h1",{children:"V\xe5ra produkter"}),Object(p.jsxs)("div",{className:"product-information",children:[Object(p.jsx)("p",{children:"H\xe4r \xe4r v\xe5r kollektion. \xc4r det n\xe5got som ser j\xe4ttegott ut?"}),Object(p.jsxs)("p",{children:[Object(p.jsx)(l.b,{to:"/Contact",children:"Kontakta oss"})," s\xe5 hj\xe4lper vi till!"]})]}),Object(p.jsx)("div",{className:"flex-wrap",children:K.map((function(t){return Object(p.jsx)(V,{product:t,updateOrders:e.updateOrders})}))}),Object(p.jsxs)("div",{className:"product-information",children:[Object(p.jsx)("p",{children:"Visst s\xe5g det gott ut? "}),Object(p.jsxs)("p",{children:[Object(p.jsx)(l.b,{to:"/Contact",children:"H\xf6r av dig"})," s\xe5 hj\xe4lper vi till!"]})]})]})})},L=(a(17),a(14)),I=function(){return Object(p.jsx)("div",{children:Object(p.jsxs)("div",{className:"about-text-content",children:[Object(p.jsx)("h1",{children:"Mercedes"}),Object(p.jsx)("h2",{children:"En k\xe4rlekshistoria"}),Object(p.jsxs)("p",{children:["Det var en g\xe5ng en finl\xe4ndsk keramiker som fann sin v\xe4g till Venezuela i Sydamerika med sin keramikutst\xe4llning. Keramikern var Peter Winquist. Han visste inte d\xe5 att det soliga Venezuela var landet d\xe4r den mest aromatiska kakaon v\xe4xer och att d\xe4r skulle han hitta\u2026Mercedes och hennes son Nico."," "]}),Object(p.jsx)("p",{children:"Efter att en tid ha levt i olika v\xe4rldsdelar flyttade de tillsammans till \xc5land f\xf6r att f\xf6rverkliga sina gemensamma dr\xf6mmar."}),Object(p.jsx)("h2",{children:"Tiden nu"}),Object(p.jsx)("p",{children:"Efter m\xe5nga \xe5r av chokladtillverkning forts\xe4tter Mercedes sin kakoresa, men hur? Tiden gav tydliga r\xe5d."}),Object(p.jsxs)("ul",{children:[Object(p.jsxs)("li",{children:["Att ta vara p\xe5 h\xe4lsan har l\xe4nge varit viktigt men nu kanske mer \xe4n n\xe5gonsin finns det s\xe5 m\xe5nga olika s\xe4tt att g\xf6ra det."," "]}),Object(p.jsx)("li",{children:"M\xe5nga har matallergier och det \xe4r en utmaning att hitta n\xe5got som passar alla."}),Object(p.jsx)("li",{children:"Att man ibland beh\xf6ver unna sig n\xe5got gott som man kan njuta utav utan att f\xf6r den skull f\xe5 d\xe5ligt samvete."}),Object(p.jsx)("li",{children:"Att anv\xe4nda mindre och b\xe4ttre socker och att s\xe5 m\xe5nga som m\xf6jligt av ingredienserna \xe4r ekologiska"}),Object(p.jsx)("li",{children:"Viktigaste av allt \xe4r \xe4nd\xe5 att det skall smaka gott. J\xe4ttegott! "})]}),Object(p.jsxs)("p",{children:["Resultatet blev nu helt v\xe4xtbaserade produkter som s\xe5 v\xe4l veganer som de som f\xf6redrar eller beh\xf6ver gluten-, mj\xf6lk- och \xe4ggfria produkter kan njuta av. Detta tillsammans med alla de andra som kanske vill g\xf6ra lite gott f\xf6r milj\xf6n."," "]}),Object(p.jsxs)("p",{children:["Hoppas de blir just dina nya favoriter ",Object(p.jsx)(L.a,{className:"mercedes-icon"})," "]})]})})},J=function(){return Object(p.jsx)("div",{children:Object(p.jsxs)("div",{className:"about-text-content",children:[Object(p.jsx)("h1",{children:"Peter"}),Object(p.jsx)("p",{children:"Det \xe4r jag som \xe4r senior adviser i firman. Jag \xe4r idag en avslappnad mogen konstn\xe4r som tar dagen som den kommer. Nu finns inte l\xe4ngre n\xe5gon prestations\xe5ngest. Jag har bakom mig ett l\xe5ngt arbetsliv som inneh\xe5llit allt fr\xe5n industriformgivning f\xf6r Arabia- och Pentik fabrikerna till fritt skapande i den egna studion. Det har givit mig internationellt erk\xe4nnande och \xe4ven k\xe4nslan av att ha kunnat ge vackra praktiska f\xf6rem\xe5l till v\xe5r vardagsmilj\xf6. Jag har \xe4ven arbetat med det historiska projektet Drottning Kristinas Postv\xe4g fr\xe5n Stockholm \xf6ver \xc5land till \xc5bo samt som verksamhetsledare f\xf6r det vackra Ecker\xf6 Post & Tullhus."}),Object(p.jsx)("p",{children:"Idag har mitt stora intresse blivit den harmoniska tr\xe4dg\xe5rden. H\xe4r v\xe4ntar alla mina underbara modeller p\xe5 att bli f\xf6revigade i leran. Mitt arbetsrum Peters Studio och Galleri Lugn & Ro \xe4r den b\xe4sta platsen d\xe4r jag m\xf6ter min arbetsdag med samma goda aptit som i min ungdom"}),Object(p.jsx)("p",{children:"Mercedes och jag har tillsammans byggt upp denna harmoniska tillvaro och vi trivs."}),Object(p.jsxs)("p",{children:["Vill du veta mer om mig \xe4r du v\xe4lkommen att bes\xf6ka"," ",Object(p.jsx)("a",{href:"https://peterwinquist.wordpress.com/",target:"blank",rel:"noopener",children:"min hemsida."})]})]})})},q=(a(50),a.p+"static/media/mercedes.639de478.jpg"),T=a.p+"static/media/peter.b869627f.jpg",A=a.p+"static/media/garden.42362997.jpeg",D=function(){return Object(p.jsx)("div",{children:Object(p.jsxs)("div",{className:"about-container",children:[Object(p.jsxs)("div",{className:"about-person",children:[Object(p.jsx)("div",{className:"profile-picture profile-picture-mercedes",children:Object(p.jsx)("img",{src:q,alt:"profile of Mercedes",className:"profile-mercedes"})}),Object(p.jsx)("div",{className:"about-content",children:Object(p.jsx)(I,{})})]}),Object(p.jsxs)("div",{className:"about-person about-mobile",children:[Object(p.jsx)("div",{className:"profile-picture about-mobile profile-picture-peter",children:Object(p.jsx)("img",{src:T,alt:"profile of Peter",className:"about-mobile"})}),Object(p.jsx)("div",{className:"about-content about-mobile",children:Object(p.jsx)(J,{})})]}),Object(p.jsxs)("div",{className:"about-person about-desktop",children:[Object(p.jsx)("div",{className:"about-content about-desktop",children:Object(p.jsx)(J,{})}),Object(p.jsx)("div",{className:"profile-picture about-desktop profile-picture-peter",children:Object(p.jsx)("img",{src:T,alt:"profile of Peter",className:"about-desktop"})})]}),Object(p.jsxs)("div",{className:"about-garden",children:[Object(p.jsx)("h2",{children:"Den harmoniska tr\xe4dg\xe5rden Lugn & Ro"}),Object(p.jsx)("div",{className:"profile-garden",children:Object(p.jsx)("img",{src:A,alt:"den harmoniska tr\xe4dg\xe5rden"})})]})]})})},R=(a(51),a(27)),B=a(28),H=a(29),G=function(){return Object(p.jsx)("div",{children:Object(p.jsx)("div",{className:"contact-wrapper",children:Object(p.jsxs)("div",{className:"contact-text",children:[Object(p.jsxs)("div",{className:"contact-ordering",children:[Object(p.jsxs)("div",{className:"contact-order",children:[Object(p.jsx)("h2",{children:"Best\xe4llningar"}),Object(p.jsxs)("p",{children:["Vill du best\xe4lla n\xe5got? Skriv ett"," ",Object(p.jsx)("a",{href:"mailto:mercedesstudioaland@gmail.com",target:"blank",rel:"noopener",children:"mail"})," ","eller varf\xf6r inte direkt p\xe5"," ",Object(p.jsx)("a",{href:"https://m.me/mu.winquist",target:"blank",rel:"noopener",children:"facebook"}),"? Vi svarar vanligtvis inom en dag. D\xe5 kan vi komma \xf6verens om betals\xe4tt och vart den goda chokladen skall levereras. Var inte blyg! ",Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),"Vi bjuder p\xe5 frakten p\xe5 best\xe4llningar \xf6ver 20 \u20ac."]})]}),Object(p.jsxs)("div",{className:"contact-company",children:[Object(p.jsx)("h2",{children:"Best\xe4llningar till f\xf6retag"}),Object(p.jsxs)("p",{children:["Vi kan ocks\xe5 uppfylla st\xf6rre best\xe4llningar. Kontaka oss via"," ",Object(p.jsx)("a",{href:"mailto:mercedesstudioaland@gmail.com",target:"blank",rel:"noopener",children:"mail"})," ","eller"," ",Object(p.jsx)("a",{href:"https://m.me/mu.winquist",target:"blank",rel:"noopener",children:"facebook"})," ","s\xe5 p\xe5b\xf6rjar vi en dialog om era behov och \xf6nskem\xe5l."]})]})]}),Object(p.jsxs)("div",{className:"contact-information",children:[Object(p.jsx)("h2",{children:"Kontaktinformation"}),Object(p.jsxs)("div",{className:"contact-flex",children:[Object(p.jsx)(L.a,{className:"contact-icons"}),Object(p.jsx)("p",{children:"Mercedes Studio | Lugn och Ro AB"})]}),Object(p.jsxs)("div",{className:"contact-flex",children:[Object(p.jsx)(R.a,{className:"contact-icons"}),Object(p.jsxs)("p",{children:["S\xf6dra \xd6verbyv\xe4gen 137",Object(p.jsx)("br",{}),"AX-22270 Ecker\xf6",Object(p.jsx)("br",{}),"\xc5land, Finland"]})]}),Object(p.jsxs)("div",{className:"contact-flex",children:[Object(p.jsx)(w.a,{className:"contact-icons"}),Object(p.jsx)("p",{children:"+358 (0) 40 539 6699"})]}),Object(p.jsxs)("div",{className:"contact-flex",children:[Object(p.jsx)(B.a,{className:"contact-icons"}),Object(p.jsx)("p",{children:Object(p.jsx)("a",{href:"mailto:mercedesstudioaland@gmail.com",target:"blank",rel:"noopener",children:"mercedesstudioaland@gmail.com"})})]}),Object(p.jsxs)("div",{className:"contact-flex",children:[Object(p.jsx)(k.b,{className:"contact-icons"}),Object(p.jsx)("p",{children:Object(p.jsx)("a",{href:"https://m.me/mu.winquist",target:"blank",rel:"noopener",children:"PM till Mercedes"})})]}),Object(p.jsxs)("div",{className:"contact-flex",children:[Object(p.jsx)(H.a,{className:"contact-icons"}),Object(p.jsx)("p",{children:Object(p.jsx)("a",{href:"https://www.instagram.com/mercedesstudioaland/?hl=en",target:"blank",rel:"noopener",children:"F\xf6lj oss p\xe5 instagram f\xf6r l\xe4ckra bilder."})})]})]})]})})})};a(52);var F=function(){!function(){if(JSON.parse(localStorage.getItem("Order")));else{localStorage.setItem("Order",JSON.stringify([]))}}();var e=JSON.parse(localStorage.getItem("Order")),t=Object(r.useState)(e),a=Object(c.a)(t,2),s=a[0],i=a[1];function n(e){i(e)}return Object(p.jsx)("div",{children:Object(p.jsxs)(l.a,{children:[Object(p.jsx)(N,{updateOrders:n,orders:s}),Object(p.jsxs)("div",{className:"wrapper",children:[Object(p.jsxs)(o.c,{children:[Object(p.jsx)(o.a,{exact:!0,path:"/",children:Object(p.jsx)(M,{})}),Object(p.jsx)(o.a,{exact:!0,path:"/Products",children:Object(p.jsx)(P,{updateOrders:n})}),Object(p.jsx)(o.a,{exact:!0,path:"/About",children:Object(p.jsx)(D,{})}),Object(p.jsx)(o.a,{exact:!0,path:"/Contact",children:Object(p.jsx)(G,{})})]}),Object(p.jsx)("div",{className:"push"})]}),Object(p.jsx)("div",{className:"sticky-footer",children:Object(p.jsx)(C,{})})]})})};n.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(F,{})}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.1d94b29a.chunk.js.map