import type { App } from 'vue';
import _IconMitsubishi from './icon-mitsubishi.vue';

const IconMitsubishi = Object.assign(_IconMitsubishi, {
  install: (app: App) => {
    app.component(_IconMitsubishi.name, _IconMitsubishi);
  }
});

export default IconMitsubishi;