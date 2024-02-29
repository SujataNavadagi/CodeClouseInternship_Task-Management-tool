import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import StudentTabNavigator from './StudentTabNavigator';
import AdminTabNavigator from './AdminTabNavigator';

const AppNavigator = createSwitchNavigator(
  {
    Student: StudentTabNavigator,
    Admin: AdminTabNavigator,
  },
  {
    initialRouteName: 'Student',
  }
);

export default createAppContainer(AppNavigator);
