import type { App } from 'vue';
import _IconCalendarTodoFill from './icon-calendar-todo-fill.vue';

const IconCalendarTodoFill = Object.assign(_IconCalendarTodoFill, {
  install: (app: App) => {
    app.component(_IconCalendarTodoFill.name, _IconCalendarTodoFill);
  }
});

export default IconCalendarTodoFill;