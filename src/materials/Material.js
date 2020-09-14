export default {
  inject: ['three'],
  props: {
    id: String,
    color: {
      type: String,
      default: '#ffffff',
    },
  },
  mounted() {
    this.three.materials[this.id] = this.material;
  },
  render() {
    return [];
  },
};