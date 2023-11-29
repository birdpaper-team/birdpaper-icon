import type { App } from 'vue';
import _IconBreadMachine from './icon-bread-machine.vue';

const IconBreadMachine = Object.assign(_IconBreadMachine, {
  install: (app: App) => {
    app.component(_IconBreadMachine.name, _IconBreadMachine);
  }
});

export default IconBreadMachine;