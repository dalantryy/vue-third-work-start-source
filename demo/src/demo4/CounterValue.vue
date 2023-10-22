<template>
  <span>Current Vakue: {{ value }}</span>
</template>

<script setup>
  defineProps({
    value: {
      type: Number,
      required: true
    }
  })
</script>