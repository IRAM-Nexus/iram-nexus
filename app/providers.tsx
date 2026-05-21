"use client";

import { createWeb3Modal } from "@web3modal/wagmi/react";
import {
  defaultWagmiConfig,
} from "@web3modal/wagmi/react/config";

import {
  WagmiProvider,
} from "wagmi";

import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import {
  mainnet,
  bsc,
  polygon,
  arbitrum,
  optimism,
  base,
  avalanche,
} from "viem/chains";

const projectId =
  "08aa5b7fac6cb25e9026b5d9ce656716";

const metadata = {
  name: "IRAM Nexus",
  description: "IRAM Web3 Platform",
  url: "http://localhost:3000",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const chains = [
  mainnet,
  bsc,
  polygon,
  arbitrum,
  optimism,
  base,
  avalanche,
] as const;

const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
});

createWeb3Modal({
  wagmiConfig: config,
  projectId,

  themeMode: "dark",


  featuredWalletIds: [],

  allWallets: "SHOW",
});

const queryClient =
  new QueryClient();

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  );
}




















































