import type { App } from 'vue';
import _IconAddLargeFill from './icon-add-large-fill.vue';

const IconAddLargeFill = Object.assign(_IconAddLargeFill, {
  install: (app: App) => {
    app.component(_IconAddLargeFill.name, _IconAddLargeFill);
  }
});

export default IconAddLargeFill;