import { DetailResponse } from "~~/types/app"

export const useFetchDetail = async (id: number) => {
  const requestUrl = `${useRuntimeConfig().apihost}/api/${id}/detail/`
  const { data } = await useFetch<DetailResponse>(requestUrl, {
    cache: 'no-cache',
    method: 'get',
    onRequest: () => {
      console.info(`@@@ API callled: ${requestUrl}`)
    }
  })
  if (!data) return {}
  return unref(data) || {}
}
