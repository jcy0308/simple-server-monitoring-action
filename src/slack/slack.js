import fetch from 'node-fetch';

export const slackAlarm = async (host, slackWebHook) => {
    try {
        // Slack에 보낼 메시지 생성
        const alarmData = await fetchAlarmDataFromHost(host);
        const message = `주의: ${host}에서 알람 발생\n내용: ${alarmData}`;

        const test_slackWebHook = 'https://hooks.slack.com/services/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';

        const response = await fetch(test_slackWebHook, {
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

// 호스트에서 알람 데이터를 가져오는 가정한 함수
const fetchAlarmDataFromHost = async (host) => {
    // 실제로는 호스트에서 데이터를 가져오는 로직을 구현해야 합니다.
    // 이 함수는 예시를 위해 임의의 데이터를 반환합니다.
    return '임의의 알람 데이터';
};