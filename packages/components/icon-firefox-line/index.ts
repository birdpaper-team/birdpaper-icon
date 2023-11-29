import type { App } from 'vue';
import _IconFirefoxLine from './icon-firefox-line.vue';

const IconFirefoxLine = Object.assign(_IconFirefoxLine, {
  install: (app: App) => {
    app.component(_IconFirefoxLine.name, _IconFirefoxLine);
  }
});

export default IconFirefoxLine;