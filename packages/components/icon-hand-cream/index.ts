import type { App } from 'vue';
import _IconHandCream from './icon-hand-cream.vue';

const IconHandCream = Object.assign(_IconHandCream, {
  install: (app: App) => {
    app.component(_IconHandCream.name, _IconHandCream);
  }
});

export default IconHandCream;