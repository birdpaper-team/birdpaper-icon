import type { App } from 'vue';
import _IconOpenaiLine from './icon-openai-line.vue';

const IconOpenaiLine = Object.assign(_IconOpenaiLine, {
  install: (app: App) => {
    app.component(_IconOpenaiLine.name, _IconOpenaiLine);
  }
});

export default IconOpenaiLine;