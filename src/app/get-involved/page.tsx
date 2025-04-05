import Image from 'next/image'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function GetInvolved() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero section */}
        <div className="relative isolate overflow-hidden bg-gradient-to-b from-primary-100/20">
          <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:pt-8">
              <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Get Involved
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Join us in making a difference. There are many ways to get involved with Evergreen Futures, from volunteering to becoming a member.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Link href="#volunteer" className="btn">
                  Volunteer
                </Link>
                <Link href="#membership" className="text-sm font-semibold leading-6 text-gray-900">
                  Become a Member <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
            <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
              <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                  alt="Volunteers working together"
                  width={2432}
                  height={1442}
                  className="w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Volunteer section */}
        <div id="volunteer" className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-base font-semibold leading-7 text-primary-600">Volunteer</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Make a Difference
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Join our team of dedicated volunteers and help us create a sustainable future. We have various opportunities available for all skill sets and schedules.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {volunteerOpportunities.map((opportunity) => (
              <article key={opportunity.name} className="flex flex-col items-start">
                <div className="relative w-full">
                  <Image
                    src={opportunity.imageUrl}
                    alt=""
                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                    width={800}
                    height={600}
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="max-w-xl">
                  <div className="mt-6 flex items-center gap-x-4 text-xs">
                    <span className="relative z-10 rounded-full bg-primary-50 px-3 py-1.5 font-medium text-primary-600">
                      {opportunity.category}
                    </span>
                    <span className="text-gray-500">{opportunity.commitment}</span>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <Link href={opportunity.href}>
                        <span className="absolute inset-0" />
                        {opportunity.name}
                      </Link>
                    </h3>
                    <p className="mt-5 text-sm leading-6 text-gray-600">{opportunity.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Membership section */}
        <div id="membership" className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-base font-semibold leading-7 text-primary-600">Membership</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Become a Member
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Join our community of members and help us create lasting change. Membership includes exclusive benefits and opportunities to shape our organization's future.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {membershipTiers.map((tier) => (
              <div key={tier.name} className="flex flex-col rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10">
                <div className="flex items-center justify-between gap-x-4">
                  <h3 className="text-lg font-semibold leading-8 text-gray-900">{tier.name}</h3>
                  {tier.mostPopular ? (
                    <span className="rounded-full bg-primary-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-primary-600">
                      Most popular
                    </span>
                  ) : null}
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-600">{tier.description}</p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">${tier.price}</span>
                  <span className="text-sm font-semibold leading-6 text-gray-600">/year</span>
                </p>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <svg className="h-6 w-5 flex-none text-primary-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/donate"
                  className={`mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                    tier.mostPopular
                      ? 'bg-primary-600 text-white shadow-sm hover:bg-primary-500 focus-visible:outline-primary-600'
                      : 'bg-primary-50 text-primary-600 hover:bg-primary-100'
                  }`}
                >
                  Join Now
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter section */}
        <div className="relative isolate mt-32 px-6 py-32 sm:mt-56 sm:py-40 lg:px-8">
          <div className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl" aria-hidden="true">
            <div className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-primary-200 to-primary-400" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }} />
          </div>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Stay Updated
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Subscribe to our newsletter to receive updates about our programs, events, and ways to get involved.
            </p>
            <form className="mt-10 flex max-w-md gap-x-4 mx-auto">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email-address"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

const volunteerOpportunities = [
  {
    name: 'Habitat Restoration',
    description: 'Help us restore and maintain natural habitats through hands-on conservation work.',
    href: '/get-involved#habitat-restoration',
    imageUrl: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    category: 'Conservation',
    commitment: 'Flexible',
  },
  {
    name: 'Education Programs',
    description: 'Share your knowledge and passion for the environment by helping with our educational initiatives.',
    href: '/get-involved#education',
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
    category: 'Education',
    commitment: 'Weekly',
  },
  {
    name: 'Community Gardens',
    description: 'Join our community garden program and help local communities grow their own food sustainably.',
    href: '/get-involved#community-gardens',
    imageUrl: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    category: 'Community',
    commitment: 'Flexible',
  },
]

const membershipTiers = [
  {
    name: 'Individual',
    price: '50',
    description: 'Perfect for individuals who want to support our mission.',
    features: [
      'Monthly newsletter',
      'Member-only events',
      'Volunteer opportunities',
      '10% discount on merchandise',
    ],
  },
  {
    name: 'Family',
    price: '100',
    description: 'Great for families who want to get involved together.',
    features: [
      'Everything in Individual',
      'Family membership card',
      'Free admission to family events',
      '20% discount on merchandise',
    ],
    mostPopular: true,
  },
  {
    name: 'Corporate',
    price: '500',
    description: 'Ideal for businesses that want to make a difference.',
    features: [
      'Everything in Family',
      'Corporate recognition',
      'Employee volunteer program',
      'Custom sustainability consulting',
    ],
  },
] 