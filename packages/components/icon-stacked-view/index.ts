import type { App } from 'vue';
import _IconStackedView from './icon-stacked-view.vue';

const IconStackedView = Object.assign(_IconStackedView, {
  install: (app: App) => {
    app.component(_IconStackedView.name, _IconStackedView);
  }
});

export default IconStackedView;