<script setup>
import Datepicker from 'vue3-datepicker'
import { computed, ref } from 'vue'
import { format } from 'date-fns'
import { hu } from 'date-fns/locale'

const props = defineProps( {
  label : String,
  modelValue : Date,
  minDate : String,
  maxDate : String
} )
const emit = defineEmits( [ 'update:modelValue' ] )

// const locales = { enGB, hu }
const hover = ref( false )
// const attrs = ref( [
//   {
//     key : 'today',
//     highlight : true,
//     dates : props.modelValue
//   } ] )
const showPopper = ref( false )

const date = computed( {
  get () {
    return props.modelValue
  },
  set ( value ) {
    emit( 'update:modelValue', value )
  }
} )

const formattedDateString = computed( () => {
  const locale = hu
  // return 'formattedDateString'
  const newDate = date.value
  // const newDate = new Date( date.value )
  return date.value
    ? format( newDate, 'y. MMM dd., EEEE', { locale } )
    : ''
} )

// function onDayClick ( selectedDate ) {
//   updateValue( selectedDate.date )
//   hover.value = false
//   showPopper.value = false
// }

// function updateValue ( value ) {
//   date.value = value
//   attrs.value[ 0 ].dates = value
// }

</script>
<script>
export default {
  compatConfig : {
    MODE : 3
    // COMPONENT_V_MODEL : false
  }
}

// const date2 = ref( new Date() )
</script>
<template>
    <pre>
      formattedDateString: {{ formattedDateString }}
      props.modelValue: {{ props.modelValue }}
      date: {{ date }}
    </pre>

  <div class="popper-container"
       @blur="hover = false; showPopper = false"
       @focus="hover = true"
       @mouseleave="hover = false"
       @mouseover="hover = true">
    <Datepicker v-model="date" />
  </div>
</template>

<style scoped>
.label {
  text-align: left;
  margin-bottom: 7px;
}

.popper-container {
  padding: 5px;
  border: 2px dashed #dadada;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
}

.popper-content {
  justify-content: normal;
}

.popper-styled {
  --popper-theme-background-color: #333333;
  --popper-theme-background-color-hover: #333333;
  --popper-theme-text-color: #ffffff;
  --popper-theme-border-width: 0px;
  --popper-theme-border-style: solid;
  --popper-theme-border-radius: 6px;
  --popper-theme-padding: 3px;
  --popper-theme-box-shadow: 0 6px 30px -6px rgba(0, 0, 0, 0.25);
}

.input-icons {
  width: 100%;
//margin-bottom: 10px;
}

.input-icons img {
  position: absolute;
}

.icon {
  height: 20px;
  width: auto;
  margin-left: 10px;
  margin-top: 5px;
  color: #000000;
}

.input-field {
  min-width: 300px;
  max-width: 25em;
  text-align: center;
}

.input-items {
  display: flex;
  flex-direction: column;
//align-items: center
}
</style>
