import { checker } from "./src/checker/checker.js"
import { parser } from './src/parser/parser.js'

const fileName = process.argv[2]
const protocol = process.argv[3]
const slackWebHook = process.argv[4]

if(!fileName || !protocol || !slackWebHook) {
    throw new Error('argument required')
}
const urls = parser(fileName) 

await checker(urls, protocol, slackWebHook)


