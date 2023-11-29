import type { App } from 'vue';
import _IconRedCross from './icon-red-cross.vue';

const IconRedCross = Object.assign(_IconRedCross, {
  install: (app: App) => {
    app.component(_IconRedCross.name, _IconRedCross);
  }
});

export default IconRedCross;