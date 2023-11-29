import type { App } from 'vue';
import _IconSlave from './icon-slave.vue';

const IconSlave = Object.assign(_IconSlave, {
  install: (app: App) => {
    app.component(_IconSlave.name, _IconSlave);
  }
});

export default IconSlave;