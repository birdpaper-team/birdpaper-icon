import type { App } from 'vue';
import _IconArtboardFill from './icon-artboard-fill.vue';

const IconArtboardFill = Object.assign(_IconArtboardFill, {
  install: (app: App) => {
    app.component(_IconArtboardFill.name, _IconArtboardFill);
  }
});

export default IconArtboardFill;