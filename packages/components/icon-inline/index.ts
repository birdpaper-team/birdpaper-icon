import type { App } from 'vue';
import _IconInline from './icon-inline.vue';

const IconInline = Object.assign(_IconInline, {
  install: (app: App) => {
    app.component(_IconInline.name, _IconInline);
  }
});

export default IconInline;