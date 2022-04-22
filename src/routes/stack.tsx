import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import theme from "../styles/theme";
import Home from "../presentational/Home";
import Topic from "../presentational/Topic";
import PostFront from "../presentational/PostFront";
import PostComments from "../presentational/PostComments";
import CreatePostOrComment from "../presentational/CreatePostOrComment";
import SearchScreen from "../presentational/SearchScreen";
import Welcome from "../presentational/Welcome";
import Login from "../presentational/Login";
import SignUp from "../presentational/SignUp";
import Contact from "../presentational/Contact";
import EditProfile from "../presentational/EditProfile";

const Stack = () => {
	const StackRoutes: any = createNativeStackNavigator();

	return (
		<StackRoutes.Navigator
			initialRouteName="Welcome"
			screenOptions={{
				headerShown: false,
				contentStyle: {backgroundColor: theme.colors.athens_gray},
			}}
		>
			<StackRoutes.Screen name="Home" component={Home} />
			<StackRoutes.Screen name="Topic" component={Topic} />
			<StackRoutes.Screen name="PostFront" component={PostFront} />
			<StackRoutes.Screen name="PostComments" component={PostComments} />
			<StackRoutes.Screen
				name="CreatePostOrComment"
				component={CreatePostOrComment}
			/>
			<StackRoutes.Screen name="SearchScreen" component={SearchScreen} />
			<StackRoutes.Screen name="Welcome" component={Welcome} />
			<StackRoutes.Screen name="Login" component={Login} />
			<StackRoutes.Screen name="SignUp" component={SignUp} />
			<StackRoutes.Screen name="Contact" component={Contact} />
			<StackRoutes.Screen name="EditProfile" component={EditProfile} />
		</StackRoutes.Navigator>
	);
};

export default Stack;
