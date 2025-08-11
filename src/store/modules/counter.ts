import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { SetupStoreId } from '../enum';

export const useCounterStore = defineStore(SetupStoreId.Counter, () => {
  const count = ref(0);

  const doubleCount = computed(() => count.value * 2);

  function increment() {
    count.value += 1;
  }

  return { count, doubleCount, increment };
});
