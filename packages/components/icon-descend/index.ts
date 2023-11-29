import type { App } from 'vue';
import _IconDescend from './icon-descend.vue';

const IconDescend = Object.assign(_IconDescend, {
  install: (app: App) => {
    app.component(_IconDescend.name, _IconDescend);
  }
});

export default IconDescend;