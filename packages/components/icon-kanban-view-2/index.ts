import type { App } from 'vue';
import _IconKanbanView2 from './icon-kanban-view-2.vue';

const IconKanbanView2 = Object.assign(_IconKanbanView2, {
  install: (app: App) => {
    app.component(_IconKanbanView2.name, _IconKanbanView2);
  }
});

export default IconKanbanView2;