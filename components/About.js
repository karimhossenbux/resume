import Link from 'next/link'

const About = (props) => {
  const info = props.info
  const twitter = info.profiles.find(profile => profile.network === 'Twitter')

  return (
    <div className="section mt-2">
      <div className="flex items-center justify-center">
        <div className="m-2 text-right">
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            {info.name}
          </h1>
          <h2 className="text-xs uppercase font-bold text-green-500">
            {info.label}
          </h2>
          <div className="mt-2 text-xs text-gray-500 md:hidden">
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

        <div className="relative flex my-2 mx-4">
          <Link href={twitter.url}>
            <a className="relative z-10"><img className="w-20 h-20 md:w-16 md:h-16 rounded-full ring-4 ring-green-400 ring-offset-2 dark:ring-offset-gray-900" src={info.image} alt={`Picture of ${info.name}`} /></a>
          </Link>
          <div className="absolute inline-flex w-20 h-20 md:w-16 md:h-16 rounded-full ring-8 ring-green-400 animate-ping opacity-20"></div>
        </div>

        <div className="ml-2 mb-2 md:mb-0 text-xs text-gray-500 hidden md:block">
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