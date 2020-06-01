import Vue from 'vue'
import extend from '~/plugins/extend-vue-app'

//Vue.prototype.$liff = window.liff

export default async function ({ app }) {
	extend(app, {
		beforeMount () {
      Vue.prototype.$liff = window.liff
      this.$liff.init({liffId: '1654152501-O4BeRzPe' }, () => {
        if (!liff.isLoggedIn() && !liff.isInClient()) {
          // this.$liff.login();
        }
      }, () => alert("error"))
		},
	})
}