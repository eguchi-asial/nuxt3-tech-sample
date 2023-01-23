import { DetailResponse } from "~~/types/app"

// useStateのcallbackでuseFetchからデータを取得して、useStateにセットすれば、serversideでのみ、useStateのinitが実行されてbetterなのでは？
export const useFetchDetail = async (id: number) => {
  await useState<DetailResponse | undefined>(STATE_KEYS.KEY_DETAIL, async () => {
    const requestUrl = `${useRuntimeConfig().apihost}/api/${id}/detail/`
    const { data } = await useFetch<DetailResponse>(requestUrl, {
      cache: 'no-cache',
      method: 'get',
      onRequest: () => {
        console.info(`@@@ API callled: ${requestUrl}`)
      }
    })
    if (!data) return undefined
    return unref(data) || undefined
  })
}
