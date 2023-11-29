import type { App } from 'vue';
import _IconArtboard2Line from './icon-artboard-2-line.vue';

const IconArtboard2Line = Object.assign(_IconArtboard2Line, {
  install: (app: App) => {
    app.component(_IconArtboard2Line.name, _IconArtboard2Line);
  }
});

export default IconArtboard2Line;