import type { App } from 'vue';
import _IconDiceLine from './icon-dice-line.vue';

const IconDiceLine = Object.assign(_IconDiceLine, {
  install: (app: App) => {
    app.component(_IconDiceLine.name, _IconDiceLine);
  }
});

export default IconDiceLine;