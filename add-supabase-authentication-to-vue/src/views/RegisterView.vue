<script lang="ts"
        setup>
import useAuthUser from '@/composables/UseAuthUser'
import Form from '@/typings/form'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'


const { register } = useAuthUser()
const router = useRouter()

const form : Form = reactive( {
  name : '',
  email : '',
  password : ''
} )

const handleSubmit = async () => {
  try {
    await register( form )

    await router.push( {
      name : 'EmailConfirmation',
      query : { email : form.email }
    } )
  } catch ( error ) {
    alert( error.message )
  }
}

</script>
<template>
  <form class="max-w-lg m-auto"
        @submit.prevent="handleSubmit">
    <h1 class="text-3xl mb-5">Register</h1>
    <label>Name <input v-model="form.name"
                       type="text" /></label>
    <label>Email <input v-model="form.email"
                        type="email" /></label>
    <label>Password <input v-model="form.password"
                           type="password" /></label>
    <button>Register</button>
  </form>
</template>
