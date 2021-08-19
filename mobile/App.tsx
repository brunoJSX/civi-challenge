import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppRoutes from './src/routes/app.routes';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
};

export default App;
