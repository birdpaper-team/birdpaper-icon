import type { App } from 'vue';
import _IconHand from './icon-hand.vue';

const IconHand = Object.assign(_IconHand, {
  install: (app: App) => {
    app.component(_IconHand.name, _IconHand);
  }
});

export default IconHand;