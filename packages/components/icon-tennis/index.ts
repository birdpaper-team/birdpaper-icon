import type { App } from 'vue';
import _IconTennis from './icon-tennis.vue';

const IconTennis = Object.assign(_IconTennis, {
  install: (app: App) => {
    app.component(_IconTennis.name, _IconTennis);
  }
});

export default IconTennis;