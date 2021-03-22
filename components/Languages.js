import Title from './Title'

const Languages = (props) => {
  const items = props.items

  return (
    <div className="section">
      <Title title="Languages" icon={`<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path></svg>`} />

      <div className="md:flex justify-between pl-8">
        {items.map((item, index) => 
          <div className="flex items-center" key={index}>
            <div className="mr-2 text-sm">
              {item.flag}
            </div>
            <div className="text-sm">
              <span className="mr-1">{item.language}</span>
              <small className="text-gray-400 text-sm">[{item.fluency}]</small>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Languages