import type { App } from 'vue';
import _IconAppsFill from './icon-apps-fill.vue';

const IconAppsFill = Object.assign(_IconAppsFill, {
  install: (app: App) => {
    app.component(_IconAppsFill.name, _IconAppsFill);
  }
});

export default IconAppsFill;