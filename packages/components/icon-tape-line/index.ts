import type { App } from 'vue';
import _IconTapeLine from './icon-tape-line.vue';

const IconTapeLine = Object.assign(_IconTapeLine, {
  install: (app: App) => {
    app.component(_IconTapeLine.name, _IconTapeLine);
  }
});

export default IconTapeLine;