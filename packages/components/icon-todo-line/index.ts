import type { App } from 'vue';
import _IconTodoLine from './icon-todo-line.vue';

const IconTodoLine = Object.assign(_IconTodoLine, {
  install: (app: App) => {
    app.component(_IconTodoLine.name, _IconTodoLine);
  }
});

export default IconTodoLine;