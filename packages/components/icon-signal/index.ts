import type { App } from 'vue';
import _IconSignal from './icon-signal.vue';

const IconSignal = Object.assign(_IconSignal, {
  install: (app: App) => {
    app.component(_IconSignal.name, _IconSignal);
  }
});

export default IconSignal;