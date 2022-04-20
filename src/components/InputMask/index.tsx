import React from "react";

import {StyledViewContainer, StyledText} from "./styles";
import theme from "../../styles/theme";

const InputMask = ({
	placeholder = "Título...",
	borderColor = theme.colors.tide,
	placeholderTextColor = theme.colors.fuscous_gray,
	value,
	...rest
}) => {
	return (
		<>
			<StyledViewContainer borderColor={borderColor}>
				<StyledText
					value={value}
					{...rest}
					placeholder={placeholder}
					placeholderTextColor={placeholderTextColor}
				/>
			</StyledViewContainer>
		</>
	);
};

export default InputMask;
