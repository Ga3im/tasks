export const getTasks = async () => {
  await fetch('https://68239bff65ba0580339752d8.mockapi.io/tasks', {
    method: 'GET',
  }).then((res) => {
    return res.json()
  })
}
