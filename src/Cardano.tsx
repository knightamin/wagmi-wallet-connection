import { useCardano } from '@cardano-foundation/cardano-connect-with-wallet';
import {
    ConnectWalletList,
    ConnectWalletButton,
} from '@cardano-foundation/cardano-connect-with-wallet';
const YourGreatDApp = () => {
    const {
        isEnabled,
        isConnecting,
        isConnected,
        enabledWallet,
        stakeAddress,
        accountBalance,
        cip45Address,
        usedAddresses,
        signMessage,
        connect,
        disconnect,
    } = useCardano();

    const onConnect = () => alert('Successfully connected!');

    return (
        <>
            {
                <div>
                    <hr />
                    <h2>Cardano Wallets</h2>
                    <ConnectWalletButton
                        message="Please sign Augusta Ada King, Countess of Lovelace"
                        // onSignMessage={signMessage}
                        onConnect={onConnect}
                    />
                    {isConnecting ? <div>pending</div> : null}
                    {isConnected ? <div>sucess</div> : null}

                    <div>
                        <br />
                        <br />
                        StakeAddress: {isConnected ? stakeAddress : ''}
                        <br />
                        Balance:{' '}
                        {`${isConnected ? accountBalance.toLocaleString() : ''}`}{' '}
                        ADA
                    </div>
                </div>

                // <button
                //     onClick={() =>
                //         connect('wallet_name_with_cip30_support', onConnect)
                //     }
                // >
                //     Connect to Cardano
                // </button>
            }
            {/* <ConnectWalletList
                borderRadius={15}
                gap={12}
                primaryColor="#0538AF"
                // onConnect={onConnectWallet}
                customCSS={`
        font-family: Helvetica Light,sans-serif;
        font-size: 0.875rem;
        font-weight: 700;
        width: 164px;
        & > span { padding: 5px 16px; }
    `}
            /> */}
        </>
    );
};
export default YourGreatDApp;
