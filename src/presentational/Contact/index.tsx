import React from "react";
import {Linking, StatusBar} from "react-native";

import {
	StyledContainer,
	StyledImage,
	StyledRow,
	StyledText,
	StyledTrail,
	StyledView,
} from "./styles";
import theme from "../../styles/theme";

const Contact = () => {
	return (
		<StyledView>
			<StatusBar backgroundColor={theme.colors.athens_gray} />
			<StyledImage source={require("../../assets/images/logo.png")} />
			<StyledRow>
				<StyledText>Versão - </StyledText>
				<StyledText textColor={theme.colors.wedgewood}>0.131beta</StyledText>
			</StyledRow>
			<StyledText textSize="24px">Conheça nossa equipe</StyledText>
			<StyledContainer>
				<StyledTrail>
					<StyledText textSize="20px" textColor={theme.colors.wedgewood}>
						Service
					</StyledText>
					<StyledRow>
						<StyledText
							textSize="18px"
							onPress={() =>
								Linking.openURL("https://www.linkedin.com/in/leticiasemidio/")
							}
						>
							Letícia Emidio -{" "}
						</StyledText>
						<StyledText
							textSize="18px"
							onPress={() =>
								Linking.openURL(
									"https://www.linkedin.com/in/rafael-lage-oliveira/"
								)
							}
						>
							Rafael Lage
						</StyledText>
					</StyledRow>
				</StyledTrail>
				<StyledTrail>
					<StyledText textSize="20px" textColor={theme.colors.wedgewood}>
						UX/UI
					</StyledText>
					<StyledRow>
						<StyledText
							textSize="18px"
							onPress={() =>
								Linking.openURL(
									"https://www.linkedin.com/in/verenacascaesbvianna/"
								)
							}
						>
							Verena Vianna
						</StyledText>
					</StyledRow>
				</StyledTrail>
				<StyledTrail>
					<StyledText textSize="20px" textColor={theme.colors.wedgewood}>
						Projetos
					</StyledText>
					<StyledRow>
						<StyledText
							textSize="18px"
							onPress={() =>
								Linking.openURL("https://www.linkedin.com/in/carolinacoppo/")
							}
						>
							Carolina Coppo -{" "}
						</StyledText>
						<StyledText
							textSize="18px"
							onPress={() => Linking.openURL("linkedin.com/in/wojtyla23")}
						>
							Rafael Oliveira
						</StyledText>
					</StyledRow>
				</StyledTrail>
				<StyledTrail>
					<StyledText textSize="20px" textColor={theme.colors.wedgewood}>
						Front-End
					</StyledText>
					<StyledRow>
						<StyledText
							textSize="18px"
							onPress={() =>
								Linking.openURL("https://www.linkedin.com/in/ravenascampos/")
							}
						>
							Ravena Campos
						</StyledText>
					</StyledRow>
				</StyledTrail>
				<StyledTrail>
					<StyledText textSize="20px" textColor={theme.colors.wedgewood}>
						Back-End
					</StyledText>
					<StyledRow>
						<StyledText
							textSize="18px"
							onPress={() =>
								Linking.openURL("https://www.linkedin.com/in/renan-modenese/")
							}
						>
							Renan Modenese
						</StyledText>
					</StyledRow>
				</StyledTrail>
				<StyledTrail>
					<StyledText textSize="20px" textColor={theme.colors.wedgewood}>
						IOS
					</StyledText>
					<StyledRow>
						<StyledText
							textSize="18px"
							onPress={() =>
								Linking.openURL("https://www.linkedin.com/in/giovanna-toni/")
							}
						>
							Giovanna Toni -{" "}
						</StyledText>
						<StyledText
							textSize="18px"
							onPress={() =>
								Linking.openURL("https://www.linkedin.com/in/gustavoperbone/")
							}
						>
							Gustavo Perbone
						</StyledText>
					</StyledRow>
				</StyledTrail>
				<StyledTrail>
					<StyledText textSize="20px" textColor={theme.colors.wedgewood}>
						React Native
					</StyledText>
					<StyledRow marginBottom="20px">
						<StyledText
							textSize="18px"
							onPress={() =>
								Linking.openURL("https://www.linkedin.com/in/rafaelkenedy/")
							}
						>
							Rafael Kenedy -{" "}
						</StyledText>
						<StyledText
							textSize="18px"
							onPress={() =>
								Linking.openURL(
									"https://www.linkedin.com/in/kevin-sousa-979522169/"
								)
							}
						>
							Kevin Sousa
						</StyledText>
					</StyledRow>
				</StyledTrail>
			</StyledContainer>
		</StyledView>
	);
};

export default Contact;
