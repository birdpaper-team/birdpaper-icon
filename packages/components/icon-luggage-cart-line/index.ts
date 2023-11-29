import type { App } from 'vue';
import _IconLuggageCartLine from './icon-luggage-cart-line.vue';

const IconLuggageCartLine = Object.assign(_IconLuggageCartLine, {
  install: (app: App) => {
    app.component(_IconLuggageCartLine.name, _IconLuggageCartLine);
  }
});

export default IconLuggageCartLine;