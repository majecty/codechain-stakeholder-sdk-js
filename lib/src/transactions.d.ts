/// <reference types="node" />
import { PlatformAddress, PlatformAddressValue, U64, U64Value } from "codechain-primitives/lib";
import { SDK } from "codechain-sdk";
import { Custom } from "codechain-sdk/lib/core/transaction/Custom";
export declare const TRANSFER_CCS_ACTION_ID = 1;
export declare const DELEGATE_CCS_ACTION_ID = 2;
export declare const REVOKE_ACTION_ID = 3;
export declare const SELF_NOMINATE_ACTION_ID = 4;
export declare const CHANGE_PARAMS_ACTION_ID = 255;
export declare function createTransferCCSTransaction(sdk: SDK, recipient: PlatformAddressValue, quantity: U64Value): Custom;
export declare function createDelegateCCSTransaction(sdk: SDK, delegatee: PlatformAddressValue, quantity: U64Value): Custom;
export declare function createRevokeTransaction(sdk: SDK, delegatee: PlatformAddressValue, quantity: U64Value): Custom;
export declare function createSelfNominateTransaction(sdk: SDK, deposit: U64Value, metadata: Buffer | string): Custom;
interface TransferCCS {
    type: "transferCCS";
    recipient: PlatformAddress;
    quantity: U64;
}
interface DelegateCCS {
    type: "delegateCCS";
    delegatee: PlatformAddress;
    quantity: U64;
}
interface Revoke {
    type: "revoke";
    delegatee: PlatformAddress;
    quantity: U64;
}
interface SelfNominate {
    type: "selfNominate";
    deposit: U64;
    metadata: Buffer;
}
interface ChangeParams {
    type: "changeParams";
    metadataSeq: U64;
    params: any;
    signatures: any[];
}
declare type Action = TransferCCS | DelegateCCS | Revoke | SelfNominate | ChangeParams;
export declare function actionFromCustom(sdk: SDK, custom: Custom): Action | null;
export declare function actionFromRLP(sdk: SDK, rlp: Buffer): Action;
export {};
