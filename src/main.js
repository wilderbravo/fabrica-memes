import Vue from 'vue'
import { firestorePlugin } from 'vuefire'
import vuetify from './plugins/vuetify'
import App from './App.vue'
import firebase  from 'firebase'
import router from './router/index'

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyBgXBWrt08BQ0TRpDKQ_kluyv_k0CK2P_E",
  authDomain: "fabrica-memes-690d5.firebaseapp.com",
  databaseURL: "https://fabrica-memes-690d5.firebaseio.com",
  projectId: "fabrica-memes-690d5",
  storageBucket: "fabrica-memes-690d5.appspot.com",
  messagingSenderId: "985617916876",
  appId: "1:985617916876:web:147d2557c851448d827369"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)
export const firestore = firebaseApp.firestore()
export const storage = firebase.storage().ref('/images')

Vue.use(firestorePlugin)

new Vue({
  vuetify,
  render: h => h(App),
  router,
  components: { App }
}).$mount('#app')
