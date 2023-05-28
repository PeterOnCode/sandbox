import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'

export const useAuthStore = defineStore( 'storeAuth', () => {
  const authenticated = ref<boolean>( false )
  const user = reactive( {} )
  const test = ref<boolean>( false )

  function testAction () {
    this.test = !this.test
  }

  return {
    authenticated,
    user,
    test,
    testAction
  }
}, {
  persist : true
} )
