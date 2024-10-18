import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { ReduxStore } from './ReduxStore/ReduxStore.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={ReduxStore}>
    <App />
  </Provider>,
)
