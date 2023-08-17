import superAgent from 'superagent'

export const checker = async (url) => {
    try {
        const res = await superAgent.get(url.host)
        console.log(res)
    } catch(error) {
        console.log(error)
    }
}