import type { App } from 'vue';
import _IconSkypeFill from './icon-skype-fill.vue';

const IconSkypeFill = Object.assign(_IconSkypeFill, {
  install: (app: App) => {
    app.component(_IconSkypeFill.name, _IconSkypeFill);
  }
});

export default IconSkypeFill;