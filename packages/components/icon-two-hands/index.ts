import type { App } from 'vue';
import _IconTwoHands from './icon-two-hands.vue';

const IconTwoHands = Object.assign(_IconTwoHands, {
  install: (app: App) => {
    app.component(_IconTwoHands.name, _IconTwoHands);
  }
});

export default IconTwoHands;