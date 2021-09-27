export default function NavigationCountry() {
  return (
    <div className="hidden lg:ml-8 lg:flex">
      <a
        href="#"
        className="text-gray-700 hover:text-gray-800 flex items-center"
      >
        <img
          src="https://tailwindui.com/img/flags/flag-canada.svg"
          alt=""
          className="w-5 h-auto block flex-shrink-0"
        />
        <span className="ml-3 block text-sm font-medium">CAD</span>
        <span className="sr-only">, change currency</span>
      </a>
    </div>
  )
}
