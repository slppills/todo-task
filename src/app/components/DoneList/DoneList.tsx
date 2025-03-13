import { useDeleteTodo, useDone } from "@/app/api/api";
import DeleteIcon from "../../../../public/cross.png";
import Image from "next/image";
import { Todo } from "@/types/todo";

const DoneList = () => {
  const { data: done, isLoading, error } = useDone();
  const { mutate: deleteTodo } = useDeleteTodo();

  return (
    <div className="flex w-full flex-col overflow-y-scroll rounded-md border-2 border-[#7A90E2] p-4">
      <div className="mb-4 flex w-full justify-center text-[#7A90E2] lg:text-[1.3rem] lg:font-bold">
        <span>Done</span>
      </div>
      <ul className="flex flex-col gap-5">
        {isLoading ? (
          <p>로딩중...</p>
        ) : error ? (
          <p>todo를 불러오는 도중 에러가 발생했습니다.</p>
        ) : (
          done.map((todo: Todo) => (
            <li
              key={todo.id}
              className="flex h-[40px] items-center justify-between rounded-md bg-[#7A90E2] px-2 leading-[40px] text-white"
            >
              <span className="max-w-[calc(100%-37px)] overflow-hidden text-ellipsis whitespace-nowrap">
                {todo.title}
              </span>
              <div
                onClick={() => deleteTodo(todo.id)}
                className="flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full bg-white"
              >
                <Image src={DeleteIcon} alt="todo 완료" width={21} height={21} />
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default DoneList;
