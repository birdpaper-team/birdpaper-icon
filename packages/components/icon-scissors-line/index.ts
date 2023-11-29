import type { App } from 'vue';
import _IconScissorsLine from './icon-scissors-line.vue';

const IconScissorsLine = Object.assign(_IconScissorsLine, {
  install: (app: App) => {
    app.component(_IconScissorsLine.name, _IconScissorsLine);
  }
});

export default IconScissorsLine;