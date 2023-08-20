import { readFileSync } from 'fs'
// import path from 'path'


export const parser = (fileName) => {
    // const jsonFilePath = path.join('./', fileName);
    const jsonFile = readFileSync(fileName, 'utf8');

    try {
        const jsonData = JSON.parse(jsonFile);
        processJsonData(jsonData);
    } catch (parseError) {
        console.error('JSON 파싱 중 오류가 발생했습니다:', parseError);
    }
}

function processJsonData(data) {
    data.forEach(entry => {
        const { host, method, status } = entry;
        console.log(`Host: ${host}, Method: ${method}, Status: ${status}`);
    });
}