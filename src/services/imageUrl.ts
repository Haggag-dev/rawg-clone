import noImage from "../assets/no-image-placeholder.webp";

const getCroppedImageUrl = (url: string) => {
  if (!url) return noImage;

  const target = "media/";
  const index = url.indexOf(target) + target.length;
  const updatedUrl = `${url.slice(0, index)}crop/600/400/${url.slice(index)}`;

  return updatedUrl;
};

export default getCroppedImageUrl;
