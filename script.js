//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];
btn.addEventListener("click", () => {
  downloadImages(images)
    .then(downloadedImages => {
      output.innerHTML = ''; // Clear any previous images
      downloadedImages.forEach(img => output.appendChild(img));
    })
    .catch(error => {
      console.error(error);
      alert(error);
    });
});

function downloadImages(imageUrls) {
  const imagePromises = imageUrls.map(imageObj => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = imageObj.url;
      img.onload = () => resolve(img);
      img.onerror = () => reject(`Failed to load image's URL: ${imageObj.url}`);
    });
  });

  return Promise.all(imagePromises);
}