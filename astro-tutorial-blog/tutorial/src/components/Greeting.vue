<script setup>
import { ref } from 'vue'

const props = defineProps({
  messages: Object
})
const randomMessage = () => props.messages[(Math.floor(Math.random() *
    props.messages.length))]
const greeting = ref(props.messages[0])
// console.log(props.messages[0])
const setGreeting = (gr) => {
  greeting.value = gr
}
</script>

<template>
  <div>
    <h3>{{ greeting }}! Thank you for visiting!</h3>
    <button @click='setGreeting(randomMessage())'>
      New Greeting
    </button>
  </div>
</template>
