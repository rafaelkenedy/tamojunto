import React from 'react';
import {StyledContainer, StyledText, StyledView} from './styles';
import TextArea from '../../../../components/TextArea';

const Step1 = ({...rest}) => {
	return (
		<StyledContainer {...rest}>
			<StyledView>
				<StyledText>
					Boas vindas! Informe seus dados abaixo para fazermos o seu cadastro.
				</StyledText>
				<StyledText isBold topDistance='28px'>Nome completo</StyledText>
				<TextArea placeholder="Insira seu nome e sobrenome"/>
				<StyledText isBold topDistance='28px'>Email</StyledText>
				<TextArea placeholder="Insira seu email"/>
				<StyledText isBold topDistance='28px'>Defina sua senha</StyledText>
				<TextArea placeholder="Defina a senha com letra e números"/>
				<StyledText isBold topDistance='28px'>Confirmar sua senha</StyledText>
				<TextArea placeholder="Repita a senha definida acima"/>
				<StyledText  topDistance='55px'>Todos os campos são obrigatórios.</StyledText>
			</StyledView>
		</StyledContainer>
	);
};

export default Step1;
