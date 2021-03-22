import Link from 'next/link'
import Title from './Title'

const Item = (props) => {
  return (
      <div className={`mb-4 pl-4 border-l-4 border-${props.endDate ? 'gray-200' : 'green-100'} dark:border-${props.endDate ? 'gray-600' : 'green-200'}`}>
        <div className="tracking-tight flex items-baseline justify-between">
          <div>
            <span className="font-extrabold mr-1">{props.title}</span>
            <small className="text-gray-500 font-medium italic">
              {props.link && 
                <Link href={props.link}>
                  <a target="_blank">@ {props.location}</a>
                </Link>
              }

              {!props.link &&
                `@ ${props.location}`
              }
            </small>
          </div>

          <span className="text-xs text-gray-400 font-mono md:w-auto w-12 text-center ml-2">
            <span className="block md:inline">{props.startDate}</span>
            <span className="px-1 hidden md:inline">-</span>
            <span>{props.endDate ? props.endDate : 'Present'}</span>
          </span>
        </div>

        { props.content &&
          <p className="text-sm mt-1 text-gray-600 dark:text-gray-500 w-3/4" dangerouslySetInnerHTML={{__html: props.content}}></p>
        }
      </div>
  )
}

export default Item