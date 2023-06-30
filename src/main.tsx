import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import { ProductsProvider } from './contexts/ProductsProvider.tsx'
import { CartProvider } from './contexts/CartProvider.tsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ProductsProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ProductsProvider>
  </React.StrictMode>,
)
