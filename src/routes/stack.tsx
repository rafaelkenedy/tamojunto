import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import theme from '../styles/theme';
import Home from '../presentational/Home';
import Topic from '../presentational/Topic';
import PostFront from '../presentational/PostFront';
import PostComments from '../presentational/PostComments';
import CreatePostOrComment from '../presentational/CreatePostOrComment';

const Stack = () => {
	const StackRoutes: any = createNativeStackNavigator();

	return (
		<StackRoutes.Navigator
			screenOptions={{
				headerShown: false,
				contentStyle: {backgroundColor: theme.colors.catskill_white},
			}}>
			<StackRoutes.Screen name="Home" component={Home} />
			<StackRoutes.Screen name="Topic" component={Topic} />
			<StackRoutes.Screen name="PostFront" component={PostFront} />
			<StackRoutes.Screen name="PostComments" component={PostComments} />
			<StackRoutes.Screen
				name="CreatePostOrComment"
				component={CreatePostOrComment}
			/>
		</StackRoutes.Navigator>
	);
};

export default Stack;
