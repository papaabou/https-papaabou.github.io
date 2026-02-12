'use client'

import React from 'react'

type Props = {
  alt: string
  mark: string
  src?: string
  href?: string
}

export const PartnerLogo: React.FC<Props> = ({ alt, mark, src, href }) => {
  const [broken, setBroken] = React.useState(false)

  const content = !src || broken ? (
    <div className="partner-mark">{mark}</div>
  ) : (
    <div className="partner-logo-wrap">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="partner-logo-img"
        loading="lazy"
        decoding="async"
        onError={() => setBroken(true)}
      />
    </div>
  )

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className="partner-card">
        {content}
      </a>
    )
  }

  return content
}
