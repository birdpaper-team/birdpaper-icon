import type { App } from 'vue';
import _IconEgg from './icon-egg.vue';

const IconEgg = Object.assign(_IconEgg, {
  install: (app: App) => {
    app.component(_IconEgg.name, _IconEgg);
  }
});

export default IconEgg;