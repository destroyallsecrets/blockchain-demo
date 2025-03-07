"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { ArrowRight, BookOpen, Code, FileCode, Github, Lightbulb, Zap } from "lucide-react"

export default function LearnPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-2 mb-8">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Building a Blockchain Demo</h1>
            <p className="text-xl text-muted-foreground">
              A comprehensive guide to developing a blockchain application with Next.js
            </p>
          </div>

          <Tabs defaultValue="overview" className="mb-12">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="development">Development</TabsTrigger>
              <TabsTrigger value="technical">Technical Details</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6 mt-6">
              <section className="space-y-4">
                <h2 className="text-3xl font-bold">What is Blockchain?</h2>
                <p>
                  Blockchain is a distributed ledger technology that maintains a continuously growing list of records,
                  called blocks, which are linked using cryptography. Each block contains a cryptographic hash of the
                  previous block, a timestamp, and transaction data.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Zap className="h-5 w-5 mr-2 text-blue-500" />
                        Key Features
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Decentralization</li>
                        <li>Immutability</li>
                        <li>Transparency</li>
                        <li>Security through cryptography</li>
                        <li>Consensus mechanisms</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Lightbulb className="h-5 w-5 mr-2 text-yellow-500" />
                        Use Cases
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Cryptocurrencies</li>
                        <li>Smart contracts</li>
                        <li>Supply chain tracking</li>
                        <li>Digital identity</li>
                        <li>Voting systems</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </section>

              <section className="space-y-4 mt-8">
                <h2 className="text-3xl font-bold">Our Blockchain Demo</h2>
                <p>
                  Our blockchain demo is a simplified implementation that demonstrates the core concepts of blockchain
                  technology. It includes a visual interface to interact with the blockchain, allowing users to:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>View the blockchain and individual blocks</li>
                  <li>Add new blocks with custom data</li>
                  <li>Validate the integrity of the blockchain</li>
                  <li>Understand mining and proof-of-work concepts</li>
                </ul>
                <div className="mt-6">
                  <Link href="/">
                    <Button>
                      Try the Demo
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </section>
            </TabsContent>

            <TabsContent value="development" className="space-y-6 mt-6">
              <section className="space-y-4">
                <h2 className="text-3xl font-bold">Development Process</h2>
                <p>
                  Building a blockchain application involves several key steps. Here's how we approached the development
                  of our blockchain demo:
                </p>

                <div className="space-y-6 mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>1. Define the Purpose</CardTitle>
                      <CardDescription>Establishing clear goals for the blockchain application</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>
                        For our demo, we focused on creating an educational tool that demonstrates the core concepts of
                        blockchain technology. We wanted to make the abstract concepts of blocks, hashing, and mining
                        tangible through a visual interface.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>2. Choose the Tech Stack</CardTitle>
                      <CardDescription>Selecting the right technologies for implementation</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>We selected the following technologies:</p>
                      <ul className="list-disc pl-5 space-y-1 mt-2">
                        <li>
                          <strong>Next.js:</strong> For the web application framework
                        </li>
                        <li>
                          <strong>TypeScript:</strong> For type safety and better developer experience
                        </li>
                        <li>
                          <strong>Tailwind CSS:</strong> For styling the user interface
                        </li>
                        <li>
                          <strong>crypto-js:</strong> For cryptographic functions in the browser
                        </li>
                        <li>
                          <strong>shadcn/ui:</strong> For UI components
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>3. Design Architecture</CardTitle>
                      <CardDescription>Planning the structure of the blockchain</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>Our blockchain architecture includes:</p>
                      <ul className="list-disc pl-5 space-y-1 mt-2">
                        <li>
                          <strong>Block Structure:</strong> Index, timestamp, data, previous hash, hash, nonce
                        </li>
                        <li>
                          <strong>Consensus Mechanism:</strong> Simplified Proof-of-Work
                        </li>
                        <li>
                          <strong>Data Model:</strong> String-based data for simplicity
                        </li>
                        <li>
                          <strong>Client-Side Implementation:</strong> Running entirely in the browser
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>4. Develop Core Components</CardTitle>
                      <CardDescription>Implementing the essential blockchain classes</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>We developed the following core components:</p>
                      <ul className="list-disc pl-5 space-y-1 mt-2">
                        <li>
                          <strong>Block Class:</strong> Represents a single block in the chain
                        </li>
                        <li>
                          <strong>Blockchain Class:</strong> Manages the entire chain of blocks
                        </li>
                        <li>
                          <strong>Transaction Class:</strong> Represents value transfers (simplified)
                        </li>
                        <li>
                          <strong>Wallet Class:</strong> Manages identities and balances (simplified)
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>5. Create the User Interface</CardTitle>
                      <CardDescription>Building an intuitive way to interact with the blockchain</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>
                        We designed a user interface with multiple views to help users understand different aspects of
                        the blockchain:
                      </p>
                      <ul className="list-disc pl-5 space-y-1 mt-2">
                        <li>
                          <strong>Block Explorer:</strong> To view all blocks in the chain
                        </li>
                        <li>
                          <strong>Mining Interface:</strong> To add new blocks with custom data
                        </li>
                        <li>
                          <strong>Validation Tools:</strong> To check the integrity of the blockchain
                        </li>
                        <li>
                          <strong>Statistics Dashboard:</strong> To view metrics about the blockchain
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>6. Testing and Debugging</CardTitle>
                      <CardDescription>Ensuring the application works correctly</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>During development, we encountered and resolved several challenges:</p>
                      <ul className="list-disc pl-5 space-y-1 mt-2">
                        <li>
                          <strong>Browser Compatibility:</strong> Replacing Node.js crypto with crypto-js
                        </li>
                        <li>
                          <strong>Mining Performance:</strong> Optimizing the proof-of-work algorithm for browser
                          execution
                        </li>
                        <li>
                          <strong>UI Responsiveness:</strong> Ensuring the interface remains responsive during mining
                        </li>
                        <li>
                          <strong>State Management:</strong> Properly managing blockchain state in React
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </section>
            </TabsContent>

            <TabsContent value="technical" className="space-y-6 mt-6">
              <section className="space-y-4">
                <h2 className="text-3xl font-bold">Technical Deep Dive</h2>
                <p>
                  Let's explore the technical details of our blockchain implementation, focusing on the core components
                  and how they work together.
                </p>

                <div className="space-y-6 mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Block Structure</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Each block in our blockchain contains the following properties:</p>
                      <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-md mt-2 font-mono text-sm overflow-x-auto">
                        <pre>{`{
  index: number,        // Position in the chain
  timestamp: number,    // When the block was created
  data: string,         // The data stored in the block
  previousHash: string, // Hash of the previous block
  hash: string,         // Hash of this block
  nonce: number,        // Number used in mining
  difficulty: number    // Mining difficulty
}`}</pre>
                      </div>
                      <p className="mt-4">
                        The block's hash is calculated by combining all these properties and applying the SHA-256
                        hashing algorithm. This creates a unique fingerprint for each block.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Mining Process</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Mining is the process of finding a hash that meets certain criteria. In our implementation, we
                        use a simplified proof-of-work algorithm:
                      </p>
                      <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-md mt-2 font-mono text-sm overflow-x-auto">
                        <pre>{`mineBlock(difficulty: number): void {
  const target = Array(difficulty + 1).join('0');
  
  while (this.hash.substring(0, difficulty) !== target) {
    this.nonce++;
    this.hash = this.calculateHash();
  }
  
  console.log(\`Block mined: \${this.hash}\`);
}`}</pre>
                      </div>
                      <p className="mt-4">
                        This function increments the nonce until it finds a hash that starts with a specific number of
                        zeros (determined by the difficulty). This process requires computational work, making it
                        difficult to tamper with the blockchain.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Chain Validation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Blockchain integrity is verified by checking two conditions for each block:</p>
                      <ol className="list-decimal pl-5 space-y-1 mt-2">
                        <li>The block's hash is valid (recalculating it produces the same result)</li>
                        <li>The block's previous hash matches the hash of the previous block</li>
                      </ol>
                      <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-md mt-2 font-mono text-sm overflow-x-auto">
                        <pre>{`isChainValid(): boolean {
  for (let i = 1; i < this.chain.length; i++) {
    const currentBlock = this.chain[i];
    const previousBlock = this.chain[i - 1];

    // Validate hash
    if (currentBlock.hash !== currentBlock.calculateHash()) {
      return false;
    }

    // Validate chain link
    if (currentBlock.previousHash !== previousBlock.hash) {
      return false;
    }
  }
  return true;
}`}</pre>
                      </div>
                      <p className="mt-4">
                        This validation ensures that no block has been tampered with and that the chain is properly
                        linked.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Cryptography in the Browser</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        One challenge we faced was implementing cryptographic functions in the browser. Node.js provides
                        a built-in crypto module, but this isn't available in browser environments.
                      </p>
                      <p className="mt-2">
                        We solved this by using the crypto-js library, which provides cryptographic functions that work
                        in both Node.js and browser environments:
                      </p>
                      <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-md mt-2 font-mono text-sm overflow-x-auto">
                        <pre>{`import CryptoJS from 'crypto-js';

calculateHash(): string {
  return CryptoJS.SHA256(
    this.index +
      this.previousHash +
      this.timestamp +
      JSON.stringify(this.data) +
      this.nonce
  ).toString();
}`}</pre>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>State Management</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>In our React application, we use useState to manage the blockchain state:</p>
                      <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-md mt-2 font-mono text-sm overflow-x-auto">
                        <pre>{`const [blockchain, setBlockchain] = useState(() => {
  const chain = new Blockchain();
  // Add genesis block
  chain.addBlock("Genesis Block", "0");
  return chain;
});

const handleAddBlock = (data: string) => {
  const newChain = new Blockchain();
  newChain.chain = [...blockchain.chain];
  newChain.addBlock(data, "0");
  setBlockchain(newChain);
};`}</pre>
                      </div>
                      <p className="mt-4">
                        When adding a new block, we create a new blockchain instance with the existing chain and add the
                        new block to it. This ensures React properly detects the state change and re-renders the
                        components.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </section>
            </TabsContent>

            <TabsContent value="resources" className="space-y-6 mt-6">
              <section className="space-y-4">
                <h2 className="text-3xl font-bold">Learning Resources</h2>
                <p>
                  To deepen your understanding of blockchain technology and continue your learning journey, here are
                  some valuable resources:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <BookOpen className="h-5 w-5 mr-2 text-green-500" />
                        Books & Articles
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div>
                        <h3 className="font-semibold">Mastering Bitcoin</h3>
                        <p className="text-sm text-muted-foreground">
                          By Andreas M. Antonopoulos - A technical guide to Bitcoin and blockchain technology
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold">Blockchain Basics</h3>
                        <p className="text-sm text-muted-foreground">
                          By Daniel Drescher - A non-technical introduction to blockchain technology
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold">Bitcoin Whitepaper</h3>
                        <p className="text-sm text-muted-foreground">
                          By Satoshi Nakamoto - The original paper that introduced Bitcoin
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Code className="h-5 w-5 mr-2 text-purple-500" />
                        Online Courses
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div>
                        <h3 className="font-semibold">Blockchain Fundamentals</h3>
                        <p className="text-sm text-muted-foreground">
                          By Berkeley University - A comprehensive introduction to blockchain technology
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold">Blockchain A-Z™</h3>
                        <p className="text-sm text-muted-foreground">
                          On Udemy - Learn how to build your own blockchain
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold">Ethereum and Solidity: The Complete Developer's Guide</h3>
                        <p className="text-sm text-muted-foreground">
                          On Udemy - Learn to build smart contracts on Ethereum
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Github className="h-5 w-5 mr-2 text-gray-500" />
                        GitHub Repositories
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div>
                        <h3 className="font-semibold">Naivechain</h3>
                        <p className="text-sm text-muted-foreground">
                          A minimal blockchain implementation in 200 lines of code
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold">Build your own blockchain</h3>
                        <p className="text-sm text-muted-foreground">
                          A simple blockchain implementation in TypeScript
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold">Ethereum</h3>
                        <p className="text-sm text-muted-foreground">The official Ethereum protocol implementation</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <FileCode className="h-5 w-5 mr-2 text-blue-500" />
                        Documentation
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div>
                        <h3 className="font-semibold">Bitcoin Developer Documentation</h3>
                        <p className="text-sm text-muted-foreground">Technical documentation for Bitcoin developers</p>
                      </div>
                      <div>
                        <h3 className="font-semibold">Ethereum Documentation</h3>
                        <p className="text-sm text-muted-foreground">
                          Comprehensive documentation for Ethereum developers
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold">Hyperledger Fabric Documentation</h3>
                        <p className="text-sm text-muted-foreground">
                          Documentation for enterprise blockchain solutions
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>

              <section className="space-y-4 mt-8">
                <h2 className="text-3xl font-bold">Next Steps</h2>
                <p>Ready to take your blockchain project to the next level? Here are some ways to extend our demo:</p>

                <div className="space-y-4 mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Implement a P2P Network</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Add networking capabilities to allow multiple nodes to communicate and synchronize their
                        blockchains. This could be implemented using WebSockets or WebRTC for browser-based
                        applications.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Enhance the Transaction System</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Implement a more robust transaction system with digital signatures for verification. You could
                        use elliptic curve cryptography (like secp256k1) for key generation and signature creation.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Add Smart Contract Functionality</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Implement a simple scripting language or virtual machine to execute code on the blockchain. This
                        would allow for programmable transactions and decentralized applications.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Improve the Consensus Mechanism</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Explore alternative consensus mechanisms like Proof of Stake, Delegated Proof of Stake, or
                        Practical Byzantine Fault Tolerance. These can offer better performance and energy efficiency
                        compared to Proof of Work.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </section>
            </TabsContent>
          </Tabs>

          <div className="border-t pt-8 mt-8">
            <h2 className="text-2xl font-bold mb-4">Ready to Start Building?</h2>
            <p className="mb-6">
              Now that you understand the fundamentals of blockchain development, it's time to start building your own
              project. Use our demo as a starting point and extend it with your own ideas and features.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/">
                <Button>
                  Try the Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="https://github.com/your-username/blockchain-demo" target="_blank" rel="noopener noreferrer">
                <Button variant="outline">
                  <Github className="mr-2 h-4 w-4" />
                  View on GitHub
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

