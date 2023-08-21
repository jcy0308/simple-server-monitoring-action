import { readFileSync } from 'fs'
// import path from 'path'

export const parser = (fileName) => {
    const jsonFile = readFileSync(fileName, 'utf8');

    try {
        const jsonData = JSON.parse(jsonFile);
        console.log(jsonData)
        return jsonData
    } catch (parseError) {
        console.error('JSON 파싱 중 오류가 발생했습니다:', parseError);
    }
}