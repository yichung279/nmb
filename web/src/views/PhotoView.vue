<script setup lang="ts">
import { nextTick, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const { id } = route.params
const img = ref<string | undefined>()
const msg = `I will show you photo with id: ${id}`

nextTick(() => {
  img.value = window.history.state.data
})
</script>

<template>
  <div
    class="w-full min-h-screen flex flex-col items-center space-y-8 bg-grey-2 pt-16"
  >
    <div class="text-h6">{{ msg }}</div>
    <q-card v-if="img" class="max-h-96 max-w-1/2 rounded-xl">
      <img :src="img" class="max-h-96 max-w-1/2" />
    </q-card>
    <div class="text-h2">score: 100</div>
  </div>
</template>
