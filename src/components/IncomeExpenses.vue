<template>
  <div class="inc-exp-container">
    <div>
      <h4>Income</h4>
      <p id="money-plus" class="money plus">+{{ income }} &#8364;</p>
    </div>
    <div>
      <h4>Expense</h4>
      <p id="money-minus" class="money minus">{{ expense }} &#8364;</p>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  income: {
    type: Number,
    required: true,
    default: 0
  },
  expense: {
    type: Number, 
    required: true, 
    default: 0
  }
})
</script>
