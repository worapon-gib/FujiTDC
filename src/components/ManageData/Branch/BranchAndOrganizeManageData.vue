<template>
  <div>
    <v-row class="text-center mt-8" align="center" justify="center">
      <v-col cols="11" align="right">
        <v-btn
          class="text-capitalize pa-5"
          tile
          color="primary white--text"
          style="border-radius: 12px"
          @click="openDialogAddEditBranch('ADD', 'no-item')"
        >
          <v-icon left> mdi-plus-box-multiple-outline</v-icon>
          Add
        </v-btn>
      </v-col>
      <v-col cols="11" class="height_table_manage_data" align="center">
        <v-card
          flat
          outlined
          style="border-top-left-radius: 20px; border-top-right-radius: 20px"
        >
          <!-- Data Table -->
          <v-simple-table v-if="item_list_branch.length > 0">
            <template v-slot:default>
              <thead>
                <tr>
                  <th
                    style="border-top-left-radius: 20px; width: 10%"
                    class="text-center primary white--text subtitle-1 pt-2"
                  >
                    No.
                  </th>
                  <th
                    class="text-left primary white--text subtitle-1 pt-2"
                    style="width: 50%"
                  >
                    Feild Name
                  </th>

                  <th
                    class="text-center primary white--text subtitle-1 pt-2"
                    style="width: 20%"
                  >
                    Date
                  </th>

                  <th
                    style="border-top-right-radius: 20px; width: 15%"
                    class="text-center primary white--text subtitle-1 pt-2"
                  >
                    Manage
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in item_list_branch" :key="index">
                  <td class="text-center pointer pt-3">
                    <span class="primary--text" style="cursor: pointer">
                      {{ item_list_branch.indexOf(item) + 1 + ". " }}
                    </span>
                  </td>
                  <td class="text-left pointer pt-3">
                    <span class="primary--text" style="cursor: pointer">
                      {{ item.branch_name }}
                    </span>
                  </td>

                  <td class="text-center pt-3">
                    {{ convertDate(item.created_at) }}
                  </td>
                  <td class="text-center pt-3">
                    <v-icon
                      class="pr-4"
                      color="green"
                      size="28px"
                      @click="openDialogAddEditBranch('EDIT', item)"
                    >
                      mdi-pencil-outline
                    </v-icon>
                    <v-icon class="pl-4" color="red" size="28px" @click="openDialogDeleteBranch(item)">
                      mdi-delete-outline
                    </v-icon>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card>
      </v-col>
      <v-col cols="11" align="left">
        <h4 class="primary--text font-weight-bold">
          {{ item_list_branch.length }} รายการ
        </h4>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    item_list_branch: {
      type: Array,
      require: true,
      default: [],
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
    openDialogAddEditBranch(mode, item) {
      this.$emit("openDialogAddEditBranch", mode, item);
    },
    openDialogDeleteBranch(item) {
      this.$emit("openDialogDeleteBranch", item);
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