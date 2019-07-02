import { PlatformAddress } from "codechain-primitives/lib";
import { SDK } from "codechain-sdk";
export interface TermMetadata {
    lastTermFinishedBlockNumber: number;
    currentTermId: number;
}
export declare function getTermMetadata(sdk: SDK, blockNumber?: number): Promise<TermMetadata | null>;
export declare function getPossibleAuthors(sdk: SDK, blockNumber?: number): Promise<PlatformAddress[] | null>;
