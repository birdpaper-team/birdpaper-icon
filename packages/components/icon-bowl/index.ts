import type { App } from 'vue';
import _IconBowl from './icon-bowl.vue';

const IconBowl = Object.assign(_IconBowl, {
  install: (app: App) => {
    app.component(_IconBowl.name, _IconBowl);
  }
});

export default IconBowl;