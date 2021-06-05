<template>
  <section
    role="register"
    class="
      register
      min-height-100vh
      d-flex
      lg-flex-direction-column
      justify-content-center
      lg-padding-x-3rem
      grediant-light
    "
  >
    <!--  -->
    <div
      class="
        xlg-basis-50
        d-flex
        flex-direction-column
        justify-content-center
        align-items-center
        position-rel
      "
    >
      <!-- Go Back -->
      <GoBack class="arrow-back position-abs" />
      <!--  -->
      <figure role="logo" class="height-9rem margin-y-2rem">
        <img class="resize-img" src="/logo/logo-2.svg" alt="logo" />
      </figure>
      <!--  -->
      <div
        class="
          width-100
          d-flex
          flex-direction-column
          align-items-center
          bg-light-1
          trans-back
        "
      >
        <h1
          role="description"
          class="
            lg-text-25
            xlg-text-40
            lg-padding-y-2rem
            text-red-light
            weight-bold
          "
        >
          {{ $route.meta.head }}
        </h1>
        <slot name="par" />
      </div>
    </div>
    <!--  -->
    <!--  -->
    <!--  -->
    <!--  -->
    <!-- Form -->
    <form
      @submit.prevent="submit"
      class="
        bg-light-1
        d-flex
        flex-direction-column
        align-items-center
        xlg-justify-content-center xlg-basis-50
        lg-height-100vh lg-padding-top-2rem
      "
    >
      <!-- Name -->
      <div
        v-if="nameRender === 'signUp'"
        class="
          d-flex
          xlg-width-60
          md-width-90
          lg-width-70
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
      <!-- Phone -->
      <div
        v-if="nameRender !== 'passwordRecovery'"
        class="
          d-flex
          xlg-width-60
          md-width-90
          lg-width-70
          margin-bottom-2rem margin-x-auto
          flex-direction-column
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
            'padding-y-1rem border-all-red-light padding-x-2rem xlg-text-18 text-22 weight-bold radius-100',
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
      <!-- Password -->
      <div
        v-if="nameRender === 'signIn' || nameRender === 'signUp'"
        class="
          d-flex
          xlg-width-60
          md-width-90
          lg-width-70
          margin-bottom-2rem margin-x-auto
          flex-direction-column
        "
      >
        <label
          for="pas"
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
            :type="visible1 ? 'text' : 'password'"
            id="pas"
            v-model="$v.form.password.$model"
            :class="[
              'padding-y-1rem border-all-red-light padding-x-2rem xlg-text-18 text-22 flex-grow-1 weight-bold radius-100',
              !$v.form.password.required &&
                $v.form.password.$dirty &&
                'bg-light',
              !$v.form.password.minLength &&
                nameRender === 'signUp' &&
                $v.form.password.$dirty &&
                'bg-light',
            ]"
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
        <!-- Messages -->
        <!-- Required -->
        <p
          role="error"
          class="padding-x-2rem text-16 margin-top-1rem"
          v-if="!$v.form.password.required && $v.form.password.$dirty"
        >
          هذا الحقل مطلوب ادخاله
        </p>
        <!-- Error -->
        <p
          role="error"
          class="padding-x-2rem text-16 margin-top-1rem"
          v-if="
            !$v.form.password.minLength &&
            nameRender === 'signUp' &&
            $v.form.password.$dirty
          "
        >
          يجب الادخال لا يقل عن ١٠
        </p>
      </div>
      <!-- Confirm Password -->
      <div
        v-if="nameRender === 'signUp'"
        class="
          d-flex
          xlg-width-60
          md-width-90
          lg-width-70
          margin-bottom-2rem margin-x-auto
          flex-direction-column
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
          >تاكيد كلمة السر</label
        >
        <div class="position-rel d-flex">
          <input
            :type="visible2 ? 'text' : 'password'"
            id="co-pas"
            v-model="$v.form.confirmPassword.$model"
            :class="[
              'padding-y-1rem border-all-red-light padding-x-2rem xlg-text-18 text-22 flex-grow-1 weight-bold radius-100',
              !$v.form.confirmPassword.samePassword &&
                $v.form.confirmPassword.$dirty &&
                'bg-light',
            ]"
            placeholder="تاكيد كلمة السر"
          />
          <!--  -->
          <figure
            v-show="form.confirmPassword"
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
          class="padding-x-2rem text-16"
          v-if="
            !$v.form.confirmPassword.samePassword &&
            $v.form.confirmPassword.$dirty
          "
        >
          غير متوافق مع كلمة السر
        </p>
      </div>
      <!-- Code -->
      <div
        v-if="nameRender === 'passwordRecovery'"
        class="
          d-flex
          xlg-width-60
          md-width-90
          lg-width-70
          margin-bottom-2rem margin-x-auto
          flex-direction-column
        "
      >
        <label
          for="code"
          class="
            text-red-light
            weight-bold
            padding-x-2rem
            margin-bottom-1rem
            xlg-text-20
            text-25
          "
          >الكود</label
        >
        <input
          type="text"
          id="code"
          autocomplete="off"
          v-model="$v.form.code.$model"
          :class="[
            'padding-y-1rem border-all-red-light padding-x-2rem xlg-text-18 text-22 weight-bold radius-100',
            !$v.form.code.required && $v.form.code.$dirty && 'bg-light',
            !$v.form.code.numeric && $v.form.code.$dirty && 'bg-light',
          ]"
          placeholder="الكود"
        />
        <!-- Messages -->
        <!-- Required -->
        <p
          class="padding-x-2rem text-16 margin-top-1rem"
          v-if="!$v.form.code.required && $v.form.code.$dirty"
        >
          هذا الحقل مطلوب ادخاله
        </p>
        <!-- Error -->
        <p
          class="padding-x-2rem text-16"
          v-if="!$v.form.code.numeric && $v.form.code.$dirty"
        >
          يجب ادخال ارقام فقط
        </p>
      </div>
      <!--  -->
      <router-link
        v-if="nameRender === 'signIn'"
        v-slot="{ navigate, href }"
        custom
        :to="{ name: 'ForgetPassword' }"
      >
        <a
          role="question"
          class="text-18 text-black weight-bold margin-y-2rem"
          :href="href"
          @click="navigate"
          >هل نسيت كلمة السر ؟</a
        >
      </router-link>
      <!-- Submit -->
      <BtnPrimary
        class="width-276px padding-y-1rem text-18 lg-text-22 margin-top-2rem"
        type="submit"
        :disabled="statusDisabled"
        :nameBtn="nameBtn"
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
          "
        ></span>
      </BtnPrimary>
      <slot />
    </form>
  </section>
