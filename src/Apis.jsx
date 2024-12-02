/* eslint-disable no-throw-literal */
const globalThrow = (message, response) => {
  throw {
    message: message,
    statusText: response.statusText,
    status: response.status,
  };
};

export const getProductDataById = async (productId) => {
  const response = await fetch(
    `https://fakestoreapi.com/products/${productId}`
  );
  if (response.ok) {
    const data = await response.json();
    return data;
  }
  globalThrow("Failed to fetch product by id", response);
};
