import type { App } from 'vue';
import _IconFoggyFill from './icon-foggy-fill.vue';

const IconFoggyFill = Object.assign(_IconFoggyFill, {
  install: (app: App) => {
    app.component(_IconFoggyFill.name, _IconFoggyFill);
  }
});

export default IconFoggyFill;