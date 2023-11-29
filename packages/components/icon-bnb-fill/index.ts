import type { App } from 'vue';
import _IconBnbFill from './icon-bnb-fill.vue';

const IconBnbFill = Object.assign(_IconBnbFill, {
  install: (app: App) => {
    app.component(_IconBnbFill.name, _IconBnbFill);
  }
});

export default IconBnbFill;