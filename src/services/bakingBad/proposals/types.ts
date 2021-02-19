import { UnnamedMapValue, NamedMapValue } from "services/bakingBad/types";

export type ProposalsDTO = {
  data: {
    key: UnnamedMapValue;
    value: {
      prim: string;
      type: string;
      children: [
        NamedMapValue,
        NamedMapValue,
        NamedMapValue,
        {
          prim: string;
          type: string;
          name: string;
          children: [
            NamedMapValue,
            {
              prim: string;
              type: string;
              name: string;
            }
          ];
        },
        NamedMapValue,
        NamedMapValue,
        {
          prim: string;
          type: string;
          name: string;
          children?: {
            prim: string;
            type: string;
            name: string;
            children: [UnnamedMapValue, UnnamedMapValue];
          }[];
        }
      ];
    };
    key_hash: string;
    key_string: string;
    level: number;
    timestamp: string;
  };
  count: number;
}[];

export interface Proposal {
  id: string;
  upVotes: number;
  downVotes: number;
  startDate: string;
  agoraPostId: string;
  proposer: string;
  proposerFrozenTokens: string;
  voters: {
    address: string;
    value: number;
  }[];
}

export enum ProposalStatus {
  ACTIVE = "active",
  PASSED = "passed",
  REJECTED = "rejected",
  DROPPED = "dropped",
}

export type ProposalWithStatus = Proposal & {
  cycle: number;
  status: ProposalStatus;
};