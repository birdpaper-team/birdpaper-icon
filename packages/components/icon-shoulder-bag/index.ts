import type { App } from 'vue';
import _IconShoulderBag from './icon-shoulder-bag.vue';

const IconShoulderBag = Object.assign(_IconShoulderBag, {
  install: (app: App) => {
    app.component(_IconShoulderBag.name, _IconShoulderBag);
  }
});

export default IconShoulderBag;