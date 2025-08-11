<template>
  <div class="flex flex-col items-center justify-center size-full">
    <div class="mb-8 text-center">
      <div class="flex items-center justify-center mb-4">
        <SvgIcon
          icon="logos:vue"
          class="w-16 h-16 mr-4 text-green-500"
        />
        <SvgIcon
          icon="logos:vitejs"
          class="w-16 h-16 text-yellow-500"
        />
      </div>
      <h1 class="text-4xl text-[#16a085] mb-2">Starter-Template-Vue</h1>
      <p class="text-lg text-gray-600">Starter template for Vue3 + Vite + TypeScript</p>
    </div>

    <div class="p-8 mb-8 text-center">
      <div class="mb-4">
        <span class="text-2xl font-semibold text-gray-700"> double count: {{ doubleCount }} </span>
      </div>

      <button
        class="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
        type="button"
        @click="counterStore.increment"
      >
        click count: {{ count }}
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import SvgIcon from '@/components/SvgIcon.vue';
import { useCounterStore } from '@/store/modules/counter';

defineOptions({
  name: 'Home',
});

const counterStore = useCounterStore();
const { count, doubleCount } = storeToRefs(counterStore);
</script>
