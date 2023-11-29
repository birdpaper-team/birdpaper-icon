import type { App } from 'vue';
import _IconFahrenheitLine from './icon-fahrenheit-line.vue';

const IconFahrenheitLine = Object.assign(_IconFahrenheitLine, {
  install: (app: App) => {
    app.component(_IconFahrenheitLine.name, _IconFahrenheitLine);
  }
});

export default IconFahrenheitLine;