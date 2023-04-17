export default async function fetchProducts() {
  const response = await fetch('https://fakestoreapi.com/products');

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  console.log(data);
  return data;
}
