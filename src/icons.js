import Vue from "vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
  faUserSecret,
  faSpinner,
  faHome,
  faTag,
  faMailBulk,
  faNewspaper,
  faEnvelope,
  faReply,
  faChevronDown,
  faSearch,
  faLocationArrow,
  faMapMarkerAlt,
  faPhone,
  faGlobe,
  faSuitcase,
  faBuilding
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faUserSecret,
  faSpinner,
  faHome,
  faTag,
  faMailBulk,
  faNewspaper,
  faEnvelope,
  faReply,
  faChevronDown,
  faSearch,
  faLocationArrow,
  faMapMarkerAlt,
  faPhone,
  faGlobe,
  faSuitcase,
  faBuilding
);

Vue.component("fa-icon", FontAwesomeIcon);
