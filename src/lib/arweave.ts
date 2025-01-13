import Arweave from 'arweave';
import { ArweaveWebWallet } from 'arweave-wallet-connector';

// Initialize Arweave
export const arweave = Arweave.init({
  host: 'arweave.net',
  port: 443,
  protocol: 'https'
});

// Initialize ArweaveWebWallet
export const webWallet = new ArweaveWebWallet({
  name: 'Arweave dApp',
  logo: 'https://arweave.net/logo.svg'
});

// Connect to ArConnect or other Arweave wallets
export const connectWallet = async () => {
  try {
    await webWallet.connect();
    return webWallet.address;
  } catch (error) {
    console.error('Failed to connect wallet:', error);
    throw error;
  }
};

// Get wallet balance
export const getBalance = async (address: string) => {
  try {
    const winstonBalance = await arweave.wallets.getBalance(address);
    const arBalance = arweave.ar.winstonToAr(winstonBalance);
    return arBalance;
  } catch (error) {
    console.error('Failed to get balance:', error);
    throw error;
  }
};