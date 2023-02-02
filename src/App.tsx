import React, { type FC } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from 'routes';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import './App.css';
import store from 'store';
import Loading from 'components/common/Loading';

const App: FC = () => {
  const router = createBrowserRouter(routes);
  const persist = persistStore(store);
  return (
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={<Loading />} persistor={persist}>
          <RouterProvider router={router} />
        </PersistGate>
      </Provider>
    </React.StrictMode>
  );
};

export default App;
