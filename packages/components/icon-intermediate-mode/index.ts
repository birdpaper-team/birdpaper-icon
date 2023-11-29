import type { App } from 'vue';
import _IconIntermediateMode from './icon-intermediate-mode.vue';

const IconIntermediateMode = Object.assign(_IconIntermediateMode, {
  install: (app: App) => {
    app.component(_IconIntermediateMode.name, _IconIntermediateMode);
  }
});

export default IconIntermediateMode;