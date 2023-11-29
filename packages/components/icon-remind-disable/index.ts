import type { App } from 'vue';
import _IconRemindDisable from './icon-remind-disable.vue';

const IconRemindDisable = Object.assign(_IconRemindDisable, {
  install: (app: App) => {
    app.component(_IconRemindDisable.name, _IconRemindDisable);
  }
});

export default IconRemindDisable;