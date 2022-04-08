import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import theme from '../styles/theme';
import Home from '../presentational/Home';
import Topic from '../presentational/Topic';
import PostFront from '../presentational/PostFront';
import PostComments from '../presentational/PostComments';
import CreatePostOrComment from '../presentational/CreatePostOrComment';

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
				<Stack.Screen name="PostFront" component={PostFront} />
				<Stack.Screen name="PostComments" component={PostComments} />
				<Stack.Screen
					name="CreatePostOrComment"
					component={CreatePostOrComment}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Routes;
