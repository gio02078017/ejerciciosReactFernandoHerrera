(this["webpackJsonpcalendar-app"]=this["webpackJsonpcalendar-app"]||[]).push([[0],{118:function(e,t,n){},120:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(8),c=n.n(r),o=n(9),s=n(25),i=n(63),l=n(5),u="[ui] Open modal",j="[ui] Close modal",d="[event] Set Active",b="[event] Logout event",m="[event] Add new",O="[event] Clear active event",p="[event] Event updated",f="[event] Event deleted",v="[event] Events loaded",h="[auth] Finish checking login state",x="[auth] Login",g="[auth] Logout",y={modalOpen:!1},N=n(53),w=n(15),k=n.n(w),E={events:[],activeEvent:null},S={checking:!0},C=Object(s.b)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(l.a)(Object(l.a)({},e),{},{modalOpen:!0});case j:return Object(l.a)(Object(l.a)({},e),{},{modalOpen:!1});default:return e}},calendar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(l.a)(Object(l.a)({},e),{},{activeEvent:t.payload});case m:return Object(l.a)(Object(l.a)({},e),{},{events:[].concat(Object(N.a)(e.events),[t.payload])});case O:return Object(l.a)(Object(l.a)({},e),{},{activeEvent:null});case p:return Object(l.a)(Object(l.a)({},e),{},{events:e.events.map((function(e){return e.id===t.payload.id?t.payload:e}))});case f:return Object(l.a)(Object(l.a)({},e),{},{events:e.events.filter((function(t){return t.id!==e.activeEvent.id})),activeEvent:null});case v:return Object(l.a)(Object(l.a)({},e),{},{events:Object(N.a)(t.payload)});case b:return Object(l.a)({},E);default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(l.a)(Object(l.a)(Object(l.a)({},e),t.payload),{},{checking:!1});case h:return Object(l.a)(Object(l.a)({},e),{},{checking:!1});case g:return{checking:!1};default:return e}}}),D="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.c,T=Object(s.d)(C,D(Object(s.a)(i.a))),P=n(34),I=n(10),A=n(16),R=n(24),_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useState)(e),n=Object(A.a)(t,2),r=n[0],c=n[1],o=function(){c(e)},s=function(e){var t=e.target;c(Object(l.a)(Object(l.a)({},r),{},Object(R.a)({},t.name,t.value)))};return[r,s,o]},L=n(12),F=n.n(L),G=n(21),V="https://mern-calendar-gio.herokuapp.com/api",H=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(V,"/").concat(e);return"GET"===n?fetch(a):fetch(a,{method:n,headers:{"Content-type":"application/json"},body:JSON.stringify(t)})},J=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(V,"/").concat(e),r=localStorage.getItem("token")||"";return"GET"===n?fetch(a,{method:n,headers:{"x-token":r}}):fetch(a,{method:n,headers:{"Content-type":"application/json","x-token":r},body:JSON.stringify(t)})},M=n(18),U=n.n(M),B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){return Object(l.a)(Object(l.a)({},e),{},{end:k()(e.end).toDate(),start:k()(e.start).toDate()})}))},X=function(e){return{type:m,payload:e}},q=function(e){return{type:p,payload:e}},z=function(){return{type:f}},K=function(e){return{type:v,payload:e}},Q=function(){return{type:h}},W=function(e){return{type:x,payload:e}},Y=function(){return function(e){localStorage.clear(),e({type:b}),e(Z())}},Z=function(){return{type:g}},$=(n(85),n(2)),ee=function(){var e=Object(o.b)(),t=_({lEmail:"fernando@gmail.com",lPassword:"123456"}),n=Object(A.a)(t,2),a=n[0],r=n[1],c=_({rName:"Nando",rEmail:"nando@gmail.com",rPassword1:"123456",rPassword2:"123456"}),s=Object(A.a)(c,2),i=s[0],l=s[1],u=a.lEmail,j=a.lPassword,d=i.rName,b=i.rEmail,m=i.rPassword1,O=i.rPassword2;return Object($.jsx)("div",{className:"container login-container",children:Object($.jsxs)("div",{className:"row",children:[Object($.jsxs)("div",{className:"col-md-6 login-form-1",children:[Object($.jsx)("h3",{children:"Ingreso"}),Object($.jsxs)("form",{onSubmit:function(t){var n,a;t.preventDefault(),e((n=u,a=j,function(){var e=Object(G.a)(F.a.mark((function e(t){var r,c;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H("auth",{email:n,password:a},"POST");case 2:return r=e.sent,console.log("startLogin resp ",r),e.next=6,r.json();case 6:(c=e.sent).ok?(localStorage.setItem("token",c.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(W({uid:c.uid,name:c.name}))):U.a.fire("Error",c.msg,"error");case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object($.jsx)("div",{className:"form-group",children:Object($.jsx)("input",{type:"text",className:"form-control",placeholder:"Correo",name:"lEmail",value:u,onChange:r})}),Object($.jsx)("div",{className:"form-group",children:Object($.jsx)("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"lPassword",value:j,onChange:r})}),Object($.jsx)("div",{className:"form-group",children:Object($.jsx)("input",{type:"submit",className:"btnSubmit",value:"Login"})})]})]}),Object($.jsxs)("div",{className:"col-md-6 login-form-2",children:[Object($.jsx)("h3",{children:"Registro"}),Object($.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),console.log("handleRegister formRegisterValues ",i),m!==O)return U.a.fire("Error","Las contrase\xf1as deben de ser iguales","error");var n,a,r;console.log("?"),e((n=b,a=m,r=d,function(){var e=Object(G.a)(F.a.mark((function e(t){var c,o;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H("auth/new",{email:n,password:a,name:r},"POST");case 2:return c=e.sent,e.next=5,c.json();case 5:o=e.sent,console.log("startRegister body ",o),o.ok?(localStorage.setItem("token",o.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(W({uid:o.uid,name:o.name}))):U.a.fire("Error",o.msg,"error");case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object($.jsx)("div",{className:"form-group",children:Object($.jsx)("input",{type:"text",className:"form-control",placeholder:"Nombre",name:"rName",value:d,onChange:l})}),Object($.jsx)("div",{className:"form-group",children:Object($.jsx)("input",{type:"email",className:"form-control",placeholder:"Correo",name:"rEmail",value:b,onChange:l})}),Object($.jsx)("div",{className:"form-group",children:Object($.jsx)("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"rPassword1",value:m,onChange:l})}),Object($.jsx)("div",{className:"form-group",children:Object($.jsx)("input",{type:"password",className:"form-control",placeholder:"Repita la contrase\xf1a",name:"rPassword2",value:O,onChange:l})}),Object($.jsx)("div",{className:"form-group",children:Object($.jsx)("input",{type:"submit",className:"btnSubmit",value:"Crear cuenta"})})]})]})]})})},te=n(52),ne=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.auth})).name;return Object($.jsxs)("div",{className:"navbar navbar-dark bg-dark mb-4",children:[Object($.jsx)("span",{className:"navbar-brand",children:t}),Object($.jsxs)("button",{className:"btn btn-outline-danger",onClick:function(){e(Y())},children:[Object($.jsx)("i",{className:"fas fa-sign-out-alt"}),Object($.jsx)("span",{children:" Salir"})]})]})},ae=function(){return{type:u}},re=function(){var e=Object(o.b)();return Object($.jsx)("button",{className:"btn btn-primary fab",onClick:function(){e(ae())},children:Object($.jsx)("i",{className:"fas fa-plus"})})},ce=function(){var e=Object(o.b)();return Object($.jsxs)("button",{className:"btn btn-danger fab-danger",onClick:function(){e(function(){var e=Object(G.a)(F.a.mark((function e(t,n){var a,r,c;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().calendar.activeEvent.id,e.prev=1,e.next=4,J("events/".concat(a),{},"DELETE");case 4:return r=e.sent,e.next=7,r.json();case 7:(c=e.sent).ok?t(z()):U.a.fire("Error",c.msg,"error"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,n){return e.apply(this,arguments)}}())},children:[Object($.jsx)("i",{className:"fas fa-trash"}),Object($.jsx)("span",{children:" Borrar evento "})]})},oe={allDay:"Todo el d\xeda",previous:"<",next:">",today:"Hoy",month:"Mes",week:"Semana",day:"D\xeda",agenda:"Agenda",date:"Fecha",time:"Hora",event:"Evento",noEventsInRange:"No hay eventos en este rango",showMore:function(e){return"+ Ver m\xe1s (".concat(e,")")}},se=function(e){var t=e.event,n=t.title,a=t.user;return Object($.jsxs)("div",{children:[Object($.jsxs)("strong",{children:[" ",n," "]}),Object($.jsxs)("span",{children:["- ",a.name," "]})]})},ie=n(47),le=n.n(ie),ue=n(48),je=n.n(ue),de={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};le.a.setAppElement("#root");var be=k()().minutes(0).seconds(0).add(1,"hours"),me=be.clone().add(1,"hours"),Oe={title:"",notes:"",start:be.toDate(),end:me.toDate()},pe=function(){var e=Object(o.c)((function(e){return e.ui})).modalOpen,t=Object(o.c)((function(e){return e.calendar})).activeEvent,n=Object(o.b)(),r=Object(a.useState)(be.toDate()),c=Object(A.a)(r,2),s=c[0],i=c[1],u=Object(a.useState)(me.toDate()),d=Object(A.a)(u,2),b=d[0],m=d[1],p=Object(a.useState)(!0),f=Object(A.a)(p,2),v=f[0],h=f[1],x=Object(a.useState)(Oe),g=Object(A.a)(x,2),y=g[0],N=g[1],w=y.notes,E=y.title,S=y.start,C=y.end;Object(a.useEffect)((function(){N(t||Oe)}),[t,N]);var D=function(e){var t=e.target;N(Object(l.a)(Object(l.a)({},y),{},Object(R.a)({},t.name,t.value)))},T=function(){n({type:j}),n({type:O}),N(Oe)};return Object($.jsxs)(le.a,{isOpen:e,onRequestClose:T,style:de,closeTimeoutMS:200,className:"modal",overlayClassName:"modal-fondo",children:[Object($.jsxs)("h1",{children:[" ",t?"Editar evento":"Nuevo evento"," "]}),Object($.jsx)("hr",{}),Object($.jsxs)("form",{className:"container",onSubmit:function(e){e.preventDefault();var a,r=k()(S),c=k()(C);return r.isSameOrAfter(c)?U.a.fire("Error","La fecha fin debe de ser mayor a la fecha de inicio","error"):E.trim().length<2?h(!1):(n(t?(a=y,function(){var e=Object(G.a)(F.a.mark((function e(t){var n,r;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,J("events/".concat(a.id),a,"PUT");case 3:return n=e.sent,e.next=6,n.json();case 6:(r=e.sent).ok?t(q(a)):U.a.fire("Error",r.msg,"error"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()):function(e){return function(){var t=Object(G.a)(F.a.mark((function t(n,a){var r,c,o,s,i;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a().auth,c=r.uid,o=r.name,t.prev=1,t.next=4,J("events",e,"POST");case 4:return s=t.sent,t.next=7,s.json();case 7:i=t.sent,console.log(i),i.ok&&(e.id=i.evento.id,e.user={_id:c,name:o},console.log(e),n(X(e))),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(1),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(e,n){return t.apply(this,arguments)}}()}(Object(l.a)(Object(l.a)({},y),{},{id:(new Date).getTime(),user:{_id:"123",name:"Fernando"}}))),h(!0),void T())},children:[Object($.jsxs)("div",{className:"form-group",children:[Object($.jsx)("label",{children:"Fecha y hora inicio"}),Object($.jsx)(je.a,{onChange:function(e){i(e),N(Object(l.a)(Object(l.a)({},y),{},{start:e}))},value:s,className:"form-control"})]}),Object($.jsxs)("div",{className:"form-group",children:[Object($.jsx)("label",{children:"Fecha y hora fin"}),Object($.jsx)(je.a,{onChange:function(e){m(e),N(Object(l.a)(Object(l.a)({},y),{},{end:e}))},value:b,minDate:s,className:"form-control"})]}),Object($.jsx)("hr",{}),Object($.jsxs)("div",{className:"form-group",children:[Object($.jsx)("label",{children:"Titulo y notas"}),Object($.jsx)("input",{type:"text",className:"form-control ".concat(!v&&"is-invalid"," "),placeholder:"T\xedtulo del evento",name:"title",autoComplete:"off",value:E,onChange:D}),Object($.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Una descripci\xf3n corta"})]}),Object($.jsxs)("div",{className:"form-group",children:[Object($.jsx)("textarea",{type:"text",className:"form-control",placeholder:"Notas",rows:"5",name:"notes",value:w,onChange:D}),Object($.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Informaci\xf3n adicional"})]}),Object($.jsxs)("button",{type:"submit",className:"btn btn-outline-primary btn-block",children:[Object($.jsx)("i",{className:"far fa-save"}),Object($.jsx)("span",{children:" Guardar"})]})]})]})};n(115),n(116);k.a.locale("es");var fe=Object(te.b)(k.a),ve=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.calendar})),n=t.events,r=t.activeEvent,c=Object(o.c)((function(e){return e.auth})).uid,s=Object(a.useState)(localStorage.getItem("lastView")||"month"),i=Object(A.a)(s,2),l=i[0],u=i[1];Object(a.useEffect)((function(){e(function(){var e=Object(G.a)(F.a.mark((function e(t){var n,a,r;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,J("events");case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,r=B(a.eventos),t(K(r)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}())}),[e]);return console.log("CalendarScreen events ",n),Object($.jsxs)("div",{className:"calendar-screen",children:[Object($.jsx)(ne,{}),Object($.jsx)(te.a,{localizer:fe,events:n,startAccessor:"start",endAccessor:"end",messages:oe,eventPropGetter:function(e,t,n,a){return{style:{backgroundColor:c===e.user._id?"#367CF7":"#465660",borderRadius:"0px",opacity:.8,display:"block",color:"white"}}},onDoubleClickEvent:function(t){e(ae())},onSelectEvent:function(t){e({type:d,payload:t})},onView:function(e){u(e),localStorage.setItem("lastView",e)},onSelectSlot:function(e){},selectable:!0,view:l,components:{event:se}}),Object($.jsx)(pe,{}),Object($.jsx)(re,{}),r&&Object($.jsx)(ce,{})]})},he=n(37),xe=["isAuthenticated","component"],ge=function(e){var t=e.isAuthenticated,n=e.component,a=Object(he.a)(e,xe);return Object($.jsx)(I.b,Object(l.a)(Object(l.a)({},a),{},{component:function(e){return t?Object($.jsx)(I.a,{to:"/"}):Object($.jsx)(n,Object(l.a)({},e))}}))},ye=["isAuthenticated","component"],Ne=function(e){var t=e.isAuthenticated,n=e.component,a=Object(he.a)(e,ye);return Object($.jsx)(I.b,Object(l.a)(Object(l.a)({},a),{},{component:function(e){return t?Object($.jsx)(n,Object(l.a)({},e)):Object($.jsx)(I.a,{to:"/login"})}}))},we=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.auth})),n=t.checking,r=t.uid;return Object(a.useEffect)((function(){e(function(){var e=Object(G.a)(F.a.mark((function e(t){var n,a;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J("auth/renew");case 2:return n=e.sent,e.next=5,n.json();case 5:(a=e.sent).ok?(localStorage.setItem("token",a.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(W({uid:a.uid,name:a.name}))):t(Q());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),n?Object($.jsx)("h5",{children:"Espere..."}):Object($.jsx)(P.a,{children:Object($.jsx)("div",{children:Object($.jsxs)(I.d,{children:[Object($.jsx)(ge,{exact:!0,path:"/login",component:ee,isAuthenticated:!!r}),Object($.jsx)(Ne,{exact:!0,path:"/",component:ve,isAuthenticated:!!r}),Object($.jsx)(I.a,{to:"/"})]})})})},ke=function(){return Object($.jsx)(o.a,{store:T,children:Object($.jsx)(we,{})})};n(118);c.a.render(Object($.jsx)(ke,{}),document.getElementById("root"))},85:function(e,t,n){}},[[120,1,2]]]);
//# sourceMappingURL=main.350ef620.chunk.js.map