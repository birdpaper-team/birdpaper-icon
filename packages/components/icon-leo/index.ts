import type { App } from 'vue';
import _IconLeo from './icon-leo.vue';

const IconLeo = Object.assign(_IconLeo, {
  install: (app: App) => {
    app.component(_IconLeo.name, _IconLeo);
  }
});

export default IconLeo;