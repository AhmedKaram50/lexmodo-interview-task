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
$main-color: #fc846b;
$second-color: #444;
$third-color: #e9bfad;
$fourth-color: #08548e;
$bg-color: #f9fafa;
$main-shadow: 0 10px 10px 20px #b0b8d617, 10px 10px 15px -5px #b0b8d6;
$section-width: 70%;
$greeen-color: #2bc155;
$red-color: #f35757;
$main-font: 'Roboto', sans-serif;
$body-color: #f5f5f5;
/* ====================== Start Global Styling ====================== */
// Disable Input Type Number Arrows
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
/* ====================== End Global Styling ====================== */
/* ====================== Start Buttons Main Styling ====================== */
%btn {
  font-family: $main-font;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid #0000;
  padding: 7px 18px;
  transition: all 0.15s ease-in-out;
  outline: none;
  cursor: pointer;
  text-decoration: none;
}

%img-props{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
// Make Color Depend On Background Color Lightness
@function color-depend-bg($color) {
  @if (lightness($color) > 70) {
    @return $main-color;
  } @else {
    @return #fff;
  }
}

// Border Radius Maker
@function radius($state) {
  @if ($state == "rounded") {
    @return 50%;
  } @else if ($state == "low") {
    @return 4px;
  } @else if ($state == "medium") {
    @return 10px;
  } @else if ($state == "high") {
    @return 30px;
  } @else {
    @return 0px;
  }
}

// Hover Transition
@function transform-kind($kind) {
  @if ($kind == "grow") {
    @return scale(1.08);
  } @else if ($kind == "shrink") {
    @return scale(0.92);
  } @else {
    @return none;
  }
}

// Buttons Generator
@mixin make-button($bg, $size, $width, $radius, $hover) {
  @extend %btn;
  &:hover {
    transform: transform-kind($hover);
  }
  background-color: $bg;
  color: color-depend-bg($bg);
  font-size: $size;
  width: $width;
  border-radius: radius($radius);
}
/* ====================== End Buttons Main Styling ====================== */
/* ====================== Start Positioning ====================== */
%flex-center{
  display: flex;
  justify-content: center;
  align-items: center;
}
/* ====================== End Positioning ====================== */
/* ====================== Start Utilities ====================== */
// Layout Generator
%my-layout{
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  background-color: #000;
}

@mixin make-layout($color, $opacity) {
  @extend %my-layout;
  background-color: rgba($color, $opacity)
}
/* ====================== End Utilities ====================== */

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
