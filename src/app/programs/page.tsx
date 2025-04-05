import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

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
                Discover our diverse range of programs designed to help students explore career paths, gain practical insights, and prepare for their future.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Link href="/get-involved" className="btn">
                  Get Involved
                </Link>
                <Link href="/contact" className="text-sm font-semibold leading-6 text-gray-900">
                  Contact Us <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
            <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
              <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                  alt="Students engaged in a workshop"
                  width={2432}
                  height={1442}
                  className="w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Programs Grid */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-primary-600">Our Initiatives</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Explore Our Programs
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              From interactive workshops to professional interviews, we offer various programs to help students discover their career paths.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {programs.map((program) => (
              <article key={program.name} className="flex flex-col items-start">
                <div className="relative w-full">
                  <Image
                    src={program.imageUrl}
                    alt={program.name}
                    width={800}
                    height={600}
                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="max-w-xl">
                  <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <time dateTime={program.date} className="text-gray-500">
                      {program.date}
                    </time>
                    <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600">
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
              Making a Difference in Students' Lives
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Through our programs, we've helped countless students discover their passions and prepare for their future careers.
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name}>
                <dt className="font-semibold text-gray-900">{stat.name}</dt>
                <dd className="mt-1 text-gray-600">{stat.value}</dd>
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
              Ready to Explore Your Future?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Join our programs and connect with professionals who can guide you on your career journey.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/get-involved" className="btn">
                Get Involved
              </Link>
              <Link href="/contact" className="text-sm font-semibold leading-6 text-gray-900">
                Contact Us <span aria-hidden="true">→</span>
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
    name: 'Career Exploration Workshops',
    description: 'Interactive sessions where students can explore different career paths through hands-on activities and discussions with professionals.',
    category: 'Workshop',
    date: 'Monthly',
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
    href: '/programs/workshops',
  },
  {
    name: 'Professional Interviews',
    description: 'Recorded interviews with professionals from various fields, sharing their experiences, challenges, and advice for aspiring students.',
    category: 'Video Content',
    date: 'Weekly',
    imageUrl: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    href: '/programs/interviews',
  },
  {
    name: 'Career Competitions',
    description: 'Engaging competitions that challenge students to apply their knowledge and skills in real-world scenarios.',
    category: 'Event',
    date: 'Quarterly',
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    href: '/programs/competitions',
  },
]

const stats = [
  { name: 'Students Reached', value: '1,000+' },
  { name: 'Professional Mentors', value: '50+' },
  { name: 'Career Paths Explored', value: '25+' },
  { name: 'Success Stories', value: '100+' },
] 