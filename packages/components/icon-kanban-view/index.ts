import type { App } from 'vue';
import _IconKanbanView from './icon-kanban-view.vue';

const IconKanbanView = Object.assign(_IconKanbanView, {
  install: (app: App) => {
    app.component(_IconKanbanView.name, _IconKanbanView);
  }
});

export default IconKanbanView;