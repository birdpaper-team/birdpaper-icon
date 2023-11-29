import type { App } from 'vue';
import _IconTheSingleShoulderBag from './icon-the-single-shoulder-bag.vue';

const IconTheSingleShoulderBag = Object.assign(_IconTheSingleShoulderBag, {
  install: (app: App) => {
    app.component(_IconTheSingleShoulderBag.name, _IconTheSingleShoulderBag);
  }
});

export default IconTheSingleShoulderBag;