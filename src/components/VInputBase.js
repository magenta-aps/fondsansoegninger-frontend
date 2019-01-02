import Vue from 'vue'

export default Vue.extend({
  name: 'MoInputBase',

  /**
   * Validator scope, sharing all errors and validation state.
   */
  inject: {
    $validator: '$validator'
  },

  props: {
    /**
     * @model
     * @type {String||Object||Array||Integer}
     */
    value: null,
    /**
     * Set the id.
     * @default null
     * @type {String||Integer}
     */
    id: {
      type: [String, Number],
      default: null
    },
    /**
     * Set a label.
     * @default null
     * @type {String}
     */
    label: {
      type: String,
      default: null
    },
    /**
     * Set a hint.
     * @default null
     * @type {String}
     */
    hint: {
      type: String,
      default: null
    },
    /**
     * Wether this field is required.
     * @default false
     * @type {Boolean}
     */
    required: {
      type: Boolean,
      default: false
    },
    /**
     * Vee-validate validation string
     * @default null
     * @type {String}
     */
    validate: {
      type: String,
      default: null
    },
    /**
     * Wether this field is disabled.
     * @default false
     * @type {Boolean}
     */
    disabled: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      internalValue: null
    }
  },

  computed: {
    identifier () {
      return this.id ? this.id : 'v-input-' + this._uid
    },

    hasLabel () {
      return this.label != null
    },

    hasHint () {
      return this.hint != null
    },

    isRequired () {
      return this.disabled ? false : this.required
    }
  }
})
