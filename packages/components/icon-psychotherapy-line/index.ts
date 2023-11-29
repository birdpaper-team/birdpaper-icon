import type { App } from 'vue';
import _IconPsychotherapyLine from './icon-psychotherapy-line.vue';

const IconPsychotherapyLine = Object.assign(_IconPsychotherapyLine, {
  install: (app: App) => {
    app.component(_IconPsychotherapyLine.name, _IconPsychotherapyLine);
  }
});

export default IconPsychotherapyLine;