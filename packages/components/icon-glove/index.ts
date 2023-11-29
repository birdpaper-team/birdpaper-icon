import type { App } from 'vue';
import _IconGlove from './icon-glove.vue';

const IconGlove = Object.assign(_IconGlove, {
  install: (app: App) => {
    app.component(_IconGlove.name, _IconGlove);
  }
});

export default IconGlove;