<script setup>
/* eslint-disable no-unused-vars */
import { setPhoto } from '@/apis/photo'
import HelloWorld from '@/components/HelloWorld.vue'
import { PATH } from '@/constants/route'
import { ref } from '@vue/reactivity'
import { useRouter } from 'vue-router'

import { useQuasar } from 'quasar'

const route = useRouter()

const quasar = useQuasar()
const imgInput = ref(null)
const previewImage = ref('')

const uploadImg = () => {
  imgInput.value.click()
}

const readImg = async (e) => {
  const files = e.target.files
  if (files && files[0]) {
    let reader = new FileReader()
    reader.onload = (e) => {
      previewImage.value = e.target.result
    }
    reader.readAsDataURL(files[0])
  }

  quasar.loading.show()
  const { photoId } = (await setPhoto()).data
  quasar.loading.hide()
  route.push(PATH.PHOTO.replace(':id', photoId))
}
</script>

<template>
  <div class="w-full flex flex-col items-center space-y-8">
    <HelloWorld msg="You did it!" />
    <q-card v-if="previewImage" class="max-h-96 max-w-1/2">
      <img :src="previewImage" class="max-h-96 max-w-1/2" />
    </q-card>
    <q-card
      v-else
      class="h-96 w-1/2 bg-grey-1 flex flex-col items-center justify-center space-y-2"
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
