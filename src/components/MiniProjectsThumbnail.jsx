import React from 'react';
import './MiniProjectsThumbnail.css';

const MiniProjectsThumbnail = () => {
  return (
    <div className="mpt-root">
      {/* Background grid */}
      <div className="mpt-grid-bg" />

      {/* Top row */}
      <div className="mpt-row">

        {/* Code snippet tile */}
        <div className="mpt-tile mpt-code">
          <div className="mpt-code-dots">
            <span style={{ background: '#ff5f57' }} />
            <span style={{ background: '#febc2e' }} />
            <span style={{ background: '#28c840' }} />
          </div>
          <pre className="mpt-code-body">
            <span className="mpt-kw">const</span> predict = <span className="mpt-fn">(</span>data<span className="mpt-fn">)</span> {'=>'} {'{'}
            {'\n'}  <span className="mpt-kw">return</span> model
            {'\n'}    .<span className="mpt-fn">run</span>(data);
            {'\n'}{'}'}
          </pre>
        </div>

        {/* Mini chart tile */}
        <div className="mpt-tile mpt-chart">
          <div className="mpt-chart-label">Price Trend</div>
          <svg viewBox="0 0 80 40" className="mpt-svg">
            <defs>
              <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#a855f7" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
              </linearGradient>
            </defs>
            <polyline
              points="0,35 15,28 25,30 35,18 45,22 55,10 65,14 80,8"
              fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round"
            />
            <polygon
              points="0,35 15,28 25,30 35,18 45,22 55,10 65,14 80,8 80,40 0,40"
              fill="url(#chartGrad)"
            />
          </svg>
          <div className="mpt-chart-val">+24.5%</div>
        </div>

      </div>

      {/* Middle row */}
      <div className="mpt-row">

        {/* Terminal tile */}
        <div className="mpt-tile mpt-terminal">
          <div className="mpt-terminal-bar">~ terminal</div>
          <div className="mpt-terminal-body">
            <span className="mpt-prompt">$</span> python app.py<br />
            <span className="mpt-out">✓ Model loaded</span><br />
            <span className="mpt-out">✓ Accuracy: 94%</span><br />
            <span className="mpt-prompt">$</span> <span className="mpt-cursor">▋</span>
          </div>
        </div>

        {/* Mobile preview tile */}
        <div className="mpt-tile mpt-mobile">
          <div className="mpt-phone">
            <div className="mpt-phone-notch" />
            <div className="mpt-phone-screen">
              <div className="mpt-phone-bar" style={{ width: '70%', background: '#a855f7' }} />
              <div className="mpt-phone-bar" style={{ width: '50%', background: '#6366f1' }} />
              <div className="mpt-phone-bar" style={{ width: '85%', background: '#ec4899' }} />
              <div className="mpt-phone-circle" />
            </div>
          </div>
        </div>

        {/* Stats tile */}
        <div className="mpt-tile mpt-stats">
          <div className="mpt-stat">
            <span className="mpt-stat-val">3+</span>
            <span className="mpt-stat-label">Projects</span>
          </div>
          <div className="mpt-divider" />
          <div className="mpt-stat">
            <span className="mpt-stat-val">ML</span>
            <span className="mpt-stat-label">& Web</span>
          </div>
        </div>

      </div>

      {/* Bottom row */}
      <div className="mpt-row">

        {/* Tags tile */}
        <div className="mpt-tile mpt-tags">
          {['Python', 'React', 'Streamlit', 'ML', 'UI'].map(tag => (
            <span key={tag} className="mpt-tag">{tag}</span>
          ))}
        </div>

        {/* Dashboard mini tile */}
        <div className="mpt-tile mpt-dashboard">
          <div className="mpt-dash-label">Dashboard</div>
          <div className="mpt-bars">
            {[60, 85, 45, 90, 70, 55].map((h, i) => (
              <div key={i} className="mpt-bar" style={{ height: `${h}%`, animationDelay: `${i * 0.1}s` }} />
            ))}
          </div>
        </div>

      </div>

      {/* Decorative glow blobs */}
      <div className="mpt-blob mpt-blob-1" />
      <div className="mpt-blob mpt-blob-2" />
    </div>
  );
};

export default MiniProjectsThumbnail;
