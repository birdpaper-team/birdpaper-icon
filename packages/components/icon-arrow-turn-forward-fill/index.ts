import type { App } from 'vue';
import _IconArrowTurnForwardFill from './icon-arrow-turn-forward-fill.vue';

const IconArrowTurnForwardFill = Object.assign(_IconArrowTurnForwardFill, {
  install: (app: App) => {
    app.component(_IconArrowTurnForwardFill.name, _IconArrowTurnForwardFill);
  }
});

export default IconArrowTurnForwardFill;