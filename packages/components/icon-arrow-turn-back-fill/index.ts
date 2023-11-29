import type { App } from 'vue';
import _IconArrowTurnBackFill from './icon-arrow-turn-back-fill.vue';

const IconArrowTurnBackFill = Object.assign(_IconArrowTurnBackFill, {
  install: (app: App) => {
    app.component(_IconArrowTurnBackFill.name, _IconArrowTurnBackFill);
  }
});

export default IconArrowTurnBackFill;