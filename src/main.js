import Vue from "vue";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import dateFilter from "@/filters/date.filter";
import messagePlugin from "@/utils/message.plugin";
import "./registerServiceWorker";
import "materialize-css/dist/js/materialize.min";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";

Vue.config.productionTip = false;

Vue.use(Vuelidate);
Vue.filter("date", dateFilter);
Vue.use(messagePlugin);

firebase.initializeApp({
  apiKey: "AIzaSyDemabVTNncV87mVGJlWBjnL7bJTGLej50",
  authDomain: "vue-crm-c85f5.firebaseapp.com",
  projectId: "vue-crm-c85f5",
  storageBucket: "vue-crm-c85f5.appspot.com",
  messagingSenderId: "259033181949",
  appId: "1:259033181949:web:7970ee7c32e839a6e4d894",
  measurementId: "G-FJMFBF99XM",
});

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  }
});
