import type { App } from 'vue';
import _IconGoogleLine from './icon-google-line.vue';

const IconGoogleLine = Object.assign(_IconGoogleLine, {
  install: (app: App) => {
    app.component(_IconGoogleLine.name, _IconGoogleLine);
  }
});

export default IconGoogleLine;