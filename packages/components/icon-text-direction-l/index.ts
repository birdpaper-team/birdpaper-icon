import type { App } from 'vue';
import _IconTextDirectionL from './icon-text-direction-l.vue';

const IconTextDirectionL = Object.assign(_IconTextDirectionL, {
  install: (app: App) => {
    app.component(_IconTextDirectionL.name, _IconTextDirectionL);
  }
});

export default IconTextDirectionL;