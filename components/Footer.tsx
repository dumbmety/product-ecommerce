export default function Footer() {
  return (
    <footer className="bg-gray-50 pt-16 pb-12 sm:pt-20 md:pt-24 xl:pt-32 sm:pb-20">
      <div className="max-w-screen-lg xl:max-w-screen-xl mx-auto divide-y divide-gray-200 px-4 sm:px-6 md:px-8">
        <ul className="Footer_nav__2rFid text-sm font-medium pb-14 sm:pb-20 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10">
          <li className="space-y-5 row-span-2">
            <h2 className="text-xs font-semibold tracking-wide text-gray-900 uppercase">
              With Workflow
            </h2>
            <ul className="space-y-4">
              <li>
                <a
                  className="hover:text-gray-900 transition-colors duration-200"
                  href="/mag/newsroom"
                >
                  Newsroom
                </a>
              </li>
              <li>
                <a
                  className="hover:text-gray-900 transition-colors duration-200"
                  href="/landings/seller-introduction"
                >
                  Seller Introduction
                </a>
              </li>
              <li>
                <a
                  className="hover:text-gray-900 transition-colors duration-200"
                  href="/careers"
                >
                  Careers at Workflow
                </a>
              </li>
            </ul>
          </li>
          <li className="space-y-5 row-span-2">
            <h2 className="text-xs font-semibold tracking-wide text-gray-900 uppercase">
              Support
            </h2>
            <ul className="space-y-4">
              <li>
                <a
                  className="hover:text-gray-900 transition-colors duration-200"
                  href="/faq"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  className="hover:text-gray-900 transition-colors duration-200"
                  href="/page/terms"
                >
                  Terms
                </a>
              </li>
              <li>
                <a
                  className="hover:text-gray-900 transition-colors duration-200"
                  href="/page/primary"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </li>
          <li className="space-y-5 row-span-2">
            <h2 className="text-xs font-semibold tracking-wide text-gray-900 uppercase">
              Help
            </h2>
            <ul className="space-y-4">
              <li>
                <a
                  className="hover:text-gray-900 transition-colors duration-200"
                  href="/help/payment"
                >
                  Payment
                </a>
              </li>
              <li>
                <a
                  className="hover:text-gray-900 transition-colors duration-200"
                  href="/help/purchase"
                >
                  Purchased
                </a>
              </li>
              <li>
                <a
                  className="hover:text-gray-900 transition-colors duration-200"
                  href="/help/send"
                >
                  Send Product
                </a>
              </li>
            </ul>
          </li>
          <li className="space-y-5">
            <h2 className="text-xs font-semibold tracking-wide text-gray-900 uppercase">
              Follow
            </h2>
            <ul className="space-y-4">
              <li>
                <a
                  className="hover:text-gray-900 transition-colors duration-200"
                  href="https://github.com/tailwindlabs/tailwindcss"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  className="hover:text-gray-900 transition-colors duration-200"
                  href="/discord"
                >
                  Discord
                </a>
              </li>
              <li>
                <a
                  className="hover:text-gray-900 transition-colors duration-200"
                  href="https://twitter.com/tailwindcss"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  className="hover:text-gray-900 transition-colors duration-200"
                  href="https://www.youtube.com/tailwindlabs"
                >
                  YouTube
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <div className="pt-10 sm:pt-12 flex items-center space-x-2">
          <img
            className="h-8 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
            alt=""
          />
          <span className="text-xl font-bold">Workflow</span>
        </div>
      </div>
    </footer>
  )
}
