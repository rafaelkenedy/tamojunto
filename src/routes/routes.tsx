import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createDrawerNavigator} from "@react-navigation/drawer";

import theme from "../styles/theme";
import DrawerMenu from "../components/DrawerMenu";
import Home from "../presentational/Home";
import Stack from "./stack";
import {ReduxType} from "../@types/types";
import {useSelector} from "react-redux";

const Routes = () => {
	const Drawer: any = createDrawerNavigator();
	const user: ReduxType = useSelector(
		(handleUserChoices) => handleUserChoices
	) as ReduxType;

	return (
		<NavigationContainer>
			<Drawer.Navigator
				screenOptions={{
					headerShown: false,
					contentStyle: {backgroundColor: theme.colors.athens_gray},
				}}
				drawerContent={(props: any) => <DrawerMenu {...props} />}
			>
				<Drawer.Screen
					name="Stack"
					component={Stack}
					options={user.logged ? {swipeEnabled: true} : {swipeEnabled: false}}
				/>
				<Drawer.Screen name="Home" component={Home} />
			</Drawer.Navigator>
		</NavigationContainer>
	);
};

export default Routes;
