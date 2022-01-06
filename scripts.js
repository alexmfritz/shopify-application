const imageScroll = document.getElementById('imageScroll');

const fetchNASAData = () => {
  fetch('https://api.nasa.gov/planetary/apod?api_key=o0SpfqLMnV9vfvmh1p2NyFKgfeGKvm7S4ZcmSFN9')
    .then(response => response.json())
    .then(data => displayAllImages(data))
    .catch(error => console.log(error))
}

// const apiNASAdata = fetchNASAData();

const displayAllImages = (data) => {
  imageScroll.innerHTML += `
    <section class="img-card">
      <img class="img" src=${data.url} alt="image placeholder" id="" />
      <section class="img-bio">
        <p class="img-title">${data.title}</p>
        <p class="img-date">${data.date}</p>
        <p class="img-desc">${data.explanation}</p>
        <p class="img-auth">-${data.copyright}</p>
        <i class="far fa-heart fa-3x"></i>
      </section>
    </section>`;
}

window.addEventListener('load', fetchNASAData);