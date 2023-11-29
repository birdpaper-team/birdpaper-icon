import type { App } from 'vue';
import _IconTrunk from './icon-trunk.vue';

const IconTrunk = Object.assign(_IconTrunk, {
  install: (app: App) => {
    app.component(_IconTrunk.name, _IconTrunk);
  }
});

export default IconTrunk;