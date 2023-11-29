import type { App } from 'vue';
import _IconImageAddFill from './icon-image-add-fill.vue';

const IconImageAddFill = Object.assign(_IconImageAddFill, {
  install: (app: App) => {
    app.component(_IconImageAddFill.name, _IconImageAddFill);
  }
});

export default IconImageAddFill;