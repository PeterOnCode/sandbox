<script setup>
import { ref } from 'vue'
import '@vuepic/vue-datepicker/dist/main.css'
import PdDatepicker2 from '@/components/pd-datepicker2.vue'

// import { VDataTable } from 'vuetify/labs/VDataTable'

const date = ref( '2000-01-01' )

</script>
<script>
export default {
  compatConfig : {
    MODE : 3
    // COMPONENT_V_MODEL : false
  }
}
</script>
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>Components</h2>
    <p>Here is a list of components used in this project:</p>
    <ul>
      <li>pd-datepicker</li>

      date in parent: {{ date }}
      <!--    <pd-datepicker2 :value="date"-->
      <!--                    @input="date = format( $event, 'yyyy-MM-dd' )"-->
      <!--                    label="Hello label" />-->
      <pd-datepicker2 v-model="date"
                      label="Hello label" />

      <li>Vuetify button test
        <v-btn variant="outlined">
          Button
        </v-btn>

      </li>
      <li>

        Vuetify datepicker

        <!--        <v-data-table />-->

      </li>
    </ul>
  </div>
</template>