</template>

<script>
//
import { required, numeric, minLength, sameAs } from "vuelidate/lib/validators";
//
export default {
  name: "Form",
  props: {
    nameRender: {
      type: String,
      default: "signUp",
    },
    nameBtn: {
      type: String,
      required,
    },
    statusDisabled: {
      type: Boolean,
      default: false,
    },
    statusAlert: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      visible1: false,
      visible2: false,
      form: {
        name: null,
        phone: null,
        password: null,
        confirmPassword: null,
        code: null,
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
      password: {
        required,
        minLength: minLength(10),
      },
      confirmPassword: {
        samePassword: sameAs("password"),
      },
      code: {
        required,
        numeric,
      },
    },
  },
  methods: {
    submit() {
      // Check Form
      this.$v.$touch();

      //
      const { name, phone, password, confirmPassword, code } = this.form;

      /////////////////////////////////////////
      // Only sign up
      if (
        !this.$v.form.name.$invalid &&
        !this.$v.form.phone.$invalid &&
        !this.$v.form.password.$invalid &&
        !this.$v.form.confirmPassword.$invalid &&
        this.nameRender === "signUp"
      ) {
        //
        this.$emit("dataForm", {
          name,
          phone,
          password,
          confirm_password: confirmPassword,
        });
      }

      // Only sign in
      if (
        !this.$v.form.phone.$invalid &&
        !this.$v.form.password.$invalid &&
        this.nameRender === "signIn"
      ) {
        //
        this.$emit("dataForm", {
          phone,
          password,
        });
      }

      // Only forget password
      if (!this.$v.form.phone.$invalid && this.nameRender === "forget") {
        //
        this.$emit("dataForm", phone);
      }

      // Only password recovery
      if (!this.$v.form.code.$invalid) {
        //
        this.$emit("dataForm", code);
      }
    },
  },
};
</script>

<style lang="scss">
//
.register-icon {
  @include position("rt", $moveT: "50%", $moveR: "1.2rem");
}
</style>
