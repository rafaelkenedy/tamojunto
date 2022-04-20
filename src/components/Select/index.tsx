import React from "react";

import {StyledViewContainer, StyledSelect, StyledIcon} from "./styles";

const Select = ({items, ...rest}) => {
	return (
		<>
			<StyledViewContainer>
				<StyledSelect {...rest}>
					{items.map(({label, value}) => (
						<StyledSelect.Item key={value} label={label} value={value} />
					))}
				</StyledSelect>
				<StyledIcon source={require("../../assets/icons/Expand_down.png")} />
			</StyledViewContainer>
		</>
	);
};

export default Select;
