(window.webpackJsonp=window.webpackJsonp||[]).push([["bcff"],{"/LZr":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/.products/.productcategories/category.data",function(){var e=n("FyYz");return{page:e.default||e}}])},FyYz:function(e,t,n){"use strict";n.r(t),n.d(t,"categoryData",function(){return o});var a=n("q1tI"),i=n.n(a),r=(n("zbDu"),n("fEpf")),o=(n("A9gk"),n("NTXS"),{categoryColumns:[{title:"Category",dataIndex:"name"},{title:"Rename",dataIndex:"rename",render:function(){return i.a.createElement(r.a,{icon:"form",style:{marginRight:"30px"},shape:"circle",type:"primary",size:"small",ghost:!0})}},{title:"",dataIndex:"",render:function(){return i.a.createElement(r.a,{icon:"delete",shape:"round",size:"small",style:{backgroundColor:"#F84D65",color:"white"}})}}],categoryColumnData:[{name:"Test Name",inventory:[30]},{name:"Test Name",inventory:[250]},{name:"Test Name",inventory:[5]},{name:"Test Name",inventory:[30]},{name:"Test Name",inventory:[250]},{name:"Test Name",inventory:[5]}],cardData:[{iconType:"bank",iconStyle:{fontSize:"30px",marginTop:"30%",color:"#F88998"},title:"25",description:"Items Out of Stock"},{iconType:"shopping-cart",iconStyle:{fontSize:"30px",marginTop:"30%",color:"#FFB353"},title:"25",description:"Items Out of Stock"},{iconType:"rise",iconStyle:{fontSize:"30px",marginTop:"30%",color:"#69E4A6"},title:"25",description:"Items Out of Stock"}],cascaderData:[{placeholder:"All Categories",optionArray:["Biscuits","Chips","Drinks","Fries","Breads"]},{placeholder:"All Inventory",optionArray:["Biscuits","Chips","Drinks","Fries","Breads"]},{placeholder:"All Stores",optionArray:["Biscuits","Chips","Drinks","Fries","Breads"]},{placeholder:"All Actions",optionArray:["Biscuits","Chips","Drinks","Fries","Breads"]}]})},NTXS:function(e,t,n){"use strict";n("MaXC");var a=n("4IMT"),i=n.n(a),r=n("0iUn"),o=n("sLSF"),l=n("MI3g"),c=n("a7VT"),s=n("AT/M"),d=n("Tit0"),p=n("q1tI"),m=n.n(p),u=(n("EpBQ"),n("pKkg")),f=function(e){function t(e){var n;return Object(r.default)(this,t),(n=Object(l.default)(this,Object(c.default)(t).call(this,e))).handleClick=n.handleClick.bind(Object(s.default)(n)),n.setFormApi=n.setFormApi.bind(Object(s.default)(n)),n}return Object(d.default)(t,e),Object(o.default)(t,[{key:"handleClick",value:function(){this.props.onSubmit(this.formAPi.getState())}},{key:"setFormApi",value:function(e){this.formAPi=e}},{key:"render",value:function(){return m.a.createElement("div",{className:"App"},m.a.createElement(u.b,{getApi:this.setFormApi},m.a.createElement(u.c,{field:"location",style:{marginBottom:15},placeholder:"Location"})),m.a.createElement("div",{style:{display:"inline-block"}},m.a.createElement(i.a,{style:{float:"left",width:192},onClick:this.props.onCancel},"Cancel"),m.a.createElement(i.a,{style:{float:"left",width:192,marginLeft:15},type:"primary",onClick:this.handleClick},"Save")))}}]),t}(p.Component);t.a=f}},[["/LZr","5d41","9da1","ad9d"]]]);