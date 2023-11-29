import type { App } from 'vue';
import _IconStackshareFill from './icon-stackshare-fill.vue';

const IconStackshareFill = Object.assign(_IconStackshareFill, {
  install: (app: App) => {
    app.component(_IconStackshareFill.name, _IconStackshareFill);
  }
});

export default IconStackshareFill;