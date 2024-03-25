import { http, createConfig } from 'wagmi';
import { mainnet, sepolia, goerli, polygon } from 'wagmi/chains';
import { coinbaseWallet, injected, walletConnect } from 'wagmi/connectors';

export const config = createConfig({
    chains: [mainnet, sepolia, goerli, polygon],
    connectors: [
        injected(),
        coinbaseWallet({ appName: 'Create Wagmi' }),
        walletConnect({ projectId: import.meta.env.VITE_WC_PROJECT_ID }),
    ],
    transports: {
        [mainnet.id]: http(),
        [sepolia.id]: http(),
        [goerli.id]: http(),
        [polygon.id]: http(),
    },
});

declare module 'wagmi' {
    interface Register {
        config: typeof config;
    }
}
