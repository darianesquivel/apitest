import unsplash from "../../imageApi/unsplash";

async function getInitialImages() {
  return await unsplash.get("/photos/random?count=10").then((res) => res.data);
}
async function searchImages(key: string) {
  return await unsplash
    .get("/search/photos", { params: { query: key } })
    .then((res) => res.data);
}
export {
  getInitialImages,
  searchImages
}