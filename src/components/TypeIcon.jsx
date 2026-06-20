import { Shield, Eye, Users, Star, TrendingDown, Megaphone, CircleDashed } from 'lucide-react'

const ICON_MAP = { Shield, Eye, Users, Star, TrendingDown, Megaphone, CircleDashed }

export default function TypeIcon({ iconName, color, size = 24, strokeWidth = 1.75 }) {
  const Icon = ICON_MAP[iconName]
  if (!Icon) return null
  return <Icon size={size} color={color} strokeWidth={strokeWidth} />
}
