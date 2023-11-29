import type { App } from 'vue';
import _IconHammerLine from './icon-hammer-line.vue';

const IconHammerLine = Object.assign(_IconHammerLine, {
  install: (app: App) => {
    app.component(_IconHammerLine.name, _IconHammerLine);
  }
});

export default IconHammerLine;