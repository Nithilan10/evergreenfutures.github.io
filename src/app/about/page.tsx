import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero section */}
        <div className="relative isolate overflow-hidden bg-gradient-to-b from-primary-100/20">
          <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:pt-8">
              <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                About Evergreen Futures
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We empower children and teenagers to explore diverse career paths through dynamic speeches, interactive workshops, and engaging competitions. By connecting them with professionals, we provide practical insights into each career's challenges, rewards, and opportunities.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Link href="/get-involved" className="btn">
                  Get Involved
                </Link>
                <Link href="/programs" className="text-sm font-semibold leading-6 text-gray-900">
                  Our Programs <span aria-hidden="true">→</span>
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

        {/* Mission section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-base font-semibold leading-7 text-primary-600">Our Mission</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Empowering Future Leaders
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              At Evergreen Futures, we believe in preparing the next generation for success by:
            </p>
            <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
              {missionPoints.map((point) => (
                <li key={point} className="flex gap-x-3">
                  <svg className="h-6 w-5 flex-none text-primary-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Values section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-base font-semibold leading-7 text-primary-600">Our Values</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What We Stand For
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our values guide everything we do and help us stay true to our mission.
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
            {values.map((value) => (
              <div key={value.name} className="relative pl-9">
                <dt className="inline font-semibold text-gray-900">
                  <value.icon className="absolute left-1 top-1 h-5 w-5 text-primary-600" aria-hidden="true" />
                  {value.name}
                </dt>
                <dd className="inline">{value.description}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Team section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-base font-semibold leading-7 text-primary-600">Our Team</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Meet the People Behind Our Mission
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our dedicated team of professionals and volunteers work tirelessly to make our vision a reality.
            </p>
          </div>
          <ul role="list" className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {team.map((person) => (
              <li key={person.name}>
                <Image className="aspect-[3/2] w-full rounded-2xl object-cover" src={person.imageUrl} alt="" width={800} height={600} />
                <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">{person.name}</h3>
                <p className="text-base leading-7 text-gray-600">{person.role}</p>
                <p className="mt-4 text-sm leading-6 text-gray-600">{person.bio}</p>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  )
}

const missionPoints = [
  'Connecting students with professionals from diverse fields',
  'Providing practical insights into various career paths',
  'Organizing interactive workshops and engaging competitions',
  'Creating a platform for career exploration and discovery',
  'Preparing youth for real-world challenges and opportunities',
]

const values = [
  {
    name: 'Career Exploration',
    description: 'We believe in exposing students to a wide range of career possibilities to help them make informed decisions about their future.',
    icon: (props: any) => (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
      </svg>
    ),
  },
  {
    name: 'Professional Mentorship',
    description: 'We connect students with experienced professionals who can share real-world insights and guidance.',
    icon: (props: any) => (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    name: 'Practical Learning',
    description: 'We focus on hands-on experiences and real-world applications to prepare students for their future careers.',
    icon: (props: any) => (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
      </svg>
    ),
  },
]

const team = [
  {
    name: 'Sarah Johnson',
    role: 'Executive Director',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    bio: 'With over 15 years of experience in education and youth development, Sarah leads our organization with passion and dedication.',
  },
  {
    name: 'Michael Chen',
    role: 'Program Director',
    imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    bio: 'Michael oversees our career exploration programs and professional mentorship initiatives, ensuring we make a lasting impact.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Career Development Specialist',
    imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    bio: 'Emily brings expertise in career counseling and professional development to our programs.',
  },
] 