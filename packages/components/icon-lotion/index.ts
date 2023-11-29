import type { App } from 'vue';
import _IconLotion from './icon-lotion.vue';

const IconLotion = Object.assign(_IconLotion, {
  install: (app: App) => {
    app.component(_IconLotion.name, _IconLotion);
  }
});

export default IconLotion;