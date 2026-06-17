/* eslint-disable no-unused-vars */
import React from 'react'

function MainPanel({ files = [], onSelect = () => {}, selectedId }) {
  function iconFor(type) {
    if (type === 'folder') return '📁';
    if (type === 'pdf') return '📄';
    if (type === 'sheet') return '📊';
    return '📄';
  }

  return (
    <main className="main-panel">
      <div className="panel-toolbar">
        <div className="breadcrumbs">My Files &gt; Finance &gt; Legal</div>
        <div className="panel-actions">
          <button className="view-btn">▦</button>
          <button className="view-btn">☰</button>
          <button className="sort-btn">Sort ▾</button>
        </div>
      </div>

      <div className="file-grid">
        {files.map((f) => (
          <div
            key={f.id}
            role="button"
            aria-pressed={selectedId === f.id}
            aria-selected={selectedId === f.id}
            tabIndex={0}
            aria-label={`Open ${f.name}`}
            className={`file-card ${f.type === 'folder' ? 'folder' : ''} ${selectedId === f.id ? 'selected' : ''}`}
            onClick={() => onSelect(f)}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onSelect(f); }}
          >
            <div className="card-top">
              <div className="icon">{iconFor(f.type)}</div>
              <div className="card-actions">{f.type === 'enc' ? '🔒' : ''}</div>
            </div>

            <div className="meta">
              <div className="name">{f.name}</div>
              <div className="sub">{f.type === 'folder' ? `${f.files || 0} files • ${f.size}` : (f.size || f.modified)}</div>
            </div>

            <div className="card-footer">
              {f.type === 'pdf' && <div className="file-type">PDF Document</div>}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default MainPanel;