import axios from 'axios'

export function uploadImage(event) {
  const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME
  const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET
  const url = `https://api.cloudinary.com/v1_1/${CLOUDNAME}/upload`
  const formData = new FormData()
  formData.append('file', event.target.files[0])
  formData.append('upload_preset', PRESET)
  return axios.post(url, formData, {
    headers: {
      'Content-type': 'multipart/form-data'
   }
 })
}