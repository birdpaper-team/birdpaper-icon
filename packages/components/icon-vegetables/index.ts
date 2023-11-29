import type { App } from 'vue';
import _IconVegetables from './icon-vegetables.vue';

const IconVegetables = Object.assign(_IconVegetables, {
  install: (app: App) => {
    app.component(_IconVegetables.name, _IconVegetables);
  }
});

export default IconVegetables;