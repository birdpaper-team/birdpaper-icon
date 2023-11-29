import type { App } from 'vue';
import _IconDiscussFill from './icon-discuss-fill.vue';

const IconDiscussFill = Object.assign(_IconDiscussFill, {
  install: (app: App) => {
    app.component(_IconDiscussFill.name, _IconDiscussFill);
  }
});

export default IconDiscussFill;