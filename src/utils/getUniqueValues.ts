const getUniqueValues = (arr: any[]) => {
  for (var i = 0; i < arr.length; ++i) {
    for (var j = i + 1; j < arr.length; ++j) {
      if (arr[i].id === arr[j].id) arr.splice(j--, 1)
    }
  }

  return arr
}

export default getUniqueValues
