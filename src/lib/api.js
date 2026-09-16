import axios from "axios";
const API_URL = "https://fakestoreapi.com";

export async function getProducts() {
  const response = await fetch(`${API_URL}/products`);
    console.log(response)
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  let res = await response.json()
  return res;
}

export async function getProduct(id) {
  const response = await fetch(`${API_URL}/products/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }

  let res = await response.json()
  return res;
}