import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Cart, Login, Signup, Welcome} from "./screens";
import BottomTabNavigation from "./navigation/BottomTabNavigation";
import BookDetails from "./screens/BookDetails/BookDetails";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={BottomTabNavigation}
          options={{ headerShown: false }}
        />
          <Stack.Screen
              name="BookDetails"
              component={BookDetails}
              options={{ headerShown: false }}
          />
          <Stack.Screen
              name="CartDetails"
              component={Cart}
              options={{ headerShown: false }}
          />
          <Stack.Screen
              name="Checkout"
              component={BottomTabNavigation}
              options={{ headerShown: false }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
