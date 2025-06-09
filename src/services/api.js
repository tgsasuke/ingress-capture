import axios from 'axios'

const isDev = import.meta.env.DEV

const api = axios.create({
  baseURL: isDev ? '/iitc' : 'https://www.quarks.idv.tw/iitc',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false
})

export const getProfileList = async () => {
  try {
    const response = await api.post('/ajax/profile.php', {
      action: 'list'
    })
    return response.data
  } catch (error) {
    console.error('獲取檔案列表失敗:', error)
    throw error
  }
}

export default api