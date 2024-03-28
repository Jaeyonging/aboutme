export interface Projects {
    id: string;
    gameurl: string;
    date: string;
    project: string;
    hashtags: string[];
    imgurl: string;
    password: string
}

export const SkillMap: Map<string, string[]> = new Map([
    ["Typescript", ["Changed Phaser in Javascript to Typescript.", "Made React website using Typescript.", "Made ThreeJS with Typescript.", "You can check out projects in 'Projects'"]],
    ["Javascript", ["Made Games using Phaser in Javascript.", "Made React website using Javascript", "Made ThreeJs with Javascript."]],
    ["Java", ["Made Android apps using Java like '오늘 어때', '영화 예매', 'Finedust'. These projects were very simple projects."]],
    ["Kotlin", ["Made Cym702 Android App.", "Managed Dabischool Android App.", "Skills are MVVM Architecture, Retrofit2, Glide, Splash, SharedPreference, Firebase Authentication, Firestore, Splash, Databinding, LiveData", "Implemented Dabischool App to playable App without network."]],
    ["Python", ["Implemented AI with Python.", "Coded and took a coding test in Python.", "It's my major language"]],
    ["Swift", ["Managed Dabischool IOS App.", "Changed Download method in Dabischool IOS App.", "Implemented Dabischool App to playable App without network.", "I only can understand and fix some codes. I don't really know about Swift."]],
]);
