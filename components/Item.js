import Link from 'next/link'
import Title from './Title'

const Item = (props) => {
  return (
      <div className="mb-4">
        <div className="tracking-tight flex items-center justify-between">
          <div>
            <span className="font-extrabold mr-1">{props.title}</span>
            <small className="text-gray-500 font-medium italic">@ {props.location}</small>
          </div>

          <span className="text-xs text-gray-400 font-mono">
            {props.startDate} - {props.endDate ? props.endDate : 'Present'}
          </span>
        </div>

        <p className="text-sm">
          {props.content}
        </p>
      </div>
  )
}

export default Item