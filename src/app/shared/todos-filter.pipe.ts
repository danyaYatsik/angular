import {Pipe, PipeTransform} from "@angular/core";
import {Todo} from "./todos.service";

@Pipe({name: 'todosFilter'})
export class TodosFilterPipe implements PipeTransform{

  transform(todos: Todo[], searchString: string): Todo[] {
    return todos.filter(todo => todo.title.toLocaleLowerCase().indexOf(searchString.toLocaleLowerCase()) !== -1);
  }

}
