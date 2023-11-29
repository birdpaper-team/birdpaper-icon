import type { App } from 'vue';
import _IconBugFill from './icon-bug-fill.vue';

const IconBugFill = Object.assign(_IconBugFill, {
  install: (app: App) => {
    app.component(_IconBugFill.name, _IconBugFill);
  }
});

export default IconBugFill;