import type { App } from 'vue';
import _IconSnapchatLine from './icon-snapchat-line.vue';

const IconSnapchatLine = Object.assign(_IconSnapchatLine, {
  install: (app: App) => {
    app.component(_IconSnapchatLine.name, _IconSnapchatLine);
  }
});

export default IconSnapchatLine;