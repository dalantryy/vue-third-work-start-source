<template>
  <div
      @drop.stop="onDrop"
      @dragover.prevent
      @dragenter.prevent
  >
    <slot />
  </div>
</template>

<script setup>
import { DATA_TRANSFER_PAYLOAD } from '../constants'

const emit = defineEmits(['drop'])

function onDrop({ dataTransfer }) {
  console.log('drop')
  if (!dataTransfer) {
    console.log('drop fail')
    return;
  }
  const payload = dataTransfer.getData(DATA_TRANSFER_PAYLOAD);
  if (payload) {
    const transferData = JSON.parse(dataTransfer.getData(DATA_TRANSFER_PAYLOAD));
    emit('drop', transferData);
  }
  console.log('drop suc')
}
</script>