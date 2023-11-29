import type { App } from 'vue';
import _IconSplitTurnDownLeft from './icon-split-turn-down-left.vue';

const IconSplitTurnDownLeft = Object.assign(_IconSplitTurnDownLeft, {
  install: (app: App) => {
    app.component(_IconSplitTurnDownLeft.name, _IconSplitTurnDownLeft);
  }
});

export default IconSplitTurnDownLeft;