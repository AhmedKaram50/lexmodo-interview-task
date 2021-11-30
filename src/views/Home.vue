<template>
  <div class="home">
    <section class="customer">
      <div class="container">
        <div class="heading">
          <div class="left">
            <fa-icon :icon="['fas', 'search']" />
            <input
              type="search"
              placeholder="Find Customer"
              @input="searchCustomer"
              v-model="searchValue"
            />
          </div>
          <div class="right">
            <div class="select-box">
              <div class="select-box__current" tabindex="1">
                <div class="select-box__value">
                  <input
                    class="select-box__input"
                    type="radio"
                    id="0"
                    value="1"
                    name="Ben"
                    checked="checked"
                  />
                  <p class="select-box__input-text">Filter By Name</p>
                </div>
                <img
                  class="select-box__icon"
                  src="http://cdn.onlinewebfonts.com/svg/img_295694.svg"
                  alt="Arrow Icon"
                  aria-hidden="true"
                />
              </div>
              <ul class="select-box__list">
                <li>
                  <label
                    class="select-box__option"
                    for="0"
                    aria-hidden="aria-hidden"
                    @click="
                      customers.sort((a, b) =>
                        a.name[0] >= b.name[0] ? 1 : -1
                      )
                    "
                    >Filter (A-Z)</label
                  >
                </li>
                <li>
                  <label
                    class="select-box__option"
                    for="0"
                    aria-hidden="aria-hidden"
                    @click="
                      customers.sort((a, b) =>
                        a.name[0] >= b.name[0] ? -1 : 1
                      )
                    "
                    >Filter (Z-A)</label
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="cards-holder">
          <customer-card
            v-for="customer in customers"
            :key="customer.id"
            :infoObj="customer.information"
            :name="customer.name"
            :nikName="customer.nik"
            :quote="customer.jobTitle"
            :imgSrc="customer.imgName"
          />
        </div>
        <div class="no-search" v-if="!customers.length">
          <h4>no customer found with the search criteria.</h4>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import customerCard from "../components/card.vue";
import customersData from "../customersDb.js";

export default {
  name: "Home",
  components: {
    customerCard,
  },
  data() {
    return {
      customers: [],
      searchValue: "",
      noSearch: true,
    };
  },
  methods: {
    searchCustomer(e) {
      const value = e.target.value.toLowerCase();
      // const customer = this.customers
      this.customers = customersData;
      this.customers = this.customers.filter((c) =>
        c.name.toLowerCase().includes(value)
      );
      console.log(this.customers);
    },
    sortCustomers() {
      const soso = this.customers.sort((a, b) =>
        a.name[0] >= b.name[0] ? 1 : -1
      );
      console.log(soso);
    },
  },
  created() {
    this.customers = customersData;
  },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
}

.home {
  background-color: #f2f5fa;
  min-height: calc(100vh - 60px);
  padding-bottom: 80px;
}

.cards-holder {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}

.customer {
  .heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 40px 0;
    .left {
      position: relative;
      svg {
        position: absolute;
        top: 12px;
        font-size: 14px;
        left: 8px;
        color: #444444;
      }
      input {
        background-color: #fff;
        border-radius: 4px;
        color: #202223;
        border: none;
        height: 40px;
        padding: 10px;
        padding-left: 30px;
        outline: none;
        width: 260px;
        box-shadow: 0 15px 30px -10px rgba(0, 0, 0, 0.1);
      }
    }
    .right {
      width: 100%;
      text-align: left;
    }
  }
}

@media (max-width: 1220px) {
  .container {
    max-width: 900px;
    margin: 0 auto;
  }
  .cards-holder {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }
}

@media (max-width: 915px) {
  .container {
    max-width: 100%;
    margin: 0 auto;
    padding: 0 20px;
  }
  .card {
    display: flex;
  }
  .cards-holder {
    display: grid;
    grid-template-columns: 1fr;
  }
}

.select-box {
  position: relative;
  display: block;
  width: 100%;
  margin-left: auto;
  font-family: "Open Sans", "Helvetica Neue", "Segoe UI", "Calibri", "Arial",
    sans-serif;
  font-size: 18px;
  color: #60666d;
  z-index: 10;
}
@media (min-width: 768px) {
  .select-box {
    width: 70%;
  }
}
@media (min-width: 992px) {
  .select-box {
    width: 50%;
  }
}
@media (min-width: 1200px) {
  .select-box {
    width: 20%;
  }
}
.select-box__current {
  position: relative;
  box-shadow: 0 15px 30px -10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  outline: none;
}
.select-box__current:focus + .select-box__list {
  opacity: 1;
  -webkit-animation-name: none;
  animation-name: none;
}
.select-box__current:focus + .select-box__list .select-box__option {
  cursor: pointer;
}
.select-box__current:focus .select-box__icon {
  transform: translateY(-50%) rotate(180deg);
}
.select-box__icon {
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  width: 20px;
  opacity: 0.3;
  transition: 0.2s ease;
}
.select-box__value {
  display: flex;
}
.select-box__input {
  display: none;
}
.select-box__input:checked + .select-box__input-text {
  display: block;
}
.select-box__input-text {
  display: none;
  width: 100%;
  margin: 0;
  padding: 15px;
  background-color: #fff;
  width: 100%;
  margin: 0;
  padding: 8px 15px;
  font-size: 16px;
  color: #959595;
}
.select-box__list {
  position: absolute;
  width: 100%;
  padding: 0;
  list-style: none;
  opacity: 0;
  -webkit-animation-name: HideList;
  animation-name: HideList;
  -webkit-animation-duration: 0.5s;
  animation-duration: 0.5s;
  -webkit-animation-delay: 0.5s;
  animation-delay: 0.5s;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  -webkit-animation-timing-function: step-start;
  animation-timing-function: step-start;
  box-shadow: 0 15px 30px -10px rgba(0, 0, 0, 0.1);
  li {
    font-size: 15px !important;
  }
}
.select-box__option {
  display: block;
  padding: 15px;
  background-color: #fff;
}
.select-box__option:hover,
.select-box__option:focus {
  color: #546c84;
  background-color: #fbfbfb;
}

@-webkit-keyframes HideList {
  from {
    transform: scaleY(1);
  }
  to {
    transform: scaleY(0);
  }
}

@keyframes HideList {
  from {
    transform: scaleY(1);
  }
  to {
    transform: scaleY(0);
  }
}
</style>
