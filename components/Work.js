import Link from 'next/link'
import Title from './Title'
import Item from './Item'

const Work = (props) => {
  const items = props.items

  return (
    <div className="section">
      <Title title="Experiences" icon={`<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>`} />

      <div className="pl-8">
        {items.map((item, index) => 
          <Item
            key={index}
            title={item.position}
            location={item.company}
            link={item.website}
            startDate={item.startDate}
            endDate={item.endDate}
            content={item.summary}
          />
        )}
      </div>
    </div>
  )
}

export default Work