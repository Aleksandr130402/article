const getDateFormatted = (str: string) => {
  const date = new Date(str)
  return `${date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })}`
}

export default getDateFormatted
