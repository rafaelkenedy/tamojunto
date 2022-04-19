export declare global {
	namespace ReactNavigation {
		interface RootParamList {
			Home: undefined;
		}
		interface RootDrawerParamList {
			Home: undefined;
			Stack: undefined;
		}
		interface RootStackParamList {
			Home: undefined;
			PostFront: undefined;
			Topic: {id?: string; image?: string};
			PostComments: undefined;
			CreatePostOrComment: undefined;
		}
	}
}
