<template>
  <div class="py-12 px-10">
    <!-- <v-row class="pa-10" align="center" justify="center"> -->
    <v-row align="center" justify="center">
      <v-col cols="5">
        <h1
          class="primary--text font-weight-black text-uppercase"
          style="
            font-family: Kanit;
            font-size: 32px;
            font-style: normal;
            font-weight: 400;
            line-height: 40px;
            letter-spacing: 0em;
            text-align: left;
          "
        >
          Dashboard
        </h1>

        <h1
          style="
            font-family: Kanit;
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
            line-height: 30px;
            letter-spacing: 0em;
            text-align: left;
          "
        >
          {{ computedDateFormattedMomentjs }}
        </h1>
      </v-col>
      <v-col cols="7">
        <v-row align="center" justify="end">
          <v-col cols="4" class="pr-0 pb-0">
            <p
              class="font-weight-bold primary--text"
              style="margin-bottom: 5px"
            >
              Start Date <span class="red--text"> * </span>
            </p>

            <v-menu
              v-model="menu_startdate"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              :nudge-top="25"
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="selected_start_date"
                  outlined
                  placeholder="YY / MM / DD"
                  prepend-inner-icon="mdi-calendar"
                  readonly
                  clearable
                  dense
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="selected_start_date"
                color="primary"
                @input="menu_startdate = false"
              ></v-date-picker>
            </v-menu>
          </v-col>
          <v-col cols="1" class="mt-9 px-0" align="center"> - </v-col>
          <v-col cols="4" class="pl-0 pb-0">
            <p
              class="font-weight-bold primary--text"
              style="margin-bottom: 5px"
            >
              End Date <span class="red--text"> * </span>
            </p>

            <v-menu
              v-model="menu_enddate"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              :nudge-top="25"
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="selected_end_date"
                  placeholder="YY / MM / DD"
                  prepend-inner-icon="mdi-calendar"
                  readonly
                  clearable
                  outlined
                  dense
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="selected_end_date"
                color="primary"
                @input="menu_enddate = false"
              ></v-date-picker>
            </v-menu>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-row align="center" justify="end">
      <v-col cols="5"> </v-col>
      <v-col cols="7">
        <v-row align="center" justify="end">
          <v-col cols="4" class="pr-0 pt-0">
            <p
              class="font-weight-bold primary--text"
              style="margin-bottom: 5px"
            >
              Branch <span class="red--text"> * </span>
            </p>
            <v-select
              :items="item_list_branch"
              item-text="branch_name"
              item-value="branch_name"
              clearable
              placeholder="- Branch -"
              append-icon="mdi-chevron-down"
              dense
              outlined
            ></v-select>
          </v-col>
          <v-col cols="1" class="mt-9 px-0" align="center"></v-col>
          <v-col cols="4" class="pl-0 pt-0">
            <p
              class="font-weight-bold primary--text"
              style="margin-bottom: 5px"
            >
              Field Service <span class="red--text"> * </span>
            </p>
            <v-select
              :items="item_list_field"
              item-text="field_service_name"
              item-value="field_service_name"
              placeholder="- Field Service -"
              append-icon="mdi-chevron-down"
              dense
              clearable
              outlined
            ></v-select>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row align="center" justify="end">
      <v-col class="py-0" align="right" style="margin-top: -10px">
        <v-btn
          class="text-capitalize pa-5 mr-4"
          tile
          color="primary"
          style="border-radius: 12px"
        >
          <v-icon left> mdi-magnify</v-icon>
          Search
        </v-btn>

        <v-btn
          class="text-capitalize pa-5"
          tile
          color="grey lighten-2 primary--text"
          style="border-radius: 12px"
        >
          <v-icon left> mdi-tray-arrow-up</v-icon>
          Export
        </v-btn>
      </v-col>
    </v-row>
    <v-row align="center" justify="center" style="margin-top: -60px">
      <v-col class="pt-0">
        <PieChartAndBoxScore ref="PieChartAndBoxScore" /> </v-col
    ></v-row>
    <v-row align="center" justify="center">
      <v-col class="mt-4">
        <ColumnsChart ref="ColumnsChart" />
      </v-col>
    </v-row>
    <!-- </v-row> -->
  </div>
</template>

<script>
import moment from "moment";
import PieChartAndBoxScore from "@/components/Dashboard/PieChartAndBoxScore.vue";
import ColumnsChart from "@/components/Dashboard/ColumnsChart.vue";

export default {
  components: { PieChartAndBoxScore, ColumnsChart },
  data() {
    return {
      menu_startdate: false,
      menu_enddate: false,
      selected_start_date:"",
      selected_end_date:"",
      // selected_start_date: new Date(
      //   Date.now() - new Date().getTimezoneOffset() * 60000
      // )
      //   .toISOString()
      //   .substr(0, 10),
      // selected_end_date: new Date(
      //   Date.now() - new Date().getTimezoneOffset() * 60000
      // )
      //   .toISOString()
      //   .substr(0, 10),
      date_now: new Date(),

      data_debug: "",
      item_list_branch: [],
      item_list_field: [],
    };
  },
  computed: {
    computedDateFormattedMomentjs() {
      return this.date_now
        ? moment(this.date_now).format("dddd,  Do MMMM YYYY")
        : "";
    },

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
  created() {
    this.getDataBranch();
    this.getDataFieldService();
    this.getDataDebug();
  },
  methods: {
    getDataDebug() {
      this.data_debug = localStorage.getItem("myDebug");
    },
    clearStartDate() {
      this.selected_start_date = null;
    },
    clearEndDate() {
      this.selected_end_date = null;
    },
    getDataBranch() {
      this.axios
        .get(
          process.env.VUE_APP_API + "/master_data/branch"
          // ,this.header_token
        )
        .then((res) => {
          // console.log(res.data);
          if (res.data) {
            this.item_list_branch = res.data;
          }
        });
    },
    getDataFieldService() {
      this.axios
        .get(
          process.env.VUE_APP_API + "/master_data/field_service"
          // ,this.header_token
        )
        .then((res) => {
          // console.log(res.data);
          if (res.data) {
            this.item_list_field = res.data;
          }
        });
    },
  },
};
</script>
<style >
</style>