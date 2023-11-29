import type { App } from 'vue';
import _IconXigua from './icon-xigua.vue';

const IconXigua = Object.assign(_IconXigua, {
  install: (app: App) => {
    app.component(_IconXigua.name, _IconXigua);
  }
});

export default IconXigua;