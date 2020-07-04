
import { getLowestSetBit, getHighestSetBit } from "./get-max-set-bit";


/**
 * Returns the bit-length of the significand of the given number in such a way
 * that trailing zeros are not counted.
 * @param a a double precision floating point number
 */
function bitLength(a: number) {
    if (a === 0) { return 0; }

    return getHighestSetBit(a) - getLowestSetBit(a) + 1;
}



export { bitLength }
