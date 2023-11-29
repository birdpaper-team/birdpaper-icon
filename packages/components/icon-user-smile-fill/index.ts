import type { App } from 'vue';
import _IconUserSmileFill from './icon-user-smile-fill.vue';

const IconUserSmileFill = Object.assign(_IconUserSmileFill, {
  install: (app: App) => {
    app.component(_IconUserSmileFill.name, _IconUserSmileFill);
  }
});

export default IconUserSmileFill;