import type { App } from 'vue';
import _IconShareForwardBoxLine from './icon-share-forward-box-line.vue';

const IconShareForwardBoxLine = Object.assign(_IconShareForwardBoxLine, {
  install: (app: App) => {
    app.component(_IconShareForwardBoxLine.name, _IconShareForwardBoxLine);
  }
});

export default IconShareForwardBoxLine;