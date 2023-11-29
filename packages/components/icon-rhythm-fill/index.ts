import type { App } from 'vue';
import _IconRhythmFill from './icon-rhythm-fill.vue';

const IconRhythmFill = Object.assign(_IconRhythmFill, {
  install: (app: App) => {
    app.component(_IconRhythmFill.name, _IconRhythmFill);
  }
});

export default IconRhythmFill;