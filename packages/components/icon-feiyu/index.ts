import type { App } from 'vue';
import _IconFeiyu from './icon-feiyu.vue';

const IconFeiyu = Object.assign(_IconFeiyu, {
  install: (app: App) => {
    app.component(_IconFeiyu.name, _IconFeiyu);
  }
});

export default IconFeiyu;