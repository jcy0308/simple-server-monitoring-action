import { checker } from "./src/checker/checker.js"
import { parser } from './src/parser/parser.js'
import { SlackUrl } from "./src/slack/slack.js"

const fileName = process.argv[2]
const protocol = process.argv[3]
let slackWebUrl = process.argv[4]

const slackWebHook = new SlackUrl(slackWebUrl)

if(process.argv.length === 6) {
    slackWebHook.slackWebUrl = process.argv[5]
    slackWebHook.isRepoUrl = true
}
console.log(slackWebHook)
const urls = parser(fileName) 

await checker(urls, protocol, slackWebHook)


