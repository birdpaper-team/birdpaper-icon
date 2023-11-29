import type { App } from 'vue';
import _IconDiceFill from './icon-dice-fill.vue';

const IconDiceFill = Object.assign(_IconDiceFill, {
  install: (app: App) => {
    app.component(_IconDiceFill.name, _IconDiceFill);
  }
});

export default IconDiceFill;