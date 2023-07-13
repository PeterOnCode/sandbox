<script setup>
import Popper from 'vue3-popper'
import { computed, ref } from 'vue'
import { format } from 'date-fns'
import { hu } from 'date-fns/locale'
import { Calendar } from 'v-calendar'

const props = defineProps( {
  label : String,
  modelValue : Date,
  minDate : String,
  maxDate : String
} )
const emit = defineEmits( [ 'update:modelValue' ] )

// const locales = { enGB, hu }
const hover = ref( false )
const attrs = ref( [ {
  key : 'today',
  highlight : true,
  dates : props.modelValue
} ] )
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
  return date.value
    ? format( date.value, 'y. MMM dd., EEEE', { locale } )
    : ''
} )

function onDayClick ( selectedDate ) {
  updateValue( selectedDate.date )
  hover.value = false
  showPopper.value = false
}

function updateValue ( value ) {
  date.value = value
  attrs.value[ 0 ].dates = value
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
  <pre>attrs: {{ attrs }}</pre>
  <div class="popper-container"
       @blur="hover = false; showPopper = false"
       @focus="hover = true"
       @mouseleave="hover = false"
       @mouseover="hover = true">
    <Popper :show="showPopper"
            class="popper-styled"
    >
      <div class="input-items">
        <label class="label"
               for="date"> {{ props.label }}</label>
        <div class="input-icons">
          <img v-if="hover"
               :src="require(`@/assets/images/icons/calendar-event-fill.svg`)"
               alt="Calendar Event"
               class="icon">
          <img v-else
               :src="require(`@/assets/images/icons/calendar-event.svg`)"
               alt="Calendar Event"
               class="icon">
          <input
            :value="formattedDateString"

            :readonly="true"
            class="input-field"
            name="date"
            type="text"
            @click="showPopper = !showPopper"
          />
        </div>
      </div>
      <template #content>
        <div class="popper-content">
          <div class="title">
            <!--            {{ date.getFullYear() }}.-->
            <!--            {{ formattedDateString }}-->
          </div>
          <div>
            <Calendar :attributes="attrs"
                      expanded
                      locale="hu"
                      show-weeknumbers
                      @dayclick="onDayClick"
            />
          </div>
          <div class="popper-footer">
            <button type="button"
                    @click="showPopper=false">
              Bezár
            </button>
          </div>
        </div>
      </template>
    </Popper>
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
