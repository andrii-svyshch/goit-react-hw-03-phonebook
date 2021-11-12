(this["webpackJsonpreact-test-repository"]=this["webpackJsonpreact-test-repository"]||[]).push([[0],{10:function(t,e,n){t.exports={filter:"Filter_filter__2ZfJW"}},11:function(t,e,n){t.exports={item:"ContactList_item__3AhBA"}},19:function(t,e,n){},20:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(7),i=n.n(c),o=n(12),s=n(2),l=n(3),u=n(5),d=n(4),m=n(21),b=n(8),h=n(9),j=n.n(h),f=n(0),p=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={name:t.props.initialName,number:t.props.initialNumber},t.handleNameChange=function(e){var n=e.currentTarget,a=n.name,r=n.value;t.setState(Object(b.a)({},a,r))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({contacts:[],name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(f.jsx)("div",{children:Object(f.jsxs)("form",{className:j.a.form,onSubmit:this.handleSubmit,children:[Object(f.jsx)("label",{htmlFor:"",children:"Name"}),Object(f.jsx)("input",{type:"text",name:"name",value:e,onChange:this.handleNameChange,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0}),Object(f.jsx)("label",{htmlFor:"",children:"Number"}),Object(f.jsx)("input",{type:"tel",name:"number",value:n,onChange:this.handleNameChange,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0}),Object(f.jsx)("button",{type:"submit",children:"Add contact"})]})})}}]),n}(a.Component);p.defaultProps={initialName:"",initialNumber:""};var v=p,O=n(10),x=n.n(O);function C(t){var e=t.value,n=t.onChange;return Object(f.jsx)("div",{className:x.a.filter,children:Object(f.jsxs)("label",{children:["Find contacts by name",Object(f.jsx)("input",{type:"text",value:e,onChange:n})]})})}var g=n(11),y=n.n(g);function S(t){var e=t.contacts,n=t.onDeleteContact;return Object(f.jsx)("ul",{children:e.map((function(t){var e=t.name,a=t.number,r=t.id;return Object(f.jsxs)("li",{className:y.a.item,children:[Object(f.jsxs)("p",{children:[e," : ",a]}),Object(f.jsx)("button",{onClick:function(){return n(r)},children:"Delete"})]},Object(m.a)())}))})}var N=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:t.props.initialContacts,filter:t.props.initialFilter},t.duplicateValidator=function(e){return t.state.contacts.find((function(t){return t.name===e}))},t.contactFormSubmitHandler=function(e){var n=e.name,a=e.number;t.duplicateValidator(n)?alert("".concat(n," is already in contacts")):t.setState((function(t){return{contacts:[{name:n,number:a,id:Object(m.a)()}].concat(Object(o.a)(t.contacts))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getFilteredContacts=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("contacts"));t&&this.setState({contacts:t})}},{key:"componentDidUpdate",value:function(t,e){var n=this.state.contacts;n!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(n))}},{key:"render",value:function(){var t=this.getFilteredContacts(),e=this.state.filter;return Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)("h1",{children:"Phonebook"}),Object(f.jsx)(v,{onSubmit:this.contactFormSubmitHandler}),Object(f.jsx)("h2",{children:"Contacts"}),Object(f.jsx)(C,{value:e,onChange:this.changeFilter}),Object(f.jsx)(S,{contacts:t,onDeleteContact:this.deleteContact})]})}}]),n}(a.Component);N.defaultProps={initialContacts:[],initialFilter:""};var F=N;n(19);i.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(F,{})}),document.getElementById("root"))},9:function(t,e,n){t.exports={form:"ContactForm_form__CH5ae"}}},[[20,1,2]]]);
//# sourceMappingURL=main.3d952a55.chunk.js.map