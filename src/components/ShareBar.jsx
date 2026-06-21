import { useState } from 'react'

const SHARE_URL = 'https://trusttypology.com/'

export default function ShareBar({ shareText, label = 'Share your result' }) {
  const [copied, setCopied] = useState(false)

  const canNativeShare = typeof navigator !== 'undefined' && !!navigator.share

  const handleNativeShare = async () => {
    try {
      await navigator.share({ title: 'The Trust Typology', text: shareText, url: SHARE_URL })
    } catch (_) {
      // user cancelled or error — silent
    }
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(SHARE_URL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (_) {
      // fallback: select a temp input
      const el = document.createElement('input')
      el.value = SHARE_URL
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const twitterUrl =
    'https://x.com/intent/tweet?text=' +
    encodeURIComponent(shareText + ' ' + SHARE_URL)

  const linkedinUrl =
    'https://www.linkedin.com/sharing/share-offsite/?url=' +
    encodeURIComponent(SHARE_URL)

  return (
    <div className="share-bar">
      <span className="share-bar-label">{label}</span>
      <div className="share-bar-buttons">
        {canNativeShare && (
          <button className="share-btn" onClick={handleNativeShare} type="button">
            Share ↗
          </button>
        )}
        <button className="share-btn" onClick={handleCopy} type="button">
          {copied ? 'Copied!' : 'Copy link'}
        </button>
        <a
          href={twitterUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="share-btn"
        >
          𝕏 / Twitter
        </a>
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="share-btn"
        >
          LinkedIn
        </a>
      </div>
    </div>
  )
}
