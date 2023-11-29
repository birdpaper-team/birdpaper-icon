import type { App } from 'vue';
import _IconEqualizer3Line from './icon-equalizer-3-line.vue';

const IconEqualizer3Line = Object.assign(_IconEqualizer3Line, {
  install: (app: App) => {
    app.component(_IconEqualizer3Line.name, _IconEqualizer3Line);
  }
});

export default IconEqualizer3Line;