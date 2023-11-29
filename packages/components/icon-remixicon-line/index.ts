import type { App } from 'vue';
import _IconRemixiconLine from './icon-remixicon-line.vue';

const IconRemixiconLine = Object.assign(_IconRemixiconLine, {
  install: (app: App) => {
    app.component(_IconRemixiconLine.name, _IconRemixiconLine);
  }
});

export default IconRemixiconLine;