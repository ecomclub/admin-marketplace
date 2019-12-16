import { i18n, _config } from '@ecomplus/utils'
import { i19zipCode } from '@ecomplus/i18n'
import CleaveInput from 'vue-cleave-component'

// const countryCode = _config.get('country_code')
const countryCode = 'BR' // Todo: remove before merge

export default {
  name: 'InputZipCode',

  components: {
    CleaveInput
  },

  props: {
    value: {
      type: [String, Number],
      required: true
    }
  },

  computed: {
    placeholder () {
      return i18n(i19zipCode)
    },

    pattern () {
      if (countryCode === 'BR') {
        return '[\\d]{5}-[\\d]{3}'
      }
      return null
    },

    localValue: {
      get () {
        return this.value ? this.value : this.schema.default
      },
      set (value) {
        this.$emit('input', value)
      }
    },

    cleaveOptions () {
      return countryCode === 'BR' ? { blocks: [5, 3], delimiter: '-' } : { blocks: [30] }
    }
  }
}
