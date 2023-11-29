import type { App } from 'vue';
import _IconSpaceColony from './icon-space-colony.vue';

const IconSpaceColony = Object.assign(_IconSpaceColony, {
  install: (app: App) => {
    app.component(_IconSpaceColony.name, _IconSpaceColony);
  }
});

export default IconSpaceColony;