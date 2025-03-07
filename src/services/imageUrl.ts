import noImage from "../assets/no-image-placeholder.webp";

const getCroppedImageUrl = (url: string) => {
  console.log(url);
  if (!url) return noImage;

  const index = url.indexOf("media/");
  return url
    .slice(0, index)
    .concat("media/crop/600/400")
    .concat(url.slice(url.indexOf("/games")));
};

export default getCroppedImageUrl;
