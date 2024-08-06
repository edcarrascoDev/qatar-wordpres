import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from '../../store';
import { ThemeProvider } from '@mui/material';
import { theme } from '../../theme';
import { ProductPrice } from './components/ProductPrice';
import { AddToCart } from './components/AddToCart';

const htmlElement = document.querySelector('#reactAddToCartForm');
const { productId, minValue, maxValue, inputValue } = htmlElement.dataset;

createRoot(htmlElement).render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <AddToCart
        productId={productId}
        minValue={minValue}
        maxValue={maxValue}
        inputValue={inputValue}
      />
    </ThemeProvider>
  </Provider>,
);

createRoot(document.querySelector('#reactProductPrice')).render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <ProductPrice />
    </ThemeProvider>
  </Provider>,
);
