<template>
  <h3>History</h3>
  <ul id="list" class="list">
    <li
      v-for="t in transactions"
      :key="t.id"
      :class="t.amount < 0 ? 'minus' : 'plus'"
    >
      {{ t.text }} <span>{{ t.amount }} &#8364;</span
      ><button class="delete-btn" @click="removeTransaction(t)">x</button>
    </li>
    <!-- <li class="minus">
      Cash <span>-400 &#8364;</span><button class="delete-btn">x</button>
    </li>
    <li class="plus">
      Paycheck <span>+133 &#8364;</span><button class="delete-btn">x</button>
    </li> -->
  </ul>
</template>
<script setup>
import { defineProps, onMounted } from "vue";

const props = defineProps({
  transactions: {
    type: Array,
    required: true
  },
});

const removeTransaction = (t) => {
  const index = props.transactions.indexOf(t)
  props.transactions.splice(index, 1)
}


</script>
