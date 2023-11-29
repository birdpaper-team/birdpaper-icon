import type { App } from 'vue';
import _IconGobletCracking from './icon-goblet-cracking.vue';

const IconGobletCracking = Object.assign(_IconGobletCracking, {
  install: (app: App) => {
    app.component(_IconGobletCracking.name, _IconGobletCracking);
  }
});

export default IconGobletCracking;