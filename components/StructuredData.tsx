interface StructuredDataProps {
  data: Record<string, any> | Array<Record<string, any>>
}

export default function StructuredData({ data }: StructuredDataProps) {
  const jsonLd = JSON.stringify(Array.isArray(data) ? data : [data])

  return null // Structured data is injected via head in layout
  
  // Note: To use this component, add it to your page's metadata or use it in the head
  // This is a placeholder for structured data injection
}

