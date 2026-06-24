function push(data: Record<string, unknown>) {
  if (typeof window === 'undefined') return
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push(data)
}

export const GTM = {
  leadClick: (location: string) =>
    push({
      event: 'lead_click',
      cta_location: location,
    }),

  pricingView: () =>
    push({ event: 'pricing_view' }),

  scrollDepth75: () =>
    push({ event: 'scroll_depth_75' }),
}
