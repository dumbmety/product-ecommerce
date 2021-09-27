import Link from 'next/link'

export default function NavigationAuth() {
  return (
    <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
      <Link href="/signin">
        <a className="text-sm font-medium text-gray-700 hover:text-gray-800">
          Sign in
        </a>
      </Link>
      <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
      <Link href="/signup">
        <a className="text-sm font-medium text-gray-700 hover:text-gray-800">
          Create account
        </a>
      </Link>
    </div>
  )
}
