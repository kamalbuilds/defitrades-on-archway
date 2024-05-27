/**
* This file was automatically generated by @abstract-money/ts-codegen@0.35.8.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @abstract-money/ts-codegen generate command to regenerate this file.
*/

import { UseQueryOptions, useQuery, useMutation, UseMutationOptions } from "@tanstack/react-query";
import { ExecuteResult } from "@abstract-money/cli/cosmjs";
import { StdFee, Coin } from "@abstract-money/cli/cosmjs";
import { Decimal, InstantiateMsg, ExecuteMsg, AssetEntry, AccountTrace, ChainName, Uint128, AccountOdds, AccountId, Bet, AnsAsset, QueryMsg, MigrateMsg, Addr, BetsResponse, ConfigResponse, ListOddsResponse, RoundStatus, RoundsResponse, RoundResponse, OddsResponse } from "./Betting.types";
import { BettingAppQueryClient, BettingAppClient } from "./Betting.client";
export const bettingQueryKeys = {
  contract: ([{
    contract: "betting"
  }] as const),
  address: (contractAddress: string | undefined) => ([{ ...bettingQueryKeys.contract[0],
    address: contractAddress
  }] as const),
  round: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...bettingQueryKeys.address(contractAddress)[0],
    method: "round",
    args
  }] as const),
  listRounds: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...bettingQueryKeys.address(contractAddress)[0],
    method: "list_rounds",
    args
  }] as const),
  odds: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...bettingQueryKeys.address(contractAddress)[0],
    method: "odds",
    args
  }] as const),
  listOdds: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...bettingQueryKeys.address(contractAddress)[0],
    method: "list_odds",
    args
  }] as const),
  config: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...bettingQueryKeys.address(contractAddress)[0],
    method: "config",
    args
  }] as const),
  bets: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...bettingQueryKeys.address(contractAddress)[0],
    method: "bets",
    args
  }] as const)
};
export interface BettingReactQuery<TResponse, TData = TResponse> {
  client: BettingAppQueryClient | undefined;
  options?: Omit<UseQueryOptions<TResponse, Error, TData>, "'queryKey' | 'queryFn' | 'initialData'"> & {
    initialData?: undefined;
  };
}
export interface BettingBetsQuery<TData> extends BettingReactQuery<BetsResponse, TData> {
  args: undefined | {
    roundId: number;
  };
}
export function useBettingBetsQuery<TData = BetsResponse>({
  client,
  args,
  options
}: BettingBetsQuery<TData>) {
  return useQuery<BetsResponse, Error, TData>(bettingQueryKeys.bets(client?._moduleAddress, args), () => client && args ? client.bets({
    roundId: args.roundId
  }) : Promise.reject(new Error("Invalid client or args")), { ...options, enabled: !!args &&  !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface BettingConfigQuery<TData> extends BettingReactQuery<ConfigResponse, TData> {}
export function useBettingConfigQuery<TData = ConfigResponse>({
  client,
  options
}: BettingConfigQuery<TData>) {
  return useQuery<ConfigResponse, Error, TData>(bettingQueryKeys.config(client?._moduleAddress), () => client ? client.config() : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface BettingListOddsQuery<TData> extends BettingReactQuery<ListOddsResponse, TData> {
  args: undefined | {
    roundId: number;
  };
}
export function useBettingListOddsQuery<TData = ListOddsResponse>({
  client,
  args,
  options
}: BettingListOddsQuery<TData>) {
  return useQuery<ListOddsResponse, Error, TData>(bettingQueryKeys.listOdds(client?._moduleAddress, args), () => client && args ? client.listOdds({
    roundId: args.roundId
  }) : Promise.reject(new Error("Invalid client or args")), { ...options, enabled: !!args &&  !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface BettingOddsQuery<TData> extends BettingReactQuery<OddsResponse, TData> {
  args: undefined | {
    roundId: number;
    teamId: AccountId;
  };
}
export function useBettingOddsQuery<TData = OddsResponse>({
  client,
  args,
  options
}: BettingOddsQuery<TData>) {
  return useQuery<OddsResponse, Error, TData>(bettingQueryKeys.odds(client?._moduleAddress, args), () => client && args ? client.odds({
    roundId: args.roundId,
    teamId: args.teamId
  }) : Promise.reject(new Error("Invalid client or args")), { ...options, enabled: !!args &&  !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface BettingListRoundsQuery<TData> extends BettingReactQuery<RoundsResponse, TData> {
  args: undefined | {
    limit?: number;
    startAfter?: number;
  };
}
export function useBettingListRoundsQuery<TData = RoundsResponse>({
  client,
  args,
  options
}: BettingListRoundsQuery<TData>) {
  return useQuery<RoundsResponse, Error, TData>(bettingQueryKeys.listRounds(client?._moduleAddress, args), () => client && args ? client.listRounds({
    limit: args.limit,
    startAfter: args.startAfter
  }) : Promise.reject(new Error("Invalid client or args")), { ...options, enabled: !!args &&  !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface BettingRoundQuery<TData> extends BettingReactQuery<RoundResponse, TData> {
  args: undefined | {
    roundId: number;
  };
}
export function useBettingRoundQuery<TData = RoundResponse>({
  client,
  args,
  options
}: BettingRoundQuery<TData>) {
  return useQuery<RoundResponse, Error, TData>(bettingQueryKeys.round(client?._moduleAddress, args), () => client && args ? client.round({
    roundId: args.roundId
  }) : Promise.reject(new Error("Invalid client or args")), { ...options, enabled: !!args &&  !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface BettingUpdateConfigMutation {
  client: BettingAppClient;
  msg: {
    rake?: Decimal;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useBettingUpdateConfigMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, BettingUpdateConfigMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, BettingUpdateConfigMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.updateConfig(msg, fee, memo, funds), options);
}
export interface BettingCloseRoundMutation {
  client: BettingAppClient;
  msg: {
    roundId: number;
    winner?: AccountId;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useBettingCloseRoundMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, BettingCloseRoundMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, BettingCloseRoundMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.closeRound(msg, fee, memo, funds), options);
}
export interface BettingDistributeWinningsMutation {
  client: BettingAppClient;
  msg: {
    roundId: number;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useBettingDistributeWinningsMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, BettingDistributeWinningsMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, BettingDistributeWinningsMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.distributeWinnings(msg, fee, memo, funds), options);
}
export interface BettingPlaceBetMutation {
  client: BettingAppClient;
  msg: {
    bet: Bet;
    roundId: number;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useBettingPlaceBetMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, BettingPlaceBetMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, BettingPlaceBetMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.placeBet(msg, fee, memo, funds), options);
}
export interface BettingUpdateAccountsMutation {
  client: BettingAppClient;
  msg: {
    roundId: number;
    toAdd: AccountOdds[];
    toRemove: AccountId[];
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useBettingUpdateAccountsMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, BettingUpdateAccountsMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, BettingUpdateAccountsMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.updateAccounts(msg, fee, memo, funds), options);
}
export interface BettingRegisterMutation {
  client: BettingAppClient;
  msg: {
    roundId: number;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useBettingRegisterMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, BettingRegisterMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, BettingRegisterMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.register(msg, fee, memo, funds), options);
}
export interface BettingCreateRoundMutation {
  client: BettingAppClient;
  msg: {
    baseBetToken: AssetEntry;
    description: string;
    name: string;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useBettingCreateRoundMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, BettingCreateRoundMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, BettingCreateRoundMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.createRound(msg, fee, memo, funds), options);
}