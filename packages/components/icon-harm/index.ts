import type { App } from 'vue';
import _IconHarm from './icon-harm.vue';

const IconHarm = Object.assign(_IconHarm, {
  install: (app: App) => {
    app.component(_IconHarm.name, _IconHarm);
  }
});

export default IconHarm;