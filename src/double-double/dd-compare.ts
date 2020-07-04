
import { ddDiffDd } from "./dd-diff-dd";


/**
 * Returns 0 if a === b, a +tive value if a > b or a negative value if a < b.
 * @param a a double-double precision floating point number
 * @param b another double-double precision floating point number
 */
function ddCompare(a: number[], b: number[]) {
    return ddDiffDd(a,b)[1];
}


export { ddCompare }
