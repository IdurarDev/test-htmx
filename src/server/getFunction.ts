import type http from 'http'
import { routing } from '../routes/Routes'
// import { handleFileReauest } from './fileRequest'

export function get(req: http.IncomingMessage, res: http.ServerResponse<http.IncomingMessage>) {
    console.info(`New request from ${req.url}`)

    const content = routing(req)
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write(`<!doctype html>
        <html lang="fr">
            <head>
                <meta charset="utf-8" />
                <title>Test HTMX</title>
            </head>
            <body>
                ${content}
            </body>
    `)
}