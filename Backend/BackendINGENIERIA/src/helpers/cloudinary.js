const { v2 } = require("cloudinary");

/* v2.config({
    cloud_name: "dvgrcqa0l",
    api_key: "624394573677332",
    api_secret: "kNaImQ2TFH5eqRb9iYuOaSNHoWA"
}); */

v2.config({
  cloud_name: "dbazbgj6c",
  api_key: "574489224597896",
  api_secret: "xHt_pFMBhIHIMZ_L4kM_r7cCVCc"
});


const uploadPicture = async (filePath) => {
  return await v2.uploader.upload(filePath, {
    folder: "imagenes"
  });
};

const uploadAvatar = async (filePath) => {
  return await v2.uploader.upload(filePath, {
    folder: "avatar"
  });
};
const deleteAvatar = async (id) => {
  return await v2.uploader.destroy(id);
};
module.exports = {
  uploadPicture,
  uploadAvatar,
  deleteAvatar
};