(window["webpackJsonpreact-firebase-app"]=window["webpackJsonpreact-firebase-app"]||[]).push([[0],{114:function(e,t,a){e.exports=a.p+"static/media/one.f15b96a1.svg"},115:function(e,t,a){e.exports=a.p+"static/media/second.7f4cae36.svg"},116:function(e,t,a){e.exports=a.p+"static/media/third.a034b65e.svg"},124:function(e,t,a){e.exports=a(223)},139:function(e,t,a){},150:function(e,t,a){},151:function(e,t,a){},221:function(e,t,a){},223:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(22),c=a.n(l),o=a(11),i=a(12),s=a(16),u=a(15),d=a(17),m=a(57),p=a(97),h=a(47),y=a(93),f=a.n(y);a(129);f.a.initializeApp({apiKey:"AIzaSyAr-tnxDvQTzaewLLGgNnXBQbxpOHyaUbw",authDomain:"ping-board-c2743.firebaseapp.com",databaseURL:"https://ping-board-c2743.firebaseio.com",projectId:"ping-board-c2743",storageBucket:"",messagingSenderId:"88261141437",appId:"1:88261141437:web:2f8e0157e8751fa84568d4"});var b=f.a.firestore(),E=864e5,g=new Date;function v(e){var t=e.startDate,a=void 0===t?g:t;console.log("TCL: dayToYear -> date",g);var n=a-new Date(g.getFullYear(),0,0)+60*(g.getTimezoneOffset()-g.getTimezoneOffset())*1e3,r=Math.floor(n/E),l=a.getFullYear(),c=("0"+(a.getMonth()+1)).slice(-2),o=l.toString().slice(-2),i=parseInt(o.concat(r.toString()));return{year:l,month:c,dayNumber:r,yearDayNumber:i}}function O(e){var t=e.day,a=t.year.toString().slice(-2),n=t.dayNumber.toString();return parseInt(a.concat(n))}var j=a(110);function k(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function w(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?k(a,!0).forEach((function(t){Object(h.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):k(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var P=new(function(){function e(){Object(o.a)(this,e)}return Object(i.a)(e,[{key:"getCollectionData",value:function(e,t,a){return(t?b.collection(e).orderBy(t,a):b.collection(e)).get().then((function(e){var t=[];return e.forEach((function(e){t.push(e.data())})),t}))}},{key:"dbCollection",value:function(){return{appManifest:"manifest",sections:"sections",players:"players",days:"days"}}},{key:"lastPlayerId",value:function(){return this.players.get().then((function(e){var t=null;return e.forEach((function(e){t=e.id})),t}))}},{key:"addPlayer",value:function(e){var t=e.id,a=e.name,n=e.slackName,r=e.image,l=e.monthlyRecords,c=void 0===l?{}:l,o=e.email,i=e.totalPoints,s=void 0===i?0:i;return b.collection(this.dbCollection().players).doc(t).set({name:a,slackName:n,image:r,monthlyRecords:c,email:o,totalPoints:s}).then((function(e){console.log("the player has beed added")})).catch((function(e){return console.log(e)}))}},{key:"updatePlayer",value:function(e){b.collection(this.dbCollection().players).doc(e.id).set(w({},e)).then((function(e){console.log("the player has beed updated---\x3e ",e)})).catch((function(e){return console.log(e)}))}},{key:"createNewDayEntry",value:function(e){var t=e.dayNumber;return b.collection("days").add({insertDate:new Date,dayNumber:t,rounds:[]}).then((function(e){return e}))}},{key:"addRound",value:function(e){var t=this,a=e.dayNumber,n=e.round,r=function(e){return b.collection("days").doc(e.id).update({rounds:j.firestore.FieldValue.arrayUnion(w({},n))})};return b.collection("days").where("dayNumber","==",a).get().then((function(e){return e.docs[0]?r(e.docs[0]):t.createNewDayEntry({dayNumber:a}).then((function(e){return r(e)}))}))}},{key:"getDayMatches",value:function(e){var t=e.dayNumber;return b.collection("days").where("dayNumber","==",t).get().then((function(e){var t=[];return e.forEach((function(e){t.push(e.data())})),t})).then((function(e){return e})).catch((function(e){console.log("Error getting the results: ",e)}))}},{key:"currentDayNumber",get:function(){return parseInt(O({day:v({})}))}},{key:"players",get:function(){return b.collection(this.dbCollection().players)}},{key:"playersList",get:function(){return b.collection(this.dbCollection().players).orderBy("totalPoints","desc").get().then((function(e){var t=[];return e.forEach((function(e){t.push(w({id:e.id},e.data()))})),t})).catch((function(e){console.log("Error getting the results: ",e)}))}},{key:"todayScores",get:function(){return this.getCollectionData(this.dbCollection().points)}}]),e}()),D=(a(139),a(65)),S=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={appSections:[]},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=P.dbCollection();P.getCollectionData(t.sections).then((function(t){var a=[];return t.forEach((function(e){return a.push(e)})),e.setState({appSections:a}),a}))}},{key:"render",value:function(){var e=this.state.appSections;return r.a.createElement("div",{className:"app-navbar"},r.a.createElement(m.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark"},r.a.createElement(m.a.Brand,{href:"/react-firebase-gh-pages/"},this.props.appName),r.a.createElement(m.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(m.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(p.a,{className:"mr-auto"},e.map((function(e){return r.a.createElement(p.a.Link,{href:e.url,key:e.name},r.a.createElement(D.b,{style:{textDecoration:"none",color:"inherit"},to:"/react-firebase-gh-pages"+e.url}," ",e.name))}))))))}}]),t}(r.a.Component),N=a(66),C=(a(150),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"section-wrapper"},r.a.createElement(N.a,{className:"section section--".concat(this.props.background)},r.a.createElement("div",null,r.a.createElement("h2",{className:"section__title"},this.props.title)),this.props.children)))}}]),t}(r.a.Component)),M=a(122),I=a(33),x=a(26),F=a(21),L=a(117),R=a(25),A=a(114),T=a.n(A),B=a(115),Y=a.n(B),z=a(116),G=a.n(z),J=(a(151),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).card=function(e,t,a){var n=e.rounds;return r.a.createElement(R.a,{className:"card-".concat(e.position),key:t},r.a.createElement("div",{className:"cards-group__image-wrapper"},r.a.createElement(R.a.Img,{variant:"top",src:a[t]})),r.a.createElement(R.a.Body,null,n.length>=1?n.map((function(t,a){return r.a.createElement("div",{key:a},r.a.createElement(R.a.Title,null,t.description),r.a.createElement("ul",null,r.a.createElement("li",null,t.players&&t.players[e.position].name)))})):r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a.Title,null,"there is no data"))),r.a.createElement(R.a.Footer,null,n.length>=1&&r.a.createElement("small",{className:"text-muted"},console.log(n[0]))))},a.state={dayMatches:[]},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=O({day:v({})}),t=this;b.collection("days").where("dayNumber","==",e).get().then((function(e){e.forEach((function(e){t.setState({dayMatches:[].concat(Object(M.a)(t.state.dayMatches),[e.data()])})}))})).catch((function(e){console.log("Error getting the results: ",e)}))}},{key:"render",value:function(){var e=this,t=this.props.cards;this.state.dayMatches[0]&&t.map((function(t){t.rounds=e.state.dayMatches[0].rounds||[]}));var a=[Y.a,T.a,G.a];return r.a.createElement(r.a.Fragment,null,r.a.createElement(I.a,{className:"cards-group"},r.a.createElement(x.a,null,"}",r.a.createElement(F.a,{md:{span:10,offset:1}},r.a.createElement(L.a,null,!!t&&t.forEach((function(e){e.rounds.length})),t.map((function(t,n){return e.card(t,n,a)})))))))}}]),t}(r.a.Component));J.defaultProps={cards:[{position:2,rounds:[]},{position:1,rounds:[]},{position:3,rounds:[]}]};var K=a(67),_=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={players:[],month:null},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=v({}),t=e.year.toString().slice(-2).concat(e.month.toString());this.setState({month:t});var a=this;b.collection("players").orderBy("monthlyRecords.".concat(t),"desc").get().then((function(e){var t=[];e.forEach((function(e){t.push(e.data())})),a.setState({players:t})})).catch((function(e){console.log("Error getting the results: ",e)}))}},{key:"render",value:function(){var e=this.state,t=e.players,a=e.month;return r.a.createElement(r.a.Fragment,null,r.a.createElement(I.a,null,r.a.createElement(x.a,null,r.a.createElement(F.a,{md:{span:10,offset:1}},r.a.createElement(K.a,{striped:!0,bordered:!0,hover:!0,variant:"dark"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"First Name"),r.a.createElement("th",null,"Slack name"),r.a.createElement("th",null,"Points"))),r.a.createElement("tbody",null,t&&t.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,t+1),r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.slackName),r.a.createElement("td",null,e.monthlyRecords[a]))}))))))))}}]),t}(r.a.Component),U=a(40),H=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={players:[]},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;P.players.orderBy("name","asc").get().then((function(t){var a=[];t.forEach((function(e){a.push(e.data())})),e.setState({players:a})})).catch((function(e){console.log("Error getting the results: ",e)}))}},{key:"render",value:function(){var e=this.state.players;return r.a.createElement(r.a.Fragment,null,r.a.createElement(I.a,null,r.a.createElement(x.a,null,r.a.createElement(F.a,{md:{span:10,offset:1}},r.a.createElement(K.a,{striped:!0,bordered:!0,hover:!0,variant:"dark"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"ID"),r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"email"),r.a.createElement("th",null,"Slack name"))),r.a.createElement("tbody",null,e.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,e.id),r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.email),r.a.createElement("td",null,e.slackName))}))))))))}}]),t}(r.a.Component),Q=a(20),W=a(51),V=a(79),X=a(119),$=a(52),q=a(120),Z=a(123),ee=a(68),te=a.n(ee);a(152);function ae(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function ne(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ae(a,!0).forEach((function(t){Object(h.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ae(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var re=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleInput=function(e){e.persist();var t=e.target,n=t.name,r=t.value,l=a.state.round;l[n]=r,a.setState({round:l})},a.handleDateChange=function(e){var t=a.state.round;t.date=e,t.players={},a.setState({round:t,dayInfos:v({startDate:e})})},a.handleAddRound=function(e){e.preventDefault();var t=a.state,n=t.round,r=t.dayInfos;if(Object.keys(n.players).length<3)return a.setState({error:"please choose 3 players!"}),!1;n.insertedBy={},P.addRound({dayNumber:r.yearDayNumber,round:n}).then((function(e){for(var t=n.players,r=0,l=Object.keys(t);r<l.length;r++){var c=l[r];a.updatePlayerPoints(t[c])}a.setState({error:null,playersList:[],round:{players:{},date:null,insertDate:new Date,description:""}})})).catch((function(e){return console.log("there is an error",e)}))},a.handleSelectPlayer=function(e){var t=a.state.round,n=[0,3,2,1],r=e.target,l=r.name,c=r.id,o=l,i=a.state.playersList.filter((function(e){return e.id===c}))[0],s=i.monthlyRecords[a.selectedMonthId(t.date)]||0;i.monthlyRecords[a.selectedMonthId(t.date)]=s+n[o],i.totalPoints=i.totalPoints+n[o],t.players[o]=i,a.setState({round:ne({},t),error:null})},a.state={error:null,playersList:[],round:{players:{},date:null,insertDate:new Date,description:""}},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;P.playersList.then((function(t){e.setState({playersList:t})}))}},{key:"updatePlayerPoints",value:function(e){P.updatePlayer(e)}},{key:"selectedMonthId",value:function(e){var t=v({startDate:e}),a=t.year,n=t.month;return a.toString().slice(-2).concat(n.toString())}},{key:"render",value:function(){var e=this,t=(this.state.round||{}).players;return r.a.createElement(R.a,{style:{backgroundColor:"white",margin:"14px 0",padding:"7px"}},r.a.createElement(N.a,null,r.a.createElement("h2",null,"Add Round"),r.a.createElement("hr",null),r.a.createElement(Q.a.Group,{controlId:"roundDescription"},r.a.createElement(Q.a.Label,null,"Give it a name"),r.a.createElement(Q.a.Control,{type:"text",as:"input",name:"description",onChange:this.handleInput,value:this.state.round.description,placeholder:"like lunch round.."})),r.a.createElement(Q.a,{onSubmit:this.handleAddRound},r.a.createElement(Q.a.Group,{controlId:"roundDate"},r.a.createElement(Q.a.Label,null,"Select round's date"),r.a.createElement("br",null),r.a.createElement(Q.a.Text,{className:"text-muted"},"it's mandatory!"),r.a.createElement(te.a,{selected:this.state.round.date,onChange:this.handleDateChange,maxDate:new Date})),r.a.createElement("hr",null),!!this.state.round.date&&r.a.createElement(Q.a.Row,null,r.a.createElement(X.a,null,r.a.createElement(x.a,null,[{style:"Success",id:1,title:"First Player"},{style:"Primary",id:2,title:"Second Player"},{style:"Secondary",id:3,title:"third Player"}].map((function(a,n){return r.a.createElement(F.a,null,r.a.createElement("h6",null,t[a.id]?t[a.id].name:"-"),r.a.createElement(q.a,{title:a.title,variant:a.style.toLowerCase(),id:"dropdown-variants-".concat(a.style),key:a.id},!!e.state.playersList&&e.state.playersList.map((function(t,n){return r.a.createElement($.a.Item,{key:n,name:a.id,id:t.id,onClick:e.handleSelectPlayer},t.name)}))))}))))),r.a.createElement("br",null),!!this.state.error&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Z.a,{key:4,variant:"warning"},this.state.error),r.a.createElement("br",null)),r.a.createElement(W.a,{variant:"primary",type:"submit"},"Add Round"),r.a.createElement(Q.a.Row,null))))}}]),t}(r.a.Component);a(207);function le(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var ce=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleAddPlayer=function(e){e.preventDefault();var t={},n=new FormData(e.target);for(var r in a.state.playerFields)t[r]=n.get(r);P.addPlayer(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?le(a,!0).forEach((function(t){Object(h.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):le(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},t,{id:a.state.lastPlayerId.toString()})).then((function(e){}))},a.updatePlayerPoints=function(){console.log("update player points")},a.sendSlackMessage=function(){console.log("trying to send slack message")},a.state={lastPlayerId:null,playerFields:{name:{name:"name",label:"Name",type:"text",placeholder:"enter player name"},email:{name:"email",label:"Email",type:"email",placeholder:"enter player email"},password:{name:"password",label:"Password",type:"password",placeholder:"password"},slackName:{name:"slackName",label:"Slack name",type:"text",placeholder:"enter player slack name"},image:{name:"image",label:"Image",type:"text",placeholder:"enter image path"}}},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;P.lastPlayerId().then((function(t){return e.setState({lastPlayerId:parseInt(t)+1})})).catch((function(e){console.log("the player id cant be generated")}))}},{key:"updatePlayersPoints",value:function(){console.log("update the players points")}},{key:"render",value:function(){var e=this,t=this.state.playerFields;return r.a.createElement(r.a.Fragment,null,r.a.createElement(I.a,null,r.a.createElement(x.a,null,r.a.createElement(F.a,{md:{span:10,offset:1}},r.a.createElement("button",{onClick:this.sendSlackMessage}),r.a.createElement(re,null),r.a.createElement(V.a,{defaultActiveKey:"0"},r.a.createElement(R.a,null,r.a.createElement(V.a.Toggle,{as:R.a.Header,eventKey:"1"},"Add Player"),r.a.createElement(V.a.Collapse,{eventKey:"1"},r.a.createElement(R.a.Body,null,r.a.createElement(Q.a,{onSubmit:e.handleAddPlayer},!!t&&Object.keys(t).map((function(e){return r.a.createElement(Q.a.Group,{key:t[e].name},r.a.createElement(Q.a.Label,null,t[e].label),r.a.createElement(Q.a.Control,t[e]))})),r.a.createElement(W.a,{variant:"primary",type:"submit"},"Add new player"))))))))))}}]),t}(r.a.Component),oe=a(78),ie=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={date:null,dateTitle:""},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"handleDateChange",value:function(e){var t,a=new Date(e),n=a.getMonth(),r=a.getFullYear();this.setState({dateTitle:"".concat((t=n,["January","February","March","April","May","June","July","August","September","October","November","December"][t])," ").concat(r)})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(I.a,null,r.a.createElement(x.a,null,r.a.createElement(F.a,{md:{span:6,offset:3}},r.a.createElement("h6",null,this.state.dateTitle),r.a.createElement(oe.a,{className:"mb-3"},r.a.createElement(oe.a.Prepend,null,r.a.createElement(oe.a.Text,{id:"basic-addon1"},"Date"),r.a.createElement(te.a,{selected:this.state.date,onChange:this.handleDateChange.bind(this),maxDate:new Date,dateFormat:"MM.yyyy",showMonthYearPicker:!0})))))))}}]),t}(r.a.Component),se=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(D.a,{basename:"/react-firebase-gh-pages"},r.a.createElement(S,{appName:this.props.name}),r.a.createElement(U.a,{path:"/",exact:!0},r.a.createElement(C,{title:"Todays Records",background:"black"},r.a.createElement(J,null)),r.a.createElement(C,{title:"Monthly Records"},r.a.createElement(_,null))),r.a.createElement(U.a,{path:"/react-firebase-gh-pages/players",exact:!0},r.a.createElement(C,{title:"Players table"},r.a.createElement(H,null))),r.a.createElement(U.a,{path:"/react-firebase-gh-pages/year",exact:!0},r.a.createElement(C,{title:"Yearly table"},r.a.createElement("h2",null,"here is the Yearly table"))),r.a.createElement(U.a,{path:"/react-firebase-gh-pages/month",exact:!0},r.a.createElement(C,{title:"Month"},r.a.createElement(ie,null))),r.a.createElement(U.a,{path:"/react-firebase-gh-pages/control-panel",exact:!0},r.a.createElement(C,{title:"Admin Control"},r.a.createElement(ce,null)))))}}]),t}(r.a.Component),ue=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={appManifest:{appName:"..loading"}},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(se,{name:this.props.name})}}]),t}(r.a.Component);a(221),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(222);!function(){var e=P.dbCollection();P.getCollectionData(e.appManifest).then((function(e){return e[0]})).then((function(e){var t=e||{name:"Two Arcs"};c.a.render(r.a.createElement(ue,{name:t.name}),document.getElementById("root"))}))}(),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[124,1,2]]]);
//# sourceMappingURL=main.d46496f4.chunk.js.map