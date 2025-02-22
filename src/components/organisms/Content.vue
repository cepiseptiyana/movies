<script setup>
import { reactive } from "vue";
import { movieDetail } from "@/service/index.js";
import { showDetailMovie } from "@/utils/index.js";
import Card from "../molecules/Card.vue";
import Paragraph from "../atoms/Paragraph.vue";
import Image from "../atoms/Image.vue";
import Heading from "../atoms/Heading.vue";
import Button from "../atoms/Button.vue";

// feather
import { icons } from "feather-icons";
const eye = icons["eye"].toSvg({ color: "white" });

defineProps({
  dataBangsat: Object,
  class_Button: String,
});

// ShowDetails
const showDetail = async (imdbID) => {
  showDetailMovie.data = await movieDetail.getFilm(imdbID);
  const wrapper__card__img = document.querySelectorAll(".wrapper-card .wrapper__card__img");

  wrapper__card__img.forEach((element) => {
    element.classList.add("responsive_Large");
    element.classList.add("responsive_Medium");
    element.classList.add("responsive_Small");
  });

  // console.log(showDetailMovie.data);
};
</script>

<template>
  <div class="container p-3">
    <div class="row">
      <div class="col-md">
        <div
          class="wrapper-card d-flex gap-1 align-items-center"
          v-if="dataBangsat.data.length != 0"
        >
          <div class="wrapper__card__img">
            <Image
              :src="dataBangsat.data[0].Poster"
              :alt="dataBangsat.data[0].Title"
              :class_value="dataBangsat.data[0].imdbID"
            />
            <Heading :text="dataBangsat.data[0].Title" />
            <div class="eye" v-html="eye" @click="showDetail(dataBangsat.data[0].imdbID)"></div>
          </div>

          <div class="wrapper__card__img">
            <Image
              :src="dataBangsat.data[1].Poster"
              :alt="dataBangsat.data[1].Title"
              :class_value="dataBangsat.data[1].imdbID"
            />
            <Heading :text="dataBangsat.data[1].Title" />
            <div class="eye" v-html="eye" @click="showDetail(dataBangsat.data[1].imdbID)"></div>
          </div>

          <div class="wrapper__card__img">
            <Image
              :src="dataBangsat.data[2].Poster"
              :alt="dataBangsat.data[2].Title"
              :class_value="dataBangsat.data[2].imdbID"
            />
            <Heading :text="dataBangsat.data[2].Title" />
            <div class="eye" v-html="eye" @click="showDetail(dataBangsat.data[2].imdbID)"></div>
          </div>

          <div class="wrapper__card__img">
            <Image
              :src="dataBangsat.data[3].Poster"
              :alt="dataBangsat.data[3].Title"
              :class_value="dataBangsat.data[3].imdbID"
            />
            <Heading :text="dataBangsat.data[3].Title" />
            <div class="eye" v-html="eye" @click="showDetail(dataBangsat.data[3].imdbID)"></div>
          </div>
        </div>

        <div
          class="wrapper-card d-flex gap-1 align-items-center"
          v-if="dataBangsat.data.length != 0"
        >
          <div class="wrapper__card__img">
            <Image
              :src="dataBangsat.data[4].Poster"
              :alt="dataBangsat.data[4].Title"
              :class_value="dataBangsat.data[4].imdbID"
            />
            <Heading :text="dataBangsat.data[4].Title" />
            <div class="eye" v-html="eye" @click="showDetail(dataBangsat.data[4].imdbID)"></div>
          </div>

          <div class="wrapper__card__img">
            <Image
              :src="dataBangsat.data[5].Poster"
              :alt="dataBangsat.data[5].Title"
              :class_value="dataBangsat.data[5].imdbID"
            />
            <Heading :text="dataBangsat.data[5].Title" />
            <div class="eye" v-html="eye" @click="showDetail(dataBangsat.data[5].imdbID)"></div>
          </div>

          <div class="wrapper__card__img">
            <Image
              :src="dataBangsat.data[6].Poster"
              :alt="dataBangsat.data[6].Title"
              :class_value="dataBangsat.data[6].imdbID"
            />
            <Heading :text="dataBangsat.data[6].Title" />
            <div class="eye" v-html="eye" @click="showDetail(dataBangsat.data[6].imdbID)"></div>
          </div>

          <div class="wrapper__card__img">
            <Image
              :src="dataBangsat.data[7].Poster"
              :alt="dataBangsat.data[7].Title"
              :class_value="dataBangsat.data[7].imdbID"
            />
            <Heading :text="dataBangsat.data[7].Title" />
            <div class="eye" v-html="eye" @click="showDetail(dataBangsat.data[7].imdbID)"></div>
          </div>
        </div>

        <div
          class="wrapper-card d-flex gap-1 align-items-center"
          v-if="dataBangsat.data.length != 0"
        >
          <div class="wrapper__card__img">
            <Image
              :src="dataBangsat.data[8].Poster"
              :alt="dataBangsat.data[8].Title"
              :class_value="dataBangsat.data[8].imdbID"
            />
            <Heading :text="dataBangsat.data[8].Title" />
            <div class="eye" v-html="eye" @click="showDetail(dataBangsat.data[8].imdbID)"></div>
          </div>

          <div class="wrapper__card__img">
            <Image
              :src="dataBangsat.data[9].Poster"
              :alt="dataBangsat.data[9].Title"
              :class_value="dataBangsat.data[9].imdbID"
            />
            <Heading :text="dataBangsat.data[9].Title" />
            <div class="eye" v-html="eye" @click="showDetail(dataBangsat.data[9].imdbID)"></div>
          </div>
        </div>
      </div>
      <div class="col-md" v-if="showDetailMovie.data.length != 0">
        <div class="container">
          <Image
            :src="showDetailMovie.data.Poster"
            :alt="showDetailMovie.data.imdbID"
            :class_value="showDetailMovie.data.imdbID"
          />

          <div class="wrapper_text">
            <Heading :text="'Title : ' + showDetailMovie.data.Title" class="capitalize" />
            <Heading :text="'Released : ' + showDetailMovie.data.Released" class="capitalize" />
            <Heading :text="'Country : ' + showDetailMovie.data.Country" class="capitalize" />
            <Heading :text="'Genre : ' + showDetailMovie.data.Genre" class="capitalize" />
            <Heading :text="'Director : ' + showDetailMovie.data.Director" class="capitalize" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
