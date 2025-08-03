export interface Pokemon {
  types: {
    type: { name: string };
  }[];
  sprites: {
    other: {
      ['official-artwork']: {
        front_default: string;
      };
    };
}
}
