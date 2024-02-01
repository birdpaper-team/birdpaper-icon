import type { App } from 'vue';
import _IconSignpostLine from './icon-signpost-line.vue';

const IconSignpostLine = Object.assign(_IconSignpostLine, {
  install: (app: App) => {
    app.component(_IconSignpostLine.name, _IconSignpostLine);
  }
});

export default IconSignpostLine;