import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import theme from '../styles/theme';
import DrawerMenu from '../components/DrawerMenu';
import Home from '../presentational/Home';
import Topic from '../presentational/Topic';
import PostFront from '../presentational/PostFront';
import PostComments from '../presentational/PostComments';
import CreatePostOrComment from '../presentational/CreatePostOrComment';
//import Splash from '../presentational/Splash';

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
				<Drawer.Screen name="Home" component={Home} />
				<Drawer.Screen name="Topic" component={Topic} />
				<Drawer.Screen name="PostFront" component={PostFront} />
				<Drawer.Screen name="PostComments" component={PostComments} />
				<Drawer.Screen
					name="CreatePostOrComment"
					component={CreatePostOrComment}
				/>
			</Drawer.Navigator>
		</NavigationContainer>
	);
};

export default Routes;
