import type { App } from 'vue';
import _IconShadowFill from './icon-shadow-fill.vue';

const IconShadowFill = Object.assign(_IconShadowFill, {
  install: (app: App) => {
    app.component(_IconShadowFill.name, _IconShadowFill);
  }
});

export default IconShadowFill;