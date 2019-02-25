/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import { AppRegistry, YellowBox } from 'react-native'
import App from './App'
import { name as appName } from './app.json'


if (__DEV__) {
    YellowBox.ignoreWarnings(['Remote debugger',
        'Warning: isMounted(...) is deprecated',
        'Module RCTImageLoader'])
}

AppRegistry.registerComponent(appName, () => App)
