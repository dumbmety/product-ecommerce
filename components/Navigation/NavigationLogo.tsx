import Link from 'next/link'

export default function NavigationLogo() {
  return (
    <div className="ml-4 flex lg:ml-0">
      <Link href="/">
        <a>
          <span className="sr-only">Workflow</span>
          <img
            className="h-8 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
            alt=""
          />
        </a>
      </Link>
    </div>
  )
}
