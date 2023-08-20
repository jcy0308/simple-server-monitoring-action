import axios from 'axios';

export const slackAlarm = async (host, slackWebHook) => {
    try {
        // 호스트에서 알람을 가져오는 로직 구현
        const alarmData = await fetchAlarmDataFromHost(host);

        // Slack에 보낼 메시지 생성
        const message = `주의: ${host}에서 알람 발생\n내용: ${alarmData}`;

        // Slack 웹훅으로 메시지 전송
        const response = await axios.post(slackWebHook, { text: message });

        if (response.status === 200) {
            console.log('Slack 알림이 전송되었습니다.');
        } else {
            console.error('Slack 알림 전송 중 오류가 발생했습니다.');
        }
    } catch (error) {
        console.error('알람 처리 중 오류가 발생했습니다:', error);
    }
};x

// 호스트에서 알람 데이터를 가져오는 가정한 함수
const fetchAlarmDataFromHost = async (host) => {
    // 실제로는 호스트에서 데이터를 가져오는 로직을 구현해야 합니다.
    // 이 함수는 예시를 위해 임의의 데이터를 반환합니다.
    return '임의의 알람 데이터';
};