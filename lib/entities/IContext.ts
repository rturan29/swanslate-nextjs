export interface IUserInfo {
    isSignIn: boolean;
    userAuth: {
        accessToken: string;
        userName: string;
        uid: string;
    };
}

export interface ITasks {
    translateTasks: Array<{ sentence: string; id: number; }>;
    validationTasks: Array<{ originalText: string; translatedText: { [key: string]: string; }; id: number; }>;
}

export interface IContext {
    userInfo: IUserInfo;
    tasks: ITasks;
}