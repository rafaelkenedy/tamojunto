import React, {useState} from 'react';
import {StyledCheckBox, StyledContainer, StyledText, StyledView, StyledRowView, StyledFooter} from './styles';
import TextArea from '../../../../components/TextArea';

const Step2 = ({...rest}) => {
	const [responsible, setResponsible] = useState();
	console.log(responsible);

	return (
		<StyledContainer {...rest}>
			<StyledView>
				<StyledText>
					Agora, por favor insira os dados da sua empresa (você precisa ter um CNPJ ativo).
				</StyledText>
				<StyledText isBold textSize="16px" topDistance='16px'>Nome Fantasia</StyledText>
				<TextArea placeholder="Nome que seus clientes conhecem"/>
				<StyledText isBold textSize="16px" topDistance='16px'>CNPJ</StyledText>
				<TextArea placeholder="00.000.000/0000-00"/>
				<StyledText isBold textSize="16px" topDistance='16px'>Ramo de atuação</StyledText>
				<TextArea placeholder="Defina a senha com letra e números"/>
				<StyledRowView topDistance="24px">
					<StyledCheckBox value={responsible} onValueChange={(value) => setResponsible(value)}/>
					<StyledText textSize="16px">Declaro que sou responsável legal pela empresa.</StyledText>
				</StyledRowView>
				<StyledRowView topDistance="16px">
					<StyledCheckBox value={responsible} onValueChange={(value) => setResponsible(value)}/>
					<StyledText textSize="16px">Concordo com os Termos e Condições do tamojunto.</StyledText>
				</StyledRowView>
				<StyledRowView topDistance="16px">
					<StyledCheckBox value={responsible} onValueChange={(value) => setResponsible(value)}/>
					<StyledText textSize="16px">Concordo com a Política de Privacidade do tamojunto.</StyledText>
				</StyledRowView>
				<StyledFooter />
			</StyledView>
		</StyledContainer>
	);
};

export default Step2;
