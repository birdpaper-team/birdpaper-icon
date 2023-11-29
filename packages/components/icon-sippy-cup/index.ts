import type { App } from 'vue';
import _IconSippyCup from './icon-sippy-cup.vue';

const IconSippyCup = Object.assign(_IconSippyCup, {
  install: (app: App) => {
    app.component(_IconSippyCup.name, _IconSippyCup);
  }
});

export default IconSippyCup;