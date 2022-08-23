<template>
  <div class="form-area">
    <div class="main-title">
      <h2>{{ $t("contact") }}<span class="line"></span></h2>
    </div>
    <div class="contact-box">
      <div class="form-content">
        <form
          class="g-3 needs-validation"
          action
          @submit.prevent="handleContactForm"
        >
          <div class="row">
            <div class="col-lg-6">
              <div class="form-group position-relative">
                <input
                  class="form-control"
                  type="text"
                  :placeholder="$t('name')"
                  v-model="contactFormData.name"
                  v-on:keyup="namemonitor"
                />
                <div
                  class="invalid-feedback d-block"
                  id="name_error"
                  v-if="contactErrors.name && !sent"
                  v-for="(error, index) in contactErrors.name"
                  :key="index"
                >
                  {{ error }}
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="form-group position-relative">
                <input
                  class="form-control"
                  type="number"
                  :placeholder="$t('phone')"
                  v-model="contactFormData.phone"
                  v-on:keyup="phoneMonitor"
                />
                <div
                  class="invalid-feedback d-block"
                  v-if="contactErrors.phone && !sent"
                  id="phone_error"
                  v-for="(error, index) in contactErrors.phone"
                  :key="index"
                >
                  {{ error }}
                </div>
              </div>
            </div>
            <div class="col-lg-12">
              <div class="form-group position-relative">
                <div class="input-group has-validation">
                  <input
                    class="form-control"
                    type="email"
                    :placeholder="$t('email')"
                    v-model="contactFormData.email"
                    v-on:keyup="emailMonitor"
                  />
                  <div
                    class="invalid-feedback d-block"
                    v-if="contactErrors.email && !sent"
                    id="email_error"
                    v-for="(error, index) in contactErrors.email"
                    :key="index"
                  >
                    {{ error }}
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-12">
              <div class="form-group position-relative">
                <textarea
                  class="form-control"
                  rows="6"
                  v-model="contactFormData.message"
                  :placeholder="$t('yourmessage')"
                  v-on:keyup="messageMonitor"
                ></textarea>
                <div
                  class="invalid-feedback d-block"
                  v-if="contactErrors.message && !sent"
                  id="comment_error"
                  v-for="(error, index) in contactErrors.message"
                  :key="index"
                >
                  {{ error }}
                </div>
              </div>
            </div>
            <div class="col-lg-12 text-center">
              <div class="form-group contact-btn">
                <div class="outer-btn">
                  <button class="btn" type="submit">
                    <span>{{ $t("send") }}</span>
                  </button>
                </div>
              </div>
            </div>
            <div class="col-lg-12" v-if="sent">
              <div class="text-center">
                <p class="successfully">{{ $t("Message_send") }}</p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "contactForm",

  data() {
    return {
      sent: false,
      contactFormData: {
        name: null,
        phone: null,
        email: null,
        message: null,
      },
      contactErrors: {
        name: null,
        email: null,
        phone: null,
        message: null,
      },
    };
  },

  methods: {

    ...mapActions(["storeFormData"]),
    handleContactForm(e) {
      this.sending = true;
      this.sent = null;
      this.storeFormData(this.contactFormData).then(() => {
        if (!this.$store.state.contactErrorsApi) {
          e.target.reset();
          this.sent = true;
          this.contactFormData.name = null;
          this.contactFormData.email = null;
          this.contactFormData.phone = null;
          this.contactFormData.message = null;
        } else {
          this.sent = null;
          let errors = this.$store.state.contactErrorsApi.data.data;
          this.contactErrors.name = errors.name;
          this.contactErrors.email = errors.email;
          this.contactErrors.phone = errors.phone;
          this.contactErrors.message = errors.message;
        }
      });
    },

  },
};
</script>

<style>
</style>