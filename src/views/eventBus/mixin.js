const myMixin = {
  data() {
    return {
      sex: "male",
    };
  },
  methods: {
    changeSex: function() {
      this.sex = "female";
    },
  },
};

export default myMixin;
