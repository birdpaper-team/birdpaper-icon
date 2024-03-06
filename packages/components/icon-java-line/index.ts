import type { App } from 'vue';
import _IconJavaLine from './icon-java-line.vue';

const IconJavaLine = Object.assign(_IconJavaLine, {
  install: (app: App) => {
    app.component(_IconJavaLine.name, _IconJavaLine);
  }
});

export default IconJavaLine;