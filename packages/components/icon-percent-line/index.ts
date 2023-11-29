import type { App } from 'vue';
import _IconPercentLine from './icon-percent-line.vue';

const IconPercentLine = Object.assign(_IconPercentLine, {
  install: (app: App) => {
    app.component(_IconPercentLine.name, _IconPercentLine);
  }
});

export default IconPercentLine;