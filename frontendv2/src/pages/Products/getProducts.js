export default async function getProducts() {
  const response = await axios.get("/products");
  const products = response.data.products;
  setTableData(products);
}
