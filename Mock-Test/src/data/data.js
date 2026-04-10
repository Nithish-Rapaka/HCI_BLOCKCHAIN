export const blockchain = {};
export const hci = {};

// ================= BLOCKCHAIN - WEEK 1 =================

blockchain[1] = [
  {
    q: "Which of the following statements is true regarding the foundational concepts of blockchain and cryptography?",
    options: [
      "Decentralization in blockchain ensures that a single authority controls the network for higher efficiency.",
      "SHA-256 is a cryptographic hash function widely used in blockchain due to its fixed output size and collision resistance.",
      "A hash chain is a sequence of cryptographic keys used to decode blockchain data.",
      "Cryptographic hash ensures that the blockchain data cannot be read by anyone outside the network.",
    ],
    answer: [1],
  },
  {
    q: 'Consider the following input string: "Hello World". You apply SHA-256 to this string. Then, you change the input to "Hello World!" (added an exclamation mark) and apply SHA-256 again. Which statement describes the relationship between the two output hashes?',
    options: [
      "The two hashes will be identical.",
      "The second hash will be the same as the first, plus a few extra bits at the end.",
      "The two hashes will be completely different and uncorrelated.",
      "The second hash will be exactly 8 bits longer than the first.",
    ],
    answer: [2],
  },
  {
    q: "A blockchain network uses SHA-256 for its hashing process. If it takes 10⁻⁶ seconds to compute a single SHA-256 hash, how long would it take (approximately) to compute 2¹²⁸ hashes for a collision attack?",
    options: ["10¹⁰ years", "10¹⁵ years", "10²⁰ years", "10²⁵ years"],
    answer: [3],
  },
  {
    q: "In a decentralized distributed system with 100 participants, which of the following statements is true regarding trust and communication?",
    options: [
      "At least 50 participants must trust each other for the system to function.",
      "A central body governing communication among all 100 participants is mandatory.",
      "Participants may or may not trust each other, as the system ensures integrity using cryptographic protocols and agreement through consensus protocols.",
      "All the 100 participants must trust each other.",
    ],
    answer: [2],
  },
  {
    q: "A blockchain network achieves an average block generation time of 5 minutes under normal conditions. However, due to scheduled maintenance, the network's hash rate is reduced by 50% for 4 hours daily. If the network operates for 12 hours in total (including the maintenance period), how many blocks will be added to the blockchain?",
    options: ["120", "200", "216", "240"],
    answer: [0],
  },
  {
    q: "Where are the transaction logs stored in a blockchain network?",
    options: [
      "In a centralized SQL database.",
      "On an immutable ledger controlled by a central authority.",
      "In metadata tables on each peer.",
      "In the distributed ledger of each peer across the network.",
    ],
    answer: [3],
  },
  {
    q: "An attacker wants to find a collision in a cryptographic hash function with a 128-bit output. What is the approximate number of hash operations required to succeed?",
    options: ["2⁶⁴", "2²⁵⁶", "2¹²⁸", "0.5×2¹²⁸"],
    answer: [0],
  },
  {
    q: "Which of the following statements accurately describes a blockchain?",
    options: [
      "A centralized database where data is stored on a single server.",
      "A distributed ledger where data is stored across multiple nodes and is immutable.",
      "A system that only stores cryptocurrency transaction data on a single node.",
      "A network that uses a single user to control access and updates to the data.",
    ],
    answer: [1],
  },
  {
    q: "A centralized database processes transactions at 10,000 TPS (Transactions Per Second). You decide to move this system to a decentralized blockchain to increase trust. Which of the following is the most likely outcome regarding performance and control?",
    options: [
      "Throughput increases, and a single authority retains control.",
      "Throughput decreases, and control is distributed among peers.",
      "Throughput remains the same, but data becomes mutable.",
      "Throughput increases, and data becomes encrypted.",
    ],
    answer: [1],
  },
  {
    q: "Which of the following describes the avalanche effect in a cryptographic hash function?",
    options: [
      "Given the same input, the hash function returns a different hash 99.99% of the time.",
      "It takes 10⁵ attempts to reverse-engineer the original message from the hash.",
      "A small change in the input causes a drastic change in the hash, flipping nearly all the bits.",
      "The hash function always returns the same hash for the same input.",
    ],
    answer: [2],
  },
];

// ================= HCI - WEEK 1 =================

hci[1] = [
  {
    q: "What is the primary goal of Human-Computer Interaction (HCI)?",
    options: [
      "Improve computer hardware",
      "Make interaction effective, efficient, and satisfying",
      "Reduce data usage",
      "Teach programming",
    ],
    answer: "Make interaction effective, efficient, and satisfying",
  },
  {
    q: "Which example represents bad design?",
    options: [
      "A door with a clear push/pull label",
      "A TV remote with too many buttons",
      "A phone with customizable themes",
      "A book with a table of contents",
    ],
    answer: "A TV remote with too many buttons",
  },
  {
    q: "Usability mainly describes:",
    options: [
      "App color scheme",
      "How easily users achieve their goals",
      "Internet speed",
      "Type of hardware",
    ],
    answer: "How easily users achieve their goals",
  },
  {
    q: "Which of the following is an interactive system?",
    options: [
      "Printed map",
      "Digital ATM touch interface",
      "Wall poster",
      "Paper calendar",
    ],
    answer: "Digital ATM touch interface",
  },
  {
    q: "Why is understanding user needs important in user-centered design?",
    options: [
      "To reduce app cost",
      "To match designs with real user behaviors",
      "To create fancy animations",
      "To increase marketing budget",
    ],
    answer: "To match designs with real user behaviors",
  },
  {
    q: "Why is a door without signifiers (push/pull marks) confusing?",
    options: [
      "It has too much color",
      "It uses expensive material",
      "Its affordance and signifiers are unclear",
      "It is automatic",
    ],
    answer: "Its affordance and signifiers are unclear",
  },
  {
    q: "What makes a TV remote with many buttons a poor design example?",
    options: [
      "It is heavy",
      "Battery drains quickly",
      "Cognitive overload and poor usability",
      "It is not colorful",
    ],
    answer: "Cognitive overload and poor usability",
  },
  {
    q: "Which step in user-centered design involves understanding user challenges and context?",
    options: ["Advertising", "Deployment", "User research", "Coding"],
    answer: "User research",
  },
  {
    q: "Which HCI principle was violated in the Boeing 737 MAX case?",
    options: [
      "Too many UI colors",
      "No touchscreen support",
      "Lack of visibility and poor feedback for automation",
      "Icons were too small",
    ],
    answer: "Lack of visibility and poor feedback for automation",
  },
  {
    q: "Which concept explains why users make errors when controls do not match their mental model?",
    options: [
      "Animation design",
      "Aesthetic layout",
      "Mental models and signifiers",
      "Download speed",
    ],
    answer: "Mental models and signifiers",
  },
];

// ================= BLOCKCHAIN - WEEK 2 =================

blockchain[2] = [
  {
    q: "Alice employs the RSA cryptosystem with the prime numbers p=11 and q=17 to derive her public and private keys. Given that her public key is e=13, what is her corresponding private key d?",
    options: ["71", "155", "37", "129"],
    answer: [2],
  },
  {
    q: "Bob receives a secure package from Alice, which was encrypted for confidentiality and digitally signed for integrity. To read the message and verify its origin, which keys must Bob use, and in what capacity?",
    options: [
      "Bob uses Alice's Public Key to decrypt the message and Bob's Private Key to verify the signature.",
      "Bob uses Bob's Private Key to decrypt the message and Alice's Public Key to verify the signature.",
      "Bob uses Bob's Public Key to decrypt the message and Alice's Private Key to verify the signature.",
      "Bob uses Alice's Private Key to decrypt the message and Bob's Public Key to verify the signature.",
    ],
    answer: [1],
  },
  {
    q: "Which statement best captures non-repudiation in blockchain transactions enabled by digital signatures?",
    options: [
      "Anyone can change a signed transaction without detection.",
      "The sender can later deny authoring the transaction even if it's signed.",
      "The sender cannot plausibly deny authoring the transaction, and others can verify the origin.",
      "Digital signatures hide the transaction contents from all nodes.",
    ],
    answer: [2],
  },
  {
    q: "In a typical blockchain transaction flow, what does verifying Alice's signature using Alice's public key ensure?",
    options: [
      "The message is encrypted for Alice only.",
      "The message definitely remained confidential on the network.",
      "The transaction was authorized by Alice and was not altered after signing.",
      "The miners will include the transaction in the next block for sure.",
    ],
    answer: [2],
  },
  {
    q: "Consider 8 data points labeled 1 to 8. The post-order traversal of the Merkle Tree is provided as follows (where 1 represents the hash of data point 1, 56 denotes the combined hash of 5 and 6, and so on):",
    options: [
      "(12345678, 1234, 12, 1, 2, 34, 3, 4, 5678, 56, 5, 6, 78, 7, 8)",
      "(1, 2, 12, 3, 4, 34, 1234, 5, 6, 56, 7, 8, 78, 5678, 12345678)",
      "(1, 12, 2, 3, 34, 4, 1234, 5, 56, 6, 7, 78, 8, 5678, 12345678)",
      "(12, 1, 2, 34, 3, 4, 1234, 56, 5, 6, 78, 7, 8, 5678, 12345678)",
    ],
    answer: [1],
  },
  {
    q: "In the Bitcoin Proof of Work (PoW) system, which field in the block header do miners constantly modify to find a hash that meets the difficulty target?",
    options: ["Previous Block Hash", "Merkle Root", "Nonce", "Timestamp"],
    answer: [2],
  },
  {
    q: "Which option most clearly conflicts with the typical design goals of public cryptocurrencies?",
    options: [
      "Open participation with peer-to-peer propagation",
      "Tamper-evident append-only ledger",
      "Central authority that can unilaterally reverse valid transactions",
      "Distributed validation through consensus",
    ],
    answer: [2],
  },
  {
    q: "Which of the following accurately describes the role of Miners in the Bitcoin network?",
    options: [
      "They are central authorities appointed by the Bitcoin Foundation to issue currency.",
      "They use Proof of Stake (PoS) to vote on valid transactions based on their coin wealth.",
      "They solve computational puzzles (Proof of Work) to validate transactions and secure the network in exchange for rewards.",
      "They primarily focus on encrypting user passwords to prevent hacking.",
    ],
    answer: [2],
  },
  {
    q: "In the context of the Bitcoin network, how do nodes resolve a temporary 'fork' (where two different valid blocks are found at roughly the same time)?",
    options: [
      "They choose the block that contains the most transactions.",
      'They follow the "Longest Chain" rule (the chain with the most cumulative work).',
      "A central server decides which block is valid.",
      "Both blocks are discarded, and miners restart.",
    ],
    answer: [1],
  },
  {
    q: "In the context of blockchain distributed systems, what specific problem does the consensus algorithm (like Proof of Work) attempt to solve?",
    options: [
      "The Data Storage Problem: Ensuring all nodes have infinite storage capacity.",
      "The Byzantine Generals Problem: Reaching agreement even when some participants may act maliciously or send conflicting information.",
      "The Latency Problem: Ensuring data travels at the speed of light between nodes.",
      "The Encryption Problem: Making sure no one can read the transaction details.",
    ],
    answer: [1],
  },
];
// ================= HCI - WEEK 2 =================

