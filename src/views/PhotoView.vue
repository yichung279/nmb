<script setup>
import { useRoute } from 'vue-router'

import HelloWorld from '@/components/HelloWorld.vue'

const route = useRoute()
const { id } = route.params
const msg = `I will show you photo with id: ${id}`
</script>

<template>
  <div class="w-full flex flex-col items-center space-y-8">
    <HelloWorld :msg="msg" />
    <div class="text-h6">score: 100</div>
  </div>

  <q-card class="my-card">
    <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
      <div class="absolute-bottom text-subtitle2 text-center">Title</div>
    </q-img>
  </q-card>
</template>
