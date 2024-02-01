import type { App } from 'vue';
import _IconForwardEndMiniFill from './icon-forward-end-mini-fill.vue';

const IconForwardEndMiniFill = Object.assign(_IconForwardEndMiniFill, {
  install: (app: App) => {
    app.component(_IconForwardEndMiniFill.name, _IconForwardEndMiniFill);
  }
});

export default IconForwardEndMiniFill;