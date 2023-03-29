import axios from "axios";
const storeApi = "https://fakestoreapi.com/";

axios
  .get(`${storeApi}/products`)
  .then((res) => res.json())
  .then((json) => console.log(json));
