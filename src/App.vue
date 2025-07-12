<template>
  <Header />
  <div class="container">
    <Balance :total="+total"/>
    <IncomeExpenses :income="+income" :expense="+expense"/>
    <TransactionList :transactions="transactions" @transaction-deleted="transactionDeletedHandler" />
    <AddTransaction @transaction-submitted="transactionSubmittedHandler" />
  </div>
</template>

<script setup>
import Header from "./components/Header.vue";
import Balance from "./components/Balance.vue";
import IncomeExpenses from "./components/IncomeExpenses.vue";
import TransactionList from "./components/TransactionList.vue";
import AddTransaction from "./components/AddTransaction.vue";

import { ref, computed, onMounted } from "vue";
import { useToast } from 'vue-toastification';

const toast = useToast();

const transactions = ref([]);

// ukupni balans
const total = computed(() => {
  return transactions.value.reduce((acc, transaction) => {
    return acc + transaction.amount;
  }, 0)
});

// prihodi
const income = computed(() => {
  return transactions.value
  .filter((t) => t.amount > 0)
  .reduce((acc, transaction) => {
    return acc + transaction.amount;
  }, 0).toFixed(2);
});

// rashodi
const expense = computed(() => {
  return transactions.value
  .filter((t) => t.amount < 0)
  .reduce((acc, transaction) => {
    return acc + transaction.amount;
  }, 0).toFixed(2);
});

const transactionSubmittedHandler = (newTransaction) => {
  transactions.value.push({
    id: getId(),
    text: newTransaction.text,
    amount: newTransaction.amount
  });
  updateLocalStorage();
  toast.success('Transaction added.');
}

const transactionDeletedHandler = (transaction) => {
    // const index = transactions.value.indexOf(transaction);
    // transactions.value.splice(index, 1);
    transactions.value = transactions.value.filter((t) => t.id !== transaction.id);
    updateLocalStorage();
    toast.success('Transaction deleted.');
}

const getId = () => {
  let maxId = 0;
  transactions.value.forEach((t) => {
    if(t.id > maxId) {
      maxId = t.id;
    };
  });
  return maxId + 1;
}

onMounted(() => { 
  const savedTransactions = JSON.parse(localStorage.getItem('transactions'));

  if(!savedTransactions) {
    localStorage.setItem('transactions', JSON.stringify([  
    { id: 1, text: "Flower", amount: -19.99 },
    { id: 2, text: "Salary", amount: 299.97 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 },]));
    console.log('Kreiran localStorage');
  }
  transactions.value = JSON.parse(localStorage.getItem('transactions'));
})

const updateLocalStorage = () => {
  localStorage.setItem('transactions', JSON.stringify(transactions.value));
}
</script>
