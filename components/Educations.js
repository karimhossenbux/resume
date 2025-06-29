import Link from 'next/link';
import Title from './Title';
import Item from './Item';

const Educations = (props) => {
  const items = props.items;

  return (
    <div className="section pt-4">
      <Title
        title="Educations"
        icon={`<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 14l9-5-9-5-9 5 9 5z"></path><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path></svg>`}
      />

      <div className="pl-8 [&>div]:mb-1">
        {items.map((item, index) => (
          <Item
            key={index}
            title={item.area}
            location={item.institution}
            startDate={item.startDate}
            endDate={item.endDate}
          />
        ))}
      </div>
    </div>
  );
};

export default Educations;
