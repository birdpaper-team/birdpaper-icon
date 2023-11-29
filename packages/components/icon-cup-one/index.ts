import type { App } from 'vue';
import _IconCupOne from './icon-cup-one.vue';

const IconCupOne = Object.assign(_IconCupOne, {
  install: (app: App) => {
    app.component(_IconCupOne.name, _IconCupOne);
  }
});

export default IconCupOne;