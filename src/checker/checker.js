import { slackAlarm } from '../slack/slack.js'
import { get, post, put, del } from './request.js'
export const checker = async (urls, protocol, slackWebHook) => {
    urls.map( async (url) => {
        const expectedCode = url.status
        let res = null
        try {
            switch(url.method) {
                case 'GET': 
                    res = await get(url, protocol)
                    break
                case 'POST':
                    res = await post(url, protocol)
                    break
                case 'PUT':
                    res = await put(url, protocol)
                    break
                case 'DELETE':
                    res = await del(url, protocol)
                    break
                default:
                    throw new Error('check if your method is correct in json file')
            }
            console.log(res.status)
            if( res.status != expectedCode ){
                await slackAlarm(url.host, slackWebHook, expectedCode, res.status)
            }
        } catch(error) {
            console.log(error)
        }
    })
}