<script setup>
import HelloWorld from '@/components/HelloWorld.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const { id } = route.params
const msg = `I will show you photo with id: ${id}`
</script>

<template>
  <div class="w-full flex flex-col items-center space-y-8">
    <HelloWorld :msg="msg" />
    <div class="text-h6">score: 100</div>
  </div>
</template>
