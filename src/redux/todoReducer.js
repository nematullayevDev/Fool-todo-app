const defaultstate = {
    todos: [],
  };
  
  export function TodoReducer(state = defaultstate, action) {
    let copied = JSON.parse(JSON.stringify(state.todos));
    if (action.type === "TODO_ADD") {
      copied.push(action.payload);
      return { ...state, todos: copied };
    } else if (action.type === "TODO_DELETE") {
      copied = copied.filter((el) => {
        return el.id !== action.payload;
      });
      return { ...state, todos: copied };
    } else if (action.type == "TODO_CHECK") {
      copied = copied.filter((el) => {
        if (el.id == action.payload.id) {
          el.status = action.payload.status;
        }
        return el;
      });
      return { ...state, todos: copied };
    } else {
      return state;
    }
  }
  