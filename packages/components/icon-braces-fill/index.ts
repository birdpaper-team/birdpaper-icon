import type { App } from 'vue';
import _IconBracesFill from './icon-braces-fill.vue';

const IconBracesFill = Object.assign(_IconBracesFill, {
  install: (app: App) => {
    app.component(_IconBracesFill.name, _IconBracesFill);
  }
});

export default IconBracesFill;