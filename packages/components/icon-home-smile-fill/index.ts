import type { App } from 'vue';
import _IconHomeSmileFill from './icon-home-smile-fill.vue';

const IconHomeSmileFill = Object.assign(_IconHomeSmileFill, {
  install: (app: App) => {
    app.component(_IconHomeSmileFill.name, _IconHomeSmileFill);
  }
});

export default IconHomeSmileFill;