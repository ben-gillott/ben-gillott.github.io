import axios from "axios";

const baseURL = "https://raw.githubusercontent.com/ben-gillott/ben-gillott.github.io/src/src/assets/posts";

export async function getPosts() {
  const posts = (await axios.get(baseURL + "/metadata.json")).data;
  console.log(posts);
  return posts;
}

export async function getPostMetadata(slug) {
  const posts = await getPosts();
  const postMeta = posts[slug];
  console.log(postMeta);
  return postMeta;
}

export async function downloadPost(filename) {
  console.log("Downloading: " + filename);
  const md = (await axios.get(baseURL + "/" + filename)).data;
  return md;
}
