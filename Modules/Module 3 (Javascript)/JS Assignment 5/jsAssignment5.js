function addImages() {
  const imageUrl = "https://image.petmd.com/files/inline-images/bombay-cat-breed.jpg?VersionId=Qz_cZGLn1bPgxzUXCY5No4UwZLwtClwU";

  for (let i = 0; i < 3; i++) {
    let img = document.createElement("img");
    img.src = imageUrl;
    img.alt = "Cat";
    img.style.width = "300px";

    document.body.appendChild(img);
  }
}

addImages();