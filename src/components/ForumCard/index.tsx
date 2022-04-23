import React from "react";
import moment from "moment";

import {
	StyleButton,
	StyledContainer,
	StyledHeaderContainer,
	StyledButton,
	StyledIcon,
	StyledTitle,
	StyledText,
} from "./styles";
import {ReduxType} from "../../@types/types";
import {useSelector} from "react-redux";

const ForumCard = ({
	home = false,
	fullScream = false,
	commentsCount = false,
	content,
	action = () => {},
	dotAction = () => {},
}: any) => {
	const date = moment(content.createdAt).format("DD/MM/YYYY");
	const user: ReduxType = useSelector(
		(handleUserChoices) => handleUserChoices
	) as ReduxType;

	return (
		<>
			<StyleButton onPress={action}>
				<StyledContainer postSize={fullScream} nightMode={user.nightMode}>
					<StyledButton onPress={dotAction}>
						<StyledIcon
							nightMode={user.nightMode}
							source={require("../../assets/icons/more.png")}
						/>
					</StyledButton>
					<StyledHeaderContainer postSize={home} line>
						{!fullScream && <StyledTitle>{content.subject}</StyledTitle>}
						<StyledText nightMode={user.nightMode}>
							{`${content?.user?.firstName} ${content?.user?.lastName} em ${date}`}
						</StyledText>
					</StyledHeaderContainer>
					<StyledHeaderContainer>
						<StyledTitle isBlack numberOfLines={!fullScream ? 2 : undefined}>
							{content.title}
						</StyledTitle>
						{fullScream && commentsCount && (
							<StyledTitle>{content.commentCount} comentários</StyledTitle>
						)}
						<StyledText
							nightMode={user.nightMode}
							numberOfLines={!fullScream ? 2 : undefined}
						>
							{content.content}
						</StyledText>
						{!fullScream && !home && (
							<StyledTitle>{content.commentCount} comentários</StyledTitle>
						)}
					</StyledHeaderContainer>
				</StyledContainer>
			</StyleButton>
		</>
	);
};

export default ForumCard;
