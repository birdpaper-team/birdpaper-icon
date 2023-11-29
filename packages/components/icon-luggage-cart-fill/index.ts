import type { App } from 'vue';
import _IconLuggageCartFill from './icon-luggage-cart-fill.vue';

const IconLuggageCartFill = Object.assign(_IconLuggageCartFill, {
  install: (app: App) => {
    app.component(_IconLuggageCartFill.name, _IconLuggageCartFill);
  }
});

export default IconLuggageCartFill;