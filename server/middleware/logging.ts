export default defineEventHandler((event) => {
  const { req, res } = event.node
  console.log(`${req.method} ${req.url} HTTP/${req.httpVersion} ${res.statusCode} ${res.getHeader('Content-Length') ?? 0
    } - "${req.headers.referer ?? '-'}" ${req.headers['user-agent']} -;`)
})