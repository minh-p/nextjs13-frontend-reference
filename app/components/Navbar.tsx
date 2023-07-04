import Link from 'next/link'

const links = {
  Feed: "/feed",
  About: "/about",
  Recitations: "/recitations",
  Contacts: "/contacts"
}

const Navbar = () => {
  return (
    <nav>
      <div className="hidden w-full md:block md:w-auto">
        <ul
        className="font-medium flex flex-col justify-center p-4 md:flex-row md:space-x-8 md:mt-0
        md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900
        dark:border-gray-700">
          {
            Object.keys(links).map((linkName, linkIndex) => (
              <li key={linkIndex}><Link href={links[linkName]}>
                {linkName}</Link>
              </li>
            ))
          }
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
