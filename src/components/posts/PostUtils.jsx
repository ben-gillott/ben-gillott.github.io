import React, { useState, useEffect } from "react";
import axios from "axios";

const client = axios.create({
  baseURL: "https://api.github.com/repos/ben-gillott/ben-gillott.github.io/contents/src/assets/posts?ref=src",
});

export async function getPosts() {
  const response = await client.get();
  const retval = response.data.filter((p) => p.type === "file");
  console.log(retval);
  return retval;
}
