<template>
  <h3>Add new transaction</h3>
  <form id="form" @submit.prevent="onSubmit">
    <div class="form-control">
      <label for="text">Text</label>
      <input type="text" id="text" placeholder="Enter text..." v-model="text"/>
    </div>
    <div class="form-control">
      <label for="amount"
        >Amount <br />
        (negative - expense, opsitive - income)</label
      >
      <input type="text" id="amount" placeholder="Enter amount..." v-model="amount" />
    </div>
    <button class="btn">Add transaction</button>
  </form>
</template>

<script setup>
import { defineProps, defineEmits, ref } from "vue";
import { useToast } from 'vue-toastification';

const emit = defineEmits(['transaction-submitted'])

const text = ref('');
const amount = ref('');
const toast = useToast();

const onSubmit = () => {
  // ako su oba polja prazna ili je neko od njih prazno prikazuje se toast error poruka
  if(!text.value || !amount.value) {
    toast.error('Both fields must be filled.');
    return;
  }

  const newTransaction = {
    text: text.value,
    amount: parseFloat(amount.value)
  }

  emit('transaction-submitted', newTransaction);

  // ciste se input polja
  text.value = '';
  amount.value = '';
}

</script>