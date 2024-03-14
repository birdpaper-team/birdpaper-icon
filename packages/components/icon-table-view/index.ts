import type { App } from 'vue';
import _IconTableView from './icon-table-view.vue';

const IconTableView = Object.assign(_IconTableView, {
  install: (app: App) => {
    app.component(_IconTableView.name, _IconTableView);
  }
});

export default IconTableView;