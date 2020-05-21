export default {
  name: "DolarDiario",
  data() {
    return {
      dolar: 0,
    };
  },
  template: `<p>O dolar atual e: {{dolar}}</p>`,
  methods: {
    fechtDolar() {
      fetch("https://api.exchangeratesapi.io/latest?base=USD")
        .then((r) => r.json())
        .then((r) => {
          this.dolar = r.rates.BRL.toFixed(2);
        });
    },
  },
  created() {
    this.fechtDolar();
  },
};
