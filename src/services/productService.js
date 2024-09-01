import { get } from "../utils/request"

export let params = {
  q: "",
  sort: "",
  order: "",
  page: 1,
  limit: 8,
  category: ""
};

export const getListProduct = async () => {
  const api = `products/?q=${params.q}&_sort=${params.sort}&_order=${params.order}&_page=${params.page}&_limit=${params.limit}`;
  const result = await get(api);
  return result;
}

export const getProduct = async (id) => {
  const result = await get(`products/${id}`);
  return result;
}
