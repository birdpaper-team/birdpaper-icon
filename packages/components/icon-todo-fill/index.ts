import type { App } from 'vue';
import _IconTodoFill from './icon-todo-fill.vue';

const IconTodoFill = Object.assign(_IconTodoFill, {
  install: (app: App) => {
    app.component(_IconTodoFill.name, _IconTodoFill);
  }
});

export default IconTodoFill;