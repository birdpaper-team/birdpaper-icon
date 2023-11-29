import type { App } from 'vue';
import _IconScale from './icon-scale.vue';

const IconScale = Object.assign(_IconScale, {
  install: (app: App) => {
    app.component(_IconScale.name, _IconScale);
  }
});

export default IconScale;