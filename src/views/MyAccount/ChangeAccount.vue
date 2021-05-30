<template>
  <!-- Form -->
  <form
    @submit.prevent="submit"
    class="
      bg-light-1
      d-flex
      flex-direction-column
      align-items-center
      margin-top-2rem
      lg-padding-top-2rem
      width-100
      radius-model
    "
  >
    <!-- Name -->
    <div
      class="
        d-flex
        xlg-width-60
        md-width-90
        lg-width-70
        sm-width-100
        margin-bottom-2rem
        flex-direction-column
        border-bottom
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
          'padding-y-1rem  padding-x-2rem xlg-text-18 text-22 weight-bold',
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
    <!-- Phone -->
    <div
      class="
        d-flex
        xlg-width-60
        md-width-90
        lg-width-70
        sm-width-100
        margin-bottom-2rem
        flex-direction-column
        border-bottom
      "
    >
      <label
        for="tel"
        class="
          text-red-light
          weight-bold
          padding-x-2rem
          margin-bottom-1rem
          xlg-text-20
          text-25
        "
        >رقم الجوال</label
      >
      <input
        type="text"
        id="tel"
        autocomplete="off"
        v-model="$v.form.phone.$model"
        :class="[
          'padding-y-1rem  padding-x-2rem xlg-text-18 text-22 weight-bold ',
          !$v.form.phone.required && $v.form.phone.$dirty && 'bg-light',
          !$v.form.phone.numeric && $v.form.phone.$dirty && 'bg-light',
        ]"
        placeholder="رقم الجوال"
      />
      <!-- Messages -->
      <!-- Required -->
      <p
        class="padding-x-2rem text-16 margin-top-1rem"
        v-if="!$v.form.phone.required && $v.form.phone.$dirty"
      >
        هذا الحقل مطلوب ادخاله
      </p>
      <!-- Error -->
      <p
        class="padding-x-2rem text-16"
        v-if="!$v.form.phone.numeric && $v.form.phone.$dirty"
      >
        يجب ادخال ارقام فقط
      </p>
    </div>
    <!-- Old Password -->
    <div
      class="
        d-flex
        xlg-width-60
        md-width-90
        lg-width-70
        sm-width-100
        margin-bottom-2rem
        flex-direction-column
        border-bottom
      "
    >
      <label
        for="old-pas"
        class="
          text-red-light
          weight-bold
          padding-x-2rem
          margin-bottom-1rem
          xlg-text-20
          text-25
        "
        >كلمة السر</label
      >
      <div class="position-rel d-flex">
        <input
          readonly
          :type="visible1 ? 'text' : 'password'"
          id="old-pas"
          v-model="form.password"
          class="
            padding-y-1rem padding-x-2rem
            xlg-text-18
            text-22
            flex-grow-1
            weight-bold,
          "
          placeholder="كلمة السر"
        />
        <!--  -->
        <figure
          v-show="form.password"
          @click="visible1 = !visible1"
          role="icon-visible"
          class="register-icon position-abs"
        >
          <GSvg
            :class="['svg-30 fill-gray', { 'fill-red-light': visible1 }]"
            :nameIcon="visible1 ? 'visibility' : 'unvisibility'"
            :title="visible1 ? 'visible' : 'unvisible'"
          />
        </figure>
      </div>
    </div>
    <!--  -->
    <!-- New Password -->
    <div
      class="
        d-flex
        xlg-width-60
        md-width-90
        lg-width-70
        sm-width-100
        margin-bottom-2rem
        flex-direction-column
        border-bottom
      "
    >
      <label
        for="new-pas"
        class="
          text-red-light
          weight-bold
          padding-x-2rem
          margin-bottom-1rem
          xlg-text-20
          text-25
        "
        >كلمة السر الجديدة</label
      >
      <div class="position-rel d-flex">
        <input
          :type="visible2 ? 'text' : 'password'"
          id="new-pas"
          v-model="$v.form.newPassword.$model"
          :class="[
            'padding-y-1rem  padding-x-2rem xlg-text-18 text-22 flex-grow-1 weight-bold',
            !$v.form.newPassword.minLength &&
              $v.form.newPassword.$dirty &&
              'bg-light',
          ]"
          placeholder="كلمة السر الجديدة"
        />
        <!--  -->
        <figure
          v-show="form.newPassword"
          @click="visible2 = !visible2"
          role="icon-visible"
          class="register-icon position-abs"
        >
          <GSvg
            :class="['svg-30 fill-gray', { 'fill-red-light': visible2 }]"
            :nameIcon="visible2 ? 'visibility' : 'unvisibility'"
            :title="visible2 ? 'visible' : 'unvisible'"
          />
        </figure>
      </div>
      <!-- Messages -->
      <!-- Error -->
      <p
        role="error"
        class="padding-x-2rem text-16 margin-top-1rem"
        v-if="!$v.form.newPassword.minLength && $v.form.newPassword.$dirty"
      >
        يجب الادخال لا يقل عن ١٠
      </p>
    </div>
    <!-- confirm New Password -->
    <div
      class="
        d-flex
        xlg-width-60
        md-width-90
        lg-width-70
        sm-width-100
        margin-bottom-2rem
        flex-direction-column
        border-bottom
      "
    >
      <label
        for="co-pas"
        class="
          text-red-light
          weight-bold
          padding-x-2rem
          margin-bottom-1rem
          xlg-text-22
          text-25
        "
        >تاكيد كلمة السر الجديدة</label
      >
      <div class="position-rel d-flex">
        <input
          :type="visible3 ? 'text' : 'password'"
          id="co-pas"
          v-model="$v.form.confirmNewPassword.$model"
          :class="[
            'padding-y-1rem padding-x-2rem xlg-text-18 text-22 flex-grow-1 weight-bold',
            !$v.form.confirmNewPassword.sameAsNewPassword &&
              $v.form.confirmNewPassword.$dirty &&
              'bg-light',
          ]"
          placeholder="تاكيد كلمة السر الجديدة"
        />
        <!--  -->
        <figure
          v-show="form.confirmNewPassword"
          @click="visible3 = !visible3"
          role="icon-visible"
          class="register-icon position-abs"
        >
          <GSvg
            :class="['svg-30 fill-gray', { 'fill-red-light': visible3 }]"
            :nameIcon="visible3 ? 'visibility' : 'unvisibility'"
            :title="visible3 ? 'visible' : 'unvisible'"
          />
        </figure>
      </div>
      <!-- Messages -->
      <!-- Error -->
      <p
        role="error"
        class="padding-x-2rem text-16"
        v-if="
          !$v.form.confirmNewPassword.sameAsNewPassword &&
          $v.form.confirmNewPassword.$dirty
        "
      >
        غير متوافق مع كلمة السر الجديدة
      </p>
    </div>
    <!--  -->
    <BtnPrimary
      class="width-276px padding-y-1rem text-18 lg-text-22 margin-y-2rem"
      type="submit"
      nameBtn="تحديث"
    />
  </form>
</template>

<script>
//
import { required, numeric, minLength, sameAs } from "vuelidate/lib/validators";
//
export default {
  name: "ChangeAccount",
  props: {
    dataUser: {
      type: Object,
      required: true,
    },
    image: {
      type: File,
      required: false,
    },
  },
  data() {
    return {
      changeData: false,
      changeImage: false,
      visible1: null,
      visible2: null,
      visible3: null,
      //
      form: {
        name: this.dataUser.name,
        phone: this.dataUser.phone,
        password: this.dataUser.password,
        newPassword: null,
        confirmNewPassword: null,
      },
    };
  },
  validations: {
    form: {
      name: {
        required,
      },
      phone: {
        required,
        numeric,
      },
      newPassword: {
        minLength: minLength(10),
      },
      confirmNewPassword: {
        sameAsNewPassword: sameAs("newPassword"),
      },
    },
  },
  methods: {
    submit() {
      //
      if (this.changeData) {
        // 1) - Check if validate or not
        this.$v.$touch();

        // 2) - If validated will be send new data
        if (!this.$v.form.$invalid) {
          console.log("change data");
        }
      }

      //
      if (this.changeImage) {
        console.log("change image and send");
      }

      // Back to MyAccount
      this.$router.push({ name: "Account" });
    },
  },
  watch: {
    //
    form: {
      deep: true,
      handler() {
        this.changeData = true;
      },
    },
    image() {
      this.changeImage = true;
    },
  },
};
</script>

<style></style>
