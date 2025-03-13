import { useCompleteTodo, useTodos } from "@/app/api/api";
import PlusIcon from "../../../../public/plus.png";
import Image from "next/image";
import { Todo } from "@/types/todo";

const TodoList = () => {
  const { data: todos, isLoading, error } = useTodos();
  const { mutate: completeTodo } = useCompleteTodo();

  return (
    <div className="flex w-full flex-col overflow-y-scroll rounded-md border-2 border-[#7A90E2] p-4">
      <div className="mb-4 flex w-full justify-center text-[#7A90E2] lg:text-[1.3rem] lg:font-bold">
        <span>Todo</span>
      </div>
      <ul className="flex flex-col gap-5">
        {isLoading ? (
          <p>로딩중...</p>
        ) : error ? (
          <p>todo를 불러오는 도중 에러가 발생했습니다.</p>
        ) : (
          todos.map((todo: Todo) => (
            <li
              key={todo.id}
              className="flex h-[40px] items-center justify-between overflow-hidden rounded-md bg-[#7A90E2] px-2 leading-[40px] text-white"
            >
              <span className="max-w-[calc(100%-37px)] overflow-hidden text-ellipsis whitespace-nowrap">
                {todo.title}
              </span>
              <div
                onClick={() => completeTodo(todo.id)}
                className="flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full bg-green-500"
              >
                <Image src={PlusIcon} alt="todo 완료" width={13} height={13} />
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default TodoList;
