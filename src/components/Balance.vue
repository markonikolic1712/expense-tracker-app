<template>
  <h4>Your Balance</h4>
  <h1 id="balance">{{ total }} &#8364;</h1>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  total: {
    type: Number,
    required: true,
    default: 0.00
  }
})
</script>
