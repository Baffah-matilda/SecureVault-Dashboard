/* eslint-disable no-unused-vars */
import React from 'react'
import previewImg from '../assets/preview.svg'
import avatarImg from '../assets/avatar.svg'

function PropertiesPanel({ file }) {
  if (!file) {
    return (
      <aside className="properties-panel" aria-label="Properties">
        <div className="empty">No file selected</div>
      </aside>
    );
  }

  return (
    <aside className="properties-panel" aria-label="Properties">
      <div className="properties-header">
        <h3>Properties</h3>
        <button type="button" aria-label="Close properties" className="close-btn">✕</button>
      </div>

      <div className="preview">
        <div className="preview-wrapper">
          <img src={previewImg} alt="preview" className="preview-img" />
          <button className="preview-btn">Preview</button>
        </div>
      </div>

      <div className="file-info">
        <div className="filename-row">
          <div className="filename">{file.name}</div>
        </div>

        <div className="tags">{file.confidential ? <><span className="confidential">CONFIDENTIAL</span> </> : null}{file.type.toUpperCase()} Document</div>

        <hr className="divider" />

        <dl className="meta-list">
          <div>
            <dt>TYPE</dt><dd>{file.type}</dd>
          </div>
          <div>
            <dt>SIZE</dt><dd>{file.size || '—'}</dd>
          </div>
          <div>
            <dt>CREATED</dt><dd>{file.created || '—'}</dd>
          </div>
          <div>
            <dt>MODIFIED</dt><dd>{file.modified || '—'}</dd>
          </div>
        </dl>

        <div className="owner-row">
          <div className="owner-avatar-wrap">
            <img src={avatarImg} alt="owner avatar" className="owner-avatar" />
            <span className="owner-status" aria-hidden></span>
          </div>
          <div className="owner-meta">
            <div className="owner-name">{file.owner} <span className="owner-role">(Admin)</span></div>
          </div>
        </div>

        <div className="actions">
          <button type="button" aria-label="Share with team" onClick={() => console.log('share', file.id)}>
            <span className="action-left">🔗 Share with Team</span>
            <span className="action-right">›</span>
          </button>
          <button type="button" aria-label="Download local copy" onClick={() => console.log('download', file.id)}>
            <span className="action-left">⬇️ Download Local</span>
            <span className="action-right">›</span>
          </button>
          <button type="button" aria-label="Purge file" onClick={() => console.log('purge', file.id)}>
            <span className="action-left">🗑️ Purge File</span>
            <span className="action-right">›</span>
          </button>
        </div>

        <div className="encryption">🔒 AES-256 Encrypted</div>
      </div>
    </aside>
  );
}

export default PropertiesPanel;