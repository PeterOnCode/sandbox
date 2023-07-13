<script setup>
import { computed, ref } from 'vue'
import { format } from 'date-fns'
import { Calendar } from 'v-calendar'

const props = defineProps( {
  title : String,
  modelValue : Date,
  minDate : String,
  maxDate : String
} )
const emit = defineEmits( [ 'update:modelValue' ] )

const hover = ref( false )
const dateRef = ref( props.modelValue )
const attrs = ref( [ {
  key : 'today',
  highlight : true,
  dates : dateRef
} ] )

const popover = ref( null )

const formattedDateString = computed( () => {
  return format( dateRef.value, 'yyyy-MM-dd' )
} )

// function dateString () {
//   return format( dateRef.value, 'yyyy-MM-dd' )
// }

function updateValue ( value ) {
  dateRef.value = value
  // attrs.value.dates = value
  emit( 'update:modelValue', dateRef.value )
}

function onPopoverClose ( selectedDate ) {
  updateValue( selectedDate.date )
  hover.value = false
  popover.value.doClose()
}

function onPopoverShow ( bvevent ) {
  console.log( 'onPopoverShow: \n', dateRef.value )
  console.log( 'onPopoverShow: \n', formattedDateString )
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
  <pre>dateRef: {{ dateRef }}</pre>
  <div>
    <label class="label"
           for="date"> {{ props.title }}</label>

    <div style="max-width:200px;margin:auto">
      <div id="date-input"
           class="input-icons"
           @blur="hover = false"
           @focus="hover = true"
           @mouseleave="hover = false"
           @mouseover="hover = true">

        <img v-if="hover"
             :src="require(`@/assets/images/icons/calendar-event-fill.svg`)"
             alt="Calendar Event"
             class="icon">
        <img v-else
             :src="require(`@/assets/images/icons/calendar-event.svg`)"
             alt="Calendar Event"
             class="icon">

        <input
          :placeholder="formattedDateString"
          :readonly="true"
          class="input-field"
          name="date"
          type="text"
        >
      </div>
    </div>
  </div>

  <b-popover ref="popover"
             placement="bottom"
             target="date-input"
             triggers="click"
             @show="onPopoverShow"
  >
    <template #title>
      <div class="popover-title">
        <div class="popover-title-text">
          Title
        </div>
      </div>
    </template>
    <div class="popover-content">
      <div class="popover-content-text">
        {{ formattedDateString }}
        <div
          @blur="hover = false"
          @focus="hover = true"
          @mouseleave="hover = false"
          @mouseover="hover = true"
        >
          <Calendar :attributes="attrs"
                    :model-value="dateRef"
                    borderless
                    show-weeknumbers
                    @dayclick="onPopoverClose"
                    @update:model-value="updateValue"
          />
        </div>
      </div>
    </div>
  </b-popover>

</template>

<style scoped>

.input-icons img {
  position: absolute;
}

.input-icons {
  width: 100%;
//margin-bottom: 10px;
}

.icon {
  height: 20px;
  width: auto;
  margin-left: 10px;
  margin-top: 5px;
  color: #000000;
}

.input-field {
//width: 100%; text-align: center;
}

.label {
  text-align: left;
  margin-bottom: 7px;
}

/*.vc-container {
  background-color: red;
}
*/
/*.bi-calendar-event {
  height: 20px;
  width: auto;
  margin-left: 10px;
  color: #000000;
}*/

</style>
