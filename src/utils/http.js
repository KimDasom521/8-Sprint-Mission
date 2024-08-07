export async function getAllProduct({ query }) {
  const { currentPage, order, size, keyword } = query;
  const response = await fetch(
    `https://panda-market-api.vercel.app/products?page=${currentPage}&orderBy=${order}&pageSize=${size}&keyword=${keyword}`
  );
  if (!response.ok) {
    throw new Error("데이터를 불러오는 중 에러가 발생했습니다.");
  }
  const data = await response.json();
  return data;
}

export async function getProduct({ query }) {
  const { productId } = query;
  const response = await fetch(
    `https://panda-market-api.vercel.app/products/${productId}`
  );
  if (!response.ok) {
    throw new Error("데이터를 불러오는 중 에러가 발생했습니다.");
  }
  const data = await response.json();
  return data;
}

export async function getFavoriteProduct({ query }) {
  const { size } = query;
  const response = await fetch(
    `https://panda-market-api.vercel.app/products?&orderBy=favorite&pageSize=${size}`
  );
  const data = await response.json();
  if (!response.ok) {
    throw new Error("데이터를 불러오는 중 에러가 발생했습니다.");
  }
  return data;
}
