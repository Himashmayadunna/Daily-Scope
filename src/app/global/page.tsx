'use client';
import Link from 'next/link';
import { getNewsByCategory } from '../data/newsData';

const GlobalPage = () => {
  // Get global news from our centralized data + create additional global items
  const allGlobalNews = getNewsByCategory('Global');
  
  // Create additional global news items
  const additionalGlobalNews = [
    {
      id: 401,
      title: "G20 Summit Reaches Historic Climate Accord",
      summary: "World leaders commit to carbon neutrality by 2040 and establish $500 billion green technology fund for developing nations.",
      category: "Global",
      timestamp: "30 minutes ago",
      imageUrl: "Global/G2.webp"
    },
    {
      id: 402,
      title: "Mars Colony Project Receives International Backing",
      summary: "Space agencies from 15 countries collaborate on ambitious plan to establish permanent human settlement on Mars by 2035.",
      category: "Global",
      timestamp: "2 hours ago",
      imageUrl: "Global/MARS.jpg"
    },
    {
      id: 403,
      title: "Global Internet Access Reaches 95% Milestone",
      summary: "Satellite constellation project successfully connects remote regions worldwide, bridging digital divide for billions.",
      category: "Global",
      timestamp: "4 hours ago",
      imageUrl: "Global/GI.png"
    },
    {
      id: 404,
      title: "International Ocean Cleanup Initiative Shows Results",
      summary: "Advanced filtration systems remove 50 million tons of plastic waste from Pacific garbage patches in two years.",
      category: "Global",
      timestamp: "6 hours ago",
      imageUrl: "Global/OC.jpg"
    },
    {
      id: 405,
      title: "Universal Basic Income Trials Expand Globally",
      summary: "Positive results from pilot programs prompt 20 nations to implement wider-scale economic support systems.",
      category: "Global",
      timestamp: "8 hours ago",
      imageUrl: "Global/UBI.webp"
    },
    {
      id: 406,
      title: "World Health Alliance Eradicates Malaria in 12 Countries",
      summary: "Coordinated vaccination and prevention campaign achieves zero transmission milestone across affected regions.",
      category: "Global",
      timestamp: "10 hours ago",
      imageUrl: "Global/WH.jpg"
    },
    {
      id: 407,
      title: "International Students Exchange Program Reaches 10 Million",
      summary: "Cultural and educational initiative breaks participation records, fostering global understanding among youth.",
      category: "Global",
      timestamp: "12 hours ago",
      imageUrl: "Global/IS.jpg"
    },
    {
      id: 408,
      title: "Global Food Security Network Prevents Famine",
      summary: "AI-powered distribution system and early warning technology successfully avert humanitarian crisis in drought regions.",
      category: "Global",
      timestamp: "14 hours ago",
      imageUrl: "Global/GF.png"
    },
    {
      id: 409,
      title: "Antarctic Research Station Discovers New Species",
      summary: "International scientific team identifies 50 previously unknown marine organisms beneath ice sheets.",
      category: "Global",
      timestamp: "16 hours ago",
      imageUrl: "Global/RS.jpg"
    },
    {
      id: 410,
      title: "World Trade Organization Modernizes Digital Commerce Rules",
      summary: "New regulations address cryptocurrency transactions and protect consumer rights in global e-commerce.",
      category: "Global",
      timestamp: "18 hours ago",
      imageUrl: "Global/WTO.jpg"
    }
  ];

  // Combine all global news
  const globalNews = [...allGlobalNews, ...additionalGlobalNews];

  const featuredNews = globalNews[0];
  const recentNews = globalNews.slice(1, 7);
  const sidebarNews = globalNews.slice(7);

  return (
    <div className="homepage">
      <main className="main-content">
        <div className="container">
          <div className="content-grid">
            {/* Featured News */}
            <section className="featured-section">
              <h2>Global Headlines</h2>
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
              <h2>World Updates</h2>
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
                <h3>More Global News</h3>
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

export default GlobalPage;