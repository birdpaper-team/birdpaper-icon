import type { App } from 'vue';
import _IconHammerFill from './icon-hammer-fill.vue';

const IconHammerFill = Object.assign(_IconHammerFill, {
  install: (app: App) => {
    app.component(_IconHammerFill.name, _IconHammerFill);
  }
});

export default IconHammerFill;