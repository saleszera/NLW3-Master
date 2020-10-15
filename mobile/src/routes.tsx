import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import OrphanagesMap from '../src/pages/OrphanagesMap/index';
import OrphanagesDetails from '../src/pages/OrphanagesDetails/index';


const Routes = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="OrphanagesMap"
          component={OrphanagesMap}
        />
        <Screen name="OrphanagesDetails"
          component={OrphanagesDetails}
        />
      </Navigator>
    </NavigationContainer>
  )
}

export default Routes;