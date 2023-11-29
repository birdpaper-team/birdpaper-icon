import type { App } from 'vue';
import _IconPsychotherapyFill from './icon-psychotherapy-fill.vue';

const IconPsychotherapyFill = Object.assign(_IconPsychotherapyFill, {
  install: (app: App) => {
    app.component(_IconPsychotherapyFill.name, _IconPsychotherapyFill);
  }
});

export default IconPsychotherapyFill;