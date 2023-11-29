import type { App } from 'vue';
import _IconEggplant from './icon-eggplant.vue';

const IconEggplant = Object.assign(_IconEggplant, {
  install: (app: App) => {
    app.component(_IconEggplant.name, _IconEggplant);
  }
});

export default IconEggplant;