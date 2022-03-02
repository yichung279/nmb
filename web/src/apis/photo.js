const delay = (time) =>
  new Promise((resolve) => {
    setTimeout(resolve, time)
  })

// eslint-disable-next-line no-unused-vars
export const setPhoto = async (owner) => {
  await delay(3000)
  return { data: { photoId: 'lynnwu0219-is-my-wife' } }
}

// eslint-disable-next-line no-unused-vars
export const getPhoto = async (photoId) => {
  // call S3 with photoId
  return {}
}

// eslint-disable-next-line no-unused-vars
export const getPhotoInfo = async (photoId) => {
  return { data: { owner: 'you', score: 0 } }
}
