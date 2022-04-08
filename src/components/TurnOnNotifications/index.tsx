import React from 'react';

import {StyledToggle, StyledText, StyledViewContainer} from './styles';

const TurnOnNotifications = () => {
	return (
		<StyledViewContainer>
			<StyledText>Ativar notificações de comentários</StyledText>
			<StyledToggle />
		</StyledViewContainer>
	);
};

export default TurnOnNotifications;
