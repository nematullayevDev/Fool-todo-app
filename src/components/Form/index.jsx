import { useDispatch } from "react-redux";
import plus from "../../assets/Vector.svg";
import { useRef } from "react";
function Form() {
  const nameRef = useRef(null);
  const dispatch = useDispatch();
  function handleClick(e) {
    e.preventDefault();

    if (nameRef.current.value.length > 3) {
      const todo = {
        id: Date.now(),
        name: nameRef.current.value,
        status: true,
      };

      dispatch({ type: "TODO_ADD", payload: todo });
      nameRef.current.value = null;
    }
  }

  return (
    <div className="flex items-center justify-between mb-[59px]">
      <input
        ref={nameRef}
        className="text-[#8849dc] w-[381px] py-[9px] px-[9px] border  border-[#3E1671] rounded-lg bg-inherit outline-none"
        type="text"
        name=""
        id=""
        placeholder="Add a new task"
      />
      <button
        onClick={handleClick}
        className="w-[40px] bg-[#9E78CF] rounded-lg p-[9px]"
      >
        <img src={plus} alt="" width={22} height={22} />
      </button>
    </div>
  );
}
export default Form;
