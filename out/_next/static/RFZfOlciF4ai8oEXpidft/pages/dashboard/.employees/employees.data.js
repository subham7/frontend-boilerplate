(window.webpackJsonp=window.webpackJsonp||[]).push([["95a1"],{HJoR:function(e,t,n){"use strict";n.r(t),n.d(t,"employeeColumns",function(){return l}),n.d(t,"employeeColumnData",function(){return m});var i=n("q1tI"),a=n.n(i),o=n("fEpf"),s=(n("wuxv"),n("NTXS")),r=n("A9gk"),l=[{title:"Name",dataIndex:"name",key:"name"},{title:"EmployeeID",dataIndex:"userName",key:"userName"},{title:"Email",dataIndex:"email",key:"email"},{title:"Phone",dataIndex:"phone",key:"phone"},{title:"Assign",dataIndex:"assign",key:"assign",render:function(e){return a.a.createElement(r.a,{form:s.a,title:"Assign Items",buttonValue:"Assign",onSubmit:e.onCreate})}},{title:"Edit",key:"edit",dataIndex:"edit",render:function(e){return a.a.createElement("span",null,a.a.createElement(o.a,{style:{marginRight:"30px"},icon:"form",shape:"circle",type:"primary",size:"small",ghost:!0}),a.a.createElement(o.a,{icon:"delete",shape:"round",size:"small",style:{backgroundColor:"#F84D65",color:"white"}}))}}],m=[{product:"Test Name",employee:"1*2*3*4*5",role:"Admin",permissions:["Permission","Permission","Permission","Permission"]},{product:"Test Name",employee:"1*2*3*4*5",role:"Admin",permissions:["Permission","Permission","Permission","Permission"]},{product:"Test Name",employee:"1*2*3*4*5",role:"Admin",permissions:["Permission","Permission","Permission","Permission"]},{product:"Test Name",employee:"1*2*3*4*5",role:"Admin",permissions:["Permission","Permission","Permission","Permission"]},{product:"Test Name",employee:"1*2*3*4*5",role:"Admin",permissions:["Permission","Permission","Permission","Permission"]},{product:"Test Name",employee:"1*2*3*4*5",role:"Admin",permissions:["Permission","Permission","Permission","Permission"]}]},NTXS:function(e,t,n){"use strict";n("MaXC");var i=n("4IMT"),a=n.n(i),o=n("0iUn"),s=n("sLSF"),r=n("MI3g"),l=n("a7VT"),m=n("AT/M"),d=n("Tit0"),c=n("q1tI"),p=n.n(c),u=(n("EpBQ"),n("pKkg")),f=function(e){function t(e){var n;return Object(o.default)(this,t),(n=Object(r.default)(this,Object(l.default)(t).call(this,e))).handleClick=n.handleClick.bind(Object(m.default)(n)),n.setFormApi=n.setFormApi.bind(Object(m.default)(n)),n}return Object(d.default)(t,e),Object(s.default)(t,[{key:"handleClick",value:function(){this.props.onSubmit(this.formAPi.getState())}},{key:"setFormApi",value:function(e){this.formAPi=e}},{key:"render",value:function(){return p.a.createElement("div",{className:"App"},p.a.createElement(u.b,{getApi:this.setFormApi},p.a.createElement(u.c,{field:"location",style:{marginBottom:15},placeholder:"Location"})),p.a.createElement("div",{style:{display:"inline-block"}},p.a.createElement(a.a,{style:{float:"left",width:192},onClick:this.props.onCancel},"Cancel"),p.a.createElement(a.a,{style:{float:"left",width:192,marginLeft:15},type:"primary",onClick:this.handleClick},"Save")))}}]),t}(c.Component);t.a=f},SeE1:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/.employees/employees.data",function(){var e=n("HJoR");return{page:e.default||e}}])},wuxv:function(e,t,n){"use strict";n("ek7I");var i=n("FAat"),a=n.n(i),o=n("q1tI"),s=n.n(o),r=a.a.Option;var l=function(e){return s.a.createElement(a.a,{showArrow:!0,allowClear:!0,style:e.style,placeholder:e.placeholder,optionFilterProp:"children",onChange:e.handleChange,onFocus:e.handleFocus,onBlur:e.handleBlur,filterOption:e.filterOptions},0!=e.optionArray.length?e.optionArray.map(function(e,t){return s.a.createElement(r,{value:e},e)}):s.a.createElement(r,{value:"noData",disabled:!0},"No Data Found"))};l.defaultProps={optionArrray:[],placeholder:"Select One",style:{width:"100%"}},t.a=l}},[["SeE1","5d41","9da1","ad9d"]]]);