import axios from 'axios'
let qtestAPI = import.meta.env.VITE_QTEST_KEY


export async function FetchQuestions(qtype: string) {
    return axios.get(`http://www.career.go.kr/inspct/openapi/test/questions?apikey=${qtestAPI}&q=${qtype}`)
}

export async function FetchResult(qtype: string, gender: string, qanswer: string) {
    const startDtm = Date.now().toString()
    return axios.post('http://www.career.go.kr/inspct/openapi/test/report', {
        apikey: `${qtestAPI}`,
        qestrnSeq: qtype,
        trgetSe: "100209",
        gender: gender,
        startDtm: startDtm,
        answers: qanswer
    });
}

