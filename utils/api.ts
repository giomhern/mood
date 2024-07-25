const createUrl = (path) => {
  return window.location.origin + path
}

const createNewEntry = async () => {
  const res = await fetch(
    new Request(createUrl("/api/journal"), {
      method: "POST",
      // body: JSON.stringify({})
    })
  )

  if (res.ok) {
    const data = await res.json()
    return data.data
  }
}

export default createNewEntry
