(this["webpackJsonpdashboard-app"]=this["webpackJsonpdashboard-app"]||[]).push([[0],{101:function(e,t,a){},102:function(e,t,a){},103:function(e,t,a){},121:function(e,t,a){},122:function(e,t,a){},123:function(e,t,a){},124:function(e,t,a){},125:function(e,t,a){},126:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(0),s=a.n(c),r=a(29),i=a.n(r),l=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,128)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))},o=a(17),j=a(10),h=a(11),d=a(12),b=a(14),u=a(13),p=s.a.createContext(),O=(p.Provider,function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={products:[{id:1,ODP_ID:"E2000020271202362150D356",Kapasitas:8,lat:-6.2773911,long:107.12830389999999,href:"https://www.google.com/maps/?q=-6.2773911,107.12830389999999",Tanggal_instalasi:"2020-08-01",Optical_power:-19,Port:[{Port_ID:1,ID_Pelanggan:"Cust1-1",Alamat:"Jababeka XIV",Tanggal_Berlangganan:"2020-10-10",Layanan:"Triple Play"},{Port_ID:2,ID_Pelanggan:"Cust2-1",Alamat:"Mekarmukti",Tanggal_Berlangganan:"2020-10-12",Layanan:"Single Play"},{Port_ID:3,ID_Pelanggan:"Cust3-1",Alamat:"Harja Mekar",Tanggal_Berlangganan:"2020-11-10",Layanan:"Triple Play"}]},{id:2,ODP_ID:"E2000020271202472150DF7B",Kapasitas:8,lat:-6.17511,long:106.865036,href:"https://www.google.com/maps/?q=-6.2773911,107.12830389999999",Tanggal_instalasi:"2020-11-04",Optical_power:-19,Port:[{Port_ID:1,ID_Pelanggan:"Cust1-2",Alamat:"Pavilion",Tanggal_Berlangganan:"2020-11-14",Layanan:"Triple Play"}]},{id:3,ODP_ID:"E20000202712023590JKU87U",Kapasitas:16,lat:-6.917464,long:107.619125,href:"https://www.google.com/maps/?q=-6.2773911,107.12830389999999",Tanggal_instalasi:"2020-12-01",Optical_power:-19,Port:[{Port_ID:1,ID_Pelanggan:"Cust1-3",Alamat:"Cikarang Utara",Tanggal_Berlangganan:"2020-12-10",Layanan:"Single Play"},{Port_ID:2,ID_Pelanggan:"Cust2-3",Alamat:"Cikarang Barat",Tanggal_Berlangganan:"2020-12-11",Layanan:"Triple Play"}]}],standByPort:18},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this.state,t=e.products,a=e.klasifikasiODP,c=e.standByPort;return Object(n.jsx)(p.Provider,{value:{products:t,klasifikasiODP:a,standByPort:c},children:this.props.children})}}]),a}(c.Component)),g=(a(74),a(75),a(38)),x=a(45);a(76);function m(){return Object(n.jsx)("div",{className:"Nav-Bar",children:Object(n.jsxs)(g.a,{expand:"lg",children:[Object(n.jsx)(o.b,{className:"navbar-brand",to:"/HomePage",children:"YourThings"}),Object(n.jsx)(g.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(n.jsxs)(g.a.Collapse,{id:"basic-navbar-nav",children:[Object(n.jsxs)(x.a,{className:"mr-auto",children:[Object(n.jsx)(o.b,{className:"nav-link",to:"/ReportPage",children:"Report"}),Object(n.jsx)(o.b,{className:"nav-link",to:"/FieldDataPage",children:"Field Data"})]}),Object(n.jsx)(x.a,{className:"lout",children:Object(n.jsx)(o.b,{className:"nav-link",to:"/",children:"Log Out"})})]})]})})}a(84);function f(){return Object(n.jsx)("div",{className:"foot text-center",children:Object(n.jsx)("footer",{children:"\xa9 PT Tri Cipta Teknindo - 2020"})})}var v=function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(m,{}),this.props.children,Object(n.jsx)(f,{})]})}}]),a}(c.Component),N=a(21),D=a(66),A=a.n(D),P=a(26),k=a(16),y=a(23),S=a.p+"static/media/thomas-jensen-h3vT1Kp0FxA-unsplash.b35f6bd5.jpg",I=(a(101),function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).insertUser=function(t){t.preventDefault(),t.persist(),A.a.post("http://localhost/php-react/add-user.php",{user_name:e.username.value,pass_word:e.password.value}).then(function(e){var a=e.data;1===a.success?(this.context.addNewUser(a.id,this.username.value,this.useremail.value),t.target.reset()):alert(a.msg)}.bind(Object(N.a)(e))).catch((function(e){console.log(e)}))},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this;return Object(n.jsx)("form",{onSubmit:this.insertUser,children:Object(n.jsxs)("div",{className:"fullPage",children:[Object(n.jsx)("img",{src:S,alt:"BG",width:"100",className:"imgBG"}),Object(n.jsx)(P.a,{className:"containLogin",children:Object(n.jsxs)(k.a,{className:"Login-custom",children:[Object(n.jsxs)(y.a,{className:"wlcmCol",children:[Object(n.jsx)("h2",{children:"Hey You!"}),Object(n.jsx)("h6",{children:"Enter your account and Make changes for your company"}),Object(n.jsx)("h4",{children:"YourThings"})]}),Object(n.jsxs)(y.a,{className:"lgnCol text-left",children:[Object(n.jsx)("h2",{className:"mb-3",children:"Login"}),Object(n.jsxs)("div",{className:"inputLogin-custom",children:[Object(n.jsx)("h6",{className:"usPsLog",children:"Username"}),Object(n.jsx)("input",{type:"text",name:"username",ref:function(t){return e.username=t},className:"form-control",placeholder:"Username"}),Object(n.jsx)("h6",{className:"usPsLog",children:"Password"}),Object(n.jsx)("input",{type:"password",name:"password",ref:function(t){return e.password=t},className:"form-control",placeholder:"Password"})]}),Object(n.jsx)(o.b,{to:"/HomePage",children:Object(n.jsx)("button",{className:"btnLogin-custom mb-5",children:"Sign in"})})]})]})})]})})}}]),a}(c.Component)),w=a.p+"static/media/timj-ots0EOYuGtU-unsplash-removebg.9d129779.png";a(102);a(103);var U=a(31),E=a.p+"static/media/37995c2da2c65b263be837809ce1944c-removebg-preview.da46d6b8.png",B=a.p+"static/media/262-2628212_gps-point-red-marker-svg-removebg-preview.243d8627.png",T=(a(121),function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return this.props.data.map((function(e){return e.Kapasitas_After<8&&e.Kapasitas_After>=4?Object(n.jsx)(U.a,{latitude:Number(e.Latitude),longitude:Number(e.Longitude),children:Object(n.jsx)("img",{src:E,alt:"Medium Icon",width:"15px"})},e.ODP_ID):e.Kapasitas_After>=8?Object(n.jsx)(U.a,{latitude:Number(e.Latitude),longitude:Number(e.Longitude),children:Object(n.jsx)("img",{src:"data:image/png;base64,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",alt:"Full Icon",width:"15px"})},e.ODP_ID):e.Kapasitas_After<4?Object(n.jsx)(U.a,{latitude:Number(e.Latitude),longitude:Number(e.Longitude),children:Object(n.jsx)("img",{src:B,alt:"Low Icon",width:"15px"})},e.ODP_ID):void 0}))}}]),a}(c.PureComponent)),R=function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={viewport:{latitude:-7.090911,longitude:107.668884,zoom:5,width:"70vw",height:"100vh"},style:"mapbox://styles/mapbox/dark-v10",token:"pk.eyJ1IjoicmFtYWRpa2ExMDUwIiwiYSI6ImNraXpkZzU4cTE2M3QycW15cnhrMG1ueXcifQ.s_vgxudeVqiQexpSPYsVHw",odpLatlang:[],data:[]},e.fetchODP=function(){fetch("http://localhost/backend-app/all-odp.php").then((function(t){t.json().then(function(e){1===e.success?this.setState({odpLatlang:e.odp.reverse()}):this.context.post_show(!1)}.bind(Object(N.a)(e)))})).catch((function(e){console.log(e)}))},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.fetchODP()}},{key:"render",value:function(){var e=this,t=this.state,a=t.odpLatlang,c=t.token,s=t.style,r=t.viewport;return Object(n.jsx)("div",{className:"mapContainer",children:Object(n.jsx)(U.b,{latitude:r.latitude,longitude:r.longitude,width:r.width,height:r.height,zoom:r.zoom,mapboxApiAccessToken:c,mapStyle:s,onViewportChange:function(t){return e.setState({viewport:t})},children:Object(n.jsx)(T,{data:a})})})}}]),a}(c.Component),C=a(68),q=(a(122),function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={data:[],odpclf:[]},e.fetchODP=function(){fetch("http://localhost/backend-app/classification-odp.php").then((function(t){t.json().then(function(e){1===e.success?this.setState({odpclf:e.port}):this.context.post_show(!1)}.bind(Object(N.a)(e)))})).catch((function(e){console.log(e)}))},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.fetchODP()}},{key:"render",value:function(){var e=this.state,t=e.data,a=e.odpclf,c=this.props.ODPcnt;return a.map((function(e){var a="#000000".replace(/0/g,(function(){return(~~(16*Math.random())).toString(16)})),n=e.Jumlah/c*100,s={color:a,title:e.Klasifikasi_Nama,value:n};t.push(s)})),Object(n.jsx)("div",{className:"clasfc",children:Object(n.jsxs)(k.a,{children:[Object(n.jsx)(y.a,{children:Object(n.jsx)(C.PieChart,{animate:!0,animationDuration:500,animationEasing:"ease-out",center:[50,50],lengthAngle:360,paddingAngle:0,radius:50,startAngle:0,viewBoxSize:[100,100],label:function(e){return e.dataEntry.title},labelPosition:70,labelStyle:{fontSize:"4px",fontColor:"FFFFFA",fontWeight:"400"},data:t})}),Object(n.jsx)(y.a,{children:Object(n.jsx)("table",{className:"table table-borderless",children:Object(n.jsx)("tbody",{children:a.map((function(e){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{scope:"row",children:e.Klasifikasi_Nama}),Object(n.jsxs)("td",{children:[e.Jumlah," ODP"]})]},e.KlasifikasiODP_ID)}))})})})]})})}}]),a}(c.Component));q.contextType=p;a(123);var F=function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).fetchODP=function(){fetch("http://localhost/backend-app/count-odp.php").then((function(e){e.json().then(function(e){1===e.success?this.setState({odpCount:e.countodp.reverse()}):this.context.post_show(!1)}.bind(Object(N.a)(n)))})).catch((function(e){console.log(e)}))},n.state={odpCount:[]},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.fetchODP()}},{key:"render",value:function(){var e=this.context.standByPort,t=this.state.odpCount;return Object(n.jsx)("div",{className:"reportPage",children:Object(n.jsxs)(P.a,{className:"mt-5",children:[Object(n.jsx)(k.a,{className:"reportTitle mb-3",children:Object(n.jsx)("h1",{children:"Report"})}),Object(n.jsxs)(k.a,{className:"mb-5 py-5 text-center odpAmnt",children:[Object(n.jsx)(y.a,{children:Object(n.jsx)("h5",{children:"ODP Total"})}),Object(n.jsx)(y.a,{children:t.map((function(e){return Object(n.jsx)("h5",{children:e.JumlahODP},e.ODP_ID)}))})]}),Object(n.jsxs)(k.a,{className:"reportMap",children:[Object(n.jsx)("h3",{children:"Sebaran ODP"}),Object(n.jsx)(R,{})]}),Object(n.jsxs)(k.a,{className:"mb-5 reportData",children:[Object(n.jsx)(y.a,{className:"text-center d-flex align-items-center",children:Object(n.jsx)("h3",{children:"Klasifikasi ODP"})}),Object(n.jsx)(y.a,{children:t.map((function(e){return Object(n.jsx)(q,{ODPcnt:e.JumlahODP},e.ODP_ID)}))})]}),Object(n.jsxs)(k.a,{className:"reportStandby",children:[Object(n.jsx)("h3",{children:"Standby ODP"}),Object(n.jsx)("table",{className:"table table-borderless",children:Object(n.jsxs)("tbody",{children:[Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{scope:"row",children:"Standby"}),Object(n.jsxs)("td",{children:[e," port"]})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{scope:"row",children:"Cost"}),Object(n.jsx)("td",{children:"PSB / day"})]})]})})]})]})})}}]),a}(c.Component);F.contextType=p;a(124);var M=function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={number:0,odp:[]},e.fetchODP=function(){fetch("http://localhost/backend-app/all-odp.php").then((function(t){t.json().then(function(e){1===e.success?this.setState({odp:e.odp.reverse()}):this.context.post_show(!1)}.bind(Object(N.a)(e)))})).catch((function(e){console.log(e)}))},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.fetchODP()}},{key:"render",value:function(){var e=this.state,t=e.number,a=e.odp;return Object(n.jsx)("div",{className:"fDataPage",children:Object(n.jsxs)(P.a,{className:"mt-5",children:[Object(n.jsx)(k.a,{className:"fDataTitle mb-3",children:Object(n.jsx)("h1",{children:"Field Data"})}),Object(n.jsx)(k.a,{className:"fData",children:Object(n.jsx)("div",{className:"table-responsive",children:Object(n.jsxs)("table",{className:"table table-borderless",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{scope:"col",children:"No"}),Object(n.jsx)("th",{scope:"col",children:"ODP ID"}),Object(n.jsx)("th",{scope:"col",children:"Kapasitas"}),Object(n.jsx)("th",{scope:"col",children:"Optical Power"}),Object(n.jsx)("th",{scope:"col",children:"GIS"}),Object(n.jsx)("th",{scope:"col",children:"Tanggal Instalasi"}),Object(n.jsx)("th",{scope:"col",children:"Action"})]})}),Object(n.jsx)("tbody",{children:a.map((function(e){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{scope:"row",children:t+=1}),Object(n.jsx)("td",{children:e.ODP_ID}),Object(n.jsxs)("td",{children:[e.Kapasitas," port"]}),Object(n.jsxs)("td",{children:[e.Optical_Power," db"]}),Object(n.jsx)("td",{children:Object(n.jsxs)("a",{href:e.GIS_href,children:[e.Latitude," \xb0, ",e.Longitude," \xb0"]})}),Object(n.jsx)("td",{children:e.Tanggal_Instalasi}),Object(n.jsx)("td",{children:Object(n.jsx)(o.b,{className:"btn btn-outline-info",to:"/DetailPage/".concat(e.ODP_ID),children:"Detail"})})]},e.ODP_ID)}))})]})})})]})})}}]),a}(c.Component);M.contextType=p;a(125);var Q=function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={product:[],number:0},e.getProduct=function(){if(e.props.match.params.id){var t=e.context.products.filter((function(t){return t.ODP_ID===e.props.match.params.id}));e.setState({product:t})}},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.getProduct()}},{key:"render",value:function(){var e=this.state.product,t=this.state.number;return Object(n.jsx)("div",{className:"detailPage",children:Object(n.jsxs)(P.a,{className:"mt-5",children:[Object(n.jsx)(k.a,{className:"detailTitle mb-3",children:e.map((function(e){return Object(n.jsxs)("h1",{children:["Detail ODP - ",e.ODP_ID]},e.id)}))}),Object(n.jsx)(k.a,{className:"detailData",children:Object(n.jsx)("div",{className:"table-responsive",children:Object(n.jsxs)("table",{className:"table table-borderless",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{scope:"col",children:"Kapasitas"}),Object(n.jsx)("th",{scope:"col",children:"Optical Power"}),Object(n.jsx)("th",{scope:"col",children:"GIS"}),Object(n.jsx)("th",{scope:"col",children:"Tanggal Instalasi"})]})}),Object(n.jsx)("tbody",{children:e.map((function(e){return Object(n.jsxs)("tr",{children:[Object(n.jsxs)("td",{children:[e.Kapasitas," port"]}),Object(n.jsxs)("td",{children:[e.Optical_power," db"]}),Object(n.jsx)("td",{children:Object(n.jsxs)("a",{href:e.href,children:[e.lat," \xb0, ",e.long," \xb0"]})}),Object(n.jsx)("td",{children:e.Tanggal_instalasi})]},e.id)}))})]})})}),Object(n.jsxs)(k.a,{className:"detailCust",children:[Object(n.jsx)("h3",{children:"Detail Customer"}),Object(n.jsx)("div",{className:"table-responsive",children:Object(n.jsxs)("table",{className:"table table-borderless",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{scope:"col",children:"No"}),Object(n.jsx)("th",{scope:"col",children:"ID Pelanggan"}),Object(n.jsx)("th",{scope:"col",children:"Alamat"}),Object(n.jsx)("th",{scope:"col",children:"Tanggal Instalasi"}),Object(n.jsx)("th",{scope:"col",children:"Layanan"})]})}),e.map((function(e){return Object(n.jsx)("tbody",{children:e.Port.map((function(e){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{scope:"row",children:t+=1}),Object(n.jsx)("td",{children:e.ID_Pelanggan}),Object(n.jsx)("td",{children:e.Alamat}),Object(n.jsx)("td",{children:e.Tanggal_Berlangganan}),Object(n.jsx)("td",{children:e.Layanan})]},e.Port_ID)}))},e.id)}))]})})]})]})})}}]),a}(c.Component);Q.contextType=p,i.a.render(Object(n.jsx)(o.a,{children:Object(n.jsxs)(j.c,{children:[Object(n.jsx)(j.a,{exact:!0,path:"/",component:I}),Object(n.jsx)(j.a,{path:"/HomePage",component:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("img",{src:w,alt:"BgImg",className:"imgBg"}),Object(n.jsxs)("div",{className:" YourThingsApp",children:[Object(n.jsx)("h1",{children:"YourThings"}),Object(n.jsx)("div",{children:Object(n.jsx)(o.b,{className:"btn",to:"/ReportPage",children:"Report"})}),Object(n.jsx)("div",{children:Object(n.jsx)(o.b,{className:"btn",to:"/FieldDataPage",children:"Field Data"})})]}),Object(n.jsx)("div",{className:"lgout",children:Object(n.jsx)(o.b,{to:"/",children:"Log Out"})})]})}}),Object(n.jsx)(v,{children:Object(n.jsxs)(O,{children:[Object(n.jsx)(j.a,{path:"/AdminPage",component:function(){return Object(n.jsx)("div",{children:Object(n.jsx)("h1",{children:"Admin"})})}}),Object(n.jsx)(j.a,{path:"/ReportPage",component:F}),Object(n.jsx)(j.a,{path:"/FieldDataPage",component:M}),Object(n.jsx)(j.a,{path:"/DetailPage/:id",component:Q})]})})]})}),document.getElementById("root")),l()},74:function(e,t,a){},76:function(e,t,a){},84:function(e,t,a){}},[[126,1,2]]]);
//# sourceMappingURL=main.b695efdf.chunk.js.map