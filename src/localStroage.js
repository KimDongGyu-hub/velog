// 투두리스트 읽어오기(read)
export function getTodoList() {
  // "["할일","리액트 연습"]" -> string
  const data = localStorage.getItem("todos");
  //
  if (data) {
    // JSON문자열 -> 자바스크립트 객체로 변환
    return JSON.parse(data);
  }
  //데이터가 존재하지 않을때
  else {
    return [];
  }
}

// 투두리스트 저장(create)
/**
 *
 * @param {Array} todos
 */
export function setTodoList(todos) {
  // JSON => "["리액트","자바스크립트"]"
  // JSON으로 변환하지 않고 넣으면 ? "[리액트, 자바스크립트]"
  localStorage.setItem("todos", JSON.stringify(todos));
}

// 투두 삭제
export function removeTodo(todo) {
  // 현재 가지고있는 todolist가져오기
  const todos = getTodoList();
  const newTodos = todos.filter((e) => e !== todo);
  setTodoList(newTodos);
  return newTodos;
}
