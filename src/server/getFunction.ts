import type http from 'http'
// import { routing } from '../routes/Routes'
// import { handleFileReauest } from './fileRequest'

export function get(req: http.IncomingMessage, res: http.ServerResponse<http.IncomingMessage>) {
    console.info(`New request from ${req.url}`)
}