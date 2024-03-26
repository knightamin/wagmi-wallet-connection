import { useAccount, useConnect, useDisconnect, useBalance } from 'wagmi';
import YourGreatDApp from './Cardano';
import VechainWallet from './components/VechainWalletButton';
import XverseWallet from './components/XVerseWallet';

function App() {
    const account = useAccount();
    const balance = useBalance({
        address: account.address,
    });
    const { connectors, connect, status, error } = useConnect();
    const { disconnect } = useDisconnect();

    return (
        <>
            <div>
                <h2>Account :{account.connector?.name}</h2>
                <img src={account.connector?.icon} width={64} />
                <div>
                    status: {account.status}
                    <br />
                    address:{account.address}
                    <br />
                    chainId: {account.chainId}
                    <br />
                    balance:
                    {`${balance.data?.value} ${balance.data?.symbol}`}
                </div>

                {account.status === 'connected' && (
                    <button type="button" onClick={() => disconnect()}>
                        Disconnect
                    </button>
                )}
            </div>

            <div>
                <h2>Connect</h2>
                {connectors.map((connector) => (
                    <button
                        key={connector.uid}
                        onClick={() => connect({ connector })}
                        type="button"
                    >
                        {connector.name}
                    </button>
                ))}
                <div>{status}</div>
                <div>{error?.message}</div>
            </div>
            <YourGreatDApp />

            <div>
                <hr />
                <h2>Vechain Wallet</h2>
                <VechainWallet />
            </div>

            <div>
                <hr />
                <h2>XVerse Wallet</h2>
                <XverseWallet />
            </div>
        </>
    );
}

export default App;
