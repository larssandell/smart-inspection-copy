import apiCall from "./getapi.js";
import zoomImages from "./zoomimg.js";
const wpApiService = "https://si.larssandell.no/wp-json/wp/v2/posts?categories=3";
const serviceContainer = document.querySelector(".services");
const loader = document.getElementsByClassName("loader");

async function wpServiceList() {
    try {
      const getService = await apiCall(wpApiService);
    //   console.log(getService);
      for (let i = 0; i < getService.length; i++) {
          // console.log(getService);
          serviceContainer.innerHTML += `<div class="card-container">
                                         <div class="card-image"><img id="image-zoom" class="image" src="${getService[i].featured_media_src_url}" alt="${getService[i].acf.alt_text}"></div>
                                         <div class="card-headline"><h2>${getService[i].title.rendered}</h2></div>
                                         <div class="card-text"><p>${getService[i].acf.paragraph}</p></div>
                                         </div>`;
      }
      zoomImages();
    } catch (err) {
        console.log("Here is the error: ", err);
    }
};
  
wpServiceList();