import type { App } from 'vue';
import _IconRemixRunLine from './icon-remix-run-line.vue';

const IconRemixRunLine = Object.assign(_IconRemixRunLine, {
  install: (app: App) => {
    app.component(_IconRemixRunLine.name, _IconRemixRunLine);
  }
});

export default IconRemixRunLine;