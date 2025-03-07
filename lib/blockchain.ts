import CryptoJS from "crypto-js"

export class Block {
  public hash: string
  public nonce = 0
  public difficulty = 4

  constructor(
    public index: number,
    public timestamp: number,
    public data: string,
    public previousHash = "",
  ) {
    this.hash = this.calculateHash()
    this.mineBlock(this.difficulty)
  }

  calculateHash(): string {
    return CryptoJS.SHA256(
      this.index + this.previousHash + this.timestamp + JSON.stringify(this.data) + this.nonce,
    ).toString()
  }

  mineBlock(difficulty: number): void {
    const target = Array(difficulty + 1).join("0")

    while (this.hash.substring(0, difficulty) !== target) {
      this.nonce++
      this.hash = this.calculateHash()
    }

    console.log(`Block mined: ${this.hash}`)
  }
}

export class Blockchain {
  public chain: Block[] = []
  public difficulty = 4

  constructor() {
    this.chain = []
  }

  getLatestBlock(): Block {
    return this.chain[this.chain.length - 1]
  }

  addBlock(data: string, minerAddress: string): void {
    const index = this.chain.length
    const previousHash = this.chain.length > 0 ? this.getLatestBlock().hash : "0"
    const newBlock = new Block(index, Date.now(), data, previousHash)

    this.chain.push(newBlock)

    // In a real implementation, you would reward the miner here
    // this.createTransaction("System", minerAddress, 1); // 1 coin reward
  }

  isChainValid(): boolean {
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i]
      const previousBlock = this.chain[i - 1]

      // Validate hash
      if (currentBlock.hash !== currentBlock.calculateHash()) {
        return false
      }

      // Validate chain link
      if (currentBlock.previousHash !== previousBlock.hash) {
        return false
      }
    }
    return true
  }
}

export class Transaction {
  constructor(
    public fromAddress: string,
    public toAddress: string,
    public amount: number,
  ) {}
}

export class Wallet {
  public publicKey: string
  public privateKey: string
  public balance = 0

  constructor() {
    // In a real implementation, you would generate a proper key pair
    this.publicKey = CryptoJS.lib.WordArray.random(32).toString()
    this.privateKey = CryptoJS.lib.WordArray.random(64).toString()
  }

  createTransaction(toAddress: string, amount: number): Transaction {
    if (amount > this.balance) {
      throw new Error("Not enough balance")
    }

    const transaction = new Transaction(this.publicKey, toAddress, amount)
    this.balance -= amount

    return transaction
  }
}

