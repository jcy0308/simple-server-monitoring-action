import fetch from 'node-fetch';

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-={}[]|:;"<>,.?/~`';

export const slackAlarm = async (host, WebHook, expectedStatusCode, resStatuscode) => {
    try {
        // Slack에 보낼 메시지 생성
        let slackWebHook
        const message = `🚨 Alert | ${host}\nExpected Status Code: ${expectedStatusCode}\nBut got: ${resStatuscode}\nPlease check as soon as possible!`; 
        if(WebHook.isRepoUrl === true) {
            slackWebHook = decrypt_Link(WebHook.slackWebUrl, 'Caffeine'); // 위에서 Key를 추가 변수로 받아와야합니다!
        }
        else {
            slackWebHook = WebHook.slackWebUrl
        }
        const response = await fetch(slackWebHook, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                text: message
            })
        });

        if (response.ok) {
            console.log('Slack 메시지가 전송되었습니다.');
        } else {
            console.error('Slack 메시지 전송 중 오류가 발생했습니다.');
        }
    } catch (error) {
        console.error('Slack 메시지 전송 중 오류가 발생했습니다:', error);
    }
};

function decrypt_Link(encryptedLink, key){
    let decryptLink = "";

    for(let i = 0; i < encryptedLink.length; i++){
        const encryptedChar = encryptedLink[i];
        const keyChar = key[i % key.length];

        const encryptedIndex = alphabet.indexOf(encryptedChar);
        const keyIndex = alphabet.indexOf(keyChar);

        if(encryptedIndex === -1){
            decryptLink += encryptedChar;
        }
        else{
            let newIndex = encryptedIndex - keyIndex;
            if(newIndex < 0) newIndex += alphabet.length;
            decryptLink += alphabet[newIndex];
        }
    }

    return decryptLink;
}

export class SlackUrl {
    slackWebUrl
    isRepoUrl
    constructor(WebHook) {
        this.isRepoUrl = false
        this.slackWebUrl = WebHook
    }
}