import type { App } from 'vue';
import _IconRollerskates from './icon-rollerskates.vue';

const IconRollerskates = Object.assign(_IconRollerskates, {
  install: (app: App) => {
    app.component(_IconRollerskates.name, _IconRollerskates);
  }
});

export default IconRollerskates;