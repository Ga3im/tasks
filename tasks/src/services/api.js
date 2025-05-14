const BASE_URL = 'https://68239bff65ba0580339752d8.mockapi.io/tasks'

export const getTasks = async () => {
  return await fetch('BASE_URL').then((res) => {
    if (res.ok) {
     return res.json()
    }
  })
}
