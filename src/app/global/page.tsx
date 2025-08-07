'use client';
import Link from 'next/link';

interface NewsItem {
  id: number;
  title: string;
  summary: string;
  category: string;
  timestamp: string;
  imageUrl: string;
}

const GlobalPage = () => {
  const globalNews: NewsItem[] = [
    {
      id: 1,
      title: "G20 Summit Reaches Historic Climate Accord",
      summary: "World leaders commit to carbon neutrality by 2040 and establish $500 billion green technology fund for developing nations.",
      category: "Global",
      timestamp: "30 minutes ago",
      imageUrl: "/api/placeholder/300/200"
    },
    {
      id: 2,
      title: "Mars Colony Project Receives International Backing",
      summary: "Space agencies from 15 countries collaborate on ambitious plan to establish permanent human settlement on Mars by 2035.",
      category: "Global",
      timestamp: "2 hours ago",
      imageUrl: "/api/placeholder/300/200"
    },
    {
      id: 3,
      title: "Global Internet Access Reaches 95% Milestone",
      summary: "Satellite constellation project successfully connects remote regions worldwide, bridging digital divide for billions.",
      category: "Global",
      timestamp: "4 hours ago",
      imageUrl: "/api/placeholder/300/200"
    },
    {
      id: 4,
      title: "International Ocean Cleanup Initiative Shows Results",
      summary: "Advanced filtration systems remove 50 million tons of plastic waste from Pacific garbage patches in two years.",
      category: "Global",
      timestamp: "6 hours ago",
      imageUrl: "/api/placeholder/300/200"
    },
    {
      id: 5,
      title: "Universal Basic Income Trials Expand Globally",
      summary: "Positive results from pilot programs prompt 20 nations to implement wider-scale economic support systems.",
      category: "Global",
      timestamp: "8 hours ago",
      imageUrl: "/api/placeholder/300/200"
    },
    {
      id: 6,
      title: "World Health Alliance Eradicates Malaria in 12 Countries",
      summary: "Coordinated vaccination and prevention campaign achieves zero transmission milestone across affected regions.",
      category: "Global",
      timestamp: "10 hours ago",
      imageUrl: "/api/placeholder/300/200"
    },
    {
      id: 7,
      title: "International Students Exchange Program Reaches 10 Million",
      summary: "Cultural and educational initiative breaks participation records, fostering global understanding among youth.",
      category: "Global",
      timestamp: "12 hours ago",
      imageUrl: "/api/placeholder/300/200"
    },
    {
      id: 8,
      title: "Global Food Security Network Prevents Famine",
      summary: "AI-powered distribution system and early warning technology successfully avert humanitarian crisis in drought regions.",
      category: "Global",
      timestamp: "14 hours ago",
      imageUrl: "/api/placeholder/300/200"
    },
    {
      id: 9,
      title: "Antarctic Research Station Discovers New Species",
      summary: "International scientific team identifies 50 previously unknown marine organisms beneath ice sheets.",
      category: "Global",
      timestamp: "16 hours ago",
      imageUrl: "/api/placeholder/300/200"
    },
    {
      id: 10,
      title: "World Trade Organization Modernizes Digital Commerce Rules",
      summary: "New regulations address cryptocurrency transactions and protect consumer rights in global e-commerce.",
      category: "Global",
      timestamp: "18 hours ago",
      imageUrl: "/api/placeholder/300/200"
    }
  ];

  const featuredNews = globalNews[0];
  const recentNews = globalNews.slice(1, 4);
  const sidebarNews = globalNews.slice(4);

  return (
    <div className="homepage">
      <main className="main-content">
        <div className="container">
          <div className="content-grid">
            {/* Featured News */}
            <section className="featured-section">
              <h2>Global Headlines</h2>
              <article className="featured-article">
                <img src={featuredNews.imageUrl} alt={featuredNews.title} />
                <div className="featured-content">
                  <span className="category">{featuredNews.category}</span>
                  <h3>{featuredNews.title}</h3>
                  <p>{featuredNews.summary}</p>
                  <span className="timestamp">{featuredNews.timestamp}</span>
                </div>
              </article>
            </section>

            {/* Recent News Grid */}
            <section className="recent-section">
              <h2>World Updates</h2>
              <div className="news-grid">
                {recentNews.map(news => (
                  <article key={news.id} className="news-card">
                    <img src={news.imageUrl} alt={news.title} />
                    <div className="card-content">
                      <span className="category">{news.category}</span>
                      <h4>{news.title}</h4>
                      <p>{news.summary}</p>
                      <span className="timestamp">{news.timestamp}</span>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* Sidebar */}
            <aside className="sidebar">
              <div className="sidebar-section">
                <h3>More Global News</h3>
                {sidebarNews.map(news => (
                  <article key={news.id} className="sidebar-item">
                    <img src={news.imageUrl} alt={news.title} />
                    <div className="sidebar-content">
                      <span className="category">{news.category}</span>
                      <h5>{news.title}</h5>
                      <span className="timestamp">{news.timestamp}</span>
                    </div>
                  </article>
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