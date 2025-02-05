function displayImages() {

  let imageArray = [
    "https://cdn-aahmh.nitrocdn.com/mwIJloVUffDtKiCgRcivopdgojcJrVwT/assets/images/optimized/rev-31cad3f/www.cozycatfurniture.com/image/siamese-cat-cover.jpg",
    "https://consumer-cms.petfinder.com/sites/default/files/images/content/American%20Shorthair%20Cat%201.jpg",
    "https://www.thesprucepets.com/thmb/RnGTM5ENlWu-D4oND397jksaUCw=/1911x0/filters:no_upscale():strip_icc()/bombay-cat-full-profile-history-and-care-5202250-hero-85810f454cf84a7786e650136a10f91c.jpg"
  ];


  for (let i = 0; i < imageArray.length; i++) {
    let img = document.createElement("img");
    img.src = imageArray[i];
    img.alt = "Cute Cat";
    img.style.width = "300px";

    document.body.appendChild(img);
  }
}

displayImages();