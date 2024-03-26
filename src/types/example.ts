export interface QTest {
    question: string
    answer01: string
    answer02: string
    answer03: string
    ansewr04: string
    answer05: string
}


export const QMap: Map<string, string> = new Map([


]);

interface ProjectData {
    date: string;
    project: string;
    imgurl: string;
    hashtags: string[];
    gameurl: string
}

export interface Project {
    [key: string]: ProjectData;
}

export interface Projects {
    id: string;
    gameurl: string;
    date: string;
    project: string;
    hashtags: string[];
    imgurl: string;
}