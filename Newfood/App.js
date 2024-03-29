import { createStackNavigator, createAppContainer } from 'react-navigation';
import SearchScreen from './src/screens/SearchScreen';

const navigator = createStackNavigator(
  {
    Screen: SearchScreen
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Business Search'
    }
  }
);

export default createAppContainer(navigator);
