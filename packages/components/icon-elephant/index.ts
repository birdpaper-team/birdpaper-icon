import type { App } from 'vue';
import _IconElephant from './icon-elephant.vue';

const IconElephant = Object.assign(_IconElephant, {
  install: (app: App) => {
    app.component(_IconElephant.name, _IconElephant);
  }
});

export default IconElephant;