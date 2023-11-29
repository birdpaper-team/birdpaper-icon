import type { App } from 'vue';
import _IconSipFill from './icon-sip-fill.vue';

const IconSipFill = Object.assign(_IconSipFill, {
  install: (app: App) => {
    app.component(_IconSipFill.name, _IconSipFill);
  }
});

export default IconSipFill;