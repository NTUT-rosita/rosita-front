function getRandomColor (count: number) {
  const letters = 'BCDEF'.split('')

  const colors = []
  let color = '#'
  for (let countIndex = 0; countIndex < count; countIndex++) {
    for (let index = 0; index < 6; index++) {
      color += letters[Math.floor(Math.random() * letters.length)]
    }

    colors.push(color)
  }

  return colors
}

const data = {
  labels: ['A 系', 'B 系'],
  datasets: [
    {
      label: '男',
      data: [123, 456],
      backgroundColor: getRandomColor(1)
    },
    {
      label: '女',
      data: [143, 346],
      backgroundColor: getRandomColor(1)
    }
  ]
}

export default data
