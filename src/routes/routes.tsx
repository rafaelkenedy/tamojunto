import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import theme from '../styles/theme';
import DrawerMenu from '../components/DrawerMenu';
import Home from '../presentational/Home';
import Stack from './stack';

const Routes = () => {
	const Drawer: any = createDrawerNavigator();

	return (
		<NavigationContainer>
			<Drawer.Navigator
				screenOptions={{
					headerShown: false,
					contentStyle: {backgroundColor: theme.colors.catskill_white},
				}}
				drawerContent={(props: any) => <DrawerMenu {...props} />}>
				<Drawer.Screen name="Stack" component={Stack} />
				<Drawer.Screen name="Home" component={Home} />
			</Drawer.Navigator>
		</NavigationContainer>
	);
};

export default Routes;
