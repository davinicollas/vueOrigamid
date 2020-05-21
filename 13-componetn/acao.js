import DolarHoje from "./dolar.js";
export default {
  name: "AppleAção",
  components: {
    DolarHoje,
  },
  data() {
    return {
      valorMercado: 0,
    };
  },
  template: `<div>
  <dolar-hoje></dolar-hoje>
  <p>Valor Apple: {{valorMercado}}</p>
  </div>`,
  methods: {
    puxarAcao() {
      fetch("https://api.iextrading.com/1.0/stock/aapl/quote")
        .then((r) => r.json())
        .then((r) => {
          this.valorMercado = r.marketCap;
        });
    },
  },
  created() {
    this.puxarAcao();
  },
};
