import { Get,Post,Delete,Put,Controller } from '@nestjs/common';

@Controller('todo')
export class TodoController {

    @Get()
    getTodos(){

        return 'Liste des todos';
    }
    @Post()
    addTodo(){
        console.log('Ajouter un todo à la liste des todos');
        return 'Add Todo';
    }
    @Delete()
    deleteTodo(){
        console.log('Supprimer un todo à la liste des todos');
        return 'Delete Todo';
    }

    @Put()
    modifierTodo(){
        console.log('Modifier un todo à la liste des todos');
        return 'Update Todo';
    }
}
