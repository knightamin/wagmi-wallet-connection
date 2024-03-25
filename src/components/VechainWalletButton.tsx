import { useConnex, WalletButton } from '@vechain/dapp-kit-react';
import { useWallet } from '@vechain/dapp-kit-react';
import { Connex } from '@vechain/connex';
import { useEffect, useMemo, useState } from 'react';
const VechainWallet = (): JSX.Element => {
    const [balance, setBalance] = useState<string>('');
    const { account, source } = useWallet();
    const connexInstance = new Connex({
        node: 'https://mainnet.veblocks.net/',
        network: 'main',
    });
    const connex: Connex = useMemo(() => {
        return connexInstance;
    }, [connexInstance]);

    const getAccInfo = async () => {
        if (account) {
            const acc = connex.thor.account(account);
            const info = await acc.get();
            console.log('first', info);
            setBalance(info.balance);
        }
    };

    useEffect(() => {
        getAccInfo();
    }, [account, source]);

    return (
        <>
            <WalletButton />
            <div>
                <br />
                <h2>Account :{source}</h2>
                Address: {account}
                <br />
                Balance: {balance}
            </div>
        </>
    );
};

export default VechainWallet;
