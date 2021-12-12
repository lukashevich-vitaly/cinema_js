import { getTriends, getVideo } from './services.js';
import renderCards from './renderCards.js';

const filmWeek = document.querySelector('.film-week')

const fistRender = (data, keyVideo) => {

    filmWeek.innerHTML = `
        <div class="container film-week__container" data-rating="${data.vote_average}">
            <div class="film-week__poster-wrapper">
                <img class="film-week__poster" src="https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${data.backdrop_path}" alt="постер ${data.name}">
                <p class="film-week__title_origin">${data.original_name || data.original_title}</p>
            </div>
            <h2 class="film-week__title">${data.name || data.title}</h2>
            ${keyVideo ? 
                `<a class="film-week__watch-trailer tube"
                href="https://youtu.be/${keyVideo}"
                aria-label="смотреть трейлер"></a>` : 
                ''}
        </div>
    `;
};

const renderVideo = async () => {
    const data = await getTriends();
    
    const [ fistCard, ...otherCard ] = data.results;
    otherCard.length = 16;

    const video = await getVideo(fistCard.id, fistCard.media_type)

    console.log(fistCard);
    
    fistRender(fistCard, video);
    renderCards(otherCard);
};

export default renderVideo;