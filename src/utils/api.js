const products_url = 'https://course-api.com/react-store-products';

const single_product_url = `https://course-api.com/react-store-single-product?id=`;

export async function getAllProducts() {
  const response = await fetch(products_url);
  const data = await response.json();

  if (!response.ok) {
    throw new Error('Could not fetch products');
  }

  return data;
}

export async function getSingleProduct(id) {
  const response = await fetch(`${single_product_url}${id}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error('Could not fetch products');
  }

  return data;
}
