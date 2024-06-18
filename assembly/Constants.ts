import { Base58 } from "@koinos/sdk-as";

export namespace Constants {
  export const NAME: string = "Koinos Astronauts";
  export const SYMBOL: string = "KAMP";
  export const MINT_PRICE: u64 = 10000000000;
  export const MINT_FEE: bool = true;
  export const MAX_SUPPLY: u64 = 1000;
  export const URI: string = "https://planetkoinos.com/kampmetadata";
  export const OWNER: Uint8Array = Base58.decode("1Cs4tVzdRZZ4DPYEHpiULe4VMemjiK6p1Y");

  // token mint
  export const TOKEN_PAY: Uint8Array = Base58.decode("15DJN4a8SgrbGhhGksSBASiSYjGnMU8dGL");
  // FILL IN CORRECT ADDRESS FOR TREASURY FOR MAINNET
  export const ADDRESS_PAY: Uint8Array = Base58.decode("1Cs4tVzdRZZ4DPYEHpiULe4VMemjiK6p1Y");
}