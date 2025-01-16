const TodoTemplate = ({children}) => {
    //  console.log( children );
    return (
        <div className="todo-template">
            <h1>일정관리</h1>
            {/* <p>Todo앱을 만들자!!</p> */}
            <div>{children}</div>
        </div>
    );
};

export default TodoTemplate;