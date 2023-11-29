import type { App } from 'vue';
import _IconHeavyShowersLine from './icon-heavy-showers-line.vue';

const IconHeavyShowersLine = Object.assign(_IconHeavyShowersLine, {
  install: (app: App) => {
    app.component(_IconHeavyShowersLine.name, _IconHeavyShowersLine);
  }
});

export default IconHeavyShowersLine;