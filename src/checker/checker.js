import superAgent from 'superagent'
import { slackAlarm } from '../slack/slack.js'
export const checker = async (url, protocol, slackWebHook) => {
    const expectedCode = url.status
    try {
        const res = await superAgent.get(`${protocol}://${url.host}`)
        console.log(res.statusCode)
        if( res.statusCode != expectedCode ){
            await slackAlarm(url.host, slackWebHook, res.statusCode)
        }
    } catch(error) {
        console.log(error)
    }
}