import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../App";

export default function BlockchainNotesPage() {
  const nav = useNavigate();
  const { theme } = useTheme();
  const [expandedSection, setExpandedSection] = useState(0);

  const notes = [
    {
      title: "📖 What is Blockchain?",
      content: [
        "A blockchain is a distributed ledger - a shared database stored across multiple nodes/computers.",
        "Data is organized into blocks, each containing transactions and cryptographic references to the previous block.",
        "The chain of blocks is immutable - once data is recorded, it cannot be changed or deleted.",
        "No central authority controls the blockchain; all nodes maintain identical copies of the ledger.",
        "Ideal for situations requiring trust without a central intermediary.",
      ],
    },
    {
      title: "🔐 Cryptographic Foundations",
      content: [
        "SHA-256 is a cryptographic hash function that produces a fixed 256-bit output (64 hexadecimal characters).",
        "Hash properties: Same input always produces the same output; tiny input changes create completely different outputs (avalanche effect).",
        "Collision Resistance: Finding two inputs with the same hash is computationally impossible (requires ~2^128 operations).",
        "One-way Function: You cannot reverse a hash to find the original input.",
        "Cryptographic hashes enable blockchain to detect tampering - any change to a block's data changes its hash.",
      ],
    },
    {
      title: "🔑 Digital Signatures & PKC",
      content: [
        "Public Key Cryptography (PKC) uses two keys: Public Key (shared, used to encrypt/verify) and Private Key (secret, used to decrypt/sign).",
        "Digital Signature: A user signs a transaction with their private key, proving they authorized it without revealing the key.",
        "Non-repudiation: The signer cannot deny creating a signed transaction - others can verify using the public key.",
        "Verification: Anyone can verify a signature using the signer's public key, but only the signer can create it.",
        "RSA Example: With primes p=11, q=17, calculating the private key d requires solving the modular multiplicative inverse.",
      ],
    },
    {
      title: "🌳 Merkle Trees",
      content: [
        "A Merkle Tree is a binary tree where each node contains the hash of its children's combined data.",
        "Leaf nodes contain hashes of individual transactions; parent nodes contain hashes of combined children.",
        "The Merkle Root (top of tree) is a single hash representing all transactions - changes to any transaction change the root.",
        "Efficient for verification: To verify one transaction, you only need log(n) hashes, not all transactions.",
        "Bitcoin blocks contain a Merkle Root allowing quick proof of transaction inclusion.",
      ],
    },
    {
      title: "⛏️ Proof of Work (PoW)",
      content: [
        "PoW requires miners to solve a computationally difficult puzzle to add a block to the blockchain.",
        "The puzzle: Find a nonce (number used once) such that H(block_header + nonce) < difficulty_target.",
        "Miners repeatedly hash the block header with different nonces until finding one that meets the target.",
        "Difficulty automatically adjusts to maintain consistent block time (Bitcoin: ~10 minutes).",
        "Securing the network: Attacking the chain requires redoing all PoW, which is economically infeasible.",
      ],
    },
    {
      title: "🔗 Consensus Mechanisms",
      content: [
        "The Byzantine Generals Problem: How do distributed nodes reach agreement when some may be malicious or faulty?",
        "Proof of Work consensus: The longest chain (most cumulative work) is considered valid by all nodes.",
        "Fork Resolution: If two blocks are found simultaneously, nodes follow the longest chain rule until one chain becomes longer.",
        "Liveness: The system eventually makes progress and finalizes transactions.",
        "Safety: Once a transaction is deeply embedded (many blocks after it), reversing it is computationally infeasible.",
      ],
    },
    {
      title: "🌐 Decentralization vs Centralization",
      content: [
        "Centralized systems: One authority controls the database and can modify/delete data.",
        "Decentralized systems: No single authority; nodes collectively maintain the ledger through consensus.",
        "Trade-off: Decentralization reduces performance (throughput decreases) but increases trust and resilience.",
        "Advantages: Censorship resistance, no single point of failure, true ownership of assets.",
        "Disadvantages: Slower transaction processing, higher storage requirements, higher latency.",
      ],
    },
    {
      title: "💹 Bitcoin Network",
      content: [
        "Bitcoin is the first successful decentralized cryptocurrency, created in 2008.",
        "Mining Rewards: Miners receive newly created bitcoins + transaction fees for each block.",
        "Halving: Block reward halves approximately every 4 years (210,000 blocks): 100 BTC → 50 → 25 → 12.5 → 6.25...",
        "Supply Cap: Only 21 million bitcoins will ever exist, creating scarcity.",
        "Peer-to-Peer: Transactions propagate across the network without a central server.",
      ],
    },
    {
      title: "📊 Blockchain Scalability",
      content: [
        "Scalability Challenge: Public blockchains require all nodes to validate all transactions, creating a bottleneck.",
        "Throughput Limitation: Bitcoin ~7 TPS, Ethereum ~30 TPS vs Centralized DB ~10,000 TPS.",
        "Communication Overhead: Every node communicates with others, creating O(n²) complexity in worst case.",
        "Solutions: Layer 2 scaling (Lightning Network), sharding, higher block sizes, faster consensus.",
        "Trilemma: Difficult to achieve security, scalability, and decentralization simultaneously.",
      ],
    },
    {
      title: "🏛️ Permissioned Blockchains",
      content: [
        "Permissioned (Private) Blockchains: Participants must be authenticated by a trusted authority.",
        "Use Cases: Enterprise systems (Hyperledger Fabric, Corda) where participants are known.",
        "Advantages: Faster consensus, privacy controls, known validators, GDPR compliance.",
        "Disadvantages: Less decentralization, single authority controls access, requires trust in authority.",
        "Access Control: Different participants can see different data based on access control lists.",
      ],
    },
    {
      title: "⚖️ Smart Contracts",
      content: [
        "Smart Contracts: Programs stored on the blockchain that execute automatically when conditions are met.",
        "Deterministic: Same input always produces the same output across all nodes.",
        "Immutable: Once deployed, smart contracts cannot be changed (though bugs can cause issues).",
        "Gas Fees: On Ethereum, executing contracts costs 'gas' - fees paid in ETH.",
        "Applications: DeFi, NFTs, automated insurance claims, self-executing agreements.",
      ],
    },
    {
      title: "🔄 Distributed Consensus Protocols",
      content: [
        "Paxos: A consensus algorithm tolerating crash faults but not Byzantine faults.",
        "PBFT (Practical Byzantine Fault Tolerance): Tolerates up to 1/3 malicious nodes; deterministic finality.",
        "Raft: Simpler than Paxos; leader-based consensus; used in permissioned systems.",
        "Properties: Safety (no conflicting decisions), Liveness (progress is made), Fault Tolerance (works despite failures).",
        "Trade-offs: Higher fault tolerance typically means lower performance.",
      ],
    },
  ];

  return (
    <div
      className={`min-h-screen p-6 md:p-8 ${
        theme === "dark"
          ? "bg-linear-to-br from-purple-900 via-purple-800 to-purple-900"
          : "bg-slate-100"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        {/* HEADER */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold bg-linear-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent mb-3">
            📚 Blockchain Fundamentals
          </h1>
          <p
            className={`${theme === "dark" ? "text-blue-200" : "text-slate-700"} text-lg`}
          >
            Learn essential concepts to master blockchain technology
          </p>
        </div>

        {/* ACCORDION SECTIONS */}
        <div className="space-y-4">
          {notes.map((section, idx) => (
            <div
              key={idx}
              className={`backdrop-blur-md rounded-xl overflow-hidden transition-all duration-300 hover:border-purple-600 border ${
                theme === "dark"
                  ? "bg-purple-800/50 border-purple-700/50"
                  : "bg-white border-slate-300"
              }`}
            >
              {/* HEADER */}
              <button
                onClick={() =>
                  setExpandedSection(expandedSection === idx ? -1 : idx)
                }
                className={`w-full px-6 py-4 flex items-center justify-between text-left transition-colors ${
                  theme === "dark"
                    ? "hover:bg-purple-700/30 text-purple-100"
                    : "hover:bg-slate-50 text-slate-800"
                }`}
              >
                <h2 className="text-xl font-bold">{section.title}</h2>
                <span
                  className={`text-2xl ${theme === "dark" ? "text-blue-300" : "text-slate-500"}`}
                >
                  {expandedSection === idx ? "−" : "+"}
                </span>
              </button>

              {/* CONTENT */}
              {expandedSection === idx && (
                <div
                  className={`px-6 py-4 border-t space-y-3 ${
                    theme === "dark"
                      ? "bg-purple-900/30 border-purple-700/50"
                      : "bg-slate-50 border-slate-300"
                  }`}
                >
                  {section.content.map((point, pointIdx) => (
                    <div key={pointIdx} className="flex gap-3 leading-relaxed">
                      <span
                        className={`font-bold shrink-0 ${
                          theme === "dark" ? "text-cyan-400" : "text-cyan-600"
                        }`}
                      >
                        •
                      </span>
                      <p
                        className={
                          theme === "dark"
                            ? "text-purple-100"
                            : "text-slate-700"
                        }
                      >
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* KEY TAKEAWAYS */}
        <div
          className={`mt-12 rounded-xl p-8 border ${
            theme === "dark"
              ? "bg-linear-to-r from-amber-600/20 to-orange-600/20 border-amber-500/30"
              : "bg-amber-50 border-amber-200"
          }`}
        >
          <h3
            className={`text-2xl font-bold mb-4 ${
              theme === "dark" ? "text-amber-300" : "text-amber-800"
            }`}
          >
            🎯 Key Takeaways
          </h3>
          <ul
            className={`space-y-3 ${
              theme === "dark" ? "text-blue-100" : "text-slate-700"
            }`}
          >
            <li className="flex gap-2">
              <span
                className={
                  theme === "dark" ? "text-amber-400" : "text-amber-600"
                }
              >
                ✓
              </span>
              <span>
                Blockchain is a distributed, immutable ledger secured by
                cryptography and consensus.
              </span>
            </li>
            <li className="flex gap-2">
              <span
                className={
                  theme === "dark" ? "text-amber-400" : "text-amber-600"
                }
              >
                ✓
              </span>
              <span>
                Cryptographic hashes ensure data integrity and detect tampering
                instantly.
              </span>
            </li>
            <li className="flex gap-2">
              <span
                className={
                  theme === "dark" ? "text-amber-400" : "text-amber-600"
                }
              >
                ✓
              </span>
              <span>
                Consensus mechanisms like PoW solve the Byzantine Generals
                Problem.
              </span>
            </li>
            <li className="flex gap-2">
              <span
                className={
                  theme === "dark" ? "text-amber-400" : "text-amber-600"
                }
              >
                ✓
              </span>
              <span>
                Decentralization trades performance for security and resilience.
              </span>
            </li>
            <li className="flex gap-2">
              <span
                className={
                  theme === "dark" ? "text-amber-400" : "text-amber-600"
                }
              >
                ✓
              </span>
              <span>
                Permissioned blockchains balance privacy and decentralization
                for enterprises.
              </span>
            </li>
          </ul>
        </div>

        {/* RESOURCES */}
        <div
          className={`mt-8 rounded-xl p-6 text-center border ${
            theme === "dark"
              ? "bg-blue-800/30 border-blue-700/50"
              : "bg-white border-slate-300"
          }`}
        >
          <p
            className={`mb-4 ${theme === "dark" ? "text-blue-200" : "text-slate-600"}`}
          >
            Ready to test your knowledge? Head over to the practice section to
            answer questions and deepen your understanding.
          </p>
          <button
            onClick={() => nav("/subject/blockchain")}
            className="bg-linear-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-6 py-2 rounded-lg transition-all duration-300"
          >
            Start Practicing
          </button>
        </div>
      </div>
    </div>
  );
}
