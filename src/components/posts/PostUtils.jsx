import axios from "axios";

const client = axios.create({
  baseURL: "https://api.github.com/repos/ben-gillott/ben-gillott.github.io/contents/src/assets/posts?ref=src",
});

export async function getPosts() {
  const response = await client.get();
  const retval = response.data.filter((p) => p.type === "file");
  return retval;
}

export async function getPostMetadata(slug) {
  const posts = await getPosts();
  const metadataRet = posts.find((p) => p.name === slug);
  console.log(metadataRet);
  return metadataRet;
}

export async function downloadPost(url) {
  const client = axios.create({
    baseURL: url,
  });

  console.log("downloading from: " + url);
  const md = (await client.get()).data;
  console.log("MD Downloaded is:\n" + md);
  return md;
}
