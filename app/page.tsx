import { BlockchainDemo } from "@/components/blockchain-demo"
import Link from "next/link"
import { BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:p-8 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Blockchain Demo</h1>
        <p className="text-muted-foreground mb-8">
          A simple implementation of blockchain technology with a visual interface
        </p>
        <div className="flex items-center gap-4 mt-4">
          <Link href="/learn">
            <Button variant="outline" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Learn How It Works
            </Button>
          </Link>
        </div>
        <BlockchainDemo />
      </div>
    </main>
  )
}

