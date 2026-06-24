'use client'
import { GTM } from '@/lib/gtm'
import { WHATSAPP_URL, CTA_LABEL } from '@/lib/constants'

interface CTAButtonProps {
  label?: string
  location: string
  className?: string
  style?: React.CSSProperties
}

export default function CTAButton({
  label = CTA_LABEL,
  location,
  className = '',
  style,
}: CTAButtonProps) {
  const handleClick = () => {
    GTM.leadClick(location)
    setTimeout(() => {
      window.open(WHATSAPP_URL, '_blank', 'noopener,noreferrer')
    }, 150)
  }

  return (
    <button onClick={handleClick} className={className} style={style}>
      {label}
    </button>
  )
}
