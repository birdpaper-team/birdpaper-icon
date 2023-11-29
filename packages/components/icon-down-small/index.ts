import type { App } from 'vue';
import _IconDownSmall from './icon-down-small.vue';

const IconDownSmall = Object.assign(_IconDownSmall, {
  install: (app: App) => {
    app.component(_IconDownSmall.name, _IconDownSmall);
  }
});

export default IconDownSmall;