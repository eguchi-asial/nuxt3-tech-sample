export default defineEventHandler(((event) => {
  const { params } = event.context
  return {
    id: params.id,
    title: `title: ${params.id}`,
    description: `description: ${params.id}`,
  }
}))
