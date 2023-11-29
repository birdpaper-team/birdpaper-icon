import type { App } from 'vue';
import _IconFirefoxFill from './icon-firefox-fill.vue';

const IconFirefoxFill = Object.assign(_IconFirefoxFill, {
  install: (app: App) => {
    app.component(_IconFirefoxFill.name, _IconFirefoxFill);
  }
});

export default IconFirefoxFill;