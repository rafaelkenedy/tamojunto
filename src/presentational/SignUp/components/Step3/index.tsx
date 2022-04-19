import React from 'react';
import {StyledContainer, StyledFooter, StyledText, StyledView} from './styles';
import TextArea from '../../../../components/TextArea';

const Step3 = ({...rest}) => {
	return (
		<StyledContainer {...rest}>
			<StyledView>
				<StyledText>
					Para te ajudar a encontrar outros empreendedores próximos, por favor informe o endereço do seu negócio.
				</StyledText>
				<StyledText isBold topDistance='16px'>CEP</StyledText>
				<TextArea placeholder="00000-000"/>
				<StyledText isBold topDistance='16px'>Endereço</StyledText>
				<TextArea placeholder="Digite o endereço"/>
				<StyledText isBold topDistance='16px'>Número</StyledText>
				<TextArea placeholder="Digite o número"/>
				<StyledText isBold topDistance='16px'>Complemento</StyledText>
				<TextArea placeholder="Digite o complemento"/>
				<StyledText isBold topDistance='16px'>Estado</StyledText>
				<TextArea placeholder="Defina a senha com letra e números"/>
				<StyledText isBold topDistance='16px'>Munícipio</StyledText>
				<TextArea placeholder="Defina a senha com letra e números"/>
				<StyledFooter />
			</StyledView>
		</StyledContainer>
	);
};

export default Step3;
