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

interface IWeb3Context {
  account: string | null;
  handleSignIn: () => Promise<void>;
  setAccount: Dispatch<SetStateAction<string | null>>;
}

const web3ContextDefaults: IWeb3Context = {
  account: null,
  handleSignIn: async () => {},
  setAccount: (_) => {},
};

const Web3Context = createContext<IWeb3Context | undefined>(undefined);

export const Web3Provider: FunctionComponent<PropsWithChildren<unknown>> = ({
  children,
}) => {
  const [account, setAccount] = useState<string | null>(
    web3ContextDefaults.account
  );

  const handleSignIn = async () => {
    const account = await connectToAccount();
    setAccount(account);
  };

  return (
    <Web3Context.Provider value={{ account, handleSignIn, setAccount }}>
      {children}
    </Web3Context.Provider>
  );
};

export const useWeb3Context = (): IWeb3Context =>
  useContext(Web3Context) || web3ContextDefaults;
