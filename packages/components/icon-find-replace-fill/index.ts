import type { App } from 'vue';
import _IconFindReplaceFill from './icon-find-replace-fill.vue';

const IconFindReplaceFill = Object.assign(_IconFindReplaceFill, {
  install: (app: App) => {
    app.component(_IconFindReplaceFill.name, _IconFindReplaceFill);
  }
});

export default IconFindReplaceFill;