import Link from 'next/link'

const About = (props) => {
  const info = props.info

  return (
    <div className="section">
      <div className="flex items-center justify-center">
        <div className="m-2 text-right">
          <h1 className="text-3xl font-extrabold tracking-tight">
            {info.name}
          </h1>
          <h2 className="text-xs uppercase font-medium text-gray-500">
            {info.label}
          </h2>
        </div>

        <img className="my-2 mx-4 w-16 rounded-full ring-4 ring-green-400 ring-offset-2" src={info.image} alt={`Picture of ${info.name}`} />

        <div className="m-2 text-xs text-gray-600">
          <div>
            {info.email}
          </div>
          <div className="tabular-nums">
            {info.phone}
          </div>
          <div>
            <Link href={info.website}>
              <a>{info.website}</a>
            </Link>
          </div>
        </div>
      </div>

      <div className="text-sm text-center italic text-gray-400 mt-2">
        {info.summary} based in {info.location.address}
      </div>
    </div>
  )
}

export default About