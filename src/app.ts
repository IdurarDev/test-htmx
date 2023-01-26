import http from "http"
import { get } from './server/getFunction.js'

const port = 5000;

http.createServer(get).listen(port, '0.0.0.0', () => {
    console.info(`Application started on http://localhost:${port}`)
})