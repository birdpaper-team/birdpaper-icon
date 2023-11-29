import type { App } from 'vue';
import _IconCupFour from './icon-cup-four.vue';

const IconCupFour = Object.assign(_IconCupFour, {
  install: (app: App) => {
    app.component(_IconCupFour.name, _IconCupFour);
  }
});

export default IconCupFour;