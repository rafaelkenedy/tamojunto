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
