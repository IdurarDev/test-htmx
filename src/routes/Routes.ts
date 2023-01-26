import type http from 'http'
import { Home } from '../templates/Home.js'
import { Default } from '../templates/Default.js'

export const routing = (req: http.IncomingMessage): string => {
    if (req.url == '/home' || req.url == '/' || req.url == '') {
        return `${Home}`
    }
    return `${Default}`
}