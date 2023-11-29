import type { App } from 'vue';
import _IconBreadFill from './icon-bread-fill.vue';

const IconBreadFill = Object.assign(_IconBreadFill, {
  install: (app: App) => {
    app.component(_IconBreadFill.name, _IconBreadFill);
  }
});

export default IconBreadFill;