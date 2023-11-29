import type { App } from 'vue';
import _IconOutletFill from './icon-outlet-fill.vue';

const IconOutletFill = Object.assign(_IconOutletFill, {
  install: (app: App) => {
    app.component(_IconOutletFill.name, _IconOutletFill);
  }
});

export default IconOutletFill;