(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{43:function(e,t,a){e.exports=a(80)},79:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(37),o=a.n(c),s=a(8),l=a(9),i=a(12),m=a(10),u=a(13),p=a(15),d=a(17),h=a(11),f=a(7),b=a.n(f),v=a(20),E=a(21),y=a.n(E),O=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={showInfo:!1},a.onShowInfo=function(e){a.setState({showInfo:!a.state.showInfo})},a.onDeleteContact=function(e){a.props.deleteContact(e)},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.contact,t=e.id,a=e.name,n=e.phone,c=this.state.showInfo;return r.a.createElement("div",{className:"card card-body mb-3"},r.a.createElement("h3",null,"Name: ",a," ",r.a.createElement("i",{onClick:this.onShowInfo,className:"fas fa-sort-down",style:{cursor:"pointer"}}),r.a.createElement("i",{onClick:this.onDeleteContact.bind(this,t),className:"fas fa-times",style:{cursor:"pointer",float:"right",color:"red"}}),r.a.createElement(p.b,{to:"contact/edit/".concat(t)},r.a.createElement("i",{className:"fas fa-pencil-alt",style:{cursor:"pointer",float:"right",color:"black",marginRight:"1rem"}}))),c?r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},"Phone: ",n)):null)}}]),t}(n.Component),N=Object(h.b)(null,{deleteContact:function(e){return function(){var t=Object(v.a)(b.a.mark(function t(a){return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.a.delete("https://jsonplaceholder.typicode.com/users/".concat(e));case 2:a({type:"DELETE_CONTACT",payload:e});case 3:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}})(O),C=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.getContacts()}},{key:"render",value:function(){var e=this.props.contacts;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"display-for mb-2"},"Contact list"),e.map(function(e){return r.a.createElement(N,{key:e.id,contact:e})}))}}]),t}(n.Component),g=Object(h.b)(function(e){return{contacts:e.contact.contacts}},{getContacts:function(){return function(){var e=Object(v.a)(b.a.mark(function e(t){var a;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("https://jsonplaceholder.typicode.com/users");case 2:a=e.sent,t({type:"GET_CONTACTS",payload:a.data});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}})(C),j=a(18),w=a(40),T=a.n(w),k=function(e){var t=e.label,a=e.name,n=e.value,c=e.placeholder,o=e.type,s=e.onChange,l=e.error;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:a},t,":"),r.a.createElement("input",{type:o,name:a,className:T()("form-control form-control-lg",{"is-invalid":l}),placeholder:c,value:n,onChange:s}),l&&r.a.createElement("div",{className:"invalid-feedback"},l))};k.defaultProps={type:"text"};var S=k,A=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",phone:"",errors:{name:"",phone:""}},a.onSubmit=function(e){e.preventDefault();var t=a.state,n=t.name,r=t.phone;if(""!==n)if(""!==r){var c={name:n,phone:r};a.props.addContact(c),a.setState({name:"",phone:"",errors:{}}),a.props.history.push("/")}else a.setState({errors:{phone:"Phone is required"}});else a.setState({errors:{name:"Name is required"}})},a.onChange=function(e){return a.setState(Object(j.a)({},e.target.name,e.target.value))},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.phone,n=e.errors;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Add Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement(S,{label:"Name",name:"name",placeholder:"Enter name",value:t,onChange:this.onChange,error:n.name}),r.a.createElement(S,{label:"Phone",name:"phone",placeholder:"Enter phone",value:a,onChange:this.onChange,error:n.phone}),r.a.createElement("input",{type:"submit",value:"Add Conctact",className:"btn btn-light btn-block"}))))}}]),t}(n.Component),_=Object(h.b)(null,{addContact:function(e){return function(){var t=Object(v.a)(b.a.mark(function t(a){var n;return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.a.post("https://jsonplaceholder.typicode.com/users",e);case 2:n=t.sent,a({type:"ADD_CONTACT",payload:n.data});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}})(A),x=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",phone:"",errors:{name:"",phone:""}},a.onSubmit=function(e){e.preventDefault();var t=a.state,n=t.name,r=t.phone;if(""!==n)if(""!==r){var c={id:a.props.match.params.id,name:n,phone:r};a.props.updateContact(c),a.setState({name:"",phone:"",errors:{name:"",phone:""}}),a.props.history.push("/")}else a.setState({errors:{phone:"Phone is required"}});else a.setState({errors:{name:"Name is required"}})},a.onChange=function(e){return a.setState(Object(j.a)({},e.target.name,e.target.value))},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentWillReceiveProps",value:function(e,t){var a=e.contact,n=a.name,r=a.phone;this.setState({name:n,phone:r})}},{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.getContact(e)}},{key:"render",value:function(){var e=this.state,t=e.name,a=e.phone,n=e.errors;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Edit Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement(S,{label:"Name",name:"name",placeholder:"Enter name",value:t,onChange:this.onChange,error:n.name}),r.a.createElement(S,{label:"Phone",name:"phone",placeholder:"Enter phone",value:a,onChange:this.onChange,error:n.phone}),r.a.createElement("input",{type:"submit",value:"Update Conctact",className:"btn btn-light btn-block"}))))}}]),t}(n.Component),D=Object(h.b)(function(e){return{contact:e.contact.contact}},{getContact:function(e){return function(){var t=Object(v.a)(b.a.mark(function t(a){var n;return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.a.get("https://jsonplaceholder.typicode.com/users/".concat(e));case 2:n=t.sent,a({type:"GET_CONTACT",payload:n.data});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},updateContact:function(e){return function(){var t=Object(v.a)(b.a.mark(function t(a){var n;return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.a.put("https://jsonplaceholder.typicode.com/users/".concat(e.id),e);case 2:n=t.sent,a({type:"UPDATE_CONTACT",payload:n.data});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}})(x),P=function(e){var t=e.branding;return r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark \r bg-info mb-3 py-0"},r.a.createElement("div",{className:"container"},r.a.createElement(p.b,{to:"/",className:"navbar-brand"},t)),r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.b,{to:"/",className:"nav-link"},r.a.createElement("i",{className:"fas fa-home"})," Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.b,{to:"/contact/add",className:"nav-link"},r.a.createElement("i",{className:"fas fa-plus"}),"Add")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.b,{to:"/about",className:"nav-link"},r.a.createElement("i",{className:"fas fa-question"}),"About")))))},I=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},"About contact manager."),r.a.createElement("p",{className:"lead"},"Simple app to manage contacts"),r.a.createElement("p",{className:"text-secondary"},"Version 1.0.0"))},q=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},r.a.createElement("span",{className:"text-danger"},"404 Page Not Found")),r.a.createElement("p",{className:"lead"},"Sorry, this page does not exist."))},U=a(16),G=a(41),L=a(42),R=a(22),X={contacts:[],contact:{}},F=Object(U.c)({contact:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_CONTACTS":return Object(R.a)({},e,{contacts:t.payload});case"GET_CONTACT":return Object(R.a)({},e,{contact:t.payload});case"ADD_CONTACT":return Object(R.a)({},e,{contacts:[t.payload].concat(Object(L.a)(e.contacts))});case"UPDATE_CONTACT":return Object(R.a)({},e,{contacts:e.contacts.map(function(e){return e.id===t.payload.id?e=t.payload:e})});case"DELETE_CONTACT":return Object(R.a)({},e,{contacts:e.contacts.filter(function(e){return e.id!==t.payload})});default:return e}}}),M=[G.a],V=Object(U.e)(F,{},Object(U.d)(U.a.apply(void 0,M),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),W=(a(78),a(79),function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,{store:V},r.a.createElement(p.a,null,r.a.createElement("div",null,r.a.createElement(P,{branding:"Contact Manager"}),r.a.createElement("div",{className:"container"},r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/",component:g}),r.a.createElement(d.a,{exact:!0,path:"/about",component:I}),r.a.createElement(d.a,{exact:!0,path:"/contact/add",component:_}),r.a.createElement(d.a,{exact:!0,path:"/contact/edit/:id",component:D}),r.a.createElement(d.a,{component:q}))))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[43,1,2]]]);
//# sourceMappingURL=main.864f83aa.chunk.js.map