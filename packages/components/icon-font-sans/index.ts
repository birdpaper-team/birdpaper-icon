import type { App } from 'vue';
import _IconFontSans from './icon-font-sans.vue';

const IconFontSans = Object.assign(_IconFontSans, {
  install: (app: App) => {
    app.component(_IconFontSans.name, _IconFontSans);
  }
});

export default IconFontSans;