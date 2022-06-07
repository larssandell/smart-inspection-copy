import apiCall from "./components/getapi.js";
const wpApiClient = "https://si.larssandell.no/wp-json/wp/v2/posts?categories=6";
const customers = document.querySelector(".customers");


async function wpLogos() {
    try {
      const getLogo = await apiCall(wpApiClient);
      // console.log(getPosts);
      for (let i = 0; i < getLogo.length; i++) {
          // console.log(getLogo);
          customers.innerHTML += `<div class="client"><img class="logo-img" src="${getLogo[i].featured_media_src_url}" alt="${getLogo[i].acf.alt_text}"></div>`;
      }
    } catch (err) {
      console.log("Here is the error: ", err);
    }
};
  
wpLogos();