/**
 * @typedef {string|Object} McText
 * @property {?string} translate
 */
/**
 * @typedef {Object} DialogueAction
 * @property {?string} type
 * @property {?string} value
 */
/**
 * @typedef {Object} DialogueChoice
 * @property {?McText} text
 * @property {?string} next
 */
/**
 * @typedef {Object} DialogueState
 * @property {?string} type
 * @property {?McText} text
 * @property {?DialogueAction} action
 * @property {?DialogueChoice[]} choices
 */
/**
 * @typedef {Object} DialogueData
 * @property ?{Object.<string, DialogueState>} states
 * @property {?string} start_at
 * @property {?boolean} unskippable
 */

export default class BlabberDialogue {
    /**
     * Constructs a new dialogue with no data
     *
     * @property {DialogueData} data
     */
    constructor() {
        this.data = {};
    }

    /**
     * @param state {string=}
     * @returns {string}
     */
    startAt(state) {
        if (state !== undefined) this.data.start_at = state;
        return this.data.start_at;
    }

    /**
     *
     * @param unskippable {boolean=}
     * @returns {boolean}
     */
    unskippable(unskippable) {
        if (unskippable !== undefined) this.data.unskippable = unskippable;
        return !!this.data.unskippable;
    }

    /**
     * @returns {string[]}
     */
    states() {
        return Object.keys(this.data.states ?? {});
    }

    /**
     *
     * @param key {string}
     * @returns {DialogueState}
     */
    stateData(key) {
        return this.data.states[key];
    }
}
