import type { App } from 'vue';
import _IconStretching from './icon-stretching.vue';

const IconStretching = Object.assign(_IconStretching, {
  install: (app: App) => {
    app.component(_IconStretching.name, _IconStretching);
  }
});

export default IconStretching;