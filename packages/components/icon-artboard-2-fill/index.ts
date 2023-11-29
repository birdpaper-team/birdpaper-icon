import type { App } from 'vue';
import _IconArtboard2Fill from './icon-artboard-2-fill.vue';

const IconArtboard2Fill = Object.assign(_IconArtboard2Fill, {
  install: (app: App) => {
    app.component(_IconArtboard2Fill.name, _IconArtboard2Fill);
  }
});

export default IconArtboard2Fill;