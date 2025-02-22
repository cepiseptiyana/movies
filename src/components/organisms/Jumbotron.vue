<script setup>
import { ref, onMounted } from "vue";

import Image from "../atoms/Image.vue";
import Paragraph from "../atoms/Paragraph.vue";
import Heading from "../atoms/Heading.vue";

// feather
import { icons } from "feather-icons";
const chevron_L = icons["chevron-left"].toSvg({ color: "white" });
const chevron_R = icons["chevron-right"].toSvg({ color: "white" });

// DB
import { film } from "@/service";
import { movieDetail } from "@/service";

// PROPS CHILD
// REAKTIIFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF
const movie = ref([{}]);
const showAvengersDetail = ref([{}]);

// GET API
onMounted(async () => {
  const avengers = await film.getFilm("avengers");
  const tt0848228 = await movieDetail.getFilm("tt0848228");
  const tt4154796 = await movieDetail.getFilm("tt4154796");
  const tt4154756 = await movieDetail.getFilm("tt4154756");
  const tt2395427 = await movieDetail.getFilm("tt2395427");
  const tt0118661 = await movieDetail.getFilm("tt0118661");
  const tt1626038 = await movieDetail.getFilm("tt1626038");
  const tt0491703 = await movieDetail.getFilm("tt0491703");
  const tt0054518 = await movieDetail.getFilm("tt0054518");
  const tt0803093 = await movieDetail.getFilm("tt0803093");
  const tt2455546 = await movieDetail.getFilm("tt2455546");

  movie.value = avengers;
  showAvengersDetail.value = [tt0848228];
  showAvengersDetail.value.push(tt4154796);
  showAvengersDetail.value.push(tt4154756);
  showAvengersDetail.value.push(tt2395427);
  showAvengersDetail.value.push(tt0118661);
  showAvengersDetail.value.push(tt1626038);
  showAvengersDetail.value.push(tt0491703);
  showAvengersDetail.value.push(tt0054518);
  showAvengersDetail.value.push(tt0803093);
  showAvengersDetail.value.push(tt2455546);
  // console.log([tt0848228]);
});

// SLIDE JUMBOTRON
const indexImage = ref(0);
function left_Btn_slide(movieBtn) {
  indexImage.value <= 0 ? (indexImage.value = movieBtn.length - 1) : indexImage.value--;
}

function right_Btn_slide(movieBtn) {
  indexImage.value >= movieBtn.length - 1 ? (indexImage.value = 0) : indexImage.value++;
}
</script>

<template>
  <div class="row">
    <div class="col-md">
      <div class="container wrapper_img">
        <Image
          :src="movie[indexImage].Poster"
          :alt="movie[indexImage].Title"
          class_value="image__jumbotron"
        />
      </div>
    </div>
    <div class="col-md position-relative text-center">
      <div class="container">
        <Heading :text="showAvengersDetail[indexImage].Title" class="text-dark" />
        <Paragraph :text="showAvengersDetail[indexImage].Plot" class_value="text-dark" />
        <div class="jumbotron__BtnL" v-html="chevron_L" @click="left_Btn_slide(movie)"></div>
        <div class="jumbotron__BtnR" v-html="chevron_R" @click="right_Btn_slide(movie)"></div>
      </div>
    </div>
  </div>
</template>
