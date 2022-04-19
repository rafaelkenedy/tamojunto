import React from "react";

import {StyledViewContainer, StyledText} from "./styles";
import theme from "../../styles/theme";

const TextArea = ({
	placeholder = "Título...",
	size = "55px",
	borderColor = theme.colors.tide,
	...rest
}) => {
	return (
		<>
			<StyledViewContainer sizeArea={size} borderColor={borderColor}>
				<StyledText {...rest} placeholder={placeholder} />
			</StyledViewContainer>
		</>
	);
};

export default TextArea;
