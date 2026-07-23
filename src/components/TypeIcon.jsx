import {
  Shield, Eye, Users, Star, TrendingDown, TrendingUp, Megaphone, CircleDashed,
  Search, Landmark, Scale, FileText, BookOpen, Globe, DollarSign, Bot,
  Gavel, Hammer, Target, DoorOpen, MessageCircle, HeartHandshake, RefreshCw, Compass,
  FileSearch,
} from 'lucide-react'

const ICON_MAP = {
  Shield, Eye, Users, Star, TrendingDown, TrendingUp, Megaphone, CircleDashed,
  Search, Landmark, Scale, FileText, BookOpen, Globe, DollarSign, Bot,
  Gavel, Hammer, Target, DoorOpen, MessageCircle, HeartHandshake, RefreshCw, Compass,
  FileSearch,
}

export default function TypeIcon({ iconName, color, size = 24, strokeWidth = 1.75 }) {
  const Icon = ICON_MAP[iconName]
  if (!Icon) return null
  return <Icon size={size} color={color} strokeWidth={strokeWidth} />
}
