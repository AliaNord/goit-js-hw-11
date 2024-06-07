import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import axios from 'axios';

const form = document.querySelector('#form-search');
const input = document.querySelector('#input-search');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const API_KEY = '44257136-dfc34124ab45074cb7ae2d95f';
const URL = `https://pixabay.com/api`;

form.addEventListener('submit', handleSubmit);
async function handleSubmit(event) {
  event.preventDefault();
  const value = input.value.trim();
  if (value == '') {
    iziToast.error({
      position: 'topRight',
      title: 'Error',
      message: 'Please fill out the search bar',
    });
    return;
  }

  loader.style.display = 'block';
  gallery.innerHTML = '';

  try {
    const response = await axios.get(URL, {
      params: {
        key: API_KEY,
        q: value,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    });

    const images = response.data.hits;

    if (images.length === 0) {
      iziToast.info({
        position: 'topRight',
        title: 'No Results',
        message: 'Sorry... No results were found for your request',
      });
    } else {
      const galleryHTML = images
        .map(image => {
          return `<li class="gallery-item">
          <a href="${image.largeImageURL}">
            <img src="${image.webformatURL}" alt="${image.tags}" />
            <ul class="descr-list">
              <li class="descr-item">
                <p class="category">Likes</p>
                <p class="value">${image.likes}</p>
              </li>
              <li class="descr-item">
                <p class="category">Views</p>
                <p class="value">${image.views}</p>
              </li>
              <li class="descr-item">
                <p class="category">Comments</p>
                <p class="value">${image.comments}</p>
              </li>
              <li class="descr-item">
                <p class="category">Downloads</p>
                <p class="value">${image.downloads}</p>
              </li>
            </ul>
          </a>
          </li>
        `;
        })
        .join('');
      gallery.innerHTML = galleryHTML;
      const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
      });
      lightbox.refresh();
    }
  } catch (error) {
    iziToast.error({
      position: 'topRight',
      title: 'Error',
      message: 'Failed to fetch images. Please try again later.',
    });
  } finally {
    loader.style.display = 'none';
  }
}
