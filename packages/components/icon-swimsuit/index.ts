import type { App } from 'vue';
import _IconSwimsuit from './icon-swimsuit.vue';

const IconSwimsuit = Object.assign(_IconSwimsuit, {
  install: (app: App) => {
    app.component(_IconSwimsuit.name, _IconSwimsuit);
  }
});

export default IconSwimsuit;