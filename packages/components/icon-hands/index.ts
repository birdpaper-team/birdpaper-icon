import type { App } from 'vue';
import _IconHands from './icon-hands.vue';

const IconHands = Object.assign(_IconHands, {
  install: (app: App) => {
    app.component(_IconHands.name, _IconHands);
  }
});

export default IconHands;