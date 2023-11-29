import type { App } from 'vue';
import _IconCodeView from './icon-code-view.vue';

const IconCodeView = Object.assign(_IconCodeView, {
  install: (app: App) => {
    app.component(_IconCodeView.name, _IconCodeView);
  }
});

export default IconCodeView;