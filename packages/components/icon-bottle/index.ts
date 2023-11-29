import type { App } from 'vue';
import _IconBottle from './icon-bottle.vue';

const IconBottle = Object.assign(_IconBottle, {
  install: (app: App) => {
    app.component(_IconBottle.name, _IconBottle);
  }
});

export default IconBottle;