import type { App } from 'vue';
import _IconSvelteFill from './icon-svelte-fill.vue';

const IconSvelteFill = Object.assign(_IconSvelteFill, {
  install: (app: App) => {
    app.component(_IconSvelteFill.name, _IconSvelteFill);
  }
});

export default IconSvelteFill;