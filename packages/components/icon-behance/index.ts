import type { App } from 'vue';
import _IconBehance from './icon-behance.vue';

const IconBehance = Object.assign(_IconBehance, {
  install: (app: App) => {
    app.component(_IconBehance.name, _IconBehance);
  }
});

export default IconBehance;