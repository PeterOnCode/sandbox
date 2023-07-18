<template>
  <div>
    <h2>PrivátDoktor DatePicker Input</h2>
    <p>TestView
       <pre>
         {
          selectedDate: {{ selectedDate }}
         }
         </pre>
    </p>
    <!--    <PdDatepicker3-->
    <!--      v-model="selectedDate"-->
    <!--      title="Dátumtól" />-->
    <PdDatepickerInput v-model="selectedDate"
                       label="Dátumtól" />
<!--    <PdVue3Datepicker v-model="selectedDate" />-->
    <hr>
  </div>
</template>
<script>
import 'v-calendar/style.css'
import PdDatepickerInput from '@/components/pd-datepicker-input.vue'
// import PdVue3Datepicker from '@/components/pd-vue3-datepicker.vue'

export default {
  name : 'TestView',
  components : {
    // PdVue3Datepicker
    PdDatepickerInput
    // Calendar
  },
  compatConfig : {
    MODE : 3
    // COMPONENT_V_MODEL : false
  },

  data () {
    return {
      counter : 0,
      focus : '',
      selectedDate : new Date()
    }
  },

  mounted () {
    console.log( this.$refs )
  },

  methods : {
    submit () {
      this.counter++
      console.log( this.$refs )
    }
  }

}
</script>
