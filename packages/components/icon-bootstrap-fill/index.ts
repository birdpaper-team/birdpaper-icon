import type { App } from 'vue';
import _IconBootstrapFill from './icon-bootstrap-fill.vue';

const IconBootstrapFill = Object.assign(_IconBootstrapFill, {
  install: (app: App) => {
    app.component(_IconBootstrapFill.name, _IconBootstrapFill);
  }
});

export default IconBootstrapFill;