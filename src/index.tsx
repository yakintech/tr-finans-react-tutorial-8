import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { CounterProvider } from './contextSample/CounterContext';
import { FavoritesProvider } from './contextSample/FavoritesContext';
import { CartProvider } from './contextSample/CartContext';
import { QueryClient, QueryClientProvider } from 'react-query';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

export const queryClient = new QueryClient();

root.render(
  <QueryClientProvider client={queryClient}>
    <CartProvider>
      <FavoritesProvider>
        <CounterProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </CounterProvider>
      </FavoritesProvider>
    </CartProvider>
  </QueryClientProvider>



);

