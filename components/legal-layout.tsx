interface LegalLayoutProps {
    children: React.ReactNode
    title: string
    lastUpdated?: string
  }
  
  export function LegalLayout({ children, title, lastUpdated }: LegalLayoutProps) {
    return (
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-center mb-4 text-blue-500">{title}</h1>
          <div className="mt-12 space-y-8">
            {children}
          </div>
          {lastUpdated && (
            <div className="mt-12 text-center text-sm text-gray-400">
              Last updated: {lastUpdated}
            </div>
          )}
        </div>
      </div>
    )
  }
  
  