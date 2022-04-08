import React from 'react';
import {Provider} from 'react-redux';
import {ThemeProvider} from 'styled-components';
import {StatusBar} from 'react-native';

import Routes from './src/routes/routes';
import store from './src/store';
import theme from './src/styles/theme';
const App = () => {
	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<StatusBar
					barStyle="dark-content"
					backgroundColor={theme.colors.white}
				/>
				<Routes />
			</ThemeProvider>
		</Provider>
	);
};

export default App;
