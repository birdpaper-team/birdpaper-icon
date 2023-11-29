import type { App } from 'vue';
import _IconMilk from './icon-milk.vue';

const IconMilk = Object.assign(_IconMilk, {
  install: (app: App) => {
    app.component(_IconMilk.name, _IconMilk);
  }
});

export default IconMilk;