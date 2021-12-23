<template>
  <div>
    <v-row align="center" justify="center">
      <v-col cols="6" align="center">
        <v-card flat>
          <div id="chart">
            <apexchart
              type="donut"
              width="450"
              :options="chartOptions"
              :series="series"
            ></apexchart>
          </div>
        </v-card>
      </v-col>

      <v-col cols="6" align-self="end">
        <v-row align="center" justify="end">
          <!-- Total -->
          <v-col cols="4">
            <v-card
              class="px-5 py-5"
              style="border-radius: 20px"
              color="#3469B9"
            >
              <v-card-title class="py-0">
                <h3 class="white--text font-weight-black text-capitalize">
                  Total
                </h3>
              </v-card-title>
              <v-card-text class="py-1">
                <h1
                  class="white--text"
                  style="
                    font-family: Kanit;
                    font-size: 22px;
                    font-style: normal;
                    font-weight: 300;
                    line-height: 48px;
                    letter-spacing: 0em;
                    text-align-last: center;
                  "
                >
                  320
                </h1>
              </v-card-text>

              <v-card-actions class="mb-3 pt-1">
                <v-row align="center" justify="end">
                  <h3 class="white--text mr-5">Task</h3>
                </v-row>
              </v-card-actions>
            </v-card>
          </v-col>

          <!-- Low Score -->
          <!-- <v-col cols="4">
            <v-card
              class="px-5 py-5"
              style="border-radius: 20px"
              color="#E42828"
            >
              <v-card-title class="py-0">
                <h1 class="white--text font-weight-black text-capitalize">
                  Low Score
                </h1>
              </v-card-title>
              <v-card-text class="py-1">
                <h1
                  class="white--text"
                  style="
                    font-family: Kanit;
                    font-size: 28px;
                    font-style: normal;
                    font-weight: 300;
                    line-height: 48px;
                    letter-spacing: 0em;
                    text-align-last: center;
                  "
                >
                  2
                </h1>
              </v-card-text>

            <v-card-actions class="mb-3 pt-1">
                <v-row align="center" justify="end">
                  <h1 class="white--text mr-5">Task</h1>
                </v-row>
              </v-card-actions>
            </v-card>
          </v-col> -->

          <!-- High Score -->
          <!-- <v-col cols="4">
            <v-card
              class="px-5 py-5"
              style="border-radius: 20px"
              color="#1C881D"
            >
              <v-card-title class="py-0">
                <h1 class="white--text font-weight-black text-capitalize">
                  High Score
                </h1>
              </v-card-title>
              <v-card-text class="py-1">
                <h1
                  class="white--text"
                  style="
                    font-family: Kanit;
                    font-size: 28px;
                    font-style: normal;
                    font-weight: 300;
                    line-height: 48px;
                    letter-spacing: 0em;
                    text-align-last: center;
                  "
                >
                  318
                </h1>
              </v-card-text>

              <v-card-actions class="mb-3 pt-1">
                <v-row align="center" justify="end">
                  <h1 class="white--text mr-5">Task</h1>
                </v-row>
              </v-card-actions>
            </v-card>
          </v-col> -->
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      series: [44, 55, 13, 33],
      chartOptions: {
        chart: {
          width: 380,
          type: "donut",
        },
        dataLabels: {
          enabled: false,
        },
        labels: ["type 1", "type 2 ", "type 3 ", "type 4 "],
        plotOptions: {
          pie: {
            donut: {
              labels: {
                show: true,
                total: {
                  showAlways: true,
                  show: true,
                },
              },
            },
          },
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                show: false,
              },
            },
          },
        ],
        legend: {
          show: false,
        },
      },
    };
  },
  computed: {
    x_mobile() {
      if (this.$vuetify.breakpoint.width < 450) {
        return true;
      } else {
        return false;
      }
    },
    mobile() {
      if (
        this.$vuetify.breakpoint.width < 450 &&
        this.$vuetify.breakpoint.width > 330
      ) {
        return true;
      } else {
        return false;
      }
    },
    tablet() {
      if (
        this.$vuetify.breakpoint.width >= 450 &&
        this.$vuetify.breakpoint.width < 1030
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
  watch: {},
  created() {},
  methods: {},
};
</script>
<style >
</style>