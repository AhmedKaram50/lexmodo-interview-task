<template>
  <div class="card">
    <div class="card-image">
      <div class="img-holer">
        <div class="actions">
          <button>Edit</button>
          <button>View</button>
        </div>
        <img :src="require(`../assets/images/${imgSrc}`)" alt="Customer" />
      </div>
    </div>
    <div class="card-body">
      <h3>{{ name }}</h3>
      <span>@{{ nikName }}</span>
      <small>"{{ quote }}"</small>
      <ul>
        <li>
          <fa-icon :icon="['fas', 'envelope']" />
          <p>{{ infoObj.email }}</p>
        </li>
        <li>
          <fa-icon :icon="['fas', 'map-marker-alt']" />
          <p>{{ infoObj.adress }}</p>
        </li>
        <li>
          <fa-icon :icon="['fas', 'phone']" />
          <p>{{ infoObj.phone }}</p>
        </li>
        <li>
          <fa-icon :icon="['fas', 'globe']" />
          <p>{{ infoObj.website }}</p>
        </li>
        <li>
          <fa-icon :icon="['fas', 'building']" />
          <p>{{ infoObj.company }}</p>
        </li>
        <li>
          <fa-icon :icon="['fas', 'suitcase']" />
          <p>{{ infoObj.jobTitle }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["infoObj", "name", "nikName", "quote", "imgSrc"],
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;1,300&display=swap");
@import "../assets/config";

.card {
  font-family: "Roboto", sans-serif;
  background-color: #fff;
  border-radius: 6px;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
  .card-image {
    .img-holer {
      height: 280px;
      overflow: hidden;
      position: relative;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all 0.3s ease-in-out;
        position: relative;
      }
      .actions {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.2);
        z-index: 1;
        transition: all 0.3s ease-in-out;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        opacity: 0;
        button {
          font-family: "Roboto", sans-serif;
          &:first-child {
            @include make-button(#fff, 17px, auto, "low", "none");
            color: #1575bf;
          }
          &:last-child {
            @include make-button(#1575bf, 17px, auto, "low", "none");
          }
        }
      }
    }
  }
  .card-body {
    text-align: left;
    padding: 15px;
    h3 {
      font-size: 22px;
      font-weight: 700;
      margin-bottom: 2px;
    }
    span {
      color: #9e9e9e;
      font-size: 14px;
    }
    small {
      display: block;
      color: #51c5ff;
      margin: 20px 0;
      font-size: 15px;
      font-weight: 400;
      font-family: $main-font;
    }
    ul {
      padding: 0;
      list-style: none;
      li {
        display: flex;
        margin: 22px 0;
        p {
          margin-left: 10px;
          color: #4c3f45;
          font-size: 14px;
          font-weight: 100;
        }
        svg {
          color: #015989;
        }
      }
    }
  }
  &:hover {
    transform: translateY(-9px);
    box-shadow: $main-shadow;
    img {
      transform: scale(1.2);
    }
  }
}

.card:hover {
  .card-image .img-holer .actions {
    opacity: 1;
  }
}

@media (max-width: 915px) {
  .card:nth-child(odd) .card-image {
    order: 1;
  }
  .card-image{
    width: 50%;
  }
  .card-body{
    width: 50%;
    padding: 20px !important;
    h3{
      font-size: 16px !important
    }
    span{
      font-size: 12px !important
    }
    small{
      font-size: 12px !important;
      margin: 10px 0 !important;
    }
    ul li{
      margin: 14px 0 !important;
      p{
        font-size: 12px !important
      }
      svg{
        font-size: 12px
      }
    }
  }
  .img-holer {
    height: 100% !important;
  }
}
</style>
