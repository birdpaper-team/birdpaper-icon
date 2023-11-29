import type { App } from 'vue';
import _IconKickFill from './icon-kick-fill.vue';

const IconKickFill = Object.assign(_IconKickFill, {
  install: (app: App) => {
    app.component(_IconKickFill.name, _IconKickFill);
  }
});

export default IconKickFill;