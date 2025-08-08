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

const BusinessPage = () => {
  const businessNews: NewsItem[] = [
    {
      id: 1,
      title: "AI Revolution Transforms Financial Services Industry",
      summary: "Machine learning algorithms now handle 80% of trading decisions as banks embrace artificial intelligence for fraud detection and customer service.",
      category: "Business",
      timestamp: "45 minutes ago",
      imageUrl: "biz/ml1.webp"
    },
    {
      id: 2,
      title: "Electric Vehicle Sales Surge 300% Year-Over-Year",
      summary: "Major automakers report unprecedented demand for EVs as charging infrastructure expands and battery costs plummet.",
      category: "Business",
      timestamp: "2 hours ago",
      imageUrl: "biz/EC.jpg"
    },
    {
      id: 3,
      title: "Quantum Computing Startup Raises $2.5 Billion",
      summary: "Revolutionary quantum processor promises to solve complex problems in drug discovery, weather prediction, and financial modeling.",
      category: "Business",
      timestamp: "4 hours ago",
      imageUrl: "biz/QC.jpg"
    },
    {
      id: 4,
      title: "Global Supply Chain Resilience Reaches New Heights",
      summary: "Companies invest heavily in diversified manufacturing networks and AI-powered logistics to prevent future disruptions.",
      category: "Business",
      timestamp: "6 hours ago",
      imageUrl: "biz/SC.jpg"
    },
    {
      id: 5,
      title: "Sustainable Fashion Brand Goes Public with $8B Valuation",
      summary: "Eco-friendly clothing company's IPO reflects growing consumer demand for environmentally responsible products.",
      category: "Business",
      timestamp: "8 hours ago",
      imageUrl: "biz/SF.jpg"
    },
    {
      id: 6,
      title: "Space Tourism Market Expected to Reach $15 Billion",
      summary: "Commercial space flights become increasingly accessible as multiple companies compete for orbital tourism market.",
      category: "Business",
      timestamp: "10 hours ago",
      imageUrl: "biz/STM.png"
    },
    {
      id: 7,
      title: "Biotech Breakthrough: Lab-Grown Meat Hits Supermarkets",
      summary: "Cultured protein products now cost-competitive with traditional meat as production scales reach commercial viability.",
      category: "Business",
      timestamp: "12 hours ago",
      imageUrl: "biz/B.WEBP"
    },
    {
      id: 8,
      title: "Digital Currency Central Bank Pilots Show Promise",
      summary: "Government-backed digital currencies tested in major economies show potential to revolutionize monetary systems.",
      category: "Business",
      timestamp: "14 hours ago",
      imageUrl: "biz/CB.jpg"
    },
    {
      id: 9,
      title: "Remote Work Technology Stock Soars 250%",
      summary: "Virtual reality collaboration platforms see massive adoption as hybrid work becomes the new standard.",
      category: "Business",
      timestamp: "16 hours ago",
      imageUrl: "biz/RW.jpg"
    },
    {
      id: 10,
      title: "Green Bond Issuance Hits Record $500 Billion",
      summary: "Environmental finance instruments attract unprecedented investment as climate targets drive capital allocation.",
      category: "Business",
      timestamp: "18 hours ago",
      imageUrl: "biz/GB.jpg"
    }
  ];

  const featuredNews = businessNews[0];
  const recentNews = businessNews.slice(1, 4);
  const sidebarNews = businessNews.slice(4);

  return (
    <div className="homepage">
      <main className="main-content">
        <div className="container">
          <div className="content-grid">
            {/* Featured News */}
            <section className="featured-section">
              <h2>Business Headlines</h2>
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
              <h2>Market Updates</h2>
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
                <h3>More Business News</h3>
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

export default BusinessPage;