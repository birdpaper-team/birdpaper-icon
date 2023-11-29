import type { App } from 'vue';
import _IconTower from './icon-tower.vue';

const IconTower = Object.assign(_IconTower, {
  install: (app: App) => {
    app.component(_IconTower.name, _IconTower);
  }
});

export default IconTower;