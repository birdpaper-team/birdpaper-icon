import type { App } from 'vue';
import _IconFontSansSerif from './icon-font-sans-serif.vue';

const IconFontSansSerif = Object.assign(_IconFontSansSerif, {
  install: (app: App) => {
    app.component(_IconFontSansSerif.name, _IconFontSansSerif);
  }
});

export default IconFontSansSerif;