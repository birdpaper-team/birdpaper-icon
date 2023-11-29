import type { App } from 'vue';
import _IconCoffeeMachine from './icon-coffee-machine.vue';

const IconCoffeeMachine = Object.assign(_IconCoffeeMachine, {
  install: (app: App) => {
    app.component(_IconCoffeeMachine.name, _IconCoffeeMachine);
  }
});

export default IconCoffeeMachine;