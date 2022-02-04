<script setup>
import HelloWorld from '@/components/HelloWorld.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
console.log(route)
const { id } = route.params
const msg = `I will show you photo with id: ${id}`
</script>

<template>
  <div class="w-full flex flex-col items-center">
    <HelloWorld :msg="msg" />
  </div>
</template>
