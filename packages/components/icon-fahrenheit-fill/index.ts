import type { App } from 'vue';
import _IconFahrenheitFill from './icon-fahrenheit-fill.vue';

const IconFahrenheitFill = Object.assign(_IconFahrenheitFill, {
  install: (app: App) => {
    app.component(_IconFahrenheitFill.name, _IconFahrenheitFill);
  }
});

export default IconFahrenheitFill;