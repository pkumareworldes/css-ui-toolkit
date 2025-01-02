export interface Session {
  logedIn:boolean,
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
