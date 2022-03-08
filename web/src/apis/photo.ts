interface Response<T> {
  data: T
}

interface PhotoInfo {
  owner: string
  score: number
}

interface PhotoId {
  photoId: string
}

const delay = (time: number): Promise<void> =>
  new Promise((resolve) => {
    setTimeout(resolve, time)
  })

export const setPhoto = async (): Promise<Response<PhotoId>> => {
  await delay(3000)
  return { data: { photoId: 'lynnwu0219-is-my-wife' } }
}

// eslint-disable-next-line no-unused-vars
export const getPhoto = async (): Promise<void> => {
  // call S3 with photoId
  return
}

// eslint-disable-next-line no-unused-vars
export const getPhotoInfo = async (): Promise<Response<PhotoInfo>> => {
  return { data: { owner: 'you', score: 0 } }
}
