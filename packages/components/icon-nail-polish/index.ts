import type { App } from 'vue';
import _IconNailPolish from './icon-nail-polish.vue';

const IconNailPolish = Object.assign(_IconNailPolish, {
  install: (app: App) => {
    app.component(_IconNailPolish.name, _IconNailPolish);
  }
});

export default IconNailPolish;