import type { App } from 'vue';
import _IconToolkit from './icon-toolkit.vue';

const IconToolkit = Object.assign(_IconToolkit, {
  install: (app: App) => {
    app.component(_IconToolkit.name, _IconToolkit);
  }
});

export default IconToolkit;