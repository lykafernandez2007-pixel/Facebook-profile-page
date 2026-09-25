import "./App.css";
import yka from "./assets/yka.jpg";
import norhamin from "./assets/norhamin.jpg";
import xylthea from "./assets/xylthea.jpg";
import ivejane from "./assets/ivejane.jpg";
import loise from "./assets/loise.jpg";
import julyka from "./assets/julyka.jpg";

function App() {
  const friends = [
    {
      name: "Norhamin Panegas",
      mutual: "12 mutual friends",
      image: norhamin,
    },
    {
      name: "Xylthea Shancy",
      mutual: "32 mutual friends",
      image: xylthea,
    },
    {
      name: "Ive Jane Dolar",
      mutual: "46 mutual friends",
      image: ivejane,
    },
    {
      name: "Loise Monteroso",
      mutual: "39 mutual friends",
      image: loise,
    },
  ];

  return (
    <div className="app">

      {/* NAVBAR */}
 <nav className="navbar">
  <button>←</button>
  <strong>Lyka Fernandez</strong>
  <button>⌕</button>
  <button>🔔</button>
  <button>☰</button>
</nav>

      {/* COVER */}
      <div className="cover">
        <button className="camera">📷</button>
      </div>

      {/* PROFILE */}
      <section className="profile-section">

        <div className="profile-picture">
          <img
            src={yka}
            alt="Lyka Fernandez"
          />
        </div>

        <h1>Lyka Fernandez</h1>

        <p className="username">
          @ykafernandez_
        </p>

        <p className="friends-count">
          614 friends
        </p>

        <div className="buttons">
          <button className="story">
            + Add to story
          </button>

          <button className="edit">
            Edit profile
          </button>

          <button className="more">
            ⋯
          </button>
        </div>

      </section>

      {/* FRIENDS */}
      <section className="friends-section">

        <div className="section-header">
          <h2>Friends</h2>

          <button className="see-all">
            See all
          </button>
        </div>

        <div className="friends-grid">

          {friends.map((friend, index) => (
            <div
              className="friend-card"
              key={index}
            >

              <div className="friend-picture">

                <img
                  src={friend.image}
                  alt={friend.name}
                />

                {(index === 1 || index === 2) && (
                  <i className="online"></i>
                )}

              </div>

              <strong>
                {friend.name}
              </strong>

              <p>
                {friend.mutual}
              </p>

            </div>
          ))}

        </div>

      </section>

      {/* HIGHLIGHTS */}
      <section className="highlights-section">

        <h2>Highlights</h2>

        <div className="highlights">

          {/* NEW HIGHLIGHT */}
          <div className="highlight new-highlight">

            <div className="highlight-icon">
              +
            </div>

            <strong>
              New highlight
            </strong>

          </div>

          {/* PHOTO HIGHLIGHT */}
          <div className="highlight old-highlight">

            <img
              src={julyka}
              alt="Highlight"
            />

            <strong>
              + 5
            </strong>

          </div>

        </div>

      </section>

      {/* POSTS */}
      <section className="posts-section">

        <h2>Posts</h2>

        {/* CREATE POST */}
        <div className="create-post">

          <img
            src={yka}
            alt="Lyka"
            className="post-profile"
          />

          <div className="post-input">
            Post a status update
          </div>

          <button className="post-photo">
            🖼️
          </button>

        </div>

        {/* POST OPTIONS */}
        <div className="post-options">

          <button>
            🖼️ Photo
          </button>

          <button>
            🎞️ Reels
          </button>

          <button>
            🚩 Life Event
          </button>

        </div>

        {/* POST 1 */}
        <article className="post">

          <div className="post-header">

            <img
              src={yka}
              alt="Lyka"
              className="post-profile"
            />

            <div>

              <strong>
                Lyka Fernandez
              </strong>

              <p>
                2d · 👥
              </p>

            </div>

            <button className="post-menu">
              ⋯
            </button>

          </div>

          <p className="post-text">
            Jai Jai gwapo
          </p>

          <div className="post-actions">

            <button>
              ♡ 3
            </button>

            <button>
              💬
            </button>

            <button>
              ↗
            </button>

            <span>
              😢 😮
            </span>

          </div>

        </article>

        {/* POST 2 */}
        <article className="post">

          <div className="post-header">

            <img
              src={yka}
              alt="Lyka"
              className="post-profile"
            />

            <div>

              <strong>
                Lyka Fernandez
              </strong>

              <p>
                2d · 👥
              </p>

            </div>

            <button className="post-menu">
              ⋯
            </button>

          </div>

          <p className="post-text">
            Gwapa si Lyka 
          </p>

          <div className="post-actions">

            <button>
              ♡ 2
            </button>

            <button>
              💬
            </button>

            <button>
              ↗
            </button>

          </div>

        </article>

      </section>

    </div>
  );
}

export default App;