hci[2] = [
  {
    q: "According to Henry Dreyfuss's idea of design, when does a designer succeed?",
    options: [
      "When the product uses the latest technology",
      "When users feel comfortable and can use the product without friction",
      "When the product is inexpensive",
      "When the product looks stylish",
    ],
    answer:
      "When users feel comfortable and can use the product without friction",
  },
  {
    q: "What was a major reason for the commercial failure of Google Glass?",
    options: [
      "No camera support",
      "Privacy concerns and awkward design",
      "Low screen brightness",
      "Lack of wireless connectivity",
    ],
    answer: "Privacy concerns and awkward design",
  },
  {
    q: "What is the first step in deciding what to design?",
    options: [
      "Finalizing the brand logo",
      "Identifying who the users are",
      "Choosing color schemes",
      "Deciding the marketing plan",
    ],
    answer: "Identifying who the users are",
  },
  {
    q: "What is the main goal of interaction design according to Sharp, Rogers, and Preece?",
    options: [
      "Supporting communication and interaction in daily life",
      "Reducing manufacturing costs",
      "Increasing screen brightness",
      "Designing for entertainment",
    ],
    answer: "Supporting communication and interaction in daily life",
  },
  {
    q: "Which of the following best represents User Experience (UX)?",
    options: [
      "How users feel emotionally while using the product",
      "The processor speed of a device",
      "Only the visual layout",
      "The number of features in an app",
    ],
    answer: "How users feel emotionally while using the product",
  },
  {
    q: "Why are multidisciplinary teams valuable in interaction design?",
    options: [
      "They reduce the cost of development",
      "They make meetings shorter",
      "They generate diverse ideas and perspectives",
      "They eliminate the need for user testing",
    ],
    answer: "They generate diverse ideas and perspectives",
  },
  {
    q: "What is inclusivity in design?",
    options: [
      "Making interfaces look colorful",
      "Designing products for diverse user needs and backgrounds",
      "Removing advanced features",
      "Designing only for expert users",
    ],
    answer: "Designing products for diverse user needs and backgrounds",
  },
  {
    q: "What is accessibility mainly focused on?",
    options: [
      "Increasing entertainment content",
      "Improving device speed",
      "Making products usable by people with disabilities",
      "Reducing UI animations",
    ],
    answer: "Making products usable by people with disabilities",
  },
  {
    q: "Which design principle ensures that crucial functions are easy to locate?",
    options: ["Memorability", "Flexibility", "Aesthetics", "Visibility"],
    answer: "Visibility",
  },
  {
    q: "What is affordance in design?",
    options: [
      "The cost of the product",
      "Visual cues that indicate how an element should be used",
      "The brand reputation",
      "The color contrast ratio",
    ],
    answer: "Visual cues that indicate how an element should be used",
  },
];

// ================= BLOCKCHAIN - WEEK 3 =================

blockchain[3] = [
  {
    q: "If the current block reward for Bitcoin is 3.125 BTC, and the network remains calibrated so that a new block is found every 10 minutes on average, how much Bitcoin will be mined in a total 24-hour period?",
    options: ["312.5 BTC", "450 BTC", "252 BTC", "900 BTC"],
    answer: [1],
  },
  {
    q: "What is a fundamental difference between a permissionless (public) blockchain and a permissioned blockchain?",
    options: [
      "Permissioned blockchains do not use a distributed ledger.",
      "Permissionless blockchains require participants to prove their identity to a central authority before they can join the network.",
      "Permissioned blockchains utilize a gatekeeping mechanism that restricts the ability to validate transactions and update the ledger to a set of authorized nodes.",
      "Permissioned blockchains allow any user to participate in the consensus process without prior authorization.",
    ],
    answer: [2],
  },
  {
    q: "Which of the following combinations is correctly used to compute Bitcoin's current block hash?",
    options: [
      "Previous block's hash, Merkle root, block reward, nonce, timestamp, and block size",
      "Previous block's hash, timestamp, nonce, Merkle root, difficulty bits, and block version",
      "Block creator's public key, Merkle root, timestamp, block reward, nonce, and difficulty level",
      "Previous block's hash, nonce, Merkle root, height, timestamp, and difficulty bits",
    ],
    answer: [1],
  },
  {
    q: "Which of the following difficulty targets would make it most difficult for miners to find a valid block?",
    options: [
      "000000000000000000000000000000000000000000000000000056789abcdef12",
      "00000000000000000000000000000000000000000000000002dfe34a1b2c3d55",
      "00000000000000000000000000000000000000000000000000000afc123987ab",
      "00000000000000000000000000000000000000000000000000000000000af467",
    ],
    answer: [3],
  },
  {
    q: "In the Bitcoin, block identifier refers to",
    options: [
      "SHA1 (128 bits) of the future block header",
      "Double SHA256 of the current block header",
      "Double SHA256 of the difficulty bits only",
      "Triple SHA256 of the future block header",
    ],
    answer: [1],
  },
  {
    q: "If a Bitcoin block contains 64 transactions, how many hashing steps (Merkle path length) are required to verify the inclusion of a specific transaction without downloading the entire block?",
    options: ["64", "32", "6", "12"],
    answer: [2],
  },
  {
    q: "In Bitcoin Script, the stack is shown from bottom to top, left to right. The current stack is: Bottom → [x1, x2, x3] Top. Which opcode will transform the stack into: Bottom → [x1, x3] Top",
    options: ["OP_DROP", "OP_NIP", "OP_2DROP", "OP_DEPTH"],
    answer: [1],
  },
  {
    q: "If a Merkle tree is constructed from 16 transactions, what is the total number of hashes (nodes) in the entire tree, including the transaction hashes (leaves) and the Merkle root?",
    options: ["32", "16", "31", "15"],
    answer: [2],
  },
  {
    q: 'The "Nonce" field in the Bitcoin block header is 32 bits long. What is the maximum value a miner can test in the nonce field before needing to change other header fields (like the timestamp or extra nonce)?',
    options: [
      "2⁶⁴ (approx 1.84×10¹⁹)",
      "2³² (approx 4 billion)",
      "2²⁵⁶ (approx 1.15×10⁷⁷)",
      "1,000,000",
    ],
    answer: [1],
  },
  {
    q: "What happens if the number of transactions in a Merkle tree is odd?",
    options: [
      "The tree cannot be built",
      "Dummy (duplicate) hashes are added to adjust",
      "Transactions are left out of the block",
      "The Merkle root is ignored",
    ],
    answer: [1],
  },
];
// ================= HCI - WEEK 3 =================

