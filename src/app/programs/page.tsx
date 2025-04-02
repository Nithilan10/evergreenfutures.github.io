import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Programs() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero section */}
        <div className="relative isolate overflow-hidden bg-gradient-to-b from-primary-100/20">
          <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:pt-8">
              <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Our Programs
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Discover how we're making a difference through our various initiatives and programs. From environmental conservation to community education, we're working to create a sustainable future.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Link href="/get-involved" className="btn">
                  Get Involved
                </Link>
                <Link href="/donate" className="text-sm font-semibold leading-6 text-gray-900">
                  Support Our Programs <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
            <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
              <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                <Image
                  src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt="Programs overview"
                  width={2432}
                  height={1442}
                  className="w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Programs grid */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-base font-semibold leading-7 text-primary-600">Our Initiatives</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Making an Impact
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Explore our key programs and initiatives that are helping to create a more sustainable future.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {programs.map((program) => (
              <article key={program.name} className="flex flex-col items-start">
                <div className="relative w-full">
                  <Image
                    src={program.imageUrl}
                    alt=""
                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                    width={800}
                    height={600}
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="max-w-xl">
                  <div className="mt-6 flex items-center gap-x-4 text-xs">
                    <time dateTime={program.date} className="text-gray-500">
                      {program.date}
                    </time>
                    <span className="relative z-10 rounded-full bg-primary-50 px-3 py-1.5 font-medium text-primary-600">
                      {program.category}
                    </span>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <Link href={program.href}>
                        <span className="absolute inset-0" />
                        {program.name}
                      </Link>
                    </h3>
                    <p className="mt-5 text-sm leading-6 text-gray-600">{program.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Impact section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-base font-semibold leading-7 text-primary-600">Our Impact</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              By the Numbers
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              See how our programs are making a difference in our community and beyond.
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col gap-y-3 border-l border-gray-900/10 pl-6">
                <dt className="text-sm leading-6 text-gray-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* CTA section */}
        <div className="relative isolate mt-32 px-6 py-32 sm:mt-56 sm:py-40 lg:px-8">
          <div className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl" aria-hidden="true">
            <div className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-primary-200 to-primary-400" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }} />
          </div>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Support Our Programs
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Your support helps us continue our important work in environmental conservation, education, and community engagement.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/donate" className="btn">
                Donate Now
              </Link>
              <Link href="/get-involved" className="text-sm font-semibold leading-6 text-gray-900">
                Get Involved <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

const programs = [
  {
    name: 'Habitat Restoration',
    description: 'Our habitat restoration program focuses on protecting and restoring natural ecosystems, promoting biodiversity, and creating sustainable environments for wildlife.',
    href: '/programs#habitat-restoration',
    imageUrl: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    date: 'Ongoing',
    category: 'Conservation',
  },
  {
    name: 'Environmental Education',
    description: 'We provide educational programs for schools and communities to raise awareness about environmental issues and promote sustainable practices.',
    href: '/programs#education',
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
    date: 'Ongoing',
    category: 'Education',
  },
  {
    name: 'Community Gardens',
    description: 'Our community garden initiative helps local communities grow their own food sustainably while promoting environmental awareness and community engagement.',
    href: '/programs#community-gardens',
    imageUrl: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    date: 'Ongoing',
    category: 'Community',
  },
]

const stats = [
  { name: 'Acres of Land Protected', value: '1,000+' },
  { name: 'Students Educated', value: '5,000+' },
  { name: 'Community Gardens', value: '25+' },
  { name: 'Volunteer Hours', value: '10,000+' },
] 