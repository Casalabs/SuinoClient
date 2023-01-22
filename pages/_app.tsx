import "../styles/globals.css";
import type { AppProps } from "next/app";
import "fullpage.js/dist/fullpage.css";
import {
  WalletProvider,
  Chain,
  SuiDevnetChain,
  SuiTestnetChain,
} from "@suiet/wallet-kit";
import "@suiet/wallet-kit/style.css";
import { RecoilRoot } from "recoil";
export default function App({ Component, pageProps }: AppProps) {
  const SupportedChains: Chain[] = [
    // ...DefaultChains,
    SuiDevnetChain,
    SuiTestnetChain,
    // NOTE: you can add custom chain (network),
    // but make sure the connected wallet does support it
    // customChain,
  ];

  return (
    <RecoilRoot>
      <WalletProvider chains={SupportedChains}>
        <Component {...pageProps} />
      </WalletProvider>
    </RecoilRoot>
  );
}
