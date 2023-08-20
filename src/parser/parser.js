import { readFileSync } from 'fs'
// import path from 'path'

export const parser = (fileName) => {
    // const jsonFilePath = path.join('./', fileName);
    const jsonFile = readFileSync(fileName, 'utf8');

    try {
        const jsonData = JSON.parse(jsonFile);
        console.log(jsonData)
        return jsonData
        // processJsonData(jsonData);
    } catch (parseError) {
        console.error('JSON 파싱 중 오류가 발생했습니다:', parseError);
    }
}

function processJsonData(data) {
    const return_data = [];

    data.forEach(entry => {
        const { host, method, status, body } = entry;
        // let id = null, pw = null;
        if (body){
            // id = body.id;
            // pw = body.password;
            
        }
        //console.log(`Host: ${host}, Method: ${method}, Status: ${status}, Body: ${body}, ID: ${id}, PW: ${pw}`);
        return_data.push([host, method, status, id, pw]);
    });

    return return_data;
}