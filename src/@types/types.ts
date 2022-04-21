export interface AuthType {
	email: string;
	password: string;
}

export interface SubjectsType {
	id: string;
	name: string;
	picture: PictureType;
	threadCount: number;
}

export interface ThreadsType {
	id: string;
	commentCount: number;
	content: string;
	createdAt: Date;
	subject: string;
	title: string;
	user: UserType;
}

export interface CustomAlertType {
	visible: boolean;
	title?: string;
	message?: string;
}

export interface SplitNameType {
	firstName: string;
	lastName: string;
}

export interface ReduxType {
	loading: boolean;
	nightMode: boolean;
	register: RegisterReduxType;
	search: boolean;
	theme: string;
}
export interface RegisterReduxType {
	businessName: string;
	businessTypeId: string;
	cnpj: number;
	email: string;
	firstName: string;
	lastName: string;
	password: string;
	phone: string;
}

export interface PostUserType {
	email: string;
	password: string;
	firstName: string;
	lastName: string;
	businessName: string;
	cnpj: number;
	phone: string;
	businessTypeId: string;
	cityId: string;
	stateId: string;
}

export interface UserType {
	id: string;
	businessName: string;
	cnpj: number;
	email: string;
	firstName: string;
	lastName: string;
	phone: string;
}

export interface PictureType {
	id: string;
	key: string;
	url: string;
}

export interface SubjectCardPropsType {
	thread?: SubjectsType;
	isFooter?: boolean;
	isCover?: boolean;
	image?: string;
	action?: () => void;
}
