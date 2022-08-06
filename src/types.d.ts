export {};

declare global {
  type newProvider = { ({ children }: { children: JSX.Element }): JSX.Element };
}
