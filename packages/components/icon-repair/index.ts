import type { App } from 'vue';
import _IconRepair from './icon-repair.vue';

const IconRepair = Object.assign(_IconRepair, {
  install: (app: App) => {
    app.component(_IconRepair.name, _IconRepair);
  }
});

export default IconRepair;