hci[3] = [
  {
    q: "Which stage of Design Thinking focuses on understanding the user's needs and behaviors?",
    options: ["Prototype", "Empathize", "Test", "Implement"],
    answer: "Empathize",
  },
  {
    q: "The Double Diamond design process was developed by:",
    options: [
      "Apple",
      "Nielsen Norman Group",
      "UK Design Council",
      "Microsoft Research",
    ],
    answer: "UK Design Council",
  },
  {
    q: "Which of the following is not one of the six stages of Design Thinking?",
    options: ["Define", "Ideate", "Evaluate", "Empathize"],
    answer: "Evaluate",
  },
  {
    q: "In the Define stage, the key goal is to:",
    options: [
      "Sketch wireframes",
      "Frame the problem clearly",
      "Conduct A/B testing",
      "Create high-fidelity prototypes",
    ],
    answer: "Frame the problem clearly",
  },
  {
    q: "Activity-centered design primarily focuses on:",
    options: [
      "User preferences",
      "User emotions",
      "Tasks and activities users perform",
      "Visual layout aesthetics",
    ],
    answer: "Tasks and activities users perform",
  },
  {
    q: "Which of the following is not a key component of system design?",
    options: ["Data Management", "Interfaces", "Memory recall", "Architecture"],
    answer: "Memory recall",
  },
  {
    q: "The Interaction Design Process emphasizes four basic activities. Which one of these is included?",
    options: [
      "Monetization",
      "Discovering requirements",
      "Branding",
      "Advertising",
    ],
    answer: "Discovering requirements",
  },
  {
    q: "Genius design relies heavily on:",
    options: [
      "Extensive user testing",
      "Designer intuition and expertise",
      "Market surveys",
      "Accessibility guidelines",
    ],
    answer: "Designer intuition and expertise",
  },
  {
    q: "Which lifecycle model is based on rapid prototyping and iteration within 5 days?",
    options: [
      "Research in the Wild",
      "Waterfall Model",
      "Google Design Sprints",
      "Spiral Model",
    ],
    answer: "Google Design Sprints",
  },
  {
    q: "According to Week 3, user involvement is important because:",
    options: [
      "It helps reduce the app size",
      "Users can become stakeholders and contribute feedback",
      "It speeds up coding",
      "It avoids the need for iteration",
    ],
    answer: "Users can become stakeholders and contribute feedback",
  },
];
// ================= BLOCKCHAIN - WEEK 4 =================

blockchain[4] = [
  {
    q: 'Which of the following scenarios describes a "Soft Fork" in the Bitcoin network?',
    options: [
      "A protocol change where the new rules are stricter, making old blocks valid but new blocks potentially invalid to non-upgraded nodes.",
      "A divergence where the blockchain splits permanently into two incompatible chains (e.g., Bitcoin and Bitcoin Cash).",
      "A backward-compatible upgrade where non-upgraded nodes can still validate new blocks.",
      "A temporary split caused by two miners finding a block simultaneously.",
    ],
    answer: [2],
  },
  {
    q: "Suppose a miner initially receives 100 bitcoins as a reward for successfully mining a block at time Jan, 2009. The reward for mining a block is halved approximately every four years (or after every 210,000 blocks). Based on this halving process, which of the following statements are correct?",
    options: [
      "In Jan 2013, the miner will receive 50 bitcoins for adding a new block.",
      "In Jan 2018, the miner will receive 25 bitcoins for adding a new block.",
      "In Jan 2021, the miner will receive 12.5 bitcoins for adding a new block.",
      "In Jan 2024, the miner will receive 6.25 bitcoins for adding a new block.",
    ],
    answer: [0, 1, 2], // ✅ MULTI ANSWER
  },
  {
    q: 'In the absence of a central authority, why is the "Longest Chain Rule" crucial for preventing double-spending?',
    options: [
      "It ensures that the chain with the most cumulative computational work is accepted as the single source of truth.",
      "It allows users to spend the same UTXO multiple times if the chain is long enough.",
      "It encrypts the transaction data so it cannot be copied.",
      "It ensures that the timestamp of every block is exactly 10 minutes apart.",
    ],
    answer: [0],
  },
  {
    q: "In a permissionless blockchain like Bitcoin, which specific attack vector is mitigated by requiring a costly resource (like computing power in PoW) to participate in consensus?",
    options: [
      "SQL Injection",
      "Sybil Attack",
      "Man-in-the-Middle Attack",
      "Phishing",
    ],
    answer: [1],
  },
  {
    q: 'Which component in the block header serves as a "fingerprint" for all transactions included in that specific block?',
    options: [
      "The Nonce",
      "The Previous Block Hash",
      "The Merkle Root",
      "The Miner's Public Key",
    ],
    answer: [2],
  },
  {
    q: 'Traditional distributed databases handle "Crash Faults" effectively. What specific, more complex class of faults is the Bitcoin blockchain designed to tolerate?',
    options: [
      "Hardware Failures",
      "Network Latency",
      "Byzantine Faults",
      "Power Outages",
    ],
    answer: [2],
  },
  {
    q: "Which of the following best describes Safety and Liveness in Bitcoin?",
    options: [
      "Safety ensures transactions are irreversible, while Liveness ensures transactions are eventually added.",
      "Safety guarantees quick transaction confirmation, while Liveness prevents forks.",
      "Safety prevents double-spending, while Liveness speeds up block creation.",
      "Safety ensures blocks are always valid, while Liveness ensures no transaction delays.",
    ],
    answer: [0],
  },
  {
    q: "Mathematically, what is a miner attempting to do during Proof of Work (PoW)?",
    options: [
      "Decrypt the previous block's signature.",
      "Find a nonce such that Hash(BlockHeader) < Target.",
      "Sort all transactions in the mempool alphabetically.",
      "Calculate the private key of the Satoshi Nakamoto wallet.",
    ],
    answer: [1],
  },
  {
    q: "Before a miner begins the heavy computational work (hashing) to mine a new block, what must they typically do first?",
    options: [
      "Broadcast their solution to the network.",
      "Construct a candidate block by selecting valid transactions from their memory pool.",
      "Wait for the next difficulty adjustment period.",
      "Shut down their node to save power.",
    ],
    answer: [1],
  },
  {
    q: "What is the theoretical consequence if a single mining pool obtains >50% of the network's hashrate (The 51% Attack)?",
    options: [
      "They can steal funds from any user's wallet (e.g., transfer your BTC to them).",
      "They can change the maximum supply of Bitcoin to 42 million.",
      "They can reverse their own recent transactions (double spending) and block other transactions from confirming.",
      "They can shut down the internet connection of other miners.",
    ],
    answer: [2],
  },
];

// ================= HCI - WEEK 4 =================

hci[4] = [
  {
    q: "User perspectives in HCI help designers understand:",
    options: [
      "Only the visual UI layout",
      "How users perceive and interact with technology",
      "How designers communicate with developers",
      "Only system requirements",
    ],
    answer: "How users perceive and interact with technology",
  },
  {
    q: "Which of the following is an example of accessibility consideration?",
    options: [
      "Using bright colors only",
      "Providing adjustable font sizes and dyslexia-friendly modes",
      "Adding decorative animations",
      "Increasing advertisements",
    ],
    answer: "Providing adjustable font sizes and dyslexia-friendly modes",
  },
  {
    q: "Novice users generally prefer:",
    options: [
      "Only voice-based interfaces",
      "Highly customizable and complex interfaces",
      "Minimal guidance and advanced shortcuts",
      "Simple interfaces with clear instructions",
    ],
    answer: "Simple interfaces with clear instructions",
  },
  {
    q: "A persona is best described as:",
    options: [
      "A real user hired by the company",
      "A fictional, data-driven representation of a user",
      "A system architecture model",
      "A marketing campaign tool",
    ],
    answer: "A fictional, data-driven representation of a user",
  },
  {
    q: "Surveys in user research are useful because they:",
    options: [
      "Always provide emotional depth",
      "Allow quick collection of large-scale data",
      "Guarantee unbiased answers",
      "Replace interviews completely",
    ],
    answer: "Allow quick collection of large-scale data",
  },
  {
    q: "Empathy mapping categorizes insights into:",
    options: [
      "Features, modules, layouts, workflows",
      "Says, Thinks, Does, Feels",
      "Inputs, outputs, processes, storage",
      "Goals, sub-goals, errors, feedback",
    ],
    answer: "Says, Thinks, Does, Feels",
  },
  {
    q: "A common challenge in user perspectives is:",
    options: [
      "Too many designers",
      "Conflicting needs among different user groups",
      "Unlimited research time",
      "Lack of design tools",
    ],
    answer: "Conflicting needs among different user groups",
  },
  {
    q: "Affinity mapping is mainly used to:",
    options: [
      "Assign tasks to team members",
      "Organize qualitative data into themes",
      "Remove unnecessary system features",
      "Design UI wireframes",
    ],
    answer: "Organize qualitative data into themes",
  },
  {
    q: "A POV (Point of View) statement includes:",
    options: [
      "System hardware requirements",
      "User, need, and insight",
      "UI color preferences",
      "Coding-level issues",
    ],
    answer: "User, need, and insight",
  },
  {
    q: "Data clustering helps in:",
    options: [
      "Grouping users based on similar behaviors",
      "Randomly distributing users",
      "Increasing device performance",
      "Removing prototypes",
    ],
    answer: "Grouping users based on similar behaviors",
  },
];
// ================= BLOCKCHAIN - WEEK 5 =================

blockchain[5] = [
  {
    q: "Which of the following factors generally limit the scalability of permissionless blockchain consensus mechanisms?",
    options: [
      "Requirement for a global agreement among nodes",
      "Centralized validator selection",
      "High communication and computation overhead",
      "Absence of cryptographic security",
    ],
    answer: [0, 2], // ✅ MULTI
  },
  {
    q: "Which consensus mechanism relies on trusted hardware environments to ensure fairness in block proposer selection?",
    options: [
      "Proof of Stake",
      "Proof of Burn",
      "Proof of Elapsed Time",
      "Practical Byzantine Fault Tolerance",
    ],
    answer: [2],
  },
  {
    q: "Which of the following properties is a key advantage of stake-based (PoS) consensus mechanisms compared to computation-based (PoW) mechanisms?",
    options: [
      "Complete elimination of forks",
      "Reduced energy consumption",
      "Guaranteed transaction finality",
      "Removal of the need for digital signatures",
    ],
    answer: [1],
  },
  {
    q: "In a PoW-based blockchain system like Bitcoin, when two valid blocks are mined at the same time, which rule does the network primarily use to resolve the fork and identify the authoritative chain?",
    options: [
      "Number of transactions in each block",
      "Total accumulated computational work (heaviest chain)",
      "Size of the blockchain ledger",
      "Time since genesis block creation",
    ],
    answer: [1],
  },
  {
    q: "Which component of the Ethereum architecture ensures deterministic execution of smart contracts across all nodes?",
    options: [
      "Ethereum Client",
      "Ethereum Virtual Machine",
      "Ethereum Wallet",
      "Ethereum Miner",
    ],
    answer: [1],
  },
  {
    q: "Which of the following operations on Ethereum requires gas payment and inclusion in a block?",
    options: [
      "Querying an account balance",
      "Reading a public contract variable",
      "Executing a state-modifying function",
      "Simulating contract execution locally",
    ],
    answer: [2],
  },
  {
    q: "Which Ethereum transaction parameter ensures transaction ordering and prevents replay attacks for a given account?",
    options: ["Gas", "Value", "Nonce", "Data"],
    answer: [2],
  },
  {
    q: "Which JSON-RPC method is used to retrieve the Ether balance of an Ethereum account?",
    options: [
      "eth_call",
      "eth_getBalance",
      "eth_getTransactionByHash",
      "eth_sendTransaction",
    ],
    answer: [1],
  },
  {
    q: "Which consensus mechanism requires participants to irreversibly destroy cryptocurrency to demonstrate long-term commitment to the network?",
    options: [
      "Proof of Work (PoW)",
      "Proof of Burn (PoB)",
      "Proof of Stake (PoS)",
      "Proof of Elapsed Time (PoET)",
    ],
    answer: [1],
  },
  {
    q: "Which of the following Ethereum unit relationships is CORRECT?",
    options: [
      "1 Ether = 10⁹ Wei",
      "1 Gwei = 10⁹ Wei",
      "1 Ether = 10⁶ Gwei",
      "1 Wei = 10⁻⁹ Ether",
    ],
    answer: [1],
  },
];

// ================= HCI - WEEK 5 =================

hci[5] = [
  {
    q: "Which of the following best describes a conceptual model?",
    options: [
      "A detailed UI layout",
      "A mental representation of how a system works",
      "A list of system requirements",
      "A coding guideline document",
    ],
    answer: "A mental representation of how a system works",
  },
  {
    q: "What is an example of an assumption in interface design?",
    options: [
      "Testing a prototype with users",
      "Taking something for granted without evidence",
      "Mapping user journeys",
      "Writing code before wireframes",
    ],
    answer: "Taking something for granted without evidence",
  },
  {
    q: "Which component is commonly used in online shopping conceptual models?",
    options: [
      "Homepage wallpaper",
      "Shopping cart",
      "Video playback controls",
      "Battery indicator",
    ],
    answer: "Shopping cart",
  },
  {
    q: "Interface metaphors help users by:",
    options: [
      "Making systems slower",
      "Increasing hardware complexity",
      "Leveraging familiarity for learning new systems",
      "Removing the need for feedback",
    ],
    answer: "Leveraging familiarity for learning new systems",
  },
  {
    q: "Which cognitive principle states that decision time increases with more choices?",
    options: [
      "Miller's Law",
      "Fitts's Law",
      "Hick's Law",
      "Gestalt Law of Proximity",
    ],
    answer: "Hick's Law",
  },
  {
    q: "What is the purpose of a system image?",
    options: [
      "To describe internal code structure",
      "To show how the system actually works through the interface",
      "To explain marketing strategy",
      "To define business revenue",
    ],
    answer: "To show how the system actually works through the interface",
  },
  {
    q: "Which of the following is a drawback of interface metaphors?",
    options: [
      "They always reduce cognitive load",
      "They break all cultural norms",
      "They may limit designers' creativity",
      "They remove the need for conceptual models",
    ],
    answer: "They may limit designers' creativity",
  },
  {
    q: "Cognitive load increases when:",
    options: [
      "Interfaces use familiar patterns",
      "Users see excessive irrelevant information",
      "Steps are minimized",
      "Icons are consistent",
    ],
    answer: "Users see excessive irrelevant information",
  },
  {
    q: "Which cognitive aspect focuses on how users perceive visual elements?",
    options: [
      "Decision-making",
      "Perception",
      "Problem-solving",
      "Reflective cognition",
    ],
    answer: "Perception",
  },
  {
    q: "Which emerging trend in interfaces directly uses the human brain for input?",
    options: [
      "AR overlays",
      "Voice interaction",
      "Brain–Computer Interfaces",
      "Card-based UI",
    ],
    answer: "Brain–Computer Interfaces",
  },
];

// ================= BLOCKCHAIN - WEEK 6 =================

blockchain[6] = [
  {
    q: "Which of the following statements correctly describe safety and liveness in consensus protocols?",
    options: [
      "Safety ensures that conflicting decisions never occur",
      "Liveness ensures that the system eventually makes progress",
      "Safety may be temporarily violated under network delays",
      "Liveness guarantees agreement under all possible network conditions",
    ],
    answer: [0, 1], // ✅ MULTI
  },
  {
    q: "Which failure model is classical Paxos designed to tolerate?",
    options: [
      "Byzantine faults",
      "Crash faults",
      "Arbitrary malicious behavior",
      "Network-level message tampering",
    ],
    answer: [1],
  },
  {
    q: "A distributed system consists of 7 nodes operating under a Byzantine Fault Tolerance (BFT) model. What is the maximum number of Byzantine faulty nodes that can be tolerated while still achieving consensus?",
    options: ["1", "2", "3", "4"],
    answer: [1],
  },
  {
    q: "Which of the following properties are typically associated with permissioned blockchain systems?",
    options: [
      "Anonymous participation",
      "Identity management through a trusted authority",
      "Restricted transaction visibility to authorized participants",
      "No requirement for consensus",
    ],
    answer: [1, 2], // ✅ MULTI
  },
  {
    q: "Why must any two majorities (quorums) in Paxos intersect in at least one common node?",
    options: [
      "To ensure faster communication between nodes",
      "To guarantee safety by preventing two different values from being chosen",
      "To reduce network latency",
      "To eliminate the need for a coordinator",
    ],
    answer: [1],
  },
  {
    q: "Which of the following characteristics distinguish Byzantine faults from crash faults?",
    options: [
      "Byzantine faults may cause a node to send conflicting information to different nodes",
      "Crash faults allow a node to behave arbitrarily",
      "Byzantine faults involve arbitrary or malicious behavior",
      "Crash faults require digital signatures to detect",
    ],
    answer: [0, 2], // ✅ MULTI
  },
  {
    q: "If fewer than a majority of acceptors respond during a Paxos round, which property of the protocol is affected?",
    options: [
      "Safety",
      "Liveness",
      "Agreement validity",
      "Deterministic execution",
    ],
    answer: [1],
  },
  {
    q: "In a Byzantine Fault Tolerant system, why is the requirement n≥3f+1 necessary to tolerate f Byzantine faults?",
    options: [
      "To ensure faulty nodes can be isolated from the network",
      "To guarantee that the number of honest nodes exceeds faulty nodes by exactly one",
      "To ensure that any two decision quorums intersect in at least one honest node",
      "To eliminate the need for cryptographic authentication",
    ],
    answer: [2],
  },
  {
    q: "What inefficiency in classic Paxos does Multi-Paxos primarily address?",
    options: [
      "Inability to tolerate crash faults",
      "Repeated execution of the prepare phase for each proposed value",
      "Lack of quorum intersection",
      "Absence of agreement guarantees",
    ],
    answer: [1],
  },
  {
    q: "Which of the following statements about roles in Paxos are correct?",
    options: [
      "A single physical node can simultaneously perform the roles of Proposer, Acceptor, and Learner.",
      "Roles are permanently fixed once assigned",
      "Roles are dynamic and are not permanently tied to specific nodes.",
      "Only one Acceptor is required to reach a consensus in a network of five nodes.",
    ],
    answer: [0, 2], // ✅ MULTI
  },
];

// ================= HCI - WEEK 6 =================

