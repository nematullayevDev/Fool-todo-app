function TodoTitle(props) {
  const { title, count } = props;

  return (
    <h3 className="text-white text-[20px] mb-[17px] mt-[60px]">
      {title} - {count}
    </h3>
  );
}

export default TodoTitle;
