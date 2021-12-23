<template>
  <div>
    <v-row class="pa-10" align="center" justify="center">
      <v-col cols="6">
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
          SURVEY LIST
        </h1>
      </v-col>

      <v-col cols="6" class="pt-4 pr-2" align="right">
        <v-btn
          class="text-capitalize pa-5"
          tile
          color="primary white--text"
          style="border-radius: 12px"
          @click="addPostSurvey('ADD', 'no-item')"
        >
          <v-icon left> mdi-plus-box-multiple-outline</v-icon>
          Add
        </v-btn>
      </v-col>

      <v-col cols="11" class="pt-6">
        <v-row align="center" justify="center">
          <v-col cols="4">
            <p
              class="font-weight-bold primary--text"
              style="margin-bottom: 5px"
            >
              Survey Name
            </p>
            <v-text-field
              v-model="search"
              placeholder="- Survey Name -"
              outlined
              clearable
              dense
            ></v-text-field>
          </v-col>

          <v-col cols="3" class="pr-0">
            <p
              class="font-weight-bold primary--text"
              style="margin-bottom: 5px"
            >
              Start Date
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
          <v-col cols="1" class="px-0" align="center"> - </v-col>
          <v-col cols="3" class="pl-0">
            <p
              class="font-weight-bold primary--text"
              style="margin-bottom: 5px"
            >
              End Date
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
          <v-col cols="1" class="mt-1" align="right">
            <v-btn
              class="text-capitalize px-6 py-5"
              tile
              color="primary"
              style="border-radius: 12px"
              @click="btnSearch()"
            >
              <v-icon left> mdi-magnify</v-icon>
              Search
            </v-btn>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12" class="pt-10">
        <TableSettingSurveyList
          ref="TableSettingSurveyList"
          :item_list="item_list"
          :page="page"
          :total_page="total_page"
          @addPostSurvey="addPostSurvey"
          @openDialogDeleteSurvey="openDialogDeleteSurvey"
          @openDialogSuccess="openDialogSuccess"
          @openDialogError="openDialogError"
          @closeDialogSuccess="closeDialogSuccess"
          @closeDialogError="closeDialogError"
        />

        <DialogDeleteSurvey
          ref="DialogDeleteSurvey"
          @searchNumberPage="searchNumberPage"
          @openDialogSuccess="openDialogSuccess"
          @openDialogError="openDialogError"
          @closeDialogSuccess="closeDialogSuccess"
          @closeDialogError="closeDialogError"
        />
      </v-col>
    </v-row>

    <DialogLoading ref="DialogLoading" />
    <DialogSuccess ref="DialogSuccess" />
    <DialogError ref="DialogError" />
  </div>
</template>

<script>
import TableSettingSurveyList from "@/components/Setting/SettingSurveyList/TableSettingSurveyList.vue";
import DialogDeleteSurvey from "@/components/Survey/MainSurvey/DialogDeleteSurvey.vue";

//dialog
import DialogLoading from "@/components/Dialog/DialogLoading.vue";
import DialogSuccess from "@/components/Dialog/DialogSuccess.vue";
import DialogError from "@/components/Dialog/DialogError.vue";

export default {
  components: {
    TableSettingSurveyList,
    DialogLoading,
    DialogSuccess,
    DialogError,
    DialogDeleteSurvey,
  },
  data() {
    return {
      menu_startdate: false,
      menu_enddate: false,
      selected_start_date: "",
      selected_end_date: "",
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
      // table
      search: "",
      search_setTimeout: null,
      search_const_delay: 500,
      page: 1,
      total_page: 0,
      count_request: 0,

      item_list: [],
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
  watch: {
    search() {
      this.page = 1;
      clearTimeout(this.search_setTimeout);
      this.search_setTimeout = setTimeout(() => {
        if (this.search == null) {
          this.search = "";
        }
        this.searchNumberPage();
      }, this.search_const_delay);
    },
    page(val) {
      this.searchNumberPage();
    },
  },
  created() {
    this.searchNumberPage();
  },
  methods: {
    //dialog
    openDialogSuccess(title, text) {
      this.$refs.DialogSuccess.open(title, text);
    },
    closeDialogSuccess() {
      this.$refs.DialogSuccess.close();
    },
    openDialogError(title, text) {
      this.$refs.DialogError.open(title, text);
    },
    closeDialogError() {
      this.$refs.DialogError.close();
    },
    openDialogDeleteSurvey(item) {
      this.$refs.DialogDeleteSurvey.open(item);
    },
    addPostSurvey(mode, item) {
      if (item == "no-item") {
        this.$router.push({
          name: "PostServiceSurvey",
          params: {
            mode: mode,
            survey_name: 'new',
            survey_id: 'new-survey',
          },
        });
      } else {
        this.$router.push({
          name: "PostServiceSurvey",
          params: {
            mode: mode,
            survey_name: item.survey_detail,
            survey_id: item.survey_id,
          },
        });
      }
    },
    btnSearch() {
      this.searchNumberPage();
    },
    formatNumber(num) {
      return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    },
    searchNumberPage() {
      this.axios
        .get(
          process.env.VUE_APP_API +
            "/survey/list/numberpage/10" +
            "?search=" +
            this.search +
            "&startdate=" +
            this.selected_start_date +
            "&enddate=" +
            this.selected_end_date
          // this.header_token
        )
        .then((res) => {
          this.$refs.DialogLoading.open();
          // console.log(res.data);
          if (res.data) {
            var data = res.data;
            this.total_page = data.page;
            this.count_request = this.formatNumber(data.count);
            this.searchList();
          }
        });
    },
    searchList() {
      this.axios
        .get(
          process.env.VUE_APP_API +
            "/survey/list/page/10/" +
            this.page +
            "?search=" +
            this.search +
            "&startdate=" +
            this.selected_start_date +
            "&enddate=" +
            this.selected_end_date
          // this.header_token
        )
        .then((res) => {
          this.$refs.DialogLoading.close();
          // console.log(res.data);
          if (res.data) {
            this.item_list = res.data;
          }
        });
    },
  },
};
</script>
<style >
</style>