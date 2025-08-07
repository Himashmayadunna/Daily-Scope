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

const SportsPage = () => {
  const sportsNews: NewsItem[] = [
    {
      id: 1,
      title: "World Cup Qualifiers Produce Stunning Upsets",
      summary: "Underdog nations secure crucial victories while traditional powerhouses struggle in dramatic qualification matches.",
      category: "Sports",
      timestamp: "15 minutes ago",
      imageUrl: "/api/placeholder/300/200"
    },
    {
      id: 2,
      title: "Tennis Sensation Wins First Grand Slam at Age 19",
      summary: "Rising star defeats three-time champion in straight sets to claim maiden major title in historic breakthrough.",
      category: "Sports",
      timestamp: "1 hour ago",
      imageUrl: "/api/placeholder/300/200"
    },
    {
      id: 3,
      title: "NBA Trade Blockbuster Reshapes Championship Race",
      summary: "Multi-team deal involving All-Star players creates new title contenders and shifts playoff predictions.",
      category: "Sports",
      timestamp: "3 hours ago",
      imageUrl: "/api/placeholder/300/200"
    },
    {
      id: 4,
      title: "Olympic Swimming Records Fall at National Championships",
      summary: "Multiple world records broken as swimmers prepare for international competition with exceptional performances.",
      category: "Sports",
      timestamp: "5 hours ago",
      imageUrl: "/api/placeholder/300/200"
    },
    {
      id: 5,
      title: "Boxing Match Generates $200 Million in Revenue",
      summary: "Heavyweight championship bout breaks pay-per-view records with global audience exceeding 50 million viewers.",
      category: "Sports",
      timestamp: "7 hours ago",
      imageUrl: "/api/placeholder/300/200"
    },
    {
      id: 6,
      title: "Formula 1 Season Finale Promises Title Drama",
      summary: "Championship leaders separated by just three points heading into final race at iconic Monaco circuit.",
      category: "Sports",
      timestamp: "9 hours ago",
      imageUrl: "/api/placeholder/300/200"
    },
    {
      id: 7,
      title: "Women's Soccer League Expands to 16 Teams",
      summary: "Professional women's football adds four new franchises as popularity and attendance reach record levels.",
      category: "Sports",
      timestamp: "11 hours ago",
      imageUrl: "/api/placeholder/300/200"
    },
    {
      id: 8,
      title: "Esports Tournament Offers $10 Million Prize Pool",
      summary: "Competitive gaming reaches new heights with largest purse in tournament history and global streaming audience.",
      category: "Sports",
      timestamp: "13 hours ago",
      imageUrl: "/api/placeholder/300/200"
    },
    {
      id: 9,
      title: "Marathon World Record Broken by 30 Seconds",
      summary: "Kenyan runner shatters long-standing mark in perfect conditions with revolutionary pacing strategy.",
      category: "Sports",
      timestamp: "15 hours ago",
      imageUrl: "/api/placeholder/300/200"
    },
    {
      id: 10,
      title: "High School Athlete Signs Historic Endorsement Deal",
      summary: "Basketball prodigy becomes youngest player ever to receive major sponsorship before college career.",
      category: "Sports",
      timestamp: "17 hours ago",
      imageUrl: "/api/placeholder/300/200"
    }
  ];

  const featuredNews = sportsNews[0];
  const recentNews = sportsNews.slice(1, 4);
  const sidebarNews = sportsNews.slice(4);

  return (
    <div className="homepage">
      <main className="main-content">
        <div className="container">
          <div className="content-grid">
            {/* Featured News */}
            <section className="featured-section">
              <h2>Sports Headlines</h2>
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
              <h2>Latest Scores & Updates</h2>
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
                <h3>More Sports News</h3>
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

export default SportsPage;