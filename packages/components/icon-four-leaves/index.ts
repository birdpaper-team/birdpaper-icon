import type { App } from 'vue';
import _IconFourLeaves from './icon-four-leaves.vue';

const IconFourLeaves = Object.assign(_IconFourLeaves, {
  install: (app: App) => {
    app.component(_IconFourLeaves.name, _IconFourLeaves);
  }
});

export default IconFourLeaves;