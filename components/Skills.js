import Title from './Title';

const Skills = ({ items, highlightedSkills }) => {
  return (
    <div className="section">
      <Title
        title="Skills"
        icon={`<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>`}
      />

      <div className="md:flex justify-between pl-4">
        {items.map((item, index) => (
          <div
            className="md:w-1/3 px-4 mb-4 md:mb-0 print:pr-0 print:flex print:items-baseline print:gap-2"
            key={index}
          >
            <h3 className="text-xs font-semibold uppercase mb-1 print:min-w-20">
              {item.name}
            </h3>
            <div>
              {item.keywords.map((keyword, kindex) => (
                <span
                  className={`inline-flex mr-2 print:mr-1 text-xs font-semibold text-opacity-70 text-black border px-1 rounded border-purple-100 dark:border-gray-900 transition-colors ${
                    highlightedSkills?.includes(keyword)
                      ? 'bg-green-400'
                      : 'dark:bg-gray-600 bg-purple-50'
                  }`}
                  key={kindex}
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
