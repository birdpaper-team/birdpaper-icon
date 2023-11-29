import type { App } from 'vue';
import _IconScissors from './icon-scissors.vue';

const IconScissors = Object.assign(_IconScissors, {
  install: (app: App) => {
    app.component(_IconScissors.name, _IconScissors);
  }
});

export default IconScissors;