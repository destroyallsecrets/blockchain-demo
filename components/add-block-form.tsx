"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { ShieldCheck, Plus } from "lucide-react"

interface AddBlockFormProps {
  onAddBlock: (data: string) => void
  onValidateChain: () => void
}

export function AddBlockForm({ onAddBlock, onValidateChain }: AddBlockFormProps) {
  const [blockData, setBlockData] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!blockData.trim()) return

    setIsLoading(true)
    // Simulate mining delay
    setTimeout(() => {
      onAddBlock(blockData)
      setBlockData("")
      setIsLoading(false)
    }, 1000)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Add New Block</CardTitle>
        <CardDescription>Enter data for a new block and mine it to add to the blockchain</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent>
          <Textarea
            placeholder="Enter block data (e.g., transaction details, messages, etc.)"
            value={blockData}
            onChange={(e) => setBlockData(e.target.value)}
            className="min-h-[120px]"
          />
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row gap-3">
          <Button type="submit" className="w-full sm:w-auto" disabled={!blockData.trim() || isLoading}>
            {isLoading ? (
              <>Mining Block...</>
            ) : (
              <>
                <Plus className="mr-2 h-4 w-4" />
                Mine Block
              </>
            )}
          </Button>
          <Button type="button" variant="outline" className="w-full sm:w-auto" onClick={onValidateChain}>
            <ShieldCheck className="mr-2 h-4 w-4" />
            Validate Chain
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}

