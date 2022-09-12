import '../styles/globals.css'
import { Provider  } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from '../redux/store'
import {CookiesProvider} from 'react-cookie' 

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <CookiesProvider>
        <Component {...pageProps} />
        </CookiesProvider>  
      </PersistGate>
    </Provider>
  )
}

export default MyApp;
