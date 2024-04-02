export interface Projects {
    id: string;
    gameurl: string;
    date: string;
    project: string;
    hashtags: string[];
    imgurl: string;
    password: string
}

export interface Learneds {
    id: string;
    descr: string;
    hashtags: string[];
    imgurl: string;
}

export const SkillMap: Map<string, string[]> = new Map([
    ["Typescript", ["Changed Phaser in Javascript to Typescript.", "Made React website using Typescript.", "Made ThreeJS with Typescript.", "You can check out projects in 'Projects'"]],
    ["Javascript", ["Made Games using Phaser in Javascript.", "Made React website using Javascript", "Made ThreeJs with Javascript."]],
    ["Java", ["Made Android apps using Java like '오늘 어때', '영화 예매', 'Finedust'. These projects were very simple projects."]],
    ["Kotlin", ["Made Cym702 Android App.", "Managed Dabischool Android App.", "Skills are MVVM Architecture, Retrofit2, Glide, Splash, SharedPreference, Firebase Authentication, Firestore, Splash, Databinding, LiveData", "Implemented Dabischool App to playable App without network."]],
    ["Python", ["Implemented AI with Python.", "Coded and took a coding test in Python."]],
    ["Swift", ["Managed Dabischool IOS App.", "Changed Download method in Dabischool IOS App.", "Implemented Dabischool App to playable App without network.", "I only can understand and fix some codes. I don't really know about Swift."]],
]);

export const AboutMap: Map<string, string[]> = new Map([
    ["About me", ['- 사용자 입장에서 생각하여 대한 **불편함을 없애려고 노력**하는 Frontend Developer입니다.', "- 사용자가 무엇을 원하는지 **항상 고민하고 개선**을 하려고 노력하고 있습니다.", "- 새로운 기술 혹은 최신 기술에 관심이 많으며 **새로운 기술들을 프로젝트에 적용**하는 것에 흥미를 느낍니다.", "- 새로운 것을 계속해서 배우고 배우는 것에 있어 두려움 없이 시도해보려하며 **원하는 결과가 나올 때까지 책임감을 가지며 열정과 최선으로 구현**하는게 저의 장점이라고 생각합니다."]],

    ["Projects", ["**Cym702**", "알람 서비스", "- 사용자가 설정한 시간에 맞게 알람이 울리게끔 구현함 (반복주기 1~2분 차이 있음)", "블루투스 기능", "- 블루투스 기기와 통신하여 연결하고 명령어를 보내 데이터를 가져옴", "검사지 촬영", "- 사용자가 카메라 (camerX)를 이용하여 검사지를 촬영할 수 있도록 구현함", "웹(vue)간의 통신", "- 웹(vue)와 앱 간의 bridge 함수를 이용하여 통신 구현함", "프로그레스 바 기능", "-  검사 촬영 후 사진 전송시, 사용자에게 프로그레스 바를 통해 얼마나 남았는지 보여줌", "로그인 기능", "- 소셜 로그인 (카카오, 구글) 로그인을 구현함", "**프로젝트를 어떻게 나열할지 고민중**"]],

    ["Activity", ["- 2023.05.22 **찰스의 안드로이드 컨퍼런스** 참가", "- 2023.04.19~ 2023.04.21 **World IT Show Yellosis Android Developer**로 참가", "- 2022.12.26 ~ 2023.06.25 **Yellosis Android Developer 개발자** (장기현장실습학생)", "- 2022.02 TOEIC 805", "- 2022.04 **IPP 현장실습 우수사례 장려상**", "- 2022.06 ~ 2022.08 **(주)로젠소프트 (단기현장실습학생)**"]],

    ["History", ["- 2017.03 ~ 2023.08 한국기술교육대학교 컴퓨터공학과 (3.5/4.5)", "- 2016.05 ~ 2017.02 청담고등학교", "- 2014.08 ~ 2016.05 Korean International School In Philippines", "- 2009.04 ~ 2014.08 Brent International School In Manila"]],
    ["School Activity", ["- 2017.03 ~ 2022.12 KCBS (교내 방송국에서 촬영 및 편집)", "- 2022.08 ~ 2022.12 대학원팀 교내 외국인 학생 안내 도우미(근로 장학생)", "- 2021.08 ~ 2021.12 GEC 교내 외국인 학생 안내 도우미(근로 장학생)"]],
    ["TMI", ["**알바**", "2018.06 - 2018.08 풀타임 오창휴게소 던킨도너츠 알바", "2020.03 ~ 2020.08 뚜레쥬르 풀타임 알바", "2020.12 ~ 2021.02 뚜레쥬르 풀타임 알바"]],
]);


