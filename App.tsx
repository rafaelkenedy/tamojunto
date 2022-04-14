import React from 'react';
import {Provider} from 'react-redux';
import {ThemeProvider} from 'styled-components';
import {StatusBar} from 'react-native';

import Routes from './src/routes/routes';
import store from './src/store';
import theme from './src/styles/theme';
import {LogBox} from 'react-native';
<<<<<<< HEAD
import Splash from './src/presentational/Splash'
import { Welcome } from './src/presentational/Welcome';
import { Login } from './src/presentational/Login';
=======
>>>>>>> d12f00394410e8c9d6c3dbb177045a8408a970fa

const App = () => {
	LogBox.ignoreLogs([
		"[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
	]);

	return (
<<<<<<< HEAD
		<Login />
		//<Welcome/>
		//<Splash/>
		// <Provider store={store}>
		// 	<ThemeProvider theme={theme}>
		// 		<StatusBar
		// 			barStyle="dark-content"
		// 			backgroundColor={theme.colors.white}
		// 		/>
		// 		<Routes />
		// 	</ThemeProvider>
		// </Provider>
=======
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<StatusBar
					barStyle="dark-content"
					backgroundColor={theme.colors.white}
				/>
				<Routes />
			</ThemeProvider>
		</Provider>
>>>>>>> d12f00394410e8c9d6c3dbb177045a8408a970fa
	);
};

export default App;
