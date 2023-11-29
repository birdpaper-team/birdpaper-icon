import type { App } from 'vue';
import _IconSofaFill from './icon-sofa-fill.vue';

const IconSofaFill = Object.assign(_IconSofaFill, {
  install: (app: App) => {
    app.component(_IconSofaFill.name, _IconSofaFill);
  }
});

export default IconSofaFill;