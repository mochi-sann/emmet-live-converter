import { atomWithStorage } from "jotai/utils";

export type EmmetTextLogAtomType = {
  EmmetText: string;
  CreatedAt: Date;
};

export const EmmetTextLogAtom = atomWithStorage<EmmetTextLogAtomType[]>(
  "EmmetTextLog",
  [],
);
