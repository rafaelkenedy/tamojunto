import React from "react";
import {
	StyledContainer,
	StyledAlertContainer,
	StyledButton,
	StyledView,
	StyledText,
	StyledIcon,
} from "./styles";
import {ReduxType} from "../../@types/types";
import {useSelector} from "react-redux";

const Alert = ({active, cancel = () => {}}) => {
	const user: ReduxType = useSelector(
		(handleUserChoices) => handleUserChoices
	) as ReduxType;
	const owner = user.owner === user.user.id;

	return (
		<>
			{active && (
				<>
					<StyledContainer onPress={cancel} />
					<StyledAlertContainer>
						{owner ? (
							<>
								<StyledButton>
									<StyledIcon source={require("../../assets/icons/Chat.png")} />
									<StyledView>
										<StyledText textWeight="bold">Editar ou Excluir</StyledText>
										<StyledText>Modificar sua publicação</StyledText>
									</StyledView>
								</StyledButton>
								<StyledButton>
									<StyledIcon source={require("../../assets/icons/Bell.png")} />
									<StyledView>
										<StyledText textWeight="bold">Notificações</StyledText>
										<StyledText>Ativar notificações</StyledText>
									</StyledView>
								</StyledButton>
							</>
						) : (
							<>
								<StyledButton>
									<StyledIcon
										source={require("../../assets/icons/Bookmark.png")}
									/>
									<StyledView>
										<StyledText textWeight="bold">Salvar</StyledText>
										<StyledText>Salve pra ler mais tarde</StyledText>
									</StyledView>
								</StyledButton>
								<StyledButton>
									<StyledIcon source={require("../../assets/icons/Flag.png")} />
									<StyledView>
										<StyledText textWeight="bold">Denunciar</StyledText>
										<StyledText>Esta publicação é ofensiva?</StyledText>
									</StyledView>
								</StyledButton>
							</>
						)}
					</StyledAlertContainer>
				</>
			)}
		</>
	);
};

export default Alert;
