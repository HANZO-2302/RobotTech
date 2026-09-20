<script setup lang="ts">
import { motion } from "motion-v";

const speakers = [
  {
    src: "/Elon Musk.png",
    alt: "Elon Musk",
    role: "Founder & CEO, SpaceX | CEO, Tesla",
    description:
      "Entrepreneur and business magnate known for his involvement in various technology companies including Tesla, Inc. and SpaceX.",
  },
  {
    src: "/Sam Altman.webp",
    alt: "Sam Altman",
    role: "CEO, OpenAI",
    description:
      "Technology entrepreneur and CEO of OpenAI, the company behind ChatGPT and other advanced artificial intelligence systems.",
  },

  {
    src: "/Dario Amodei.png",
    alt: "Dario Amodei",
    role: "Co-founder & CEO, Anthropic",
    description:
      "AI researcher and entrepreneur, co-founder and CEO of Anthropic, focused on developing reliable and safe artificial intelligence systems.",
  },
  {
    src: "/Marc Raibert.png",
    alt: "Marc Raibert",
    role: "Founder & Chairman, Boston Dynamics | Executive Director, RAI Institute",
    description:
      "Renowned robotics expert who founded Boston Dynamics, a leader in mobile robots. Currently leads the Robotics and Artificial Intelligence Institute (RAI Institute), founded in 2022, focused on advancing robotics and AI technologies.",
  },

  {
    src: "/Brett Adcock1.png",
    alt: "Brett Adcock",
    role: "Founder & CEO, Figure AI",
    description:
      "American entrepreneur who previously founded Vettery (HR marketplace) and Archer Aviation (eVTOL aircraft). Self-funded and launched robotics company Figure AI in 2022, serving as its CEO.",
  },
  {
    src: "/Wang Xingxing.png",
    alt: "Wang Xingxing",
    role: "Founder, CEO & CTO, Unitree Robotics",
    description:
      "Chinese roboticist and entrepreneur who founded Unitree Robotics in 2016. Graduated in mechatronics from Zhejiang Sci-Tech University and Shanghai University. Named to TIME's TIME100 AI list in 2025.",
  },
  {
    src: "/He Xiaopeng.png",
    alt: "He Xiaopeng",
    role: "Co-founder & CEO, XPeng Motors",
    description:
      "Leads Chinese electric vehicle manufacturer XPeng Motors, developing EVs and AI technologies. Actively positions XPeng IRON robots and flying cars as the next major market, estimating robotics potential at tens of trillions of dollars.",
  },
];

const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.96 },
  visible: (custom: unknown) => {
    const index = custom as number;
    return {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, delay: index * 0.08, ease: "easeOut" },
    };
  },
};
</script>

