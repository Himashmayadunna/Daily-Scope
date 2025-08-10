'use client';
import Link from 'next/link';
import { getNewsByCategory } from '../data/newsData';

const LocalPage = () => {
  // Get local news from our centralized data + create additional local items
  const allLocalNews = getNewsByCategory('Local');
  
  // Create additional local news items
  const additionalLocalNews = [
    {
      id: 301,
      title: "Historic Downtown Theatre Restoration Completed",
      summary: "Century-old venue reopens with modern amenities while preserving original architectural charm and cultural heritage.",
      category: "Local",
      timestamp: "1 hour ago",
      imageUrl: "Local/HC.jpg"
    },
    {
      id: 302,
      title: "New Medical Center Brings Advanced Healthcare Services",
      summary: "State-of-the-art facility offers specialized treatments and reduces travel time for residents seeking quality care.",
      category: "Local",
      timestamp: "3 hours ago",
      imageUrl: "Local/MC.jpg"
    },
    {
      id: 303,
      title: "Local Tech Startup Creates 200 High-Paying Jobs",
      summary: "Software development company expands operations and commits to hiring exclusively from the local talent pool.",
      category: "Local",
      timestamp: "5 hours ago",
      imageUrl: "Local/TS.jpg"
    },
    {
      id: 304,
      title: "Environmental Initiative Removes 10 Tons of Litter",
      summary: "Community volunteers clean up riverside areas and implement new recycling programs across neighborhoods.",
      category: "Local",
      timestamp: "7 hours ago",
      imageUrl: "Local/EI.jpg"
    },
    {
      id: 305,
      title: "Youth Sports Complex Opens with Olympic-Grade Facilities",
      summary: "Multi-million dollar athletic center provides training opportunities for aspiring young athletes in various sports.",
      category: "Local",
      timestamp: "9 hours ago",
      imageUrl: "Local/YC.jpg"
    },
    {
      id: 306,
      title: "Farmer's Market Celebrates 25th Anniversary",
      summary: "Weekly market showcases local agriculture and artisanal products while supporting small business growth.",
      category: "Local",
      timestamp: "11 hours ago",
      imageUrl: "Local/FM.jpg"
    },
    {
      id: 307,
      title: "Historic Neighborhood Receives Heritage District Status",
      summary: "Federal recognition protects architectural treasures and provides funding for preservation efforts.",
      category: "Local",
      timestamp: "13 hours ago",
      imageUrl: "Local/HN.jpg"
    },
    {
      id: 308,
      title: "Local University Launches Renewable Energy Research Lab",
      summary: "Cutting-edge facility focuses on solar and wind technology innovation with potential commercial applications.",
      category: "Local",
      timestamp: "15 hours ago",
      imageUrl: "Local/LU.jpg"
    },
    {
      id: 309,
      title: "Community Food Bank Expands to Serve 5,000 Families",
      summary: "Increased volunteer support and donations enable organization to address growing food insecurity challenges.",
      category: "Local",
      timestamp: "17 hours ago",
      imageUrl: "Local/FB.jpg"
    },
    {
      id: 310,
      title: "Public Transportation Routes Extended to Suburbs",
      summary: "New bus lines connect outlying areas to city center, improving access to employment and services.",
      category: "Local",
      timestamp: "19 hours ago",
      imageUrl: "Local/PT.jpg"
    }
  ];

  // Combine all local news
  const localNews = [...allLocalNews, ...additionalLocalNews];

  const featuredNews = localNews[0];
  const recentNews = localNews.slice(1, 7);
  const sidebarNews = localNews.slice(7);

  return (
    <div className="homepage">
      <main className="main-content">
        <div className="container">
          <div className="content-grid">
            {/* Featured News */}
            <section className="featured-section">
              <h2>Local Headlines</h2>
              <Link href={`/news/${featuredNews.id}`} className="clickable-item">
                <article className="featured-article">
                  <img src={featuredNews.imageUrl} alt={featuredNews.title} />
                  <div className="featured-content">
                    <span className="category">{featuredNews.category}</span>
                    <h3>{featuredNews.title}</h3>
                    <p>{featuredNews.summary}</p>
                    <span className="timestamp">{featuredNews.timestamp}</span>
                  </div>
                </article>
              </Link>
            </section>

            {/* Recent News Grid */}
            <section className="recent-section">
              <h2>Community Updates</h2>
              <div className="news-grid">
                {recentNews.map(news => (
                  <Link key={news.id} href={`/news/${news.id}`} className="clickable-item">
                    <article className="news-card">
                      <img src={news.imageUrl} alt={news.title} />
                      <div className="card-content">
                        <span className="category">{news.category}</span>
                        <h4>{news.title}</h4>
                        <p>{news.summary}</p>
                        <span className="timestamp">{news.timestamp}</span>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </section>

            {/* Sidebar */}
            <aside className="sidebar">
              <div className="sidebar-section">
                <h3>More Local News</h3>
                {sidebarNews.map(news => (
                  <Link key={news.id} href={`/news/${news.id}`} className="clickable-item">
                    <article className="sidebar-item">
                      <img src={news.imageUrl} alt={news.title} />
                      <div className="sidebar-content">
                        <span className="category">{news.category}</span>
                        <h5>{news.title}</h5>
                        <span className="timestamp">{news.timestamp}</span>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>

              <div className="sidebar-section">
                <h3>Categories</h3>
                <div className="category-links">
                  <Link href="/business" className="category-link business">
                    <span>Business</span>
                    <span className="count">24</span>
                  </Link>
                  <Link href="/local" className="category-link local">
                    <span>Local</span>
                    <span className="count">18</span>
                  </Link>
                  <Link href="/sports" className="category-link sports">
                    <span>Sports</span>
                    <span className="count">31</span>
                  </Link>
                  <Link href="/global" className="category-link global">
                    <span>Global</span>
                    <span className="count">42</span>
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LocalPage;