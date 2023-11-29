import type { App } from 'vue';
import _IconSplitTurnDownRight from './icon-split-turn-down-right.vue';

const IconSplitTurnDownRight = Object.assign(_IconSplitTurnDownRight, {
  install: (app: App) => {
    app.component(_IconSplitTurnDownRight.name, _IconSplitTurnDownRight);
  }
});

export default IconSplitTurnDownRight;