import type { App } from 'vue';
import _IconScissors2Fill from './icon-scissors-2-fill.vue';

const IconScissors2Fill = Object.assign(_IconScissors2Fill, {
  install: (app: App) => {
    app.component(_IconScissors2Fill.name, _IconScissors2Fill);
  }
});

export default IconScissors2Fill;