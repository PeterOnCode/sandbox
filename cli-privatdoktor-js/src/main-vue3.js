import Vue, { createApp } from '@vue/compat'
// import { createApp } from 'vue'
import App from './App.vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { registerPlugins } from '@/plugins'

const app = createApp( App )
registerPlugins( app )

Vue.use( BootstrapVue )
Vue.use( BootstrapVueIcons )

app.mount( '#app' )
