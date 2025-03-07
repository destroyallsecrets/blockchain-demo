import type { Blockchain } from "@/lib/blockchain"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Blocks, Clock, ShieldCheck, Cpu } from "lucide-react"

interface BlockchainStatsProps {
  blockchain: Blockchain
}

export function BlockchainStats({ blockchain }: BlockchainStatsProps) {
  const totalBlocks = blockchain.chain.length
  const averageMiningTime = 2.5 // Simulated value in seconds
  const difficulty = blockchain.difficulty
  const isValid = blockchain.isChainValid()

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Chain Status</CardTitle>
          <ShieldCheck className={`h-4 w-4 ${isValid ? "text-green-500" : "text-red-500"}`} />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{isValid ? "Valid" : "Invalid"}</div>
          <p className="text-xs text-muted-foreground">
            {isValid ? "All blocks are properly linked and data is unmodified" : "Chain integrity has been compromised"}
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Blocks</CardTitle>
          <Blocks className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalBlocks}</div>
          <p className="text-xs text-muted-foreground">
            {totalBlocks === 1 ? "Only genesis block" : `${totalBlocks - 1} blocks mined since genesis`}
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Mining Difficulty</CardTitle>
          <Cpu className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{difficulty}</div>
          <p className="text-xs text-muted-foreground">
            {difficulty <= 2 ? "Easy" : difficulty <= 4 ? "Medium" : "Hard"} mining difficulty
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Avg. Mining Time</CardTitle>
          <Clock className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{averageMiningTime}s</div>
          <p className="text-xs text-muted-foreground">Estimated time to mine a new block</p>
        </CardContent>
      </Card>
    </div>
  )
}

