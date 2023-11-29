import type { App } from 'vue';
import _IconLemon from './icon-lemon.vue';

const IconLemon = Object.assign(_IconLemon, {
  install: (app: App) => {
    app.component(_IconLemon.name, _IconLemon);
  }
});

export default IconLemon;