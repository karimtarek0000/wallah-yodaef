<template>
  <section
    role="register"
    class="
      register
      height-100vh
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
      <figure
        @click="goBack"
        class="d-flex align-items-center arrow-back position-abs cursor-pointer"
      >
        <GSvg class="svg-30 fill-black" nameIcon="angle-right" title="back" />
        <span class="weight-bold text-20 text-black">عودة</span>
      </figure>
      <!--  -->
      <figure role="logo" class="height-9rem margin-y-2rem">
        <img class="resize-img" src="/logo/logo-2.svg" alt="logo" />
      </figure>
      <!--  -->
      <h1
        role="description"
        class="
          lg-text-25
          xlg-text-40
          text-align-center
          bg-light-1
          trans-back
          lg-padding-y-2rem lg-align-self-stretch
          text-red-light
          weight-bold
        "
      >
        {{ $route.meta.head }}
      </h1>
    </div>
    <!-- Form -->
    <form
      @submit.stop=""
      class="
        bg-light-1
        d-flex
        flex-direction-column
        align-items-center
        xlg-justify-content-center xlg-basis-50
        lg-height-100vh lg-padding-top-2rem
      "
    >
      <!-- Phone -->
      <div
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
          v-model="$v.form.number.$model"
          :class="[
            'padding-y-1rem border-all-red-light padding-x-2rem xlg-text-18 text-22 weight-bold radius-100',
            !$v.form.number.required && $v.form.number.$dirty && 'bg-light',
            !$v.form.number.numeric && $v.form.number.$dirty && 'bg-light',
          ]"
          placeholder="رقم الجوال"
        />
        <!-- Messages -->
        <!-- Required -->
        <p
          class="padding-x-2rem text-16 margin-top-1rem"
          v-if="!$v.form.number.required && $v.form.number.$dirty"
        >
          هذا الحقل مطلوب ادخاله
        </p>
        <!-- Error -->
        <p
          class="padding-x-2rem text-16"
          v-if="!$v.form.number.numeric && $v.form.number.$dirty"
        >
          يجب ادخال ارقام فقط
        </p>
      </div>
      <!-- Password -->
      <div
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
                $v.form.password.$dirty &&
                'bg-light',
            ]"
            placeholder="كلمة السر"
          />
          <!--  -->
          <figure
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
          class="padding-x-2rem text-16"
          v-if="!$v.form.password.required && $v.form.password.$dirty"
        >
          هذا الحقل مطلوب ادخاله
        </p>
        <!-- Error -->
        <p
          role="error"
          class="padding-x-2rem text-16"
          v-if="!$v.form.password.minLength && $v.form.password.$dirty"
        >
          يجب الادخال لا يقل عن ١٠
        </p>
      </div>
      <!-- Confirm Password -->
      <div
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
      <!--  -->
      <BtnPrimary
        class="
          bg-red-light
          btn__red-light
          text-light
          width-276px
          padding-y-1rem
          radius-100
          text-18
          lg-text-22
        "
        type="submit"
        nameBtn="انشاء حساب"
      />
      <p role="qustion" class="text-22 xlg-text-16 margin-top-2rem">
        هل لديك حساب ؟
        <router-link
          class="text-red-light weight-bold"
          :to="{ name: 'SignIn' }"
        >
          تسجيل الدخول</router-link
        >
      </p>
    </form>
  </section>
</template>

<script>
//
import { required, numeric, minLength, sameAs } from "vuelidate/lib/validators";
//
export default {
  name: "Form",
  data() {
    return {
      visible1: false,
      visible2: false,
      form: {
        number: null,
        password: null,
        confirmPassword: null,
      },
    };
  },
  validations: {
    form: {
      number: {
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
    },
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss">
//
.register-icon {
  @include position("rt", $moveT: "50%", $moveR: "1.2rem");
}

//
.arrow-back {
  @include position("lt", $moveT: "36px", $moveL: "-7px");
  //
  @include BreakPoint(xlg) {
    @include position("lt", $moveT: "36px", $moveL: "15px");
  }
}
</style>
