export default async function fetchNASAData() {
  try {
    const response = await fetch('https://api.nasa.gov/planetary/apod')
    const data = await response.json()
    console.log('NASA APOD data', data)
  } catch (error) {
    console.log(error)
  }
}

