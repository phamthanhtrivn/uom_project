import { get } from "~/utils/request"

export const getListNews = async () => {
  const response = await get(`news`)
  return response
}