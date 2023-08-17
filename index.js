import { checker } from "./src/checker/checker"
import { readFileSync } from 'fs'
const fileName = process.argv[2]
const protocol = process.argv[3]
const slackWebHook = process.argv[4]

// const urls = parser(fileName)
// urls.map( (url) => {
//     checker(url)
// })
const jsonFile = readFileSync(fileName, 'utf8')
const jsonData = JSON.parse(jsonFile)

checker(jsonFile[0])