import type { App } from 'vue';
import _IconQuoteText from './icon-quote-text.vue';

const IconQuoteText = Object.assign(_IconQuoteText, {
  install: (app: App) => {
    app.component(_IconQuoteText.name, _IconQuoteText);
  }
});

export default IconQuoteText;