<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const { id } = route.params
const msg = `I will show you photo with id: ${id}`
</script>

<template>
  <div
    class="w-full min-h-screen flex flex-col items-center space-y-8 bg-grey-2 pt-16"
  >
    <div class="text-h6">{{ msg }}</div>
    <div class="text-h6">score: 100</div>
  </div>
</template>
