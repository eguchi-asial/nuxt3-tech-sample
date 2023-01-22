export default defineNuxtRouteMiddleware((_to, from) => {
  const { params: { id } } = from
  const idstr = id as string
  console.log(idstr)
  if (!idstr || !idstr.match(/^[0-9]{1,3}$/)) { return abortNavigation() }
})