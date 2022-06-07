import apiCall from "./components/getapi.js";
import zoomImages from "./components/zoomimg.js";

const qs = document.location.search;
const params = new URLSearchParams(qs);
// console.log(params);
const id = params.get("id");

// console.log(id);
const wpIdPost = "https://si.larssandell.no/wp-json/wp/v2/posts/" + id;
// console.log(wpIdPost)
const postContainer = document.querySelector(".post-container");


async function wpPost() {
    try {
      const postData = await apiCall(wpIdPost);
      // console.log(postData);
      document.title = `Smart Inspection | ${postData.title.rendered}`;
      postContainer.innerHTML = `<div id="container">
                                  <div class="bg">
                                  <img id="image-zoom" src="${postData.featured_media_src_url}" alt="${postData.acf.alt_text}"/>
                                  </div>
                                  <div class="bg content">
                                  <h1>${postData.title.rendered}</h1>
                                  <p>${postData.acf.paragraph}</p> 
                                 </div></div>`;
      zoomImages();
    } catch (err) {
        console.log("Here is the error: ", err);
    }
};

wpPost();