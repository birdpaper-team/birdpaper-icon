import type { App } from 'vue';
import _IconHourglassNull from './icon-hourglass-null.vue';

const IconHourglassNull = Object.assign(_IconHourglassNull, {
  install: (app: App) => {
    app.component(_IconHourglassNull.name, _IconHourglassNull);
  }
});

export default IconHourglassNull;