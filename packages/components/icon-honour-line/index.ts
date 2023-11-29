import type { App } from 'vue';
import _IconHonourLine from './icon-honour-line.vue';

const IconHonourLine = Object.assign(_IconHonourLine, {
  install: (app: App) => {
    app.component(_IconHonourLine.name, _IconHonourLine);
  }
});

export default IconHonourLine;