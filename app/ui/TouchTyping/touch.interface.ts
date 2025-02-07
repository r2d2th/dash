export interface TouchInputProps {
  word: string;
  action: () => void;
}

export interface Stat {
  word: string;
  speed: number;
  errnum: number;  // number of errors
  length: number;  // length of sample
}

export interface TouchOutputProps {
  data: Stat[];
}

export interface TouchResult {
  letter: string;
  interval: number;
}
