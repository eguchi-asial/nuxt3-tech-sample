export default defineNuxtRouteMiddleware((_to, from) => {
  const query = from.query
  const draftKey = query.draftKey
  if (!from.path.endsWith('/')) {
    let remakeUrl = `${from.path}/`
    return navigateTo(remakeUrl)
  }
})
