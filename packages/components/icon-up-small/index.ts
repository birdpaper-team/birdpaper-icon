import type { App } from 'vue';
import _IconUpSmall from './icon-up-small.vue';

const IconUpSmall = Object.assign(_IconUpSmall, {
  install: (app: App) => {
    app.component(_IconUpSmall.name, _IconUpSmall);
  }
});

export default IconUpSmall;