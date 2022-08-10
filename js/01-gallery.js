import SimpleLightbox from "simplelightbox";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line


console.log(galleryItems);

// require("simplelightbox");

const galleryCollectionConteinerEl = document.querySelector('.gallery');

const galleryCollectionHtml = galleryItems.map(({ preview: previewImg, original: originalImg, description: alt, }) => {
    return `
    
    <a class="gallery__item" href="${originalImg}">
        <img
            class="gallery__image"
            src="${previewImg}"
            alt="${alt}"
        />
    </a>
`
}).join('');

galleryCollectionConteinerEl.insertAdjacentHTML("beforeend", galleryCollectionHtml);


// let gallery = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250, });
