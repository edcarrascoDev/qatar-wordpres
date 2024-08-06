export const CartEmpty = () => {
  return (
    <div className="empty-cart">
      <div className="empty-cart__wrapper">
        <div className="empty-cart__image mb-30">
          <img
            decoding="async"
            src="http://industriasqatar.local/wp-content/themes/qatar/styles/assets/images/empty-cart.png"
            alt=""
          />
        </div>
        <div className="empty-cart__message">
          <div className="woocommerce-notices-wrapper"></div>
          <div className="wc-empty-cart-message">
            <div className="cart-empty woocommerce-info">Your cart is currently empty.</div>
          </div>
        </div>
        <a
          className="mdc-button mdc-button--raised wc-backward mdc-ripple-upgraded"
          href="http://industriasqatar.local/tienda/"
        >
          Return to shop
        </a>
      </div>
    </div>
  );
};
