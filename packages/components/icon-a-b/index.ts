import type { App } from 'vue';
import _IconAB from './icon-a-b.vue';

const IconAB = Object.assign(_IconAB, {
  install: (app: App) => {
    app.component(_IconAB.name, _IconAB);
  }
});

export default IconAB;