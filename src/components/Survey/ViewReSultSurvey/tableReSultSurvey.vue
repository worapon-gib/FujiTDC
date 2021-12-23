<template>
  <div>
    <v-row class="text-center" align="center" justify="center">
      <v-col
        cols="11"
        align="center"
        style="border-top-left-radius: 50px; border-top-right-radius: 50px"
      >
        <v-card
          flat
          outlined
          style="border-top-left-radius: 20px; border-top-right-radius: 20px"
        >
          <!-- Data Table -->
          <div v-if="item_list.length != 0">
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th
                      class="text-center primary white--text subtitle-1 pt-2"
                      style="border-top-left-radius: 20px"
                    >
                      TaskNo.
                    </th>
                    <th
                      v-for="(item, index) in header_custom"
                      :key="index"
                      class="text-center primary white--text subtitle-1 pt-2"
                    >
                      {{ item.text }}
                    </th>
                    <th
                      class="text-center primary white--text subtitle-1 pt-2"
                      style="border-top-right-radius: 20px"
                    >
                      Date
                    </th>
                  </tr>
                </thead>
                <!-- <thead>
                <tr>
                  <th
                    v-for="(item, index) in header_item"
                    :key="index"
                    class="text-center primary white--text subtitle-1 pt-2"
                    :style="
                      item.index == 0
                        ? 'border-top-left-radius: 20px;'
                        : '' && (item.index + 1) == header_item.length
                        ? 'border-top-right-radius: 20px;'
                        : 'red--text'
                    "
                  >
                  <pre>{{(item.index + 1) }}</pre>
                  <pre>{{header_item.length}}</pre>
                    {{ item.text }}
                  </th>
                </tr>
              </thead> -->
                <tbody>
                  <tr v-for="(item, index) in item_list" :key="index">
                    <td class="text-center pt-3">
                      {{ item.task_no }}
                    </td>
                    <td class="text-center pt-3">
                      {{ item.staff_id }}
                    </td>

                    <td class="text-center pt-3" v-if="item.Q1 != null">
                      {{ item.Q1 }}
                    </td>
                    <td class="text-center pt-3" v-if="item.Q2 != null">
                      {{ item.Q2 }}
                    </td>
                    <td class="text-center pt-3" v-if="item.Q3 != null">
                      {{ item.Q3 }}
                    </td>
                    <td class="text-center pt-3" v-if="item.Q4 != null">
                      {{ item.Q4 }}
                    </td>
                    <td class="text-center pt-3" v-if="item.Q5 != null">
                      {{ item.Q5 }}
                    </td>
                    <td class="text-center pt-3" v-if="item.Q6 != null">
                      {{ item.Q6 }}
                    </td>

                    <td class="text-center pt-3" v-if="item.Q7 != null">
                      {{ item.Q7 }}
                    </td>

                    <td class="text-center pt-3" v-if="item.Q8 != null">
                      {{ item.Q8 }}
                    </td>

                    <td class="text-center pt-3" v-if="item.Q9 != null">
                      {{ item.Q9 }}
                    </td>

                    <td class="text-center pt-3">
                      {{ convertDate(item.date) }}
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </div>

          <div v-else>
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th
                      style="border-top-left-radius: 20px"
                      class="text-left primary white--text subtitle-1 pt-2"
                    >
                      TaskNo.
                    </th>
                    <th class="text-center primary white--text subtitle-1 pt-2">
                      StaffID
                    </th>
                    <th class="text-center primary white--text subtitle-1 pt-2">
                      Q1
                    </th>
                    <th class="text-center primary white--text subtitle-1 pt-2">
                      Q2
                    </th>
                    <th class="text-center primary white--text subtitle-1 pt-2">
                      Q3
                    </th>
                    <th class="text-center primary white--text subtitle-1 pt-2">
                      Q4
                    </th>
                   <th
                      class="text-center primary white--text subtitle-1 pt-2"
                      style="border-top-right-radius: 20px"
                    >
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody></tbody>
              </template>
            </v-simple-table>
            <p class="my-2 primary--text">No matching records found</p>
          </div>
        </v-card>
      </v-col>

      <v-col cols="12">
        <v-pagination
          prev-icon="mdi-menu-left"
          next-icon="mdi-menu-right"
          v-model="page"
          color="primary"
          :length="total_page"
          circle
        ></v-pagination>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    item_list: {
      type: Array,
      require: true,
      default: [],
    },
    header_custom: {
      type: Array,
      require: true,
      default: [],
    },
    page: {
      type: Number,
      require: true,
      default: 1,
    },
    total_page: {
      type: Number,
      require: true,
      default: 1,
    },
  },
  data() {
    return {};
  },
  computed: {
    // header_item(){
    //   return this.header_item
    // },
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
  methods: {
    // format credit
    formatCredit(val) {
      return new Intl.NumberFormat().format(val);
    },
    convertDate(date_time) {
      if (date_time != null) {
        var date = new Date(date_time);

        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();

        var hh = date.getHours();
        var mm = date.getMinutes();

        let month_covert = "";
        let day_covert = "";

        if (month < 10) {
          month_covert = "0" + month;
        } else {
          month_covert = month;
        }

        if (day < 10) {
          day_covert = "0" + day;
        } else {
          day_covert = day;
        }

        //time
        var hh_covert = "";
        var mm_covert = "";

        if (hh < 10) {
          hh_covert = "0" + hh;
        } else {
          hh_covert = hh;
        }

        if (mm < 10) {
          mm_covert = "0" + mm;
        } else {
          mm_covert = mm;
        }

        var format_date =
          day_covert +
          "/" +
          month_covert +
          "/" +
          year +
          " " +
          hh_covert +
          ":" +
          mm_covert +
          " น.";
        return format_date;
      } else {
        return "ไม่ระบุวันที่";
      }
    },
  },
};
</script>
<style >
</style>