# Fora-Frontend
# Nifora-Insur Frontend

> User-facing decentralized insurance platform built with Next.js, Tailwind CSS, and Stellar wallet integrations.

## Overview

Nifora-Insur Frontend provides the user interface for purchasing insurance policies, managing active coverage, filing claims, and participating in community claim voting.

The frontend communicates with the Nifora-Insur backend services and Soroban smart contracts deployed on the Stellar network.

## Features

* Browse insurance products
* Generate insurance quotes
* Purchase policies
* View active policies
* Renew or terminate coverage
* Submit claims with evidence
* Vote on community claims
* Wallet authentication
* Real-time claim status tracking

## User Flow

### Buy a Policy

1. Connect wallet
2. Select insurance product
3. Enter risk information
4. Receive premium quote
5. Confirm payment
6. Policy becomes active

### File a Claim

1. Open active policy
2. Upload supporting evidence
3. Submit claim
4. Community voting begins
5. Claim status updates automatically

### Vote on Claims

1. View pending claims
2. Review submitted evidence
3. Vote Approve or Reject
4. Results are recorded on-chain

## Tech Stack

| Layer                      | Technology            |
| -------------------------- | --------------------- |
| Framework                  | Next.js               |
| Language                   | TypeScript            |
| Styling                    | Tailwind CSS          |
| State Management           | Zustand / React Query |
| Wallet Integration         | Stellar Wallet SDK    |
| Storage                    | IPFS                  |
| Smart Contract Interaction | Soroban SDK           |

## Project Structure

```text
src/
├── app/
├── components/
├── features/
│   ├── policies/
│   ├── claims/
│   ├── voting/
│   └── products/
├── hooks/
├── services/
├── lib/
└── types/
```

## Environment Variables

```env
NEXT_PUBLIC_RPC_URL=
NEXT_PUBLIC_NETWORK_PASSPHRASE=
NEXT_PUBLIC_POLICY_CONTRACT_ID=
NEXT_PUBLIC_PREMIUM_CONTRACT_ID=
NEXT_PUBLIC_IPFS_GATEWAY=
```

## Local Development

```bash
git clone <repo-url>

cd nifora-insur-frontend

npm install

npm run dev
```

Application runs on:

```text
http://localhost:3000
```

## Backend Integration

The frontend communicates with:

* Backend API
* Stellar RPC
* Soroban Smart Contracts
* IPFS Storage

## License

MIT License
