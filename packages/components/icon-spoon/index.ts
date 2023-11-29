import type { App } from 'vue';
import _IconSpoon from './icon-spoon.vue';

const IconSpoon = Object.assign(_IconSpoon, {
  install: (app: App) => {
    app.component(_IconSpoon.name, _IconSpoon);
  }
});

export default IconSpoon;