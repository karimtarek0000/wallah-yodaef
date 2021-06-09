<template>
  <!-- Form -->
  <form
    @submit.prevent="submit"
    class="
      register
      bg-light-1
      d-flex
      lg-flex-direction-column
      flex-direction-row
      overflow-auto
      xlg-justify-content-center
      padding-top-2rem
      width-100
    "
  >
    <div class="lg-width-100 width-50">
      <!-- Name -->
      <div
        class="
          d-flex
          width-90
          margin-bottom-2rem margin-x-auto
          flex-direction-column
        "
      >
        <label
          for="name"
          class="
            text-red-light
            weight-bold
            padding-x-2rem
            margin-bottom-1rem
            xlg-text-20
            text-25
          "
          >الاسم</label
        >
        <input
          type="text"
          id="name"
          autocomplete="off"
          v-model="$v.form.name.$model"
          :class="[
            'padding-y-1rem border-all-red-light padding-x-2rem xlg-text-18 text-22 weight-bold radius-100',
            !$v.form.name.required && $v.form.name.$dirty && 'bg-light',
          ]"
          placeholder="الاسم"
        />
        <!-- Messages -->
        <!-- Required -->
        <p
          class="padding-x-2rem text-16 margin-top-1rem"
          v-if="!$v.form.name.required && $v.form.name.$dirty"
        >
          هذا الحقل مطلوب ادخاله
        </p>
      </div>
      <!-- Email -->
      <div
        class="
          d-flex
          width-90
          margin-bottom-2rem margin-x-auto
          flex-direction-column
        "
      >
        <label
          for="email"
          class="
            text-red-light
            weight-bold
            padding-x-2rem
            margin-bottom-1rem
            xlg-text-20
            text-25
          "
          >البريد الالكتروني</label
        >
        <input
          type="text"
          id="email"
          autocomplete="off"
          v-model="$v.form.email.$model"
          :class="[
            'padding-y-1rem border-all-red-light padding-x-2rem xlg-text-18 text-22 weight-bold radius-100',
            !$v.form.email.required && $v.form.email.$dirty && 'bg-light',
          ]"
          placeholder="البريد الالكتروني"
        />
        <!-- Messages -->
        <!-- Required -->
        <p
          class="padding-x-2rem text-16 margin-top-1rem"
          v-if="!$v.form.email.required && $v.form.email.$dirty"
        >
          هذا الحقل مطلوب ادخاله
        </p>
        <!-- Error -->
        <p
          class="padding-x-2rem text-16 margin-top-1rem"
          v-if="!$v.form.email.email && $v.form.email.$dirty"
        >
          يجب كتابه البريد الالكتروني بشكل صحيح
        </p>
      </div>
      <!-- Contact type -->
      <div class="width-90 margin-x-auto">
        <label
          for="contactType"
          class="
            text-red-light
            weight-bold
            padding-x-2rem
            margin-bottom-1rem
            xlg-text-20
            text-25
          "
          >نوع الاستفسار</label
        >
        <div class="position-rel margin-top-1rem">
          <select
            id="contactType"
            v-model="form.contact_type"
            class="
              width-100
              xlg-text-18
              text-22
              radius-100
              border-all-red-light
              padding-x-2rem padding-y-1rem
              text-red-light
              weight-bold
            "
          >
            <option v-for="type in contactType" :key="type" :value="type">
              {{ type }}
            </option>
          </select>
          <!--  -->
          <GSvg
            class="svg-30 arrow-down position-abs fill-red-light"
            nameIcon="angle-down"
            title="down"
          />
        </div>
      </div>
    </div>
    <!--  -->
    <div class="lg-width-100 width-50 margin-top-1rem">
      <div class="width-90 margin-x-auto">
        <label
          for="writeMessage"
          class="
            text-red-light
            weight-bold
            padding-x-2rem
            margin-bottom-1rem
            xlg-text-20
            text-25
          "
          >اكتب رسالتك</label
        >
        <textarea
          v-model="$v.form.message.$model"
          class="
            width-90
            margin-x-auto
            d-block
            min-height-50vh
            border-all-red-light
            padding-1rem
            xlg-text-20
            text-25
            margin-top-1rem
          "
          placeholder="اكتب رسالتك"
        ></textarea>
        <p
          class="padding-x-2rem text-16 margin-top-1rem"
          v-if="!$v.form.message.required && $v.form.message.$dirty"
        >
          هذا الحقل مطلوب ادخاله
        </p>
      </div>

      <!-- Submit -->
      <BtnPrimary
        class="
          width-276px
          padding-y-1rem
          text-18
          lg-text-22
          margin-x-auto margin-top-2rem
        "
        type="submit"
        :disabled="disable"
        :nameBtn="textBtn ? textBtn : 'ارسال'"
      >
        <span
          v-show="statusAlert"
          class="
            d-block
            width-3rem
            height-3rem
            radius-circle
            border-loading
            margin-end-1rem
            loading
          "
        ></span>
      </BtnPrimary>
    </div>
  </form>
</template>

<script>
//
import { required, email } from "vuelidate/lib/validators";
//
export default {
  name: "Form",
  data() {
    return {
      form: {
        name: null,
        email: null,
        message: null,
        contact_type: "ارسال شكوى",
      },
      contactType: ["ارسال شكوى", "اقتراح", "استفسار"],
      statusAlert: false,
      textBtn: null,
      disable: false,
    };
  },
  validations: {
    form: {
      name: {
        required,
      },
      email: {
        required,
        email,
      },
      message: {
        required,
      },
    },
  },
  methods: {
    submit() {
      // Check Form
      this.$v.$touch();
      //
      if (!this.$v.form.$invalid) {
        this.statusAlert = true;
        this.disable = true;
        this.textBtn = "يتم الارسال";
        //
        this.$store
          .dispatch(this.$Type.CONTACT_US, this.form)
          .then(() => {
            this.statusAlert = false;
            this.textBtn = "تم الارسال";
            //
            setTimeout(() => location.reload(), 500);
          })
          .catch(() => {
            this.statusAlert = false;
            this.disable = false;
            this.textBtn = "اعد المحاولة";
          });
      }
    },
  },
};
</script>

<style lang="scss">
select {
  -webkit-appearance: none;
  -mox-appearance: none;
  -o-appearance: none;
  appearance: none;
  font-family: inherit;
  //
  &:focus {
    outline: none;
  }
}
//
textarea {
  resize: none;
  //
  &:focus {
    outline: none;
  }
}

.arrow-down {
  @include position("rt", $moveT: "50%", $moveR: "20px");
  pointer-events: none;
}
</style>
