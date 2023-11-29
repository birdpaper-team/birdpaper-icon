import type { App } from 'vue';
import _IconHoney from './icon-honey.vue';

const IconHoney = Object.assign(_IconHoney, {
  install: (app: App) => {
    app.component(_IconHoney.name, _IconHoney);
  }
});

export default IconHoney;