import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import theme from '../styles/theme';
import Home from '../presentational/Home';
import Topic from '../presentational/Topic';
import FrontPost from '../presentational/FrontPost';

const Routes = () => {
	const Stack = createNativeStackNavigator();

	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
					contentStyle: {backgroundColor: theme.colors.catskill_white},
				}}
				initialRouteName="Home">
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="Topic" component={Topic} />
				<Stack.Screen name="FrontPost" component={FrontPost} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Routes;
