export default {
  name: 'InputText',
  props: {
    schema: {
      type: Object
    },
    name: {
      type: String,
      required: true
    },
    value: {
      type: String
    }
  },
  computed: {
    // localValue: {
    //   get () {
    //     return this.value
    //   },
    //   set (val) {
    //     this.$emit('change', val)
    //   }
    // }
  }
}
