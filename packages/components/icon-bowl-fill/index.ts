import type { App } from 'vue';
import _IconBowlFill from './icon-bowl-fill.vue';

const IconBowlFill = Object.assign(_IconBowlFill, {
  install: (app: App) => {
    app.component(_IconBowlFill.name, _IconBowlFill);
  }
});

export default IconBowlFill;