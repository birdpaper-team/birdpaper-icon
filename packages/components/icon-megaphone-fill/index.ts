import type { App } from 'vue';
import _IconMegaphoneFill from './icon-megaphone-fill.vue';

const IconMegaphoneFill = Object.assign(_IconMegaphoneFill, {
  install: (app: App) => {
    app.component(_IconMegaphoneFill.name, _IconMegaphoneFill);
  }
});

export default IconMegaphoneFill;