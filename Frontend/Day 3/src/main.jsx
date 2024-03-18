import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Store , {persistor} from './components/redux/Store'
import { PersistGate } from 'redux-persist/lib/integration/react'

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
    <Provider store={Store}>
      <PersistGate loading={false} persistor={persistor}>
        <BrowserRouter>
         <App/>
        </BrowserRouter>
      </PersistGate>
    </Provider>
</React.StrictMode>
)