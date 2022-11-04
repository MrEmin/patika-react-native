/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Router from './src/Router';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Router);
