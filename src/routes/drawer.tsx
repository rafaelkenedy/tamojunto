import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import DrawerMenu from '../components/DrawerMenu';
import theme from '../styles/theme';
import Home from '../presentational/Home';

const Drawer = () => {
	const SideMenu: any = createDrawerNavigator();

	return (
		<SideMenu.Navigator
			initialRouteName="Home"
			screenOptions={{
				headerShown: false,
				contentStyle: {backgroundColor: theme.colors.catskill_white},
			}}
			drawerContent={(props: any) => <DrawerMenu {...props} />}>
			<SideMenu.Screen name="Home" component={Home} />
		</SideMenu.Navigator>
	);
};

export default Drawer;
