// Api Call universal
const wpApi = "https://si.larssandell.no/wp-json/wp/v2/posts/";
const main = document.querySelector("main");
const loader = document.querySelector(".loader");

export default async function apiCall(urlApi) {
  try {
    const response = await fetch(urlApi);
    const data = await response.json();
    // console.log(data);
    loader.style.display = "none";
    return data;
  } catch (err) {
      loader.style.display = "none";
      main.innerHTML = `<div class="catch-err">
                          <h1>Vi beklager, men siden er ikke tilgjengelig for øyeblikket.</h1>
                          <p>Vi har problemer med ${err}</p>
                          <a href="index.html"><button class="back-btn">Tilbake til forsiden</button></a>
                          </div>`;
      console.log("Her er feilen: ", err);
  }
};