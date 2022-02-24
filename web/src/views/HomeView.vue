<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import { useQuasar } from 'quasar'

import { setPhoto } from '@/apis/photo'
import { PATH } from '@/constants/route'

const route = useRouter()

const quasar = useQuasar()
const imgInput = ref<HTMLInputElement | null>(null)
const previewImage = ref<string | undefined>()

const uploadImg = () => {
  imgInput.value?.click()
}

const readImg = async (e: Event): Promise<void> => {
  const files = (e.target as HTMLInputElement).files
  if (files && files[0]) {
    let reader = new FileReader()
    reader.onload = (e: Event) => {
      previewImage.value = (e.target as FileReader).result as string
    }
    reader.readAsDataURL(files[0])
  }

  quasar.loading.show()
  const { photoId } = (await setPhoto()).data
  quasar.loading.hide()
  await route.push(PATH.PHOTO.replace(':id', photoId))
  window.history.state.data = previewImage.value
}
</script>

<template>
  <div
    class="w-full min-h-screen flex flex-col items-center space-y-8 bg-grey-2 pt-16"
  >
    <div class="text-h1">Masuni</div>
    <q-card v-if="previewImage" class="max-h-96 max-w-1/2 rounded-xl">
      <img :src="previewImage" class="max-h-96 max-w-1/2" />
    </q-card>
    <q-card
      v-else
      class="h-96 w-1/2 bg-white flex flex-col items-center justify-center space-y-2 rounded-xl"
      @click="uploadImg"
    >
      <q-icon name="bi-file-image" color="grey-8" size="5rem" />
      <div class="text-h6">Add photos here</div>
      <div class="text-subtitle1">or drag and drop</div>
      <input
        ref="imgInput"
        @change="readImg"
        type="file"
        accept="image/*"
        hidden
      />
    </q-card>
  </div>
</template>
