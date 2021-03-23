import Link from 'next/link'

const Title = (props) => {
  return (
    <footer className="text-center text-xs">
      <Link href="https://github.com/karimhossenbux/resume">
        <a className="text-gray-400 dark:text-gray-700">
          <small>source code: github.com/karimhossenbux/resume</small>
        </a>
      </Link>
    </footer>
  )
}

export default Title