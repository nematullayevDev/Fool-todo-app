import check from "../../assets/chesked.svg";
import trash from "../../assets/trash.svg";
import rollback from "../../assets/rollback.svg";
import { useDispatch } from "react-redux";
function TodoItem(props) {
  const { title, status, id } = props;
  const dispatch = useDispatch();

  function handeleCheck() {
    dispatch({ type: "TODO_CHECK", payload: { id: id, status: false } });
  }

  function handelRolback() {
    dispatch({ type: "TODO_CHECK", payload: { id: id, status: true } });
  }

  function handeleTrash() {
    let isDelete = confirm("Are you want delete?");
    if (isDelete) {
      dispatch({ type: "TODO_DELETE", payload: id });
    }
  }

  return (
    <div className="flex justify-between bg-[#1c1525] mb-[16px] p-[22px] rounded-[10px] ">
      <p
        className={`text-lg ${
          status ? "text-[#9E78CF]" : "text-[#78CFB0] line-through"
        }`}
      >
        {title}
      </p>
      <div className="flex gap-4">
        {status && (
          <>
            <span className="cursor-pointer  " onClick={handeleCheck}>
              <img
                className="hover:opacity-25 transition duration-200"
                src={check}
                alt=""
                width={30}
                height={30}
              />
            </span>

            <span className="cursor-pointer">
              <img
                onClick={handeleTrash}
                className="hover:opacity-25 transition duration-200"
                src={trash}
                alt=""
                width={30}
                height={30}
              />
            </span>
          </>
        )}

        {!status && (
          <>
            <span className="cursor-pointer  ">
              <img
                onClick={handelRolback}
                className=" hover:opacity-25 transition duration-200  "
                src={rollback}
                alt=""
                width={30}
                height={30}
              />
            </span>
          </>
        )}
      </div>
    </div>
  );
}

export default TodoItem;
