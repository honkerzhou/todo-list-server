(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2da58ea8"],{1221:function(e,r,t){"use strict";var s=t("14ba"),a=t.n(s);a.a},"14ba":function(e,r,t){},"73cf":function(e,r,t){"use strict";t.r(r);var s=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"wrapper"},[t("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"80px","label-position":"left"}},[t("el-form-item",{attrs:{label:"用户名",prop:"username"}},[t("el-input",{attrs:{placeholder:"请输入用户名",clearable:""},model:{value:e.form.username,callback:function(r){e.$set(e.form,"username",r)},expression:"form.username"}})],1),t("el-form-item",{attrs:{label:"密码",prop:"password"}},[t("el-input",{attrs:{placeholder:"请输入密码","show-password":"",clearable:""},nativeOn:{keyup:function(r){return!r.type.indexOf("key")&&e._k(r.keyCode,"enter",13,r.key,"Enter")?null:e.register(r)}},model:{value:e.form.password,callback:function(r){e.$set(e.form,"password",r)},expression:"form.password"}})],1),t("el-form-item",[t("el-button",{on:{click:e.register}},[e._v("注册")]),t("p",[e._v("\n        已有账号，\n        "),t("router-link",{attrs:{to:"login"}},[e._v("立即登录")])],1)],1)],1)],1)},a=[],o={name:"Register",data:function(){return{form:{username:"",password:""},rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"},{max:20,message:"用户名不能超过20个字符",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:6,max:20,message:"密码长度在 6 到 20 个字符",trigger:"blur"}]}}},methods:{register:function(){var e=this;this.$refs["form"].validate(function(r){r&&e.$http.post("/users",e.form).then(function(r){var t=r.data.token;localStorage.setItem("token",t),e.$http.defaults.headers.common["Authorization"]=t,e.$router.push("/")}).catch(function(r){r.response&&e.$message.error(r.response.data)})})}}},n=o,l=(t("1221"),t("2877")),i=Object(l["a"])(n,s,a,!1,null,"d06b8bf8",null);r["default"]=i.exports}}]);
//# sourceMappingURL=chunk-2da58ea8.8f978fc8.js.map