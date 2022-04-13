import {
  createContext,
  Dispatch,
  FunctionComponent,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import { connectToAccount } from '~/api/web3';
import { LOCAL_STORAGE_ACCOUNT_KEY } from '~/constants/local-storage';
import { IAccount } from '~/types/Account';
import { tryLocalStorageSetItem } from '~/utils/localStorage';

interface IWeb3Context {
  account: IAccount | null;
  setAccount: Dispatch<SetStateAction<IAccount | null>>;
  signIn: (_: string) => Promise<void>;
}

const web3ContextDefaults: IWeb3Context = {
  account: null,
  setAccount: (_) => {},
  signIn: async () => {},
};

const Web3Context = createContext<IWeb3Context | undefined>(undefined);

export const Web3Provider: FunctionComponent<PropsWithChildren<unknown>> = ({
  children,
}) => {
  const [account, setAccount] = useState<IAccount | null>(
    web3ContextDefaults.account
  );

  const signIn = async (newAccountName: string) => {
    try {
      const account = await connectToAccount();
      const newAccount = {
        accountAddress: account,
        accountName: newAccountName,
      };
      setAccount(newAccount);
      tryLocalStorageSetItem(
        LOCAL_STORAGE_ACCOUNT_KEY,
        JSON.stringify(newAccount)
      );
    } catch {
      setAccount(null);
    }
  };

  return (
    <Web3Context.Provider value={{ account, setAccount, signIn }}>
      {children}
    </Web3Context.Provider>
  );
};

export const useWeb3Context = (): IWeb3Context =>
  useContext(Web3Context) || web3ContextDefaults;
