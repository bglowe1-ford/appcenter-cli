/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a IntuneTargetAudience.
 */
class IntuneTargetAudience {
  /**
   * Create a IntuneTargetAudience.
   * @member {string} [name] display name for the target audience/group
   */
  constructor() {
  }

  /**
   * Defines the metadata of IntuneTargetAudience
   *
   * @returns {object} metadata of IntuneTargetAudience
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'IntuneTargetAudience',
      type: {
        name: 'Composite',
        className: 'IntuneTargetAudience',
        modelProperties: {
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = IntuneTargetAudience;
