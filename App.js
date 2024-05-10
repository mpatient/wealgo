import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider } from './components/Authentication';
import SplashScreen1 from './components/Splashscreen1';
import SplashScreen2 from './components/Splashscreen2';
import TellMeMore from './components/Tellmemore'; 
import Home from './components/Home';
import Signup from './components/Signup';
import Verification from './components/Verification';
import Nutrition from './components/Nutrition';
import Notification from './components/Notification';
import Settings from './components/Settings';
import Chatbot from './components/Chatbot';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import ForgotPasswordNumber from './components/ForgotPassword/ForgotPasswordNumber';
import ForgotPasswordEmail from './components/ForgotPassword/ForgotPasswordEmail';
import ForgotPasswordVerification from './components/ForgotPassword/ForgotPasswordVerification';
import ForgotPasswordConfirm from './components/ForgotPassword/ForgotPasswordConfirm'
// import 'dotenv/config';


const Stack = createStackNavigator(); 
  
const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashScreen1" headerMode="none">
          <Stack.Screen name="SplashScreen1" component={SplashScreen1} />
          <Stack.Screen name="SplashScreen2" component={SplashScreen2} />
          <Stack.Screen name="TellMeMore" component={TellMeMore} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="ForgotPasswordEmail" component={ForgotPasswordEmail} />
          <Stack.Screen name="ForgotPasswordNumber" component={ForgotPasswordNumber} />
          <Stack.Screen name="ForgotPasswordVerification" component={ForgotPasswordVerification} />
          <Stack.Screen name="ForgotPasswordConfirm" component={ForgotPasswordConfirm} />
          <Stack.Screen name="Verification" component={Verification}/>
          <Stack.Screen name="Nutrition" component={Nutrition}/>
          <Stack.Screen name="Notification" component={Notification} />
          <Stack.Screen name="Chatbot" component={Chatbot}/>
          <Stack.Screen name="Settings" component={Settings}/>


          {/* Other screens can be added here */}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
