import React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import stackNavigator from './RootNavigation';

const Navigation = () => {
  const Navigation = createStaticNavigation(stackNavigator);
  return <Navigation />;
};

export default React.memo(Navigation);
