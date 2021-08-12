const getDogPicture = async () => {
  const endpoint = 'https://dog.ceo/api/breeds/image/random'

  const request = await fetch(endpoint)
  const response = await request.json()
  const picUrl = response.message


  return picUrl
}

const insertDogPicture = async () => {
  const dogPic = await getDogPicture()

  const img = document.createElement('img')
  const body = document.querySelector('body')

  img.src = dogPic
  body.appendChild(img)
}

insertDogPicture()