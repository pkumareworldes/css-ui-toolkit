import {
  UseStorageState,
  useStorageState,
  useStorageStateServer,
} from "./useStorageState";

const useLocalStorageStateBrowser: UseStorageState = (
  ...args: [any, any, any]
) => useStorageState(window.localStorage, ...args);

export const useLocalStorageState: UseStorageState =
  typeof window === "undefined"
    ? useStorageStateServer
    : useLocalStorageStateBrowser;
