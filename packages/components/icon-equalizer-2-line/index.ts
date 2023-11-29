import type { App } from 'vue';
import _IconEqualizer2Line from './icon-equalizer-2-line.vue';

const IconEqualizer2Line = Object.assign(_IconEqualizer2Line, {
  install: (app: App) => {
    app.component(_IconEqualizer2Line.name, _IconEqualizer2Line);
  }
});

export default IconEqualizer2Line;