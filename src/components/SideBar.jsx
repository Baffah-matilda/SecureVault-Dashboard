/* eslint-disable no-unused-vars */
import React from 'react'

function Sidebar({ onSelectId = () => {}, selectedId }) {
  return (
    <aside className="sidebar" aria-label="Sidebar">
      <div className="sidebar-actions">
        <button type="button" className="upload-btn">📁 Upload File</button>
      </div>

      <nav className="sidebar-nav" aria-label="Primary">
        <ul>
          <li><button type="button" className="active">📁 My Files</button></li>
          <li><button type="button">👥 Shared</button></li>
          <li><button type="button">🕘 Recent</button></li>
          <li><button type="button">⭐ Starred</button></li>
          <li><button type="button">🗑️ Trash</button></li>
        </ul>
      </nav>

      <div className="sidebar-directory">
        <h4>DIRECTORY</h4>
        <ul>
          <li>
            <div className="dir-item">📂 Finance</div>
            <ul>
              <li><button type="button" className="dir-file">▸ 2024_Tax_Returns</button></li>
              <li>
                <button
                  type="button"
                  aria-current={selectedId === '2' ? 'true' : undefined}
                  onClick={() => onSelectId('2')}
                  className={selectedId === '2' ? 'selected dir-file' : 'dir-file'}
                >
                  Case_2024_Agreement.pdf
                </button>
              </li>
            </ul>
          </li>
          <li><button type="button" className="dir-item">📁 Legal</button></li>
          <li><button type="button" className="dir-item">📁 Projects</button></li>
        </ul>
      </div>

      <div className="sidebar-footer">
        <div className="sidebar-links">
          <button type="button" className="link-btn">🔒 Security Log</button>
          <button type="button" className="link-btn">💾 Storage Info</button>
        </div>

        <div className="storage">
          <div className="storage-label">Storage Used</div>
          <div className="storage-bar">
            <div className="storage-fill" style={{ width: '78%' }}></div>
          </div>
          <div className="storage-percent">78%</div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;