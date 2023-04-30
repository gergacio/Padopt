// import { useState, useEffect } from "react";

import { useQuery } from "@tanstack/react-query";
import fetchBreedlist from "./fetchBreedList";

// const localCache = {};

export default function useBreedList(animal) {

  // const [breedList, setBreedList] = useState([]);
  // const [status, setStatus] = useState("unloaded");

  // useEffect(() => {
  //   if (!animal) {
  //     setBreedList([]);
  //   } else if (localCache[animal]) {
  //     setBreedList(localCache[animal]);
  //   } else {
  //     requestBreedList();
  //   }

  //   async function requestBreedList() {
  //     setBreedList([]);
  //     setStatus("loading");
  //     const res = await fetch(
  //       `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
  //     );
  //     const json = await res.json();
  //     localCache[animal] = json.breeds || [];
  //     setBreedList(localCache[animal]);
  //     setStatus("loaded");
  //   }
  // }, [animal]);
  // return [breedList, status];

  const results = useQuery(["breeds", animal], fetchBreedlist);

  return [results?.data?.breeds ?? [], results.status];





}




//useBreedList is custom hook (get hooks package together)
//we do encapsulation..feed it with animal get back breed list
