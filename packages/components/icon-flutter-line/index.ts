import type { App } from 'vue';
import _IconFlutterLine from './icon-flutter-line.vue';

const IconFlutterLine = Object.assign(_IconFlutterLine, {
  install: (app: App) => {
    app.component(_IconFlutterLine.name, _IconFlutterLine);
  }
});

export default IconFlutterLine;