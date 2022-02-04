<script setup>
import { setPhoto } from '@/apis/photo'
import HelloWorld from '@/components/HelloWorld.vue'
import { PATH } from '@/constants/route'
import { ref } from '@vue/reactivity'
import { useRouter } from 'vue-router'

const route = useRouter()
const buttonShown = ref(true)

const uploadImg = async () => {
  buttonShown.value = false
  const { photoId } = (await setPhoto()).data
  route.push(PATH.PHOTO.replace(':id', photoId))
  // buttonShown.value = true
}
</script>

<template>
  <div class="w-full flex flex-col items-center">
    <HelloWorld msg="You did it!" />
    <q-btn
      v-if="buttonShown"
      color="primary"
      class="q-mt-md w-64"
      label="upload"
      @click="uploadImg"
    />
  </div>
</template>