hci[6] = [
  {
    q: "What is the primary purpose of identifying data requirements in HCI?",
    options: [
      "To create marketing campaigns",
      "To determine what information is needed to inform design decisions",
      "To reduce memory usage in applications",
      "To choose programming languages",
    ],
    answer:
      "To determine what information is needed to inform design decisions",
  },
  {
    q: "Which type of data includes demographics and user preferences?",
    options: ["System data", "User data", "Context data", "Task data"],
    answer: "User data",
  },
  {
    q: "Which of the following is a qualitative data-gathering technique?",
    options: [
      "Analytics logs",
      "Surveys with multiple-choice questions",
      "User interviews",
      "System performance metrics",
    ],
    answer: "User interviews",
  },
  {
    q: "Crowdsourcing in HCI is mainly beneficial because:",
    options: [
      "It reduces the need for user testing",
      "It gathers data from diverse and large populations",
      "It guarantees unbiased data automatically",
      "It eliminates qualitative research",
    ],
    answer: "It gathers data from diverse and large populations",
  },
  {
    q: "Fairness in data collection ensures that:",
    options: [
      "All users are treated equitably in data and algorithms",
      "The system runs faster",
      "Participants cannot withdraw",
      "Only expert users are included",
    ],
    answer: "All users are treated equitably in data and algorithms",
  },
  {
    q: "Field studies involve:",
    options: [
      "Observing users in controlled lab settings",
      "Recording system logs only",
      "Observing users in their natural environment",
      "Removing outliers from datasets",
    ],
    answer: "Observing users in their natural environment",
  },
  {
    q: "Which tool is commonly used for real-time data handling?",
    options: ["Tableau", "Firebase", "NVivo", "SPSS"],
    answer: "Firebase",
  },
  {
    q: "Which of the following is a key issue in data ethics?",
    options: [
      "Increasing app performance",
      "User interface color selection",
      "Transparency in how data is collected and used",
      "Adding more user features",
    ],
    answer: "Transparency in how data is collected and used",
  },
  {
    q: "Inter-Annotator Agreement (IAA) is used to:",
    options: [
      "Visualize data using graphs",
      "Measure consistency among multiple annotators",
      "Improve system performance",
      "Replace manual labeling",
    ],
    answer: "Measure consistency among multiple annotators",
  },
  {
    q: "Which statistical method is used to find relationships between variables?",
    options: [
      "Affinity mapping",
      "Regression analysis",
      "Unstructured interviewing",
      "Card sorting",
    ],
    answer: "Regression analysis",
  },
];

// ================= BLOCKCHAIN - WEEK 7 =================

blockchain[7] = [
  {
    q: "Which of the following properties make PBFT suitable for enterprise blockchain environments?",
    options: [
      "Deterministic transaction finality",
      "Anonymous validator participation",
      "Tolerance to Byzantine faults",
      "Dependence on computational mining",
    ],
    answer: [0, 2], // ✅ MULTI
  },
  {
    q: "In Hyperledger Fabric, what is the primary role of the Membership Service Provider (MSP)?",
    options: [
      "Mining new blocks",
      "Defining the rules for identity validation and managing the roles of participants.",
      "Executing smart contracts",
      "Ordering transactions",
    ],
    answer: [1],
  },
  {
    q: "Which of the following conditions must hold in a Byzantine quorum system to ensure safety?",
    options: [
      "Any two quorums must intersect in at least one correct (honest) replica",
      "Quorums may be completely disjoint to increase throughput",
      "Quorum size must equal exactly half of the network",
      "Faulty replicas must be able to form a standalone quorum.",
    ],
    answer: [0],
  },
  {
    q: "Which of the following are advantages of blockchain in supply-chain systems?",
    options: [
      "Tamper-evident audit trail",
      "Automatic deletion of transaction history",
      "Improved transparency among participants",
      "Removal of all governance requirements",
    ],
    answer: [0, 2], // ✅ MULTI
  },
  {
    q: "What mechanism ensures progress in PBFT when the primary replica becomes faulty?",
    options: [
      "Increasing block size",
      "Timeout-based view change protocol",
      "Switching to PoW",
      "Re-broadcasting old transactions",
    ],
    answer: [1],
  },
  {
    q: "Which of the following statements correctly describe permissioned blockchain systems?",
    options: [
      "Participants are authenticated before joining",
      "All nodes remain anonymous",
      "Access to transaction data may be restricted",
      "Consensus mechanisms are unnecessary",
    ],
    answer: [0, 2], // ✅ MULTI
  },
  {
    q: "In Hyperledger Fabric, what is the purpose of channels?",
    options: [
      "To increase mining difficulty",
      "To create logically separate ledgers among subsets of participants",
      "To replace consensus mechanisms",
      "To store private cryptographic keys",
    ],
    answer: [1],
  },
  {
    q: "In a Byzantine Fault Tolerant (BFT) system with f malicious nodes, why is the total number of replicas n≥3f+1 required?",
    options: [
      "To ensure that any two quorums of size 2f+1 share at least one honest replica.",
      "To eliminate digital signatures and hashing.",
      "To ensure the system can function with 2f+1 faulty nodes.",
      "To minimize the number of communication rounds to O(1)",
    ],
    answer: [0],
  },
  {
    q: "Which of the following properties characterize committee-based consensus protocols such as Algorand?",
    options: [
      "Committee membership is rotated and unique for every round",
      "Selection is based on cryptographic randomness (VRF)",
      "Membership is publicly predictable long in advance",
      "The entire network validates every block to ensure maximum security.",
    ],
    answer: [0, 1], // ✅ MULTI
  },
  {
    q: "Which of the following are key architectural features of Hyperledger Fabric?",
    options: [
      "Modular design with pluggable components",
      "Mandatory native cryptocurrency",
      "Separation of transaction endorsement and ordering",
      "Public anonymous participation",
    ],
    answer: [0, 2], // ✅ MULTI
  },
];

// ================= HCI - WEEK 7 =================

hci[7] = [
  {
    q: "What is a prototype in interaction design?",
    options: [
      "A finalized product",
      "A manifestation of a design that stakeholders can interact with",
      "Only a software demo",
      "A marketing document",
    ],
    answer: "A manifestation of a design that stakeholders can interact with",
  },
  {
    q: "Which of the following is an example of Lo-Fi prototyping?",
    options: [
      "Pixel-perfect UI",
      "Paper sketches",
      "Fully interactive app",
      "High-resolution mockup",
    ],
    answer: "Paper sketches",
  },
  {
    q: "Storyboards in prototyping help designers by:",
    options: [
      "Writing code automatically",
      "Breaking user tasks into scenes to visualize interaction",
      "Generating analytics",
      "Creating animations for UI",
    ],
    answer: "Breaking user tasks into scenes to visualize interaction",
  },
  {
    q: "Which prototyping type provides broad coverage with low detail?",
    options: ["Vertical", "Horizontal", "Hi-Fi", "Wizard-of-Oz"],
    answer: "Horizontal",
  },
  {
    q: "Mid-Fidelity prototypes typically include:",
    options: [
      "Stick figures only",
      "Grayscale wireframes with limited interactions",
      "Pixel-perfect color UI",
      "Final design animations",
    ],
    answer: "Grayscale wireframes with limited interactions",
  },
  {
    q: "Smart UI refers to interfaces that:",
    options: [
      "Are built only with code",
      "Use AI to adapt to user behavior and context",
      "Do not require user data",
      "Never personalize content",
    ],
    answer: "Use AI to adapt to user behavior and context",
  },
  {
    q: "Which is an advantage of Smart UI?",
    options: [
      "Random interface behavior",
      "Personalized and adaptive user experience",
      "Increased manual effort for users",
      "No support for accessibility",
    ],
    answer: "Personalized and adaptive user experience",
  },
  {
    q: "Wizard-of-Oz prototyping involves:",
    options: [
      "A human simulating system responses behind the scenes",
      "Full autonomous system",
      "Physical hardware testing",
      "Running A/B experiments",
    ],
    answer: "A human simulating system responses behind the scenes",
  },
  {
    q: "Vertical prototyping focuses on:",
    options: [
      "A wide range of features with little detail",
      "A detailed exploration of a single feature",
      "Creating only animations",
      "Testing final UI only",
    ],
    answer: "A detailed exploration of a single feature",
  },
  {
    q: "Which tool is commonly used for mid or high-fidelity UI prototypes?",
    options: ["Sticky notes", "Figma", "Lego blocks", "Scenarios only"],
    answer: "Figma",
  },
];

// ================= BLOCKCHAIN - WEEK 8 =================

blockchain[8] = [
  {
    q: "Which of the following statements is/are FALSE regarding the PBFT and PoW consensus mechanisms?",
    options: [
      "PBFT is generally used in permissioned blockchain environments with known validators.",
      "PoW is suited for open public networks where participants may be anonymous.",
      "PBFT is effective for large, highly decentralized public networks with thousands of nodes.",
      "PoW requires significant computational effort to validate new blocks",
    ],
    answer: [2],
  },
  {
    q: "Which mechanism ensures deterministic finality in PBFT-based systems?",
    options: [
      "Longest-chain selection",
      "Computational difficulty",
      "Quorum-based agreement with overlapping honest replicas",
      "Randomized leader selection",
    ],
    answer: [2],
  },
  {
    q: "In Bitcoin-NG, what is the primary effect of separating leader election from transaction serialization?",
    options: [
      "Eliminates Proof-of-Work",
      "Allows higher transaction throughput",
      "Makes block intervals deterministic",
      "Removes fork possibility",
    ],
    answer: [1],
  },
  {
    q: "Which of the following statements is TRUE regarding block propagation in Bitcoin-NG?",
    options: [
      "Micro-blocks are used to carry transactions and are produced frequently between key-blocks.",
      "Key-blocks are produced frequently, while micro-blocks are infrequent.",
      "Both key-blocks and micro-blocks are produced at the same rate.",
      "Micro-blocks determine the leader, while key-blocks only store transactions.",
    ],
    answer: [0],
  },
  {
    q: "What scalability limitation of classical PBFT does CoSi attempt to improve?",
    options: [
      "Energy consumption",
      "Quadratic communication overhead",
      "Block size restrictions",
      "Lack of cryptographic signatures",
    ],
    answer: [1],
  },
  {
    q: "Which of the following statements is TRUE regarding block (or commitment) propagation in Byzcoin?",
    options: [
      "Byzcoin uses collective signing (CoSi) to allow blocks to be committed quickly once validators reach agreement.",
      "Byzcoin relies on a single leader to sign each block, similar to classical PoW mining.",
      "In Byzcoin, blocks are only propagated after several minutes to reduce network traffic.",
      "Byzcoin avoids using keyblocks entirely and relies only on microblocks for consensus.",
    ],
    answer: [0],
  },
  {
    q: "In Byzcoin, what is the main benefit of using collective signing for block commitment?",
    options: [
      "Eliminates the need for leader election",
      "Reduces signature verification overhead",
      "Guarantees probabilistic finality",
      "Removes quorum requirements",
    ],
    answer: [1],
  },
  {
    q: "Which trade-off best characterizes BFT-based consensus compared to Proof-of-Work?",
    options: [
      "Higher node scalability but lower throughput",
      "No need for identity management",
      "Lower communication cost but higher energy consumption",
      "Deterministic finality but limited scalability to very large networks",
    ],
    answer: [3],
  },
  {
    q: "In Hyperledger Fabric, why is transaction endorsement performed before ordering?",
    options: [
      "To determine mining difficulty",
      "To execute business logic and verify endorsement policy compliance",
      "To reduce block interval",
      "To eliminate validation",
    ],
    answer: [1],
  },
  {
    q: "What happens during the validation phase of a Fabric transaction?",
    options: [
      "Mining competition selects the block",
      "The world state is updated without verification",
      "Endorsement policies and read-write set consistency are verified before updating world state",
      "Proof-of-Work puzzles are solved",
    ],
    answer: [2],
  },
];
// ================= HCI - WEEK 8 =================

hci[8] = [
  {
    q: "What is the main purpose of evaluation in HCI?",
    options: [
      "To increase hardware performance",
      "To assess usability, effectiveness, and user experience",
      "To test marketing strategies",
      "To reduce development cost",
    ],
    answer: "To assess usability, effectiveness, and user experience",
  },
  {
    q: "Which type of evaluation occurs during the design process to refine the product?",
    options: ["Summative", "Diagnostic", "Formative", "Longitudinal"],
    answer: "Formative",
  },
  {
    q: "Usability testing primarily involves:",
    options: [
      "Experts reviewing code",
      "Observing real users performing tasks",
      "Only collecting analytics",
      "Replacing prototypes with final UI",
    ],
    answer: "Observing real users performing tasks",
  },
  {
    q: "Which evaluation method requires evaluators to simulate user behavior step-by-step?",
    options: [
      "Heuristic Evaluation",
      "Cognitive Walkthrough",
      "A/B Testing",
      "Eye Tracking",
    ],
    answer: "Cognitive Walkthrough",
  },
  {
    q: "In experiment design, which approach assigns different groups to different conditions?",
    options: [
      "Within-subjects",
      "Mixed methods",
      "Between-subjects",
      "Triangulated testing",
    ],
    answer: "Between-subjects",
  },
  {
    q: "Which metric measures how fast users complete a task?",
    options: [
      "Error severity",
      "Task success rate",
      "Time on task",
      "Net Promoter Score",
    ],
    answer: "Time on task",
  },
  {
    q: "Eye tracking helps evaluators understand:",
    options: [
      "System load time",
      "Where users focus attention on the interface",
      "User emotions only",
      "The number of app downloads",
    ],
    answer: "Where users focus attention on the interface",
  },
  {
    q: "Which principle ensures that participants voluntarily agree to evaluation?",
    options: [
      "Counterbalancing",
      "Informed consent",
      "Aesthetic consistency",
      "Reliability",
    ],
    answer: "Informed consent",
  },
  {
    q: "Which evaluation method is cost-effective and identifies issues early using established principles?",
    options: [
      "A/B Testing",
      "Heuristic Evaluation",
      "Biometric Metrics",
      "Field Studies",
    ],
    answer: "Heuristic Evaluation",
  },
  {
    q: "Which predictive model estimates pointing time based on movement distance and target size?",
    options: [
      "Hick's Law",
      "Mental Model",
      "Cognitive Load Theory",
      "Fitts's Law",
    ],
    answer: "Fitts's Law",
  },
];

// ================= BLOCKCHAIN - WEEK 9 =================

blockchain[9] = [
  {
    q: "What specific limitation of Bitcoin-NG does ByzCoin attempt to solve?",
    options: [
      "The requirement for all miners to share their private keys with the entire network",
      "The introduction of faulty or malicious microblocks that are only discovered at the end of a round",
      "The inability to elect a leader using proof of work",
      "The lack of support for any form of cryptographic signatures on transactions",
    ],
    answer: [1],
  },
  {
    q: "The 'Blockchain Performance Triangle' illustrates the trade-offs between which three properties?",
    options: [
      "Throughput, Latency, and Scalability",
      "Scalability, Security, and Decentralization",
      "Consistency, Availability, and Tolerance",
      "Proof of Work, PBFT, and Collective Signing.",
    ],
    answer: [1],
  },
  {
    q: "ByzCoin improves upon traditional Practical Byzantine Fault Tolerance (PBFT) by integrating it with Proof of Work (PoW) and Collective Signing (CoSi). Which of the following statements correctly describe the technical improvements in ByzCoin for a network of n nodes?",
    options: [
      "ByzCoin reduces communication complexity from O(n²) to O(n) by using a tree-based multicast protocol.",
      "ByzCoin reduces consensus latency from O(n²) to O(log n) by using a tree-based communication structure.",
      "ByzCoin reduces verification complexity for third-party observers from O(n) to O(1) by using Schnorr multi-signatures.",
      "ByzCoin eliminates the need for a leader node, reducing the communication complexity to O(1).",
    ],
    answer: [1, 2], // ✅ MULTI
  },
  {
    q: "To select a random committee without centralized coordination, Algorand uses Cryptographic Sortition via a Verifiable Random Function (VRF). When a user runs the VRF, it outputs a hash, a proof, and an integer j. If the algorithm returns j=0 for a user, what does this mathematically signify?",
    options: [
      "The user is selected as the sole block proposer for the current round.",
      "The user is a part of the committee, but with a voting weight of 0.",
      "The user is not a part of the consensus committee for that round.",
      "The VRF failed, and the user must re-run the algorithm using the seed from round r−1.",
    ],
    answer: [2],
  },
  {
    q: "Under Algorand's synchrony assumptions, what characterizes weak synchrony?",
    options: [
      "There is no communication between nodes",
      "Messages are guaranteed to be received within a known time bound by almost all honest users.",
      "The network can be controlled by an adversary for a bounded period of time.",
      "The protocol only works if the majority of the money is held by one central bank.",
    ],
    answer: [2],
  },
  {
    q: "Which of the following is NOT true about Single Sign-on?",
    options: [
      "A single user can access multiple services.",
      "A single identity provider typically maintains the identity of an individual",
      "During authentication, the identity is not exposed to all the services",
      "Identity holders use the Identity Provider to authenticate other identity holders",
    ],
    answer: [3],
  },
  {
    q: "Decentralized Identifiers (DIDs) are a W3C recommendation to implement self-sovereign identity. Which of the following accurately describes the technical components and structure of DIDs?",
    options: [
      "A DID URI typically follows the syntax: did:<method-name>:<method-specific-identifier>.",
      "The DID document must contain only JSON-encoded data to ensure compatibility with all blockchain-verified registries.",
      "The DID document includes cryptographic public keys and authentication methods so the verifier can verify that the subject controls the DID.",
      'A DID document specifies a "service endpoint," which tells the verifier how to communicate with the DID subject for the next level of service.',
    ],
    answer: [0, 2, 3], // ✅ MULTI
  },
  {
    q: "In the Verifiable Credentials (VC) data model, which entity is responsible for asserting claims about a subject and cryptographically signing them?",
    options: [
      "The Holder",
      "The Verifier",
      "The Issuer",
      "The Blockchain miner.",
    ],
    answer: [2],
  },
  {
    q: "If Algorand's BA* protocol fails to reach a final consensus in a single round, how does it resolve the situation mathematically and architecturally?",
    options: [
      "It runs the BA* protocol repeatedly, then a timeout occurs, and the protocol moves to the next round with a newly selected random committee.",
      "Mathematically, exactly 10 executions of BA* are required to force a final consensus under weak synchrony.",
      "Algorand mathematically demonstrates that running BA* 2 to 3 times is typically sufficient to reach final consensus, even if up to 49% of participants are malicious.",
      "It permanently halts the blockchain to prevent a fork, requiring off-chain governance to reset the verifiable random functions.",
    ],
    answer: [0, 2], // ✅ MULTI
  },
  {
    q: "In the structure of a Decentralized Identifier (DID) URI such as did:example:123, what does 'example' represent?",
    options: [
      "The DID method",
      "The DID subject identifier",
      "The DID document",
      "The DID scheme",
    ],
    answer: [0],
  },
];

