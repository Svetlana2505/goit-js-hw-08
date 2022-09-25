// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Change code below this line

const galleryEl = document.querySelector('.gallery');
const gallery = createGalleryContainer(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', gallery);

function createGalleryContainer(items) {
  return items
    .map(
      ({ preview, original, description }) =>
        `<a class='gallery__link' href="${original}">
      <img class='gallery__image' src="${preview}" alt="${description}" title="${description}" />
    </a>`
    )
    .join('');
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
});
