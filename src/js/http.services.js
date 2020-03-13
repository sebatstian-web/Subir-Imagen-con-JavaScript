// Parametros para Cloudinary
const preset = 'zgrm9gqr',
  urlCloudinary = 'https://api.cloudinary.com/v1_1/sebatstian/upload';

const uploadImg = async (file) => {
  const formData = new FormData();
  formData.append('upload_preset', preset);
  formData.append('file', file);

  try {
    const resp = await fetch(urlCloudinary, {
      method: 'POST',
      body: formData
    });

    if (resp.ok) {
      const data = await resp.json();
      // Solo se retorna la url segura del servicio de alojamiento
      return data.secure_url;
    } else {
      throw await resp.json();
    }
  } catch (err) {
    throw err;
  }
};

export { uploadImg };
