import fetch from 'node-fetch';

export const slackAlarm = async (host, slackWebHook) => {
    try {
        // Slack에 보낼 메시지 생성
        const alarmData = 'Status Code';
        const message = `주의: ${host}에서 알람 발생\n내용: ${alarmData}`; // alarmData를 checker로부터 넘겨받기

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