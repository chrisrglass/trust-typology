#!/usr/bin/env node
// Generates SVG social card for each trust type → ../public/social-cards/{id}.svg
// Run: node social-cards/generate.js

import { writeFileSync, mkdirSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const outDir = resolve(__dirname, '../public/social-cards')
mkdirSync(outDir, { recursive: true })

const TYPES = [
  {
    id: 'critical-reformers',
    name: 'Critical Reformers',
    tagline: "The university's mission matters and institutions should be held accountable for their performance.",
    prevalence: '~12%',
    accent: '#6E3B6E',
  },
  {
    id: 'populist-insurgents',
    name: 'Populist Insurgents',
    tagline: "The system has been captured by out-of-touch elites, and working people need structural reform and real alternatives to the four-year degree.",
    prevalence: '~17%',
    accent: '#C46A2D',
  },
  {
    id: 'institutional-skeptics',
    name: 'Institutional Skeptics',
    tagline: "Government, universities, religion, media — they've all failed, and trust won't be restored by the same systems that lost it.",
    prevalence: '~10%',
    accent: '#7A7068',
  },
  {
    id: 'self-made-meritocrats',
    name: 'Self-Made Meritocrats',
    tagline: 'The degree pays off, if you choose wisely, commit fully, and take responsibility for the outcome — and that path is more available than the critics suggest.',
    prevalence: '~12%',
    accent: '#1F6B4F',
  },
  {
    id: 'countercultural-communitarians',
    name: 'Countercultural Communitarians',
    tagline: "Universities have turned away from forming character and serving their communities, and need to recover a clear sense of what they're really for.",
    prevalence: '~11%',
    accent: '#B78A2A',
  },
  {
    id: 'university-defenders',
    name: 'University Defenders',
    tagline: 'The university as it exists must adapt, innovate, and defend itself against government intrusion and market capture.',
    prevalence: '~15%',
    accent: '#2457A6',
  },
  {
    id: 'economically-betrayed',
    name: 'Economically Betrayed',
    tagline: "The system broke its promise, and the cost was borne by the people who believed in it, not the institutions that recruited them.",
    prevalence: '~22%',
    accent: '#A3171C',
  },
]

// Wrap text to fit within maxWidth, returning array of lines
function wrapText(text, maxChars) {
  const words = text.split(' ')
  const lines = []
  let current = ''
  for (const word of words) {
    if ((current + ' ' + word).trim().length > maxChars && current) {
      lines.push(current)
      current = word
    } else {
      current = (current + ' ' + word).trim()
    }
  }
  if (current) lines.push(current)
  return lines
}

function makeSvg(type) {
  const taglines = wrapText(type.tagline, 52)
  const taglineY = 520
  const lineH = 52

  const taglineSvg = taglines.map((line, i) =>
    `<text x="80" y="${taglineY + i * lineH}" font-family="Georgia,'Times New Roman',serif" font-size="34" fill="#3a3a3a" font-style="italic">${escapeXml(line)}</text>`
  ).join('\n  ')

  const taglineBottom = taglineY + taglines.length * lineH

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#f8f6f1"/>
      <stop offset="100%" stop-color="#edeae2"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bg)"/>

  <!-- Accent bar top -->
  <rect x="0" y="0" width="1200" height="10" fill="${type.accent}"/>

  <!-- Accent left rule -->
  <rect x="80" y="120" width="4" height="240" fill="${type.accent}" opacity="0.4"/>

  <!-- Eyebrow -->
  <text x="96" y="148" font-family="Arial,'Helvetica Neue',sans-serif" font-size="20" letter-spacing="3" fill="${type.accent}" font-weight="700" text-transform="uppercase">${escapeXml('THE TRUST TYPOLOGY  ·  ' + type.prevalence + ' of Americans')}</text>

  <!-- Type name -->
  <text x="96" y="260" font-family="Georgia,'Times New Roman',serif" font-size="88" fill="#111" font-weight="700" line-height="1">${escapeXml(type.name)}</text>

  <!-- Divider -->
  <rect x="80" y="310" width="120" height="3" fill="${type.accent}"/>

  <!-- Tagline -->
  ${taglineSvg}

  <!-- Footer area -->
  <rect x="0" y="590" width="1200" height="40" fill="${type.accent}" opacity="0.08"/>

  <!-- Two circles logo -->
  <circle cx="88" cy="610" r="11" fill="none" stroke="${type.accent}" stroke-width="2" opacity="0.7"/>
  <circle cx="102" cy="610" r="11" fill="none" stroke="${type.accent}" stroke-width="2" opacity="0.7"/>

  <!-- URL -->
  <text x="124" y="615" font-family="Arial,'Helvetica Neue',sans-serif" font-size="18" letter-spacing="2" fill="${type.accent}" font-weight="700">TRUSTTYPOLOGY.COM</text>
</svg>`
}

function escapeXml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

for (const type of TYPES) {
  const svg = makeSvg(type)
  const outPath = resolve(outDir, `${type.id}.svg`)
  writeFileSync(outPath, svg, 'utf8')
  console.log(`✓  ${type.id}.svg`)
}

console.log(`\nGenerated ${TYPES.length} SVG cards → public/social-cards/`)
console.log('To convert to PNG: npx sharp-cli input.svg --format png --output output.png')
