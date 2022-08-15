import { Fragment } from 'react'
import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'
import mobisoftpic from '-!url-loader!../images/logos/MobLogo.png'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
// import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'

function MobileNavLink({ href, children }) {
  return (
    <Popover.Button as={Link} href={href} className="block w-full p-2">
      {children}
    </Popover.Button>
  )
}

function MobileNavIcon({ open }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          'origin-center transition',
          open && 'scale-90 opacity-0'
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          'origin-center transition',
          !open && 'scale-90 opacity-0'
        )}
      />
    </svg>
  )
}

function MobileNavigation() {
  return (
    <Popover>
      <Popover.Button
        className="relative rounded-md bg-gradient-to-b from-transparent to-slate-300 z-10 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            as="div"
            className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl border bg-gradient-to-r from-blue-200 to-transparent p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
          >
            <MobileNavLink href="/">HOME</MobileNavLink>
            <MobileNavLink href="#features">SERVICES</MobileNavLink>
            <MobileNavLink href="#testimonials">ABOUT US</MobileNavLink>
            <hr className="m-2 border-slate-600" />
            <MobileNavLink href="#pricing">PRICING</MobileNavLink>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  )
}

export function Header() {
  return (
    <header className="py-7 sticky top-0 z-50 pb-8">
      <Container className='fixed left-0 top-0 w-full mb-4  bg-gradient-to-r from-blue-400 to-transparent'>
        <nav className="relative z-50 flex  justify-between items-center ">
          <div className="flex items-center md:gap-x-12 text-white">
            <Link href="#" aria-label="Home">
              <div className='flex text-4xl pt-5'>
                <img className='image' src={mobisoftpic} width={100} height={100}/>
              </div>
              {/* <Logo className="h-10 w-auto" /> */}
            </Link> 
            <div className="hidden text-white md:flex md:gap-x-6 mt-5  pb-2 ">
              <NavLink href="/">HOME</NavLink>
              <NavLink href="#features">SERVICES</NavLink>
              <NavLink href="#testimonials">ABOUT US</NavLink>
              <NavLink href="#pricing">PRICING</NavLink>
            </div>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            <div className="hidden md:block">
              {/* <NavLink href="/login">Sign in</NavLink> */}
            </div>
            <Button href="/register"  className="button border bg-gradient-to-r from-blue-400 to-transparent sm:rounded-full">
              <span>
                Contact us <span className="hidden lg:inline"></span>
              </span>
            </Button>
            <div className=" -mr-1 md:hidden">
              <MobileNavigation />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  )
}
