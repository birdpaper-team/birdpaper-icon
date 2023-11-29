import type { App } from 'vue';
import _IconRhythmLine from './icon-rhythm-line.vue';

const IconRhythmLine = Object.assign(_IconRhythmLine, {
  install: (app: App) => {
    app.component(_IconRhythmLine.name, _IconRhythmLine);
  }
});

export default IconRhythmLine;