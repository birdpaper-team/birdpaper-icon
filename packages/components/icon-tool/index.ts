import type { App } from 'vue';
import _IconTool from './icon-tool.vue';

const IconTool = Object.assign(_IconTool, {
  install: (app: App) => {
    app.component(_IconTool.name, _IconTool);
  }
});

export default IconTool;