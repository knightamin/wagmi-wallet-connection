import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Buffer } from 'buffer';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { WagmiProvider } from 'wagmi';

import App from './App.tsx';
import { config } from './wagmi.ts';
import { DAppKitProvider } from '@vechain/dapp-kit-react';
import type { WalletConnectOptions } from '@vechain/dapp-kit';
import './index.css';

globalThis.Buffer = Buffer;

const walletConnectOptions: WalletConnectOptions = {
    // Create your project here: https://cloud.walletconnect.com/sign-up
    projectId: '607c794f6ad3c8424b2aea4a7947df7e',
    metadata: {
        name: 'My dApp',
        description: 'My dApp description',
        // Your app URL
        url: window.location.origin,
        // Your app Icon
        icons: [`${window.location.origin}/images/my-dapp-icon.png`],
    },
};

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <DAppKitProvider
                    nodeUrl={'https://sync-testnet.vechain.org/'}
                    genesis={'test'}
                    walletConnectOptions={walletConnectOptions}
                    logLevel="DEBUG"
                    modalParent={document.body}
                    requireCertificate={false}
                    usePersistence={true}
                >
                    <App />
                </DAppKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    </React.StrictMode>
);