// ================= HCI - WEEK 9 =================

hci[9] = [
  {
    q: "IoT refers to:",
    options: [
      "A network of physical objects with sensors and connectivity",
      "Devices that store only offline data",
      "Tools without any automation",
      "Only entertainment systems",
    ],
    answer: "A network of physical objects with sensors and connectivity",
  },
  {
    q: "The main goal of IoT is:",
    options: [
      "To increase device size",
      'To "connect the unconnected"',
      "To remove automation from homes",
      "To limit wireless technology",
    ],
    answer: 'To "connect the unconnected"',
  },
  {
    q: "Which example shows HCI + IoT interaction?",
    options: [
      "A robotic arm running without feedback",
      "Users controlling smart bulbs via a mobile app",
      "Devices interacting only through printed manuals",
      "A non-digital clock",
    ],
    answer: "Users controlling smart bulbs via a mobile app",
  },
  {
    q: "Which interaction modalities are common in IoT?",
    options: [
      "Voice, gesture, and touch",
      "Only handwritten input",
      "Only QR-code scanning",
      "Only mechanical switches",
    ],
    answer: "Voice, gesture, and touch",
  },
  {
    q: "A major HCI challenge in IoT is:",
    options: [
      "Increasing UI colors",
      "Achieving consistent interaction across many devices",
      "Ensuring devices always remain offline",
      "Removing all system notifications",
    ],
    answer: "Achieving consistent interaction across many devices",
  },
  {
    q: "Why is HCI crucial in IoT systems?",
    options: [
      "It hides system feedback",
      "It ensures usability and intuitive interaction across devices",
      "It prevents real-time interaction",
      "It forces users to follow only one workflow",
    ],
    answer: "It ensures usability and intuitive interaction across devices",
  },
  {
    q: "HaptiDrag creates friction using:",
    options: [
      "Heated plates",
      "Ultrasonic vibrations",
      "Electroadhesion technology",
      "Physical wheels",
    ],
    answer: "Electroadhesion technology",
  },
  {
    q: "HaptiDrag enhances VR by:",
    options: [
      "Giving realistic tactile feedback with variable friction",
      "Removing haptic sensations",
      "Reducing VR stability",
      "Removing all gestures",
    ],
    answer: "Giving realistic tactile feedback with variable friction",
  },
  {
    q: "MobiTangibles supports VR tool training by:",
    options: [
      "Tracking small tool movements using smartphone magnetometers",
      "Using heat sensors only",
      "Removing all sensors",
      "Replacing tools with QR codes",
    ],
    answer: "Tracking small tool movements using smartphone magnetometers",
  },
  {
    q: "A limitation of MobiTangibles is:",
    options: [
      "It cannot function on wooden surfaces",
      "It may damage magnetic-sensitive objects like credit cards",
      "It needs no smartphone",
      "It cannot detect small magnets at close range",
    ],
    answer: "It may damage magnetic-sensitive objects like credit cards",
  },
];

// ================= BLOCKCHAIN - WEEK 10 =================

blockchain[10] = [
  {
    q: "Which of the following denote properties of Hashed Timelock Contracts (HTLC)?",
    options: [
      "If the secret is not revealed, the funds are permanently locked and cannot be recovered.",
      "If the secret is not revealed, all contracts using that secret are automatically executed.",
      "HTLCs restrict the spending of funds until a valid secret (preimage) is revealed or a predefined timeout occurs.",
      "If the secret is not revealed, the funds are automatically transferred to the recipient after the timeout.",
    ],
    answer: [2],
  },
  {
    q: 'If a participant in an atomic cross-chain swap halts during the "triggering phase" (after the hashlock secret has been revealed), what is the resulting state for a conforming counterparty?',
    options: [
      'The counterparty is "worse off" because they have lost their asset.',
      "The protocol guarantees that the conforming party either receives their intended asset or retains their original asset.",
      "All assets on all involved blockchains are permanently frozen.",
      "The counterparty must wait for a consensus-level view change to reclaim their funds.",
    ],
    answer: [1],
  },
  {
    q: "Which of the following are inherent risks or disadvantages associated with using a Centralized Trusted Third Party (TTP) for cross-chain asset transfers?",
    options: [
      "Users must relinquish control of their funds to the third party.",
      "The third party represents a single point of failure.",
      "Cross-chain transfers cannot be performed using a third party.",
      "Users may lose funds if the third party is compromised or shuts down.",
    ],
    answer: [0, 1, 3], // ✅ MULTI
  },
  {
    q: 'Why is "Consensus-driven" data transfer emphasized for permissioned blockchains?',
    options: [
      "To ensure that only the administrator of the network can authorize a transfer.",
      "To guarantee that the data being moved is not a temporary or unconfirmed state of the source ledger.",
      "Because permissioned blockchains do not support hashlocks.",
      "To allow the destination network to participate in the mining process of the source network.",
    ],
    answer: [1],
  },
  {
    q: "In the three-party atomic swap scenario (Alice, Bob, Carol) involving an alt-coin, Bitcoin, and a car title, why is the sequence of timelocks (6Δ, 5Δ, 4Δ) critical?",
    options: [
      "To ensure the car title is transferred before Alice spends her alt-coins.",
      "To prevent the Bitcoin network from crashing due to high transaction volume.",
      "To allow Carol to claim her Bitcoin and Bob to claim his alt-coins before their respective contracts expire, even if the secret s is revealed late in the chain.",
      "To ensure that Alice, as the generator of the secret, has the least amount of time to act.",
    ],
    answer: [2],
  },
  {
    q: "According to the permissioned blockchain interoperability (e.g., between TradeLens and We.Trade), what must be included with the data moving from the source network to the destination?",
    options: [
      "A set of endorsements or signatures representing the consensus view of the source network.",
      "A proof that the data has been encrypted using the destination network's private key.",
      'Verification that the data sharing complies with the source network\'s "Exposure Control" policy.',
      "A physical bill of lading scanned into a PDF format.",
    ],
    answer: [0, 2], // ✅ MULTI
  },
  {
    q: "During the Hyperledger Indy identity configuration, which statements correctly describe the roles of Stewards and Trust Anchors?",
    options: [
      "Stewards have the permission to register new DIDs (verinyms) on the ledger.",
      "Trust Anchors are responsible for maintaining the RBFT consensus nodes.",
      "Trust Anchors, such as a University, have the authority to issue verifiable credentials to users.",
      "Stewards are pre-approved participants who can approve the transition of a user to a Trust Anchor role.",
    ],
    answer: [0, 2, 3], // ✅ MULTI
  },
  {
    q: 'In the permissioned interoperability relay architecture, what does the "Data Acceptance Policy" in the destination network (Network A) evaluate?',
    options: [
      "The current exchange rate of the assets being transferred.",
      "Whether the received data has a sufficient number of valid attestations/signatures from the source network.",
      "The identity of the individual programmer who wrote the source chaincode.",
      "If the source network (Network B) has a higher market cap than Network A.",
    ],
    answer: [1],
  },
  {
    q: 'Why does Hyperledger Indy use a "Genesis Transaction" file (pool_transactions_genesis) during the application setup?',
    options: [
      "It contains the history of every identity ever created since the start of the web.",
      "It is a legal document that Alice must sign before using the system.",
      "It reboots the nodes every time a new transaction is made.",
      "It provides the initial IP addresses, ports, and keys of the nodes in the Indy pool so the SDK can connect to the network.",
    ],
    answer: [3],
  },
  {
    q: "In the Indy tutorial, the University sets support_revocation: False when creating a Credential Definition.",
    options: [
      "The University can never issue more than one credential.",
      "Once issued, the University cannot use an Indy Revocation List to invalidate that specific transcript in the future.",
      "Alice is forbidden from showing her transcript to any company.",
      "The credential will automatically delete itself from Alice's wallet after 24 hours.",
    ],
    answer: [1],
  },
];

// ================= HCI - WEEK 10 =================

