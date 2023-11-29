import type { App } from 'vue';
import _IconSwallow from './icon-swallow.vue';

const IconSwallow = Object.assign(_IconSwallow, {
  install: (app: App) => {
    app.component(_IconSwallow.name, _IconSwallow);
  }
});

export default IconSwallow;