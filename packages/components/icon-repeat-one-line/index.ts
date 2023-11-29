import type { App } from 'vue';
import _IconRepeatOneLine from './icon-repeat-one-line.vue';

const IconRepeatOneLine = Object.assign(_IconRepeatOneLine, {
  install: (app: App) => {
    app.component(_IconRepeatOneLine.name, _IconRepeatOneLine);
  }
});

export default IconRepeatOneLine;