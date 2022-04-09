import React, {useState} from 'react';

import {StyledViewContainer, StyledSelect} from './styles';

const Select = () => {
	const [select, setSelect] = useState();

	const data = [
		{label: 'Administração', value: 'Administração'},
		{label: 'Finanças', value: 'Finanças'},
	];

	return (
		<>
			<StyledViewContainer>
				<StyledSelect
					selectedValue={select}
					onValueChange={(item: any) => setSelect(item)}>
					{data.map(({label, value}) => (
						<StyledSelect.Item key={value} label={label} value={value} />
					))}
				</StyledSelect>
			</StyledViewContainer>
		</>
	);
};

export default Select;
