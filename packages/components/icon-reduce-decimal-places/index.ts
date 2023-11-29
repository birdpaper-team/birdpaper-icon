import type { App } from 'vue';
import _IconReduceDecimalPlaces from './icon-reduce-decimal-places.vue';

const IconReduceDecimalPlaces = Object.assign(_IconReduceDecimalPlaces, {
  install: (app: App) => {
    app.component(_IconReduceDecimalPlaces.name, _IconReduceDecimalPlaces);
  }
});

export default IconReduceDecimalPlaces;