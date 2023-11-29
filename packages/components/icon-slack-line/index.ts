import type { App } from 'vue';
import _IconSlackLine from './icon-slack-line.vue';

const IconSlackLine = Object.assign(_IconSlackLine, {
  install: (app: App) => {
    app.component(_IconSlackLine.name, _IconSlackLine);
  }
});

export default IconSlackLine;