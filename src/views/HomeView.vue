<script setup>
import { setPhoto } from '@/apis/photo'
import HelloWorld from '@/components/HelloWorld.vue'
import { PATH } from '@/constants/route'
import { ref } from '@vue/reactivity'
import { useRouter } from 'vue-router'

const route = useRouter()

const imgInput = ref(null)
const previewImage = ref('')

const selectImg = () => {
  imgInput.value.click()
}

const readImg = (e) => {
  const files = e.target.files
  if (files && files[0]) {
    let reader = new FileReader()
    reader.onload = (e) => {
      previewImage.value = e.target.result
    }
    reader.readAsDataURL(files[0])
  }
}

const uploadImg = async () => {
  const { photoId } = (await setPhoto()).data
  route.push(PATH.PHOTO.replace(':id', photoId))
}
</script>

<template>
  <div class="w-full flex flex-col items-center">
    <HelloWorld msg="You did it!" />
    <img v-if="previewImage" :src="previewImage" class="w-64" />
    <q-card v-else class="my-card h-64 w-64 bg-grey-4"> </q-card>
    <input
      ref="imgInput"
      @change="readImg"
      type="file"
      accept="image/*"
      hidden
    />
    <q-btn
      color="primary"
      class="q-mt-md w-64"
      label="select image"
      @click="selectImg"
    />
    <q-btn
      color="primary"
      class="q-mt-md w-64"
      label="upload image"
      @click="uploadImg"
    />
  </div>
</template>
