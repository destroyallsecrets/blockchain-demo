"use client"

import { useState } from "react"
import { Blockchain } from "@/lib/blockchain"
import { BlockView } from "@/components/block-view"
import { AddBlockForm } from "@/components/add-block-form"
import { BlockchainStats } from "@/components/blockchain-stats"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function BlockchainDemo() {
  const [blockchain, setBlockchain] = useState(() => {
    const chain = new Blockchain()
    // Add genesis block
    chain.addBlock("Genesis Block", "0")
    return chain
  })

  const handleAddBlock = (data: string) => {
    const newChain = new Blockchain()
    newChain.chain = [...blockchain.chain]
    newChain.addBlock(data, "0") // In a real implementation, you'd use a proper mining reward address
    setBlockchain(newChain)
  }

  const handleValidateChain = () => {
    const isValid = blockchain.isChainValid()
    alert(isValid ? "Blockchain is valid!" : "Blockchain is invalid!")
  }

  return (
    <div className="space-y-8">
      <Tabs defaultValue="blocks">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="blocks">Blocks</TabsTrigger>
          <TabsTrigger value="add">Add Block</TabsTrigger>
          <TabsTrigger value="stats">Stats</TabsTrigger>
        </TabsList>
        <TabsContent value="blocks" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Blockchain</CardTitle>
              <CardDescription>
                View all blocks in the chain. Each block contains data, a timestamp, and links to the previous block via
                a hash.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {blockchain.chain.map((block, index) => (
                  <BlockView key={index} block={block} index={index} />
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="add">
          <AddBlockForm onAddBlock={handleAddBlock} onValidateChain={handleValidateChain} />
        </TabsContent>
        <TabsContent value="stats">
          <BlockchainStats blockchain={blockchain} />
        </TabsContent>
      </Tabs>
    </div>
  )
}