<template>
  <!-- <div class="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:45px_45px]"
 /> -->
  <div class="relative flex flex-1 flex-col items-start justify-start">
    <!-- Background -->
    <div
      class="pointer-events-none absolute right-0 bottom-0 z-0 w-full sm:w-auto"
    >
      <img
        src="/images/Dot_robottech_aligned.svg"
        alt=""
        class="block h-auto w-full object-contain object-bottom opacity-40 sm:h-screen"
      />
    </div>

    <div
      class="relative max-w-7xl w-full mx-auto flex flex-col items-start justify-center px-4"
    >
      <!-- Header -->
      <motion.div
        :initial="sectionVariants.hidden"
        :whileInView="sectionVariants.visible"
        :inViewOptions="{ once: true, amount: 0.25 }"
        class="mx-auto w-full sm:text-start mt-28 flex flex-col items-center justify-center"
      >
        <div class="relative w-full z-10">
          <h1
            class="text-[clamp(28px,5vw,64px)] text-start text-balance leading-[0.95] tracking-wide text-white/90"
          >
            World-class speakers shaping the future of robotics and AI
          </h1>
        </div>
        <div class="relative w-full my-4 z-10">
          <h2
            class="font-roboto font-extralight text-start text-[clamp(16px,3vw,26px)] text-white/90 tracking-wide"
          >
            <!-- text -->
          </h2>
        </div>
      </motion.div>

      <!-- Decktop -->
      <div class="relative max-w-7xl w-full hidden md:flex px-4">
        <motion.div
          :initial="{ opacity: 0 }"
          :whileInView="{ opacity: 1 }"
          :inViewOptions="{ once: true, amount: 0.25 }"
        >
          <div
            className="line absolute left-0 bottom-0  h-1/2 w-0.5  bg-linear-0 from-[#303030]  to-white/80 border/ pointer-events-none "
          >
            <!-- <NuxtImg src="/images/Rectangle.svg" alt="Line"></NuxtImg> -->
          </div>
          <div
            className="line absolute top-0 left-0 h-1/2 w-0.5  bg-linear-0 from-white/80  to-[#303030] pointer-events-none "
          ></div>
        </motion.div>
        <div
          class="relative w-full flex flex-col items-start justify-center gap-[3vw]"
        >
          <motion.div
            v-for="(speaker, index) in speakers"
            :key="speaker.src"
            :custom="index"
            :variants="cardVariants"
            initial="hidden"
            whileInView="visible"
            :inViewOptions="{ once: true, amount: 0.25 }"
            class="relative h-[8vw] w-full flex items-start justify-center mx-auto gap-[0.3vw] border/ pl-5"
          >
            <!-- Фото панель -->
            <div
              class="relative max-w-[12vw] w-full h-full flex items-center justify-center"
            >
              <div
                class="relative rounded-xs w-full h-full overflow-hidden bg-linear-to-b from-[#60827d] to-[#246057]"
              >
                <NuxtImg
                  :src="speaker.src"
                  :alt="speaker.alt"
                  class="absolute object-cover h-full w-auto bottom-0"
                />
              </div>
            </div>
            <!-- Описание панель -->
            <div
              class="relative h-full w-full flex flex-col justify-center items-start rounded-xs bg-linear-to-r from-[#5f5f5f] to-[#303030] px-[1vw] overflow-hidden"
            >
              <div
                class="relative flex flex-col items-start text-start font-display text-[clamp(10px,1.5vw,25px)] leading-[110%] text-white/80"
              >
                {{ speaker.alt }} <br />
                {{ speaker.role }}
              </div>
              <div
                class="relative mt-[1%] text-start font-roboto text-[clamp(4px,1vw,14px)] text-balance leading-[110%] text-white/80"
              >
                {{ speaker.description }}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <!-- Bottom CTA -->
      <div class="w-full">
        <motion.div
          :initial="{ opacity: 0, y: -30 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :inViewOptions="{ once: true }"
          :transition="{
            duration: 0.5,
            delay: 0.25,
            ease: 'easeOut',
          }"
          class="relative my-10 flex flex-col items-center md:items-start text-center justify-center"
        >
          <span class="text-sm font-sans uppercase text-white/80 sm:text-base">
            7+ Industry Leaders
          </span>
          <h3
            class="mb-1 text-sm font-sans uppercase text-white/80 sm:text-base"
          >
            International Conference · Berlin · October 2026 ·
          </h3>

          <motion.button
            :whileHover="{
              scale: 1.02,
              y: -2,
            }"
            :whilePress="{
              scale: 0.97,
            }"
            :transition="{
              duration: 0.2,
            }"
            type="button"
            class="group flex justify-center w-full max-w-sm relative overflow-hidden rounded-[5px] bg-linear-to-r from-[#429e90] to-[#286e64] text-left shadow-[0_8px_25px_rgba(0,0,0,0.2)]"
          >
            <NuxtLink
              to="/speakers"
              class="relative font-display text-[clamp(1.5rem,2vw,1.5rem)] p-5 uppercase text-white drop-shadow-md text-center w-full"
            >
              View Speakers

              <span
                class="absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 bg-white transition-transform duration-150 group-hover:scale-x-100"
              ></span>
            </NuxtLink>

            <span
              class="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full"
            ></span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  </div>
</template>

<style>
/* .font-roboto {
  font-family: Arial, sans-serif;
  font-weight: 100;
} */
/* .swiper-slide-active {
  opacity: 1;
  transition: opacity 0.1s ease-in-out;
}
.swiper-slide:not(.swiper-slide-active) {
  opacity: 0.5;
  transition: opacity 0.1s ease-in-out;
} */
/* .line {
  background-color: white;
} */
/* ==========================================
   ОБЩИЕ СТИЛИ SWIPER
   ========================================== */

.speakers-pagination {
  position: relative;
  bottom: auto;
  left: auto;
  right: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  width: 100%;
  /* margin-top: 0px; */
}

.swiper-pagination-bullet {
  width: 10px;
  height: 10px;
  margin: 0;
  border-radius: 9999px;
  background: #b1b1b1;
  opacity: 0.5;
  cursor: pointer;

  transition:
    width 0.3s ease-out,
    opacity 0.3s ease-out,
    background-color 0.3s ease-out;

  /* Аппаратное ускорение для всех браузеров */
  -webkit-transform: translateZ(0); /* Safari, iOS, старые браузеры */
  transform: translateZ(0); /* Современные браузеры */

  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;

  will-change: width, opacity;
}

.swiper-pagination-bullet-active {
  width: 24px;
  opacity: 1;
  background: #1f8a71;
}
/* .font-roboto {
  font-family: "Roboto", sans-serif;
  font-weight: 100;
} */
</style>
