import type { App } from 'vue';
import _IconTextUnderline from './icon-text-underline.vue';

const IconTextUnderline = Object.assign(_IconTextUnderline, {
  install: (app: App) => {
    app.component(_IconTextUnderline.name, _IconTextUnderline);
  }
});

export default IconTextUnderline;