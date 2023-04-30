import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryRef = document.querySelector('.gallery');

const liEl = galleryItems.reduce((item, { preview, original, description }) => 
  item + `<li class="gallery__item">
   <a class="gallery__link" 
      href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`
  , "");
  galleryRef.insertAdjacentHTML("beforeend", liEl)
const galleryLightBox = new SimpleLightbox('.gallery__link', {captionsData: "alt", captionsDelay: 250});

console.log(galleryItems );