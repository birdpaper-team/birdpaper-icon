import type { App } from 'vue';
import _IconDoneAll from './icon-done-all.vue';

const IconDoneAll = Object.assign(_IconDoneAll, {
  install: (app: App) => {
    app.component(_IconDoneAll.name, _IconDoneAll);
  }
});

export default IconDoneAll;