import type { App } from 'vue';
import _IconGood from './icon-good.vue';

const IconGood = Object.assign(_IconGood, {
  install: (app: App) => {
    app.component(_IconGood.name, _IconGood);
  }
});

export default IconGood;