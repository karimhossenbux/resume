import Title from './Title'

const Interests = (props) => {
  const items = props.items

  return (
    <div className="section">
      <Title title="Interests" icon={`<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"></path></svg>`} />

      <div className="pl-8 text-sm text-gray-600 dark:text-gray-500">
        {items.map((item, index) => 
          <span key={index}>
            {item.name}
            {index !== props.items.length - 1 ? ', ' : ''}
          </span>
        )}
      </div>
    </div>
  )
}

export default Interests