
'use client'
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Send, LucideIcon } from 'lucide-react';
import styles from '../Styles/footer.module.css';
import { FormEvent } from 'react';

interface FooterLink {
  name: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface FooterSections {
  categories: FooterSection;
  company: FooterSection;
  support: FooterSection;
}

interface SocialLink {
  name: string;
  icon: LucideIcon;
  href: string;
}

const Footer: React.FC = () => {
  const currentYear: number = new Date().getFullYear();

  const footerSections: FooterSections = {
    categories: {
      title: 'News Categories',
      links: [
        { name: 'Business', href: '/business' },
        { name: 'Local News', href: '/local' },
        { name: 'Sports', href: '/sports' },
        { name: 'Global News', href: '/global' },
        { name: 'Breaking News', href: '/' },
      ]
    },
    company: {
      title: 'Company',
      links: [
        { name: 'About Daily-Scope', href: '/about' },
        { name: 'Contact Us', href: '/contact' },
        { name: 'Careers', href: '/careers' },
        { name: 'Advertise', href: '/advertise' },
        { name: 'Press Room', href: '/press' },
      ]
    },
    support: {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '/help' },
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Cookie Policy', href: '/cookies' },
        { name: 'Accessibility', href: '/accessibility' },
      ]
    }
  };

  const socialLinks: SocialLink[] = [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/dailyscope' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/dailyscope' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/dailyscope' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/dailyscope' },
  ];

  const handleNewsletterSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription submitted');
  };

  return (
    <footer className={styles.footer}>
      {/* Newsletter Section */}
      <div className={styles.newsletter}>
        <div className={styles.container}>
          <div className={styles.newsletterContent}>
            <div className={styles.newsletterInfo}>
              <h3 className={styles.newsletterTitle}>Stay Updated with Daily-Scope</h3>
              <p className={styles.newsletterDesc}>
                Get the latest breaking news, analysis, and exclusive stories delivered straight to your inbox.
              </p>
            </div>
            <form className={styles.newsletterForm} onSubmit={handleNewsletterSubmit}>
              <div className={styles.inputGroup}>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className={styles.emailInput}
                  required
                />
                <button type="submit" className={styles.subscribeBtn}>
                  <Send size={18} />
                  <span>Subscribe</span>
                </button>
              </div>
              <p className={styles.privacyNote}>
                By subscribing, you agree to our Privacy Policy and Terms of Service.
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className={styles.mainFooter}>
        <div className={styles.container}>
          <div className={styles.footerGrid}>
            {/* Brand Section */}
            <div className={styles.brandSection}>
              <Link href="/" className={styles.footerLogo}>
                <div className={styles.logoText}>
                  <span className={styles.logoMain}>Daily</span>
                  <span className={styles.logoAccent}>Scope</span>
                </div>
              </Link>
              <p className={styles.brandDesc}>
                Your trusted source for comprehensive news coverage, delivering accurate reporting 
                and in-depth analysis on local, national, and international events.
              </p>
              
              {/* Contact Info */}
              <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                  <Phone size={16} />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className={styles.contactItem}>
                  <Mail size={16} />
                  <span>news@dailyscope.com</span>
                </div>
                <div className={styles.contactItem}>
                  <MapPin size={16} />
                  <span>123 News Street, Media City, NY 10001</span>
                </div>
              </div>

              {/* Social Media */}
              <div className={styles.socialSection}>
                <h4 className={styles.socialTitle}>Follow Us</h4>
                <div className={styles.socialLinks}>
                  {socialLinks.map((social: SocialLink) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        className={styles.socialLink}
                        aria-label={`Follow us on ${social.name}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <IconComponent size={20} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Footer Links */}
            {Object.entries(footerSections).map(([key, section]: [string, FooterSection]) => (
              <div key={key} className={styles.linkSection}>
                <h4 className={styles.sectionTitle}>{section.title}</h4>
                <ul className={styles.linkList}>
                  {section.links.map((link: FooterLink) => (
                    <li key={link.name}>
                      <Link href={link.href} className={styles.footerLink}>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <div className={styles.container}>
          <div className={styles.bottomContent}>
            <div className={styles.copyright}>
              <p>&copy; {currentYear} Daily-Scope. All rights reserved.</p>
            </div>
            <div className={styles.bottomLinks}>
              <Link href="/privacy" className={styles.bottomLink}>
                Privacy Policy
              </Link>
              <Link href="/terms" className={styles.bottomLink}>
                Terms of Service
              </Link>
              <Link href="/sitemap" className={styles.bottomLink}>
                Sitemap
              </Link>
              <Link href="/rss" className={styles.bottomLink}>
                RSS Feed
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;