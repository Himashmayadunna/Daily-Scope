// components/layout/Navbar.tsx
'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Search, Home, Briefcase, MapPin, Trophy, Globe } from 'lucide-react';
import styles from '../Styles/Navbar.module.css'

interface NavigationItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ size?: number }>;
}

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const pathname = usePathname();

  const navItems: NavigationItem[] = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Business', href: '/business', icon: Briefcase },
    { name: 'Local', href: '/local', icon: MapPin },
    { name: 'Sports', href: '/sports', icon: Trophy },
    { name: 'Global', href: '/global', icon: Globe },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
        setIsSearchOpen(false);
      }
    };

    // Close mobile menu when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest(`.${styles.mobileNav}`) && !target.closest(`.${styles.mobileMenuBtn}`)) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    document.addEventListener('click', handleClickOutside);
    
    // Prevent body scroll when mobile menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

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
                className={`${styles.searchBtn} ${isSearchOpen ? styles.active : ''}`}
                aria-label="Toggle search"
              >
                <Search size={20} />
              </button>
              
              <button
                onClick={toggleMenu}
                className={`${styles.mobileMenuBtn} ${isMenuOpen ? styles.active : ''}`}
                aria-label="Toggle menu"
              >
                <div className={styles.hamburger}>
                  <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.open : ''}`}></span>
                  <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.open : ''}`}></span>
                  <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.open : ''}`}></span>
                </div>
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
        <div className={`${styles.mobileNavOverlay} ${isMenuOpen ? styles.open : ''}`}>
          <div className={`${styles.mobileNav} ${isMenuOpen ? styles.open : ''}`}>
            <div className={styles.mobileNavHeader}>
              <Link href="/" className={styles.mobileLogo} onClick={() => setIsMenuOpen(false)}>
                <div className={styles.logoText}>
                  <span className={styles.logoMain}>Daily</span>
                  <span className={styles.logoAccent}>Scope</span>
                </div>
              </Link>
              <button
                onClick={() => setIsMenuOpen(false)}
                className={styles.mobileCloseBtn}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className={styles.mobileNavContent}>
              <div className={styles.mobileNavSection}>
                <h3 className={styles.mobileNavSectionTitle}>Navigation</h3>
                {navItems.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`${styles.mobileNavLink} ${isActiveRoute(item.href) ? styles.active : ''}`}
                      onClick={() => setIsMenuOpen(false)}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <IconComponent size={20} />
                      <span>{item.name}</span>
                      {isActiveRoute(item.href) && <div className={styles.activeIndicator}></div>}
                    </Link>
                  );
                })}
              </div>
              
              <div className={styles.mobileNavDivider}></div>
              
              <div className={styles.mobileNavSection}>
                <h3 className={styles.mobileNavSectionTitle}>More</h3>
                <Link 
                  href="/about" 
                  className={styles.mobileNavLink} 
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>About Us</span>
                </Link>
                <Link 
                  href="/contact" 
                  className={styles.mobileNavLink} 
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>Contact</span>
                </Link>
              </div>
              
              {/* Mobile Search */}
              <div className={styles.mobileSearchSection}>
                <form className={styles.mobileSearchBox} onSubmit={handleSearchSubmit}>
                  <div className={styles.mobileSearchInput}>
                    <Search size={18} />
                    <input
                      type="text"
                      placeholder="Search news..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <button type="submit" className={styles.mobileSearchSubmit}>
                    Search
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;