import { uploadImg } from './http.services';

const body = document.body;

let inputFile, imgPhoto, imgContainer;

const createUploadFileHtml = () => {
  const html = `
    <h1 class="mt-4 display-4">Subir una imagen</h1>

    <div class="card shadow-lg mt-4">
      <div class="card-body">
        <div class="card-text">
          <input type="file" accept="image/png, image/jpg, image/jpeg, image/gif">
        </div>
      </div>
    </div>

    <div class="mt-5 mb-5 text-center d-none" id="imgContainer">
      <h3 class="text-muted mb-4">¡Imagen subida!</h3>
      <img src="" class="img-thumbnail" id="img">
    </div>
  `;

  body.innerHTML = html;
  inputFile = document.querySelector('input');
  imgPhoto = document.getElementById('img');
  imgContainer = document.getElementById('imgContainer');
};

const events = () => {
  inputFile.addEventListener('change', (e) => {
    const file = e.target.files[0];

    // Se hace la visualizacion de la imagen subida, ademas de eliminar la clase
    // que oculta el div contenedor de la imagen
    uploadImg(file).then((url) => {
      imgContainer.classList.remove('d-none');
      imgPhoto.src = url;
    });
  });
};

export const init = () => {
  createUploadFileHtml();
  events();
};
