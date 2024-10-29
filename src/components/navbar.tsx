"use client";
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaBars, FaXmark } from 'react-icons/fa6';
import styles from '@/styles/navbar.module.css';

const Navbar = () => {
  const pathname = usePathname();

  const navigation = [
    { name: 'Home', href: '/', current: pathname === '/' },
    { name: 'Contact', href: '/contact', current: pathname === '/contact' },
    { name: 'About', href: '/about', current: pathname === '/about' },
  ]

  return (
    <Disclosure as="nav" className={styles.nav}>
      <div className={styles.desktop}>
        <div>
          <div className={styles.mobileButtons}>
            {/* Mobile menu button*/}
            <DisclosureButton>
              <span style={{ position: 'absolute', inset: '-0.125rem' }} />
              <span className={styles.screenReader}>Open main menu</span>
              <FaBars aria-hidden="true" className={styles.hamburger} />
              <FaXmark aria-hidden="true" className={styles.cross} />
            </DisclosureButton>
          </div>

          <div className={styles.abc}>
            <div className={styles.logo}>
              <span>Hoorain ✨</span>
            </div>

            <div className={styles.links}>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  aria-current={item.current ? 'page' : undefined}
                  className={item.current ? styles.active : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>

          </div>

        </div>
      </div>

      <DisclosurePanel transition className={styles.disclosurePanel}>
        <div>
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as={Link}
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={item.current ? styles.active : undefined}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}

export default Navbar;

