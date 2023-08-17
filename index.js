import { checker } from "./src/checker/checker.js"
import { readFileSync } from 'fs'
const fileName = process.argv[2]
const protocol = process.argv[3]
const slackWebHook = process.argv[4]
if(!fileName || !protocol || !slackWebHook) {
    throw new Error('argument required')
}
// const urls = parser(fileName)  //실제 구현 방식입니다
// urls.map( (url) => {
//     checker(url)
// })
const jsonFile = readFileSync(fileName, 'utf8')   //parser가 현재 없는관계로 json파일의 첫번째 호스트에게만 요청을 보내는 예시입니다.
const jsonData = JSON.parse(jsonFile)

await checker(jsonData[0], protocol, slackWebHook)