<script setup>
import { ref } from 'vue'
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import { format, parse } from 'date-fns'
import { enUS, hu } from 'date-fns/locale'
import { i18n } from '@/plugins/i18n'

const props = defineProps( {
  label : String,
  modelValue : String
} )
const emit = defineEmits( [ 'update:modelValue' ] )
const hover = ref( false )
const dateObj = parse( props.modelValue, 'yyyy-MM-dd', new Date()
)
const date = ref( dateObj )

function dateFormat ( dateString ) {
  const locale = i18n.global.locale.value === 'hu' ? hu : enUS
  return format( dateString, 'yyyy. MMM d., EEEE', {
    locale
  } )
}

function updateValue ( value ) {
  date.value = value
  emit( 'update:modelValue', format( date.value, 'yyyy-MM-dd' ) )
}

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
  <pre>props: {{ props }}</pre>
  <div class="label">
    {{ label }}
  </div>
  <div
    @blur="hover = false"
    @focus="hover = true"
    @mouseleave="hover = false"
    @mouseover="hover = true"
  >
    <VueDatePicker
      :clearable="false"
      :enable-time-picker="false"
      :format="dateFormat"
      :model-value="date"
      v-model="date"
      :month-change-on-scroll="false"
      :show-now-button="true"
      locale="hu"
      @closed="hover = false"
      @update:model-value="updateValue"
    >
      <template #input-icon>
        <svg v-if="hover"
             class="bi bi-calendar-event"
             viewBox="0 0 16 16"
             xmlns="http://www.w3.org/2000/svg">
          <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-3.5-7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z" />
        </svg>
        <svg v-else
             class="bi bi-calendar-event"
             viewBox="0 0 16 16"
             xmlns="http://www.w3.org/2000/svg">
          <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" />
          <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
        </svg>
      </template>
    </VueDatePicker>
  </div>

</template>

<style scoped>
.label {
  text-align: left;
  margin-bottom: 7px;
}

.bi-calendar-event {
  height: 20px;
  width: auto;
  margin-left: 10px;
  color: #000000;
}

</style>
