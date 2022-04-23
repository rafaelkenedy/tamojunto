import React from "react";
import {SubjectCardPropsType} from "../../@types/types";

import theme from "../../styles/theme";
import {
	StyleButton,
	StyledText,
	StyledCardContainer,
	StyledTextContainer,
	StyledNewsContainer,
	StyledFooter,
} from "./styles";

const LargeCard = ({
	thread,
	isCover = false,
	image,
	action = () => {},
}: SubjectCardPropsType) => {
	return (
		<>
			<StyledCardContainer
				source={isCover ? {uri: image} : {uri: thread?.picture.url}}
				isCover={isCover}
			>
				{!isCover && (
					<StyleButton onPress={action}>
						<StyledTextContainer>
							<StyledNewsContainer>
								<StyledText
									textWeight={"bold"}
									textColor={theme.colors.catskill_white}
								>
									{Math.round(Number(thread?.threadCount) / 2)}
								</StyledText>
								<StyledText
									textWeight={"bold"}
									textColor={theme.colors.catskill_white}
									textSize={"12px"}
								>
									novos
								</StyledText>
							</StyledNewsContainer>
							<StyledText textWeight={"bold"}>{thread?.name}</StyledText>
							<StyledFooter>
								<StyledText textWeight={"bold"}>
									{thread?.threadCount}
								</StyledText>
								<StyledText textSize={"14px"}> Tópicos</StyledText>
							</StyledFooter>
						</StyledTextContainer>
					</StyleButton>
				)}
			</StyledCardContainer>
		</>
	);
};

export default LargeCard;