hci[10] = [
  {
    q: "LLMs are primarily designed to:",
    options: [
      "Predict and generate language using large-scale training data",
      "Render 3D animations",
      "Compress multimedia files",
      "Control robotic hardware",
    ],
    answer: "Predict and generate language using large-scale training data",
  },
  {
    q: "Which of the following is an example of a multimodal input for an AI system?",
    options: [
      "Only typed text",
      "Text, image, or audio combined",
      "A Wi-Fi password",
      "A device serial number",
    ],
    answer: "Text, image, or audio combined",
  },
  {
    q: "What is the function of prompting in LLM interactions?",
    options: [
      "Debugging internal model weights",
      "Giving the model instructions or context to perform a task",
      "Measuring CPU temperature",
      "Optimizing internet bandwidth",
    ],
    answer: "Giving the model instructions or context to perform a task",
  },
  {
    q: "Which is a key challenge in AI-based personalization?",
    options: [
      "Limited screen brightness",
      "Privacy concerns around user data",
      "High-fidelity UI design",
      "Lack of color contrast in icons",
    ],
    answer: "Privacy concerns around user data",
  },
  {
    q: 'In behavior modeling, "Effect" refers to:',
    options: [
      "The color of the UI",
      "The user's actual response or action",
      "The predicted CPU usage",
      "The system's refresh rate",
    ],
    answer: "The user's actual response or action",
  },
  {
    q: "Zero-shot prompting allows the model to:",
    options: [
      "Produce outputs without being given examples",
      "Run without electricity",
      "Access private user data",
      "Train without GPUs",
    ],
    answer: "Produce outputs without being given examples",
  },
  {
    q: "Which of these is a benefit of AI for accessibility?",
    options: [
      "Faster firmware updates",
      "Real-time speech-to-text for deaf users",
      "Higher download speeds",
      "Larger app icons",
    ],
    answer: "Real-time speech-to-text for deaf users",
  },
  {
    q: "Behavior-optimized content refers to:",
    options: [
      "Messages crafted to trigger specific user reactions",
      "Code that compiles automatically",
      "Images compressed for mobile phones",
      "Deleted browsing history",
    ],
    answer: "Messages crafted to trigger specific user reactions",
  },
  {
    q: "Ethical concerns with LLMs include:",
    options: [
      "Keyboard layouts",
      "Bias, manipulation risk, and misinformation",
      "Slow Wi-Fi speed",
      "File naming conventions",
    ],
    answer: "Bias, manipulation risk, and misinformation",
  },
  {
    q: "An MLLM (Multimodal Large Language Model) improves HCI by:",
    options: [
      "Understanding and generating across multiple input/output formats",
      "Replacing all user research",
      "Removing the need for interfaces",
      "Turning apps into offline-only tools",
    ],
    answer: "Understanding and generating across multiple input/output formats",
  },
];

// ================= BLOCKCHAIN - WEEK 11 =================

blockchain[11] = [
  {
    q: "What specific gap does Hyperledger Aries fill when used alongside Hyperledger Indy?",
    options: [
      "It provides the consensus algorithm necessary for Indy to mine blocks.",
      "It introduces a new native cryptocurrency to incentivize Indy node operators.",
      "It gives the infrastructure for blockchain-routed peer-to-peer interactions and the secure transport of digital credentials between participants.",
      "It replaces Indy's distributed ledger entirely by acting as a faster, centralized database.",
    ],
    answer: [2],
  },
  {
    q: "According to the architecture of the Aries Cloud Agent Python (ACA-Py) discussed in the lecture, which of the following are primary modules/components?",
    options: [
      "Core Capabilities",
      "REST API Module",
      "Proof of Work Consensus Engine",
      "Aries Protocols (DIDcomm)",
    ],
    answer: [0, 1, 3], // ✅ MULTI
  },
  {
    q: "In the context of selfish mining, suppose an attacker's mining pool privately mines two consecutive blocks while the honest network mines one competing block. The attacker then releases its private chain, and both attacker blocks are successfully accepted into the main chain (i.e., no fork race or block loss occurs). If the block reward is 6.25 bitcoins per block, how much total reward does the attacker's pool earn?",
    options: [
      "6.25 bitcoins",
      "12.5 bitcoins",
      "18.75 bitcoins",
      "8.25 bitcoins",
    ],
    answer: [1],
  },
  {
    q: "In the context of transaction privacy leakage, what mechanism is mentioned in the lecture as a way to use decoys to obscure the trace of cryptocurrency transactions?",
    options: [
      "Genesis Blocks",
      "Chaff coins (Mixins)",
      "51% Padding",
      "Webhooks",
    ],
    answer: [1],
  },
  {
    q: "In an eclipse attack scenario discussed in lecture 54, suppose an attacker controls 40% of the network's hashing power, while a victim node has 30% and the rest of the network holds the remaining 30%. If the attacker successfully isolates (eclipses) the victim from the rest of the network, which of the following statements correctly describe what happens?",
    options: [
      "The attacker now effectively controls 70% of the hashing power on the main chain.",
      "The honest nodes (victim + rest of the network) can no longer combine their 60% hashing power.",
      "The attacker directly competes with the victim with a 40% vs 30% advantage.",
      "The attacker directly competes with the rest of the network with a 40% vs 30% advantage.",
    ],
    answer: [1, 2, 3], // ✅ MULTI
  },
  {
    q: "In the Fomo3D smart contract game, every time someone buys a ticket, the countdown timer is extended by 30 seconds. Suppose an attacker buys a ticket when there are exactly 3 minutes left on the clock, and then launches a suppression attack by flooding the network with high gas-price transactions so that no one else's transactions get included in blocks. Assuming no honest transactions go through during this time, how many ticket purchases did the attacker effectively prevent?",
    options: ["3 purchases", "6 purchases", "10 purchases", "30 purchases"],
    answer: [1],
  },
  {
    q: 'What is the primary objective of an "Eclipse Attack" on a blockchain network?',
    options: [
      "To gain majority control (51%) of the network's hashing power by combining mining pools",
      "To isolate a target node from the rest of the network by filling its peer connections with attacker-controlled nodes",
      "To take advantage of smart contract bugs to steal funds",
      "To crack a user's private key using brute force",
    ],
    answer: [1],
  },
  {
    q: 'In an eclipse attack, an attacker can overwhelm a node by filling its "new" and "tried" peer tables with malicious IP addresses, effectively isolating it from honest peers. Based on the lecture, which of the following is a practical way developers can reduce this risk?',
    options: [
      "Force all nodes to rely on a centralized and trusted DNS server for peer discovery.",
      "Change how IP address buckets are managed so that malicious entries are gradually replaced by honest ones.",
      "Require nodes to pass a strict Proof of Stake check before joining the network.",
      "Encrypt the node's local database to hide the peer tables from attackers.",
    ],
    answer: [1],
  },
  {
    q: "In a double-spending attack where the attacker is working together with a mining pool, how is the vendor actually cheated?",
    options: [
      "The attacker sends a payment to the vendor and receives the service, but the colluding mining pool later confirms a conflicting transaction that sends the same coins back to the attacker.",
      "The attacker steals the vendor's digital signature and uses it to drain their wallet.",
      "The attacker creates a private chain of blocks that removes the vendor's node from the network.",
      'The attacker uses fake "chaff coins" to make the payment appear larger than it really is.',
    ],
    answer: [0],
  },
  {
    q: "In an Eclipse Attack, how does the attacker actually isolate a victim node from the rest of the network?",
    options: [
      "By interfering with the ISP's routing hardware",
      "By launching a DDoS attack on the victim's internet provider",
      "By hacking the victim's wallet so it ignores blocks",
      "By filling the victim's peer tables with attacker-controlled IPs",
    ],
    answer: [3],
  },
];

// ================= HCI - WEEK 11 =================

hci[11] = [
  {
    q: "Privacy in HCI refers to:",
    options: [
      "Users' ability to control their personal data",
      "Increasing app size",
      "Removing encryption from messages",
      "Designing only visual elements",
    ],
    answer: "Users' ability to control their personal data",
  },
  {
    q: "Which of the following is an example of a security feature?",
    options: [
      "Dark themes",
      "Two-factor authentication (2FA)",
      "Changing wallpapers",
      "Offline advertisements",
    ],
    answer: "Two-factor authentication (2FA)",
  },
  {
    q: "Deepfakes are created using:",
    options: [
      "Generative Adversarial Networks (GANs)",
      "Spreadsheet formulas",
      "Static HTML tags",
      "Audio compression tools",
    ],
    answer: "Generative Adversarial Networks (GANs)",
  },
  {
    q: "Which type of harm involves AI generating biased or unfair outcomes?",
    options: [
      "Bias and discrimination",
      "Increased RAM usage",
      "Reduced display brightness",
      "Slow keyboard response",
    ],
    answer: "Bias and discrimination",
  },
  {
    q: "A real-world example of privacy by design is:",
    options: [
      "WhatsApp's end-to-end encryption",
      "Phone ringtones",
      "Auto-rotate screen settings",
      "File naming conventions",
    ],
    answer: "WhatsApp's end-to-end encryption",
  },
  {
    q: "One major risk of deepfakes is:",
    options: [
      "Creating propaganda or misinformation",
      "Improving audio quality",
      "Faster battery charging",
      "Removing the need for passwords",
    ],
    answer: "Creating propaganda or misinformation",
  },
  {
    q: "Security in HCI focuses on:",
    options: [
      "Protecting user data from unauthorized access",
      "Increasing the number of UI animations",
      "Designing only for children",
      "Removing all login screens",
    ],
    answer: "Protecting user data from unauthorized access",
  },
  {
    q: "GDPR impacts HCI design by requiring:",
    options: [
      "Clear consent mechanisms and privacy transparency",
      "More emojis in interfaces",
      "Mandatory dark mode",
      "Faster loading animations",
    ],
    answer: "Clear consent mechanisms and privacy transparency",
  },
  {
    q: "Which tool supports secure authentication?",
    options: [
      "Google Authenticator",
      "Stopwatch app",
      "Video filters",
      "Calculator app",
    ],
    answer: "Google Authenticator",
  },
  {
    q: "A major challenge in privacy & security design is:",
    options: [
      "Balancing usability with strong protections",
      "Removing all security features entirely",
      "Hiding all system messages",
      "Making interfaces more confusing",
    ],
    answer: "Balancing usability with strong protections",
  },
];
