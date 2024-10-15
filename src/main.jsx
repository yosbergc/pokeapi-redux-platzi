import { createRoot } from 'react-dom/client'
import App from './components/App.jsx'
import { Provider } from 'react-redux'
import { store } from './store/store.js'
import './index.css'

createRoot(document.getElementById('root')).render(<Provider store={store}>
    <App />
</Provider>)
