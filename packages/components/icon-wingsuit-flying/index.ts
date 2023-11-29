import type { App } from 'vue';
import _IconWingsuitFlying from './icon-wingsuit-flying.vue';

const IconWingsuitFlying = Object.assign(_IconWingsuitFlying, {
  install: (app: App) => {
    app.component(_IconWingsuitFlying.name, _IconWingsuitFlying);
  }
});

export default IconWingsuitFlying;