import type { App } from 'vue';
import _IconSolidStateDisk from './icon-solid-state-disk.vue';

const IconSolidStateDisk = Object.assign(_IconSolidStateDisk, {
  install: (app: App) => {
    app.component(_IconSolidStateDisk.name, _IconSolidStateDisk);
  }
});

export default IconSolidStateDisk;