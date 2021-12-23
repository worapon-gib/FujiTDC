<template>
  <div>
    <v-row class="pa-10" align="center" justify="center">
      <v-col cols="12">
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
          POST SERVICE SURVEY
        </h1>
      </v-col>

      <v-col cols="11" class="pt-5" align="center">
        <v-row align="center" justify="center">
          <v-col cols="6" align="left">
            <p class="font-weight-bold">
              Survey Name <span class="red--text"> * </span>
            </p>
            <v-text-field
              placeholder="Survey Name"
              outlined
              dense
            ></v-text-field>
          </v-col>

          <v-col cols="4" align="left">
            <p class="font-weight-bold">
              Type of Survey <span class="red--text"> * </span>
            </p>

            <v-select
              :items="items_selected"
              placeholder="Type of Survey"
              append-icon="mdi-chevron-down"
              dense
              outlined
            ></v-select>
          </v-col>

          <v-col cols="2" class="mt-2" align="right">
            <v-btn
              class="text-capitalize pa-5"
              tile
              color="primary white--text"
              style="border-radius: 12px"
            >
              <v-icon left> mdi-plus-box-multiple-outline</v-icon>
              Add
            </v-btn>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="11">
        <QuestionSurvey ref="QuestionSurvey" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import QuestionSurvey from "@/components/Setting/PostServiceSurvey/QuestionSurvey.vue";
export default {
  components: { QuestionSurvey },
  data() {
    return {
      selected_start_date: new Date(),
      selected_end_date: new Date(),
      showWeekNumber: false,
      items_selected: ["Link", "Generate QR Code"],
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
  created() {
    this.queryParams();
  },
  methods: {
    queryParams() {
      console.log(this.$route.params);
    },
    clearStartDate() {
      this.selected_start_date = null;
    },
    clearEndDate() {
      this.selected_end_date = null;
    },
  },
};
</script>
<style >
</style>