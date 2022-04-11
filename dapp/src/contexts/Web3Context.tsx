import {
  createContext,
  Dispatch,
  FunctionComponent,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from "react";
import Web3 from "web3";

interface IWeb3Context {
  account: string | null;
  setAccount: Dispatch<SetStateAction<string | null>>;
  handleSignIn: () => Promise<void>;
}

const web3ContextDefaults: IWeb3Context = {
  account: null,
  setAccount: (_) => {},
  handleSignIn: async () => {},
};

const Web3Context = createContext<IWeb3Context | undefined>(undefined);

export const Web3Provider: FunctionComponent<PropsWithChildren<unknown>> = ({
  children,
}) => {
  const [account, setAccount] = useState<string | null>(
    web3ContextDefaults.account
  );

  const handleSignIn = async () => {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
    const accounts = await web3.eth.requestAccounts();
    setAccount(accounts[0]);
  };

  return (
    <Web3Context.Provider value={{ account, setAccount, handleSignIn }}>
      {children}
    </Web3Context.Provider>
  );
};

export const useWeb3Context = (): IWeb3Context =>
  useContext(Web3Context) || web3ContextDefaults;
