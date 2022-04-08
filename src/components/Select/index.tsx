import React from 'react';
import theme from '../../styles/theme';

import {StyledViewContainer, StyledSelect} from './styles';

const Select = () => {
	const data = [
		{label: 'Brasil', value: 'Brasil'},
		{label: 'Argentina', value: 'Argentina'},
	];
	return (
		<>
			<StyledViewContainer>
				<StyledSelect
					onValueChange={() => console.log('change')}
					items={data}
				/>
			</StyledViewContainer>
		</>
	);
};

export default Select;
