(function(e){function t(t){for(var i,n,s=t[0],l=t[1],u=t[2],c=0,d=[];c<s.length;c++)n=s[c],r[n]&&d.push(r[n][0]),r[n]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);p&&p(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],i=!0,n=1;n<a.length;n++){var s=a[n];0!==r[s]&&(i=!1)}i&&(o.splice(t--,1),e=l(l.s=a[0]))}return e}var i={},n={"app~d0ae3f07":0},r={"app~d0ae3f07":0},o=[];function s(e){return l.p+"js/"+({"about~1933250a":"about~1933250a"}[e]||e)+"."+{"about~1933250a":"bca7c80d"}[e]+".js"}function l(t){if(i[t])return i[t].exports;var a=i[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(e){var t=[],a={"about~1933250a":1};n[e]?t.push(n[e]):0!==n[e]&&a[e]&&t.push(n[e]=new Promise(function(t,a){for(var i="css/"+({"about~1933250a":"about~1933250a"}[e]||e)+"."+{"about~1933250a":"0e433876"}[e]+".css",r=l.p+i,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var u=o[s],c=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(c===i||c===r))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],c=u.getAttribute("data-href");if(c===i||c===r)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var i=t&&t.target&&t.target.src||r,o=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");o.request=i,delete n[e],p.parentNode.removeChild(p),a(o)},p.href=r;var v=document.getElementsByTagName("head")[0];v.appendChild(p)}).then(function(){n[e]=0}));var i=r[e];if(0!==i)if(i)t.push(i[2]);else{var o=new Promise(function(t,a){i=r[e]=[t,a]});t.push(i[2]=o);var u,c=document.createElement("script");c.charset="utf-8",c.timeout=120,l.nc&&c.setAttribute("nonce",l.nc),c.src=s(e),u=function(t){c.onerror=c.onload=null,clearTimeout(d);var a=r[e];if(0!==a){if(a){var i=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src,o=new Error("Loading chunk "+e+" failed.\n("+i+": "+n+")");o.type=i,o.request=n,a[1](o)}r[e]=void 0}};var d=setTimeout(function(){u({type:"timeout",target:c})},12e4);c.onerror=c.onload=u,document.head.appendChild(c)}return Promise.all(t)},l.m=e,l.c=i,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)l.d(a,i,function(t){return e[t]}.bind(null,i));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var p=c;o.push([0,"vendor~app~253ae210","vendor~app~2b13b260","vendor~app~7d359b94","vendor~app~fdc6512a","vendor~app~f532fb41","vendor~app~daa565d3"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"1d85":function(e,t,a){"use strict";var i=a("ac47"),n=a.n(i);n.a},"21aa":function(e){e.exports={day:"dag",month:"måned",year:"år",first_name:"Fornavn",first_name_hint:"Navn på ansøger, som er ansvarlig og indestår for ansøgningen.",last_name:"Efternavn",email:"Email",email_hint:"Angiv den e-mail adresse, der skal anvendes til kommunikation med fonden.",phone:"Telefon",phone_hint:"Angiv telefon for kontakt",organisation_name:"Forenings- eller organisationsnavn",organisation_name_hint:"Navn på den organisation / forening / universitet / sygehus der ansøges på vegne af.",address:"Adresse",zip_code:"Postnummer",city:"By",cvr_no:"CVR nummer",project_title:"Projekttitel",project_title_hint:"En kortfattet projekttitel. Ved eventuel bevilling af tilskud vil projekttitlen sammen med organisationens / foreningens navn fremgå af Spar Nord Fondens hjemmeside.",short_project_description:"Kort projektbeskrivelse",short_project_description_hint:"En kort beskrivelse af projektet der uddyber projekttitlen. Teksten skal være i lægmandssprog og være egnet til formidling Max. 1.000 tegn.",in_depth_project_description:"Uddybende projektbeskrivelse",in_depth_project_description_hint:"Vedhæft uddybende materiale til ansøgningen Upload venligst i følgende format – PDF.",category:"Kategori",category_hint:"Vælg det område, der bedst dækker projektets formål",expected_project_start:"Forventet projektstart",expected_project_end:"Forventet projektslut",budget:"Budget",applied_amount:"Ansøgt beløb",project:"Projektet",applicant:"Ansøger",contact_person:"Kontaktperson",documents:"Dokumenter",all_files_must_be_pdf:"Alle filer skal være i PDF format",articles_of_association:"Vedtægter",articles_of_association_hint:"I foreninger oplyses om vedtægter Upload venligst i følgende formater – PDF.",board_combination:"Bestyrelsessammensætning",board_combination_hint:"I foreninger oplyses om bestyrelsen Upload venligst i følgende formater – PDF.",accountancy:"Regnskab",accountancy_hint:"I foreninger oplyses seneste regnskab Upload venligst i følgende formater – PDF.",bank_info:"Bankoplysninger",bank_name:"Pengeinstituttets navn",bank_account_ownership:"Dokumentation for ejerskab af bankkontoen",reg_no:"Reg nr.",account_no:"Konto nr.",more_info:"Yderligere oplysninger",consent_declaration:"Samtykke",privacy_policy:"Privatlivspolitik",send_application:"Send ansøgning"}},"30d5":function(e,t,a){"use strict";var i=a("74d1"),n=a.n(i);n.a},3602:function(e,t,a){},4487:function(e,t,a){},"49f8":function(e,t,a){var i={"./da.json":"21aa"};function n(e){var t=r(e);return a(t)}function r(e){var t=i[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}n.keys=function(){return Object.keys(i)},n.resolve=r,e.exports=n,n.id="49f8"},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("097d");var i=a("a026"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"govuk-template__body",attrs:{id:"app"}},[e._m(0),a("div",{staticClass:"govuk-width-container"},[a("router-view")],1)])},r=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("header",{staticClass:"govuk-header ",attrs:{role:"banner","data-module":"header"}},[i("div",{staticClass:"govuk-header__container govuk-width-container"},[i("div",{staticClass:"govuk-header__logo"},[i("a",{staticClass:"govuk-header__link govuk-header__link--homepage",attrs:{href:"#"}},[i("span",{staticClass:"govuk-header__logotype"},[i("img",{attrs:{src:a("9b19"),onerror:"this.src='./assets/logo-fallback.png'"}})])])])])])}],o={name:"app"},s=o,l=(a("5c0b"),a("2877")),u=Object(l["a"])(s,n,r,!1,null,null,null);u.options.__file="App.vue";var c=u.exports,d=(a("4917"),a("ac6a"),a("a925"));function p(){var e=a("49f8"),t={};return e.keys().forEach(function(a){var i=a.match(/([A-Za-z0-9-_]+)\./i);if(i&&i.length>1){var n=i[1];t[n]=e(a)}}),t}i["a"].use(d["a"]);var v=new d["a"]({locale:"da",fallbackLocale:"da",messages:p()}),f=a("a768"),m=a("93bc"),g=a("0b0f"),_=a.n(g),h=a("0874"),b=(a("50ef"),a("9f71"),a("e96c"),a("2fac"),a("6481"),a("a5e7"),a("2ead"),a("28a5"),{getMessage:function(e,t){return"".concat(e," må maksimalt indeholde ").concat(t," ord.")},validate:function(e,t){var a=e.split(" ");return a.length<=t}}),k={getMessage:function(e){return"".concat(e," skal indeholde et gyldigt CVR nummer.")},validate:function(e){var t=["00000000","11111111","22222222","33333333","44444444","55555555","66666666","77777777","88888888","99999999"];return t.indexOf(e)<0}},x=a("26ae"),y=a.n(x),C=a("8c4f"),$=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",{staticClass:"govuk-heading-xl govuk-!-padding-top-9"},[e._v("Ansøgning til Spar Nord Fonden")]),a("div",{staticClass:"govuk-!-padding-top-2"},[a("form",{on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.submitForm(t)}}},[a("v-headline",{attrs:{title:e.$t("applicant"),icon:"user"}}),a("v-input-text",{attrs:{label:e.$t("cvr_no"),validate:"required|digits:8|cvr",size:"8"},model:{value:e.application.cvr_no,callback:function(t){e.$set(e.application,"cvr_no",t)},expression:"application.cvr_no"}}),a("v-input-text",{attrs:{label:e.$t("organisation_name"),hint:e.$t("organisation_name_hint"),validate:"required"},model:{value:e.application.organisation_name,callback:function(t){e.$set(e.application,"organisation_name",t)},expression:"application.organisation_name"}}),a("v-input-text",{attrs:{label:e.$t("address"),validate:"required"},model:{value:e.application.address,callback:function(t){e.$set(e.application,"address",t)},expression:"application.address"}}),a("div",{staticClass:"govuk-grid-row"},[a("div",{staticClass:"govuk-grid-column-one-third"},[a("v-input-text",{attrs:{label:e.$t("zip_code"),validate:"required|digits:4"},model:{value:e.application.zip_code,callback:function(t){e.$set(e.application,"zip_code",t)},expression:"application.zip_code"}})],1),a("div",{staticClass:"govuk-grid-column-two-thirds"},[a("v-input-text",{attrs:{label:e.$t("city"),validate:"required"},model:{value:e.application.city,callback:function(t){e.$set(e.application,"city",t)},expression:"application.city"}})],1)]),a("hr",{staticClass:"govuk-section-break govuk-section-break--m govuk-section-break--visible govuk-!-padding-top-3"}),a("v-headline",{attrs:{title:e.$t("contact_person"),icon:"user"}}),a("v-input-text",{attrs:{label:e.$t("first_name"),hint:e.$t("first_name_hint"),validate:"required"},model:{value:e.application.first_name,callback:function(t){e.$set(e.application,"first_name",t)},expression:"application.first_name"}}),a("v-input-text",{attrs:{label:e.$t("last_name"),validate:"required"},model:{value:e.application.last_name,callback:function(t){e.$set(e.application,"last_name",t)},expression:"application.last_name"}}),a("v-input-text",{attrs:{label:e.$t("email"),hint:e.$t("email_hint"),validate:"required|email"},model:{value:e.application.email,callback:function(t){e.$set(e.application,"email",t)},expression:"application.email"}}),a("v-input-text",{attrs:{label:e.$t("phone"),hint:e.$t("phone_hint"),validate:"required|digits:8"},model:{value:e.application.phone,callback:function(t){e.$set(e.application,"phone",t)},expression:"application.phone"}}),a("hr",{staticClass:"govuk-section-break govuk-section-break--m govuk-section-break--visible govuk-!-padding-top-3"}),a("v-headline",{attrs:{title:e.$t("project"),icon:"home"}}),a("v-input-text",{attrs:{label:e.$t("project_title"),hint:e.$t("project_title_hint"),validate:"required|max:250"},model:{value:e.application.project_title,callback:function(t){e.$set(e.application,"project_title",t)},expression:"application.project_title"}}),a("v-input-textarea",{attrs:{label:e.$t("short_project_description"),hint:e.$t("short_project_description_hint"),validate:"required|word_limit:500"},model:{value:e.application.short_project_description,callback:function(t){e.$set(e.application,"short_project_description",t)},expression:"application.short_project_description"}}),a("v-input-upload",{attrs:{label:e.$t("in_depth_project_description"),hint:e.$t("in_depth_project_description_hint"),validate:"required|size:2048"},model:{value:e.application.in_depth_project_description,callback:function(t){e.$set(e.application,"in_depth_project_description",t)},expression:"application.in_depth_project_description"}}),a("v-input-radio",{attrs:{label:e.$t("category"),hint:e.$t("category_hint"),options:e.radioOptions,validate:"required"},model:{value:e.application.category,callback:function(t){e.$set(e.application,"category",t)},expression:"application.category"}}),a("div",{staticClass:"govuk-grid-row"},[a("div",{staticClass:"govuk-grid-column-one-half"},[a("v-input-date",{attrs:{label:e.$t("expected_project_start"),validate:"required"}})],1),a("div",{staticClass:"govuk-grid-column-one-half"},[a("v-input-date",{attrs:{label:e.$t("expected_project_end"),validate:"required"}})],1)]),a("hr",{staticClass:"govuk-section-break govuk-section-break--m govuk-section-break--visible govuk-!-padding-top-3"}),a("v-headline",{attrs:{title:e.$t("budget"),icon:"dollar-sign"}}),a("v-input-currency",{attrs:{label:e.$t("applied_amount"),validate:"required"},model:{value:e.application.applied_amount,callback:function(t){e.$set(e.application,"applied_amount",t)},expression:"application.applied_amount"}}),a("v-input-upload",{attrs:{label:e.$t("budget"),validate:"required|size:2048"},model:{value:e.application.budget,callback:function(t){e.$set(e.application,"budget",t)},expression:"application.budget"}}),a("hr",{staticClass:"govuk-section-break govuk-section-break--m govuk-section-break--visible govuk-!-padding-top-3"}),a("v-headline",{attrs:{title:e.$t("documents"),icon:"paperclip"}}),a("div",{staticClass:"govuk-inset-text"},[e._v("\n      "+e._s(e.$t("all_files_must_be_pdf"))+"\n    ")]),a("v-input-upload",{attrs:{label:e.$t("articles_of_association"),hint:e.$t("articles_of_association_hint"),validate:"required|size:2048"},model:{value:e.application.articles_of_association,callback:function(t){e.$set(e.application,"articles_of_association",t)},expression:"application.articles_of_association"}}),a("v-input-upload",{attrs:{label:e.$t("board_combination"),hint:e.$t("board_combination_hint"),validate:"size:2048"},model:{value:e.application.board_combination,callback:function(t){e.$set(e.application,"board_combination",t)},expression:"application.board_combination"}}),a("v-input-upload",{attrs:{label:e.$t("accountancy"),hint:e.$t("accountancy_hint"),validate:"size:2048"},model:{value:e.application.accountancy,callback:function(t){e.$set(e.application,"accountancy",t)},expression:"application.accountancy"}}),a("hr",{staticClass:"govuk-section-break govuk-section-break--m govuk-section-break--visible govuk-!-padding-top-3"}),a("v-headline",{attrs:{title:e.$t("bank_info"),icon:"university"}}),a("v-input-text",{attrs:{label:e.$t("bank_name"),validate:"required"},model:{value:e.application.bank_name,callback:function(t){e.$set(e.application,"bank_name",t)},expression:"application.bank_name"}}),a("div",{staticClass:"govuk-grid-row"},[a("div",{staticClass:"govuk-grid-column-one-third"},[a("v-input-text",{attrs:{label:e.$t("reg_no"),validate:"required|max:4"},model:{value:e.application.reg_no,callback:function(t){e.$set(e.application,"reg_no",t)},expression:"application.reg_no"}})],1),a("div",{staticClass:"govuk-grid-column-two-thirds"},[a("v-input-text",{attrs:{label:e.$t("account_no"),validate:"required|max:8"},model:{value:e.application.account_no,callback:function(t){e.$set(e.application,"account_no",t)},expression:"application.account_no"}})],1)]),a("v-input-upload",{attrs:{label:e.$t("bank_account_ownership"),validate:"required|size:2048"},model:{value:e.application.bank_account_ownership,callback:function(t){e.$set(e.application,"bank_account_ownership",t)},expression:"application.bank_account_ownership"}}),a("hr",{staticClass:"govuk-section-break govuk-section-break--m govuk-section-break--visible govuk-!-padding-top-3"}),a("v-headline",{attrs:{title:e.$t("more_info"),icon:"file-alt"}}),a("v-input-checkbox",{attrs:{label:e.$t("consent_declaration"),validate:"required"},model:{value:e.application.consent_declaration,callback:function(t){e.$set(e.application,"consent_declaration",t)},expression:"application.consent_declaration"}},[e._v("\n      jeg er en "),a("a",{attrs:{href:"#"}},[e._v("samtykkeerklæring")])]),a("v-input-checkbox",{attrs:{label:e.$t("privacy_policy"),validate:"required"},model:{value:e.application.privacy_policy,callback:function(t){e.$set(e.application,"privacy_policy",t)},expression:"application.privacy_policy"}},[e._v("\n      jeg er en privatlivspolitik\n    ")]),a("button",{staticClass:"govuk-button govuk-button--start",attrs:{type:"submit"}},[e._v("\n      "+e._s(e.$t("send_application"))+"\n    ")])],1)])])},w=[],V=a("a4bb"),j=a.n(V),N=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h2",{staticClass:"govuk-heading-l"},[e.hasIcon?a("v-icon",{attrs:{name:e.icon,scale:"2"}}):e._e(),e._v("\n    "+e._s(e.title)+"\n  ")],1)])},I=[],q={name:"VHeadline",props:{title:String,icon:String},computed:{hasIcon:function(){return null!=this.icon}}},P=q,O=(a("ff43"),Object(l["a"])(P,N,I,!1,null,"1a48ab84",null));O.options.__file="VHeadline.vue";var A=O.exports,E=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"govuk-form-group",class:e.errors.has(e.identifier)?"govuk-form-group--error":""},[e.hasLabel?a("label",{staticClass:"govuk-label",attrs:{for:e.identifier}},[e._v("\n    "+e._s(e.label)+"\n  ")]):e._e(),e.hasHint?a("span",{staticClass:"govuk-hint"},[e._v("\n    "+e._s(e.hint)+"\n  ")]):e._e(),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has(e.identifier),expression:"errors.has(identifier)"}],staticClass:"govuk-error-message"},[e._v("\n    "+e._s(e.errors.first(e.identifier))+"\n  ")]),a("input",{directives:[{name:"validate",rawName:"v-validate",value:e.validate,expression:"validate"},{name:"model",rawName:"v-model",value:e.internalValue,expression:"internalValue"}],staticClass:"govuk-input",class:e.inputWidth,attrs:{id:e.identifier,name:e.identifier,"data-vv-as":e.label,"data-vv-validate-on":"blur",type:"text",maxlength:e.maxLength},domProps:{value:e.internalValue},on:{input:function(t){t.target.composing||(e.internalValue=t.target.value)}}})])},S=[],z=(a("6762"),a("2fdb"),a("c5f6"),i["a"].extend({name:"MoInputBase",inject:{$validator:"$validator"},props:{value:null,id:{type:[String,Number],default:null},label:{type:String,default:null},hint:{type:String,default:null},required:{type:Boolean,default:!1},validate:{type:String,default:null},disabled:{type:Boolean,default:!1}},data:function(){return{internalValue:null}},watch:{internalValue:function(e){this.$emit("input",e)}},computed:{identifier:function(){return this.id?this.id:"v-input-"+this._uid},hasLabel:function(){return null!=this.label},hasHint:function(){return null!=this.hint},isRequired:function(){return!this.disabled&&this.required}}})),D={extends:z,name:"VInputText",props:{size:{type:[Number,String],default:null}},computed:{inputWidth:function(){return this.size?"govuk-input--width-".concat(this.size):""},maxLength:function(){for(var e=["max","digits"],t=null,a=this.validate.split("|"),i=0;i<a.length;i++){for(var n=0;n<e.length;n++)if(a[i].includes(e[n])){t=a[i].split(":")[1];break}if(null!=t)break}return t}}},F=D,T=(a("30d5"),Object(l["a"])(F,E,S,!1,null,"1c1395e6",null));T.options.__file="VInputText.vue";var L=T.exports,M=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"govuk-form-group",class:e.errors.has(e.identifier)?"govuk-form-group--error":""},[a("fieldset",{staticClass:"govuk-fieldset"},[a("legend",{staticClass:"govuk-fieldset__legend govuk-fieldset__legend--xl"},[e.hasLabel?a("label",{staticClass:"govuk-label"},[e._v("\n        "+e._s(e.label)+"\n      ")]):e._e()]),e.hasHint?a("span",{staticClass:"govuk-hint",attrs:{id:"changed-name-hint"}},[e._v("\n      "+e._s(e.hint)+"\n    ")]):e._e(),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has(e.identifier),expression:"errors.has(identifier)"}],staticClass:"govuk-error-message"},[e._v("\n      "+e._s(e.errors.first(e.identifier))+"\n    ")]),a("div",{staticClass:"govuk-radios"},e._l(e.options,function(t,i){return a("div",{key:i,staticClass:"govuk-radios__item"},[a("input",{directives:[{name:"validate",rawName:"v-validate",value:e.validate,expression:"validate"},{name:"model",rawName:"v-model",value:e.internalValue,expression:"internalValue"}],staticClass:"govuk-radios__input",attrs:{id:e.identifier+"-"+i,name:e.identifier,type:"radio","data-vv-as":e.label},domProps:{value:t.uuid,checked:e._q(e.internalValue,t.uuid)},on:{change:function(a){e.internalValue=t.uuid}}}),a("label",{staticClass:"govuk-label govuk-radios__label",attrs:{for:e.identifier+"-"+i}},[e._v("\n          "+e._s(t.label)+"\n        ")])])}),0)])])},R=[],H={extends:z,name:"VInputRadio",props:{options:{type:Array,default:function(){return[]}}}},U=H,B=(a("1d85"),Object(l["a"])(U,M,R,!1,null,"576402c3",null));B.options.__file="VInputRadio.vue";var K=B.exports,W=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"govuk-form-group",class:e.errors.has(e.identifier)?"govuk-form-group--error":""},[e.hasLabel?a("label",{staticClass:"govuk-label",attrs:{for:e.identifier}},[e._v("\n    "+e._s(e.label)+"\n  ")]):e._e(),e.hasHint?a("span",{staticClass:"govuk-hint",attrs:{id:"changed-name-hint"}},[e._v("\n    "+e._s(e.hint)+"\n  ")]):e._e(),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has(e.identifier),expression:"errors.has(identifier)"}],staticClass:"govuk-error-message"},[e._v("\n    "+e._s(e.errors.first(e.identifier))+"\n  ")]),a("div",[a("div",{staticClass:"file-upload govuk-button"},[a("v-icon",{attrs:{name:"cloud-upload-alt",scale:"2"}}),a("input",{directives:[{name:"validate",rawName:"v-validate",value:e.validate,expression:"validate"}],ref:e.identifier,staticClass:"upload",attrs:{type:"file",id:e.identifier,name:e.identifier,accept:"application/pdf","data-vv-as":e.label},on:{change:function(t){e.onChange(t)}}})],1),a("span",{staticClass:"govuk-body govuk-!-padding-left-2"},[e.fileName?a("span",[a("i",[e._v(e._s(e.fileName))])]):a("span",[e._v("Tilføj din fil")])])])])},Y=[],J=(a("7f7f"),{extends:z,name:"VInputUpload",data:function(){return{fileName:null}},methods:{onChange:function(e){var t=e.target.files[0];this.fileName=t.name,this.$emit("input",t)}}}),Z=J,G=(a("cece"),Object(l["a"])(Z,W,Y,!1,null,"1812df2a",null));G.options.__file="VInputUpload.vue";var Q=G.exports,X=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"govuk-form-group",class:e.errors.has(e.identifier)?"govuk-form-group--error":""},[a("fieldset",{staticClass:"govuk-fieldset",attrs:{"aria-describedby":"dob-hint",role:"group"}},[e.hasLabel?a("label",{staticClass:"govuk-label",attrs:{for:e.identifier}},[e._v("\n    "+e._s(e.label)+"\n    ")]):e._e(),e.hasHint?a("span",{staticClass:"govuk-hint"},[e._v("\n      "+e._s(e.hint)+"\n    ")]):e._e(),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has(e.identifier),expression:"errors.has(identifier)"}],staticClass:"govuk-error-message"},[e._v("\n      "+e._s(e.errors.first(e.identifier))+"\n    ")]),a("datepicker",{attrs:{"input-class":"govuk-input","calendar-class":"govuk-body",language:e.da,format:"dd-MM-yy","monday-first":""},model:{value:e.internalValue,callback:function(t){e.internalValue=t},expression:"internalValue"}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.internalValue,expression:"internalValue"},{name:"validate",rawName:"v-validate",value:e.validate,expression:"validate"}],attrs:{name:e.identifier,id:e.identifier,"data-vv-as":e.label,type:"hidden"},domProps:{value:e.internalValue},on:{input:function(t){t.target.composing||(e.internalValue=t.target.value)}}})],1)])},ee=[],te=a("fa33"),ae=a("2430"),ie={extends:z,name:"VInputDate",components:{Datepicker:te["a"]},data:function(){return{da:ae["a"],selected:null}}},ne=ie,re=(a("a725"),Object(l["a"])(ne,X,ee,!1,null,"e9864472",null));re.options.__file="VInputDate.vue";var oe=re.exports,se=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"govuk-form-group",class:e.errors.has(e.identifier)?"govuk-form-group--error":""},[a("fieldset",{staticClass:"govuk-fieldset"},[e.hasLabel?a("label",{staticClass:"govuk-label",attrs:{for:e.identifier}},[e._v("\n      "+e._s(e.label)+"\n    ")]):e._e(),e.hasHint?a("span",{staticClass:"govuk-hint",attrs:{id:"changed-name-hint"}},[e._v("\n      "+e._s(e.hint)+"\n    ")]):e._e(),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has(e.identifier),expression:"errors.has(identifier)"}],staticClass:"govuk-error-message"},[e._v("\n      "+e._s(e.errors.first(e.identifier))+"\n    ")]),a("div",{staticClass:"govuk-checkboxes"},[a("div",{staticClass:"govuk-checkboxes__item"},[a("input",{directives:[{name:"validate",rawName:"v-validate",value:e.validate,expression:"validate"},{name:"model",rawName:"v-model",value:e.internalValue,expression:"internalValue"}],staticClass:"govuk-checkboxes__input",attrs:{id:e.identifier,name:e.identifier,type:"checkbox","data-vv-as":e.label},domProps:{checked:Array.isArray(e.internalValue)?e._i(e.internalValue,null)>-1:e.internalValue},on:{change:function(t){var a=e.internalValue,i=t.target,n=!!i.checked;if(Array.isArray(a)){var r=null,o=e._i(a,r);i.checked?o<0&&(e.internalValue=a.concat([r])):o>-1&&(e.internalValue=a.slice(0,o).concat(a.slice(o+1)))}else e.internalValue=n}}}),a("label",{staticClass:"govuk-label govuk-checkboxes__label"},[e._t("default")],2)])])])])},le=[],ue={extends:z,name:"VInputCheckbox"},ce=ue,de=(a("ed50"),Object(l["a"])(ce,se,le,!1,null,"29ec809d",null));de.options.__file="VInputCheckbox.vue";var pe=de.exports,ve=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"govuk-character-count"},[a("div",{staticClass:"govuk-form-group",class:e.errors.has(e.identifier)?"govuk-form-group--error":""},[e.hasLabel?a("label",{staticClass:"govuk-label",attrs:{for:e.identifier}},[e._v("\n      "+e._s(e.label)+"\n    ")]):e._e(),e.hasHint?a("span",{staticClass:"govuk-hint"},[e._v("\n      "+e._s(e.hint)+"\n    ")]):e._e(),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has(e.identifier),expression:"errors.has(identifier)"}],staticClass:"govuk-error-message"},[e._v("\n      "+e._s(e.errors.first(e.identifier))+"\n    ")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.internalValue,expression:"internalValue"},{name:"validate",rawName:"v-validate",value:e.validate,expression:"validate"}],staticClass:"govuk-textarea",attrs:{id:e.identifier,name:e.identifier,rows:"5","data-vv-as":e.label},domProps:{value:e.internalValue},on:{input:function(t){t.target.composing||(e.internalValue=t.target.value)}}})]),a("span",{staticClass:"govuk-hint govuk-character-count__message"},[e._v("\n    Du har "+e._s(e.maxWordCount-e.wordCount)+" ord tilbage.\n  ")])])},fe=[],me={extends:z,name:"VInputTextarea",computed:{maxWordCount:function(){for(var e="word_limit",t=null,a=this.validate.split("|"),i=0;i<a.length;i++)if(a[i].includes(e)){t=a[i].split(":")[1];break}return t},wordCount:function(){if(null!=this.internalValue){var e=this.internalValue.split(" ");return""===e[e.length-1]?e.length-1:e.length}return 0}}},ge=me,_e=(a("7b2b"),Object(l["a"])(ge,ve,fe,!1,null,"ad9b20a0",null));_e.options.__file="VInputTextarea.vue";var he=_e.exports,be=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"govuk-form-group",class:e.errors.has(e.identifier)?"govuk-form-group--error":""},[e.hasLabel?a("label",{staticClass:"govuk-label",attrs:{for:e.identifier}},[e._v("\n    "+e._s(e.label)+"\n  ")]):e._e(),e.hasHint?a("span",{staticClass:"govuk-hint"},[e._v("\n    "+e._s(e.hint)+"\n  ")]):e._e(),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has(e.identifier),expression:"errors.has(identifier)"}],staticClass:"govuk-error-message"},[e._v("\n    "+e._s(e.errors.first(e.identifier))+"\n  ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.displayValue,expression:"displayValue"}],staticClass:"govuk-input",class:e.inputWidth,attrs:{type:"text",maxlength:e.maxLength},domProps:{value:e.displayValue},on:{blur:function(t){e.isInputActive=!1},focus:function(t){e.isInputActive=!0},input:function(t){t.target.composing||(e.displayValue=t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.validatedValue,expression:"validatedValue"},{name:"validate",rawName:"v-validate",value:e.validationRules,expression:"validationRules"}],ref:e.identifier,attrs:{type:"hidden",id:e.identifier,name:e.identifier,"data-vv-as":e.label},domProps:{value:e.validatedValue},on:{input:function(t){t.target.composing||(e.validatedValue=t.target.value)}}})])},ke=[],xe={extends:L,name:"VInputCurrency",data:function(){return{isInputActive:!1}},computed:{validatedValue:function(){return this.value},validationRules:function(){var e="numeric|max_value:99999999999",t=this.validate?this.validate+"|":"";return t+e},displayValue:{get:function(){return this.isInputActive?this.value:this.$options.filters.currency(this.value)},set:function(e){this.$emit("input",e)}}}},ye=xe,Ce=(a("cc63"),Object(l["a"])(ye,be,ke,!1,null,"02ece5b7",null));Ce.options.__file="VInputCurrency.vue";var $e=Ce.exports,we=(a("96cf"),a("3b8d")),Ve=a("bc3a"),je=a.n(Ve),Ne="http://localhost:3000/service",Ie={apply:function(){var e=Object(we["a"])(regeneratorRuntime.mark(function e(t){var a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a="".concat(Ne,"/submit"),e.abrupt("return",je.a.post(a,t).then(function(e){return console.log(e),e.data}));case 2:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},qe={name:"ApplicationForm",inject:{$validator:"$validator"},components:{VHeadline:A,VInputText:L,VInputRadio:K,VInputUpload:Q,VInputDate:oe,VInputCheckbox:pe,VInputTextarea:he,VInputCurrency:$e},data:function(){return{application:{},radioOptions:[{label:"Initiativer i og for lokalsamfundet",uuid:"some-uuid-1"},{label:"Udviklingsprojekter for mennesker og samfund",uuid:"some-uuid-2"},{label:"Sociale formål",uuid:"some-uuid-3"},{label:"Kulturelle aktiviteter",uuid:"some-uuid-4"}]}},computed:{formValid:function(){var e=this;return j()(this.fields).every(function(t){return e.fields[t]&&e.fields[t].valid})}},methods:{submitForm:function(){this.formValid?(console.log("submit form"),this.upload()):this.$validator.validateAll()},upload:function(){var e=this,t=new FormData,a=this;j()(this.application).map(function(e,i){var n=a.application[e];t.append(e,n)}),Ie.apply(t).then(function(t){console.log(t),e.$router.push({name:"thankyou"})})}}},Pe=qe,Oe=(a("a348"),Object(l["a"])(Pe,$,w,!1,null,"15fa2f78",null));Oe.options.__file="ApplicationForm.vue";var Ae=Oe.exports;i["a"].use(C["a"]);var Ee=new C["a"]({routes:[{path:"/",name:"home",component:Ae},{path:"/tak",name:"thankyou",component:function(){return a.e("about~1933250a").then(a.bind(null,"2368"))}}]});i["a"].config.productionTip=!1;var Se={dateFormat:"DD-MM-YYYY",delay:200,locale:"da",inject:!1},ze={symbol:"kr",thousandsSeparator:".",fractionCount:0,fractionSeparator:",",symbolPosition:"front",symbolSpacing:!0};f["a"].localize("da",_.a),f["a"].extend("required",m["f"]),f["a"].extend("max",m["c"]),f["a"].extend("digits",m["a"]),f["a"].extend("email",m["b"]),f["a"].extend("size",m["g"]),f["a"].extend("numeric",m["e"]),f["a"].extend("max_value",m["d"]),f["a"].extend("word_limit",b),f["a"].extend("cvr",k),i["a"].use(f["b"],Se),i["a"].use(y.a,ze),i["a"].component("v-icon",h["a"]),new i["a"]({i18n:v,router:Ee,render:function(e){return e(c)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";var i=a("5e27"),n=a.n(i);n.a},"5e27":function(e,t,a){},6653:function(e,t,a){},"74d1":function(e,t,a){},"7b2b":function(e,t,a){"use strict";var i=a("3602"),n=a.n(i);n.a},"8f33":function(e,t,a){},"9a09":function(e,t,a){},"9b19":function(e,t,a){e.exports=a.p+"img/logo.b0f63eaa.svg"},a348:function(e,t,a){"use strict";var i=a("9a09"),n=a.n(i);n.a},a725:function(e,t,a){"use strict";var i=a("8f33"),n=a.n(i);n.a},ac47:function(e,t,a){},bc74:function(e,t,a){},cc63:function(e,t,a){"use strict";var i=a("bc74"),n=a.n(i);n.a},cece:function(e,t,a){"use strict";var i=a("fdfc"),n=a.n(i);n.a},ed50:function(e,t,a){"use strict";var i=a("4487"),n=a.n(i);n.a},fdfc:function(e,t,a){},ff43:function(e,t,a){"use strict";var i=a("6653"),n=a.n(i);n.a}});
//# sourceMappingURL=app~d0ae3f07.5432160b.js.map