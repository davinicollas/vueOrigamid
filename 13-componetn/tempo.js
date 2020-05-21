export default {
  name: "Temperatura",
  data() {
    return {
      temp: 0,
    };
  },
  template: `<p>Temperatura {{temp}}</p>`,
  methods: {
    fechtTempo() {
      fetch("https://www.metaweather.com/api/location/455825/")
        .then((r) => r.json())
        .then((r) => {
          this.temp = r.consolidated_weather[0].max_temp.toFixed(2);
        });
    },
  },
  created() {
    this.fechtTempo();
  },
};
