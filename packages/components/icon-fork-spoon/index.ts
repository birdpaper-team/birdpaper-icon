import type { App } from 'vue';
import _IconForkSpoon from './icon-fork-spoon.vue';

const IconForkSpoon = Object.assign(_IconForkSpoon, {
  install: (app: App) => {
    app.component(_IconForkSpoon.name, _IconForkSpoon);
  }
});

export default IconForkSpoon;