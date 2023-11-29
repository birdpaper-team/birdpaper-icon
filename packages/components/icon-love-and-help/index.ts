import type { App } from 'vue';
import _IconLoveAndHelp from './icon-love-and-help.vue';

const IconLoveAndHelp = Object.assign(_IconLoveAndHelp, {
  install: (app: App) => {
    app.component(_IconLoveAndHelp.name, _IconLoveAndHelp);
  }
});

export default IconLoveAndHelp;