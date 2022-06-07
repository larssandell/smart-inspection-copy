export function errormsg() {
    main.innerHTML = `<div class="catch-err">
    <h1>Vi beklager, men siden er ikke tilgjengelig for øyeblikket.</h1>
    <p>Vi har problemer med ${err}</p>
    <a href="index.html"><button class="back-btn">Tilbake til forsiden</button></a>
    </div>`;
};