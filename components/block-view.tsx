import type { Block } from "@/lib/blockchain"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface BlockViewProps {
  block: Block
  index: number
}

export function BlockView({ block, index }: BlockViewProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="bg-muted/50">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Block #{index}</CardTitle>
          <Badge variant={index === 0 ? "secondary" : "default"}>{index === 0 ? "Genesis" : "Block"}</Badge>
        </div>
      </CardHeader>
      <CardContent className="p-4 space-y-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm font-medium text-muted-foreground">Data</p>
            <p className="font-mono text-sm break-all">{block.data}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">Timestamp</p>
            <p className="font-mono text-sm">{new Date(block.timestamp).toLocaleString()}</p>
          </div>
        </div>
        <div>
          <p className="text-sm font-medium text-muted-foreground">Previous Hash</p>
          <p className="font-mono text-xs break-all">{block.previousHash}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-muted-foreground">Hash</p>
          <p className="font-mono text-xs break-all">{block.hash}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-muted-foreground">Nonce</p>
          <p className="font-mono text-sm">{block.nonce}</p>
        </div>
      </CardContent>
      <CardFooter className="bg-muted/30 px-4 py-2">
        <div className="text-xs text-muted-foreground">Mined with difficulty: {block.difficulty}</div>
      </CardFooter>
    </Card>
  )
}

