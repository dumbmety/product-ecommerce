import { MenuIcon } from '@heroicons/react/outline'

type Props = {
  onOpen: () => void
}

export default function NavigationOpenMenu(props: Props) {
  return (
    <button
      type="button"
      className="bg-white p-2 rounded-md text-gray-400 lg:hidden"
      onClick={props.onOpen}
    >
      <span className="sr-only">Open menu</span>
      <MenuIcon className="h-6 w-6" aria-hidden="true" />
    </button>
  )
}
