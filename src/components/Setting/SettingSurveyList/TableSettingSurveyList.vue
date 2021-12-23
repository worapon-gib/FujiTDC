<template>
  <div>
    <v-row class="text-center" align="center" justify="center">
      <v-col cols="11" align="center">
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
                      style="border-top-left-radius: 20px"
                      class="text-left primary white--text subtitle-1 pt-2"
                    >
                      No.
                    </th>
                    <th class="text-left primary white--text subtitle-1 pt-2">
                      Type of Survey
                    </th>
                    <th class="text-center primary white--text subtitle-1 pt-2">
                      Survey Name
                    </th>
                    <th class="text-center primary white--text subtitle-1 pt-2">
                      Creator
                    </th>
                    <th class="text-center primary white--text subtitle-1 pt-2">
                      Date
                    </th>
                    <th
                      class="text-center primary white--text subtitle-1 pt-2"
                      style="border-top-right-radius: 20px"
                    >
                      Manage
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in item_list" :key="index">
                    <td class="text-left pointer pt-3">
                      <span class="primary--text" style="cursor: pointer">
                        {{ item_list.indexOf(item) + 1 + ". " }}
                      </span>
                    </td>
                    <td class="text-left pointer pt-3">
                      <p class="primary--text" v-if="item.survey_type != null">
                        {{ item.survey_type }}
                      </p>
                      <p v-else>N/A</p>
                    </td>
                    <td class="text-center pt-3">
                      <p
                        class="primary--text"
                        v-if="item.survey_detail != null"
                      >
                        {{ item.survey_detail }}
                      </p>
                      <p v-else>N/A</p>
                    </td>
                    <td class="text-center pt-3">
                      <p class="primary--text" v-if="item.creator != null">
                        {{ item.creator }}
                      </p>
                      <p v-else>N/A</p>
                    </td>

                    <td class="text-center pt-3">
                      <p class="primary--text" v-if="item.created_at != null">
                        {{ convertDate(item.created_at) }}
                      </p>
                      <p v-else>N/A</p>
                    </td>
                    <td class="text-center pt-3">
                      <v-icon
                        class="pr-5"
                        color="green"
                        @click="addPostSurvey('EDIT',item)"
                      >
                        mdi-pencil-outline
                      </v-icon>

                      <v-icon color="red" @click="openDialogDeleteSurvey(item)">
                        mdi-delete-outline
                      </v-icon>
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
                      No.
                    </th>
                    <th class="text-left primary white--text subtitle-1 pt-2">
                      Type of Survey
                    </th>
                    <th class="text-center primary white--text subtitle-1 pt-2">
                      Survey Name
                    </th>
                    <th class="text-center primary white--text subtitle-1 pt-2">
                      Creator
                    </th>
                    <th class="text-center primary white--text subtitle-1 pt-2">
                      Date
                    </th>
                    <th
                      class="text-center primary white--text subtitle-1 pt-2"
                      style="border-top-right-radius: 20px"
                    >
                      Manage
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
    openDialogDeleteSurvey(item) {
      this.$emit("openDialogDeleteSurvey", item);
    },
    addPostSurvey(mode,item){
      this.$emit('addPostSurvey',mode,item)
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