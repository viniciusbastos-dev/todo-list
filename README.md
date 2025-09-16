# ToDo List com TypeScript

Um aplicativo de lista de tarefas para aprender TypeScript de forma prática. Este projeto ensina conceitos como interfaces, types, enums, union types, funções tipadas e manipulação de arrays e objetos.

---

## Funcionalidades

- **CRUD de tarefas**
  - Criar, editar, remover e marcar como concluída
  - Cada tarefa possui:
    - `id` (number)
    - `title` (string)
    - `description` (string, opcional)
    - `status` (`todo` | `in-progress` | `done`)
    - `priority` (`low` | `medium` | `high`)
    - `category` (`work` | `personal` | `hobby`)
    - `dueDate` (Date, opcional)

- **Filtros**
  - Filtrar tarefas por status, categoria ou prioridade

- **Ordenação**
  - Ordenar tarefas por data de vencimento, prioridade ou status

- **Persistência**
  - Salvar tarefas no `localStorage` para manter os dados após atualização da página

- **Contagem de tarefas**
  - Número total de tarefas, concluídas e pendentes

---

## Modelagem de Tipos (TypeScript)

```ts
type Status = 'todo' | 'in-progress' | 'done';
type Priority = 'low' | 'medium' | 'high';

interface Task {
  id: number;
  title: string;
  description?: string;
  status: Status;
  priority: Priority;
  category: Category;
  dueDate?: Date;
}
```
