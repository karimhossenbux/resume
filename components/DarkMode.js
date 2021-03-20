import {useTheme} from 'next-themes'

const DarkMode = () => {
  
  const {theme, setTheme} = useTheme()
  
  return (
    <svg
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="absolute cursor-pointer top-2 right-2 w-6 h-6"
      fill="none" stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          fill="#fff"
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        ></path>
    </svg>
  )
}

export default DarkMode