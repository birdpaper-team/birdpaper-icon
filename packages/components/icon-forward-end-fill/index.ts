import type { App } from 'vue';
import _IconForwardEndFill from './icon-forward-end-fill.vue';

const IconForwardEndFill = Object.assign(_IconForwardEndFill, {
  install: (app: App) => {
    app.component(_IconForwardEndFill.name, _IconForwardEndFill);
  }
});

export default IconForwardEndFill;