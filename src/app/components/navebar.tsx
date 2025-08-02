// components/layout/Navbar.tsx
'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Search, ChevronDown } from 'lucide-react';
import styles from '../Styles/Navbar.module.css'

interface NavigationItem {
  name: string;
  href: string;
  icon?: string;
}

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const pathname = usePathname();

  const navItems: NavigationItem[] = [
    { name: 'Home', href: '/' },
    { name: 'Business', href: '/business' },
    { name: 'Local', href: '/local' },
    { name: 'Sports', href: '/sports' },
    { name: 'Global', href: '/global' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (isSearchOpen) {
      setSearchQuery('');
    }
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Handle search functionality
      console.log('Searching for:', searchQuery);
      // You can implement search logic here
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  const isActiveRoute = (href: string): boolean => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  const getCurrentDate = (): string => {
    return new Date().toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      {/* Top Banner */}
      <div className={styles.topBanner}>
        <div className={styles.container}>
          <div className={styles.bannerContent}>
            <div className={styles.dateTime}>
              <span>{getCurrentDate()}</span>
            </div>
            <div className={styles.breakingNews}>
              <span className={styles.breakingTag}>BREAKING</span>
              <span className={styles.breakingText}>
                Latest updates from around the world...
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <div className={styles.navContent}>
            {/* Logo */}
            <Link href="/" className={styles.logo}>
              <div className={styles.logoText}>
                <span className={styles.logoMain}>Daily</span>
                <span className={styles.logoAccent}>Scope</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className={styles.desktopNav}>
              {navItems.map((item) => (
                <Link 
                  key={item.name}
                  href={item.href}
                  className={`${styles.navLink} ${isActiveRoute(item.href) ? styles.active : ''}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className={styles.navActions}>
              <button
                onClick={toggleSearch}
                className={styles.searchBtn}
                aria-label="Toggle search"
              >
                <Search size={20} />
              </button>
              
              <button
                onClick={toggleMenu}
                className={styles.mobileMenuBtn}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Search Bar */}
          {isSearchOpen && (
            <div className={styles.searchContainer}>
              <form className={styles.searchBox} onSubmit={handleSearchSubmit}>
                <input
                  type="text"
                  placeholder="Search news..."
                  className={styles.searchInput}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
                <button type="submit" className={styles.searchSubmit}>
                  Search
                </button>
              </form>
            </div>
          )}
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={styles.mobileNav}>
            <div className={styles.mobileNavContent}>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`${styles.mobileNavLink} ${isActiveRoute(item.href) ? styles.active : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className={styles.mobileNavDivider}></div>
              <Link 
                href="/about" 
                className={styles.mobileNavLink} 
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className={styles.mobileNavLink} 
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;