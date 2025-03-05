const getCroppedImageUrl = (url: string) => {
  if (!url) return "";

  const index = url.indexOf("media/");
  return url
    .slice(0, index)
    .concat("media/crop/600/400")
    .concat(url.slice(url.indexOf("/games")));
};

export default getCroppedImageUrl;
