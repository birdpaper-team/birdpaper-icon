import type { App } from 'vue';
import _IconLensAlignment from './icon-lens-alignment.vue';

const IconLensAlignment = Object.assign(_IconLensAlignment, {
  install: (app: App) => {
    app.component(_IconLensAlignment.name, _IconLensAlignment);
  }
});

export default IconLensAlignment;