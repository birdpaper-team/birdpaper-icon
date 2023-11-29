import type { App } from 'vue';
import _IconCheese from './icon-cheese.vue';

const IconCheese = Object.assign(_IconCheese, {
  install: (app: App) => {
    app.component(_IconCheese.name, _IconCheese);
  }
});

export default IconCheese;