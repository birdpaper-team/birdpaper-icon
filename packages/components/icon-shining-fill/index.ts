import type { App } from 'vue';
import _IconShiningFill from './icon-shining-fill.vue';

const IconShiningFill = Object.assign(_IconShiningFill, {
  install: (app: App) => {
    app.component(_IconShiningFill.name, _IconShiningFill);
  }
});

export default IconShiningFill;