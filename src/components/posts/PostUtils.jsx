import axios from "axios";

const client = axios.create({
  // baseURL: "https://api.github.com/repos/ben-gillott/ben-gillott.github.io/contents/src/assets/posts?ref=src",
  baseURL: "https://raw.githubusercontent.com/ben-gillott/ben-gillott.github.io/src/src/assets/posts/metadata.json",
});

export async function getPosts() {
  const response = (await client.get()).data;
  console.log(response);
  return response;
}

export async function getPostMetadata(slug) {
  const posts = await getPosts();
  const metadataRet = Object.keys(posts).at(slug);
  console.log(metadataRet);
  return metadataRet;
}

export async function downloadPost(url) {
  const client = axios.create({
    baseURL: url,
  });
  console.log("Downloading: " + url);
  const md = (await client.get()).data;
  return md;
}
