export interface Session {
  user?: {
    id?: string | null;
    name?: string | null;
    image?: string | null;
    email?: string | null;
  };
}

export interface Authentication {
  signIn: () => void;
  signOut: () => void;
}
