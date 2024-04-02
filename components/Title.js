const Title = (props) => {
  return (
    <h2 className="text-2xl font-light mb-4 flex print:text-black">
      <span
        className="mr-2 mt-1 text-gray-400 print:text-slate-500"
        dangerouslySetInnerHTML={{ __html: props.icon }}
      ></span>
      <span className="border-b-4 border-green-400 pb-1">{props.title}</span>
    </h2>
  );
};

export default Title;
