import type { App } from 'vue';
import _IconHeartsLine from './icon-hearts-line.vue';

const IconHeartsLine = Object.assign(_IconHeartsLine, {
  install: (app: App) => {
    app.component(_IconHeartsLine.name, _IconHeartsLine);
  }
});

export default IconHeartsLine;