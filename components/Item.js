import Link from 'next/link';

const Item = (props) => {
  const handleMouseEnter = () => {
    if (props?.setHighlightedSkills) {
      props.setHighlightedSkills(props?.skills);
    }
  };

  const handleMouseLeave = () => {
    if (props?.setHighlightedSkills) {
      props.setHighlightedSkills(null);
    }
  };

  return (
    <div
      className={`mb-4 pl-4 border-l-4 print:mb-6 ${
        props.endDate ? 'border-gray100' : 'border-green-200'
      } ${props.endDate ? 'dark:border-gray-600' : 'dark:border-green-200'}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="tracking-tight flex items-baseline justify-between">
        <div>
          <span className="font-extrabold mr-1">{props.title}</span>
          <small className="text-gray-500 font-medium italic">
            {props.link && (
              <Link href={props.link} target="_blank">
                @ {props.location}
              </Link>
            )}

            {!props.link && `@ ${props.location}`}
          </small>
        </div>

        <span className="text-xs text-gray-400 font-mono md:w-auto w-12 text-center ml-2 print:mr-8 print:flex">
          <span className="block md:inline">{props.startDate}</span>
          <span className="px-1 md:inline hidden print:block">-</span>
          <span>{props.endDate ? props.endDate : 'Present'}</span>
        </span>
      </div>

      {props.content?.length &&
        props.content.map((item, i) => (
          <p
            className="text-sm mt-1 text-gray-600 dark:text-gray-500 w-3/4 print:w-[88%]"
            dangerouslySetInnerHTML={{ __html: item }}
            key={i}
          ></p>
        ))}
    </div>
  );
};

export default Item;
