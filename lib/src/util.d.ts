/// <reference types="node" />
import { H512, PlatformAddress, U64 } from "codechain-primitives/lib";
import { SDK } from "codechain-sdk";
export declare function isArrayOf<T>(list: any, predicate: (entry: any) => entry is T): list is Array<T>;
export declare function decodeUInt(buffer: Buffer): number;
export declare function decodeU64(buffer: Buffer): U64;
export declare function decodeH512(buffer: Buffer): H512;
export declare function decodePlatformAddress(sdk: SDK, buffer: Buffer): PlatformAddress;
