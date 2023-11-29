import type { App } from 'vue';
import _IconCalendarTodoLine from './icon-calendar-todo-line.vue';

const IconCalendarTodoLine = Object.assign(_IconCalendarTodoLine, {
  install: (app: App) => {
    app.component(_IconCalendarTodoLine.name, _IconCalendarTodoLine);
  }
});

export default IconCalendarTodoLine;