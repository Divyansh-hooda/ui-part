import "./AppShell.css";

function AppShell() {
  return (
    <div className="app-shell">
      <header className="title-bar">
        <div className="title-bar-left">
          <div className="nebula-logo">N</div>
          <span className="title-bar-title">Nebula</span>
        </div>

        <div className="title-bar-center">
          <span>Workspace</span>
        </div>

        <div className="title-bar-right">
          <button className="title-button">⌕</button>
          <button className="title-button">⚙</button>
        </div>
      </header>

      <div className="app-content">
        <aside className="activity-bar">
          <button className="activity-button active">⌂</button>
          <button className="activity-button">▣</button>
          <button className="activity-button">◈</button>
          <button className="activity-button">◌</button>
        </aside>

        <aside className="sidebar">
          <div className="panel-heading">
            <span>NEBULA</span>
          </div>

          <div className="sidebar-content">
            <div className="sidebar-section">
              <div className="section-title">WORKSPACE</div>

              <button className="sidebar-item active">
                <span>⌂</span>
                <span>Overview</span>
              </button>

              <button className="sidebar-item">
                <span>◫</span>
                <span>Files</span>
              </button>

              <button className="sidebar-item">
                <span>★</span>
                <span>Favorites</span>
              </button>

              <button className="sidebar-item">
                <span>◷</span>
                <span>History</span>
              </button>
            </div>

            <div className="sidebar-section">
              <div className="section-title">TOOLS</div>

              <button className="sidebar-item">
                <span>✦</span>
                <span>AI Assistant</span>
              </button>

              <button className="sidebar-item">
                <span>⌘</span>
                <span>Clipboard</span>
              </button>
            </div>
          </div>
        </aside>

        <main className="workspace">
          <div className="workspace-header">
            <div>
              <div className="workspace-eyebrow">WORKSPACE</div>
              <h1>Welcome to Nebula</h1>
              <p>Your intelligent desktop workspace.</p>
            </div>

            <button className="primary-button">
              + New
            </button>
          </div>

          <div className="workspace-grid">
            <div className="glass-card">
              <div className="card-icon">⌘</div>
              <h2>Quick Access</h2>
              <p>
                Access your most important files, applications and tools.
              </p>
            </div>

            <div className="glass-card">
              <div className="card-icon">✦</div>
              <h2>AI Assistant</h2>
              <p>
                Your intelligent assistant is ready whenever you need it.
              </p>
            </div>

            <div className="glass-card">
              <div className="card-icon">◷</div>
              <h2>Recent Activity</h2>
              <p>
                Your recent Nebula activity will appear here.
              </p>
            </div>
          </div>
        </main>

        <aside className="inspector">
          <div className="panel-heading">
            <span>INSPECTOR</span>
          </div>

          <div className="inspector-content">
            <div className="inspector-placeholder">
              <div className="placeholder-icon">◈</div>
              <span>Select an item</span>
              <p>
                Details and actions will appear here.
              </p>
            </div>
          </div>
        </aside>
      </div>

      <footer className="status-bar">
        <div>● Nebula Ready</div>
        <div>Local Workspace</div>
      </footer>
    </div>
  );
}

export default AppShell;