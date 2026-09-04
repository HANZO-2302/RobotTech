<script setup lang="ts">
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import { z } from "zod";
import { toast } from "vue-sonner";

// ─── Zod schema ──────────────────────────────────────────────
const schema = z.object({
  name: z
    .string()
    .min(3, "Имя должно содержать минимум 3 символа")
    .max(50, "Имя слишком длинное")
    .regex(/^[a-zA-Zа-яА-ЯёЁ\s]+$/, "Имя может содержать только буквы"),
  phone: z
    .string()
    .min(7, "Введите корректный номер телефона")
    .regex(/^[\d\s+\-()]+$/, "Только цифры и спецсимволы"),
  email: z.string().email("Введите корректный email"),
  message: z
    .string()
    .min(10, "Опишите задачу подробнее (минимум 10 символов)")
    .max(1000, "Сообщение слишком длинное"),
  terms: z.boolean().refine((val) => val === true, {
    message: "Необходимо принять условия обработки персональных данных",
  }),
});

type FormValues = z.infer<typeof schema>;

const { handleSubmit, defineField, errors, resetForm, isSubmitting } =
  useForm<FormValues>({
    validationSchema: toTypedSchema(schema),
    initialValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
      terms: false,
    },
  });

const [name, nameAttrs] = defineField("name");
const [phone, phoneAttrs] = defineField("phone");
const [email, emailAttrs] = defineField("email");
const [message, messageAttrs] = defineField("message");
const [terms] = defineField("terms");

const showSpinner = ref(false);

async function sendMail(data: FormValues) {
  return await $fetch<{ success: boolean }>("/api/contact", {
    method: "POST",
    body: data,
  }).catch((err) => {
    // Nuxt/ofetch кладёт тело ошибки в err.data
    const message = err?.data?.message || "Ошибка отправки";
    throw new Error(message);
  });
}

const onSubmit = handleSubmit(async (values) => {
  showSpinner.value = true;
  try {
    await sendMail(values);
    toast.success("Заявка отправлена!", {
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    resetForm();
  } catch (err: unknown) {
    const message =
      err instanceof Error
        ? err.message
        : "Please try again later or contact us directly.";
    toast.error("Не удалось отправить", { description: message });
  } finally {
    setTimeout(() => (showSpinner.value = false), 300);
  }
});

const inputBase =
  "w-full bg-gray-200 rounded-xl px-4 py-3 outline-none transition focus:ring-2 focus:ring-[#5e9463] placeholder:text-gray-500 text-gray-800";
const errorText =
  "text-red-300 text-[0.7rem] md:text-[0.5rem] ml-2 translate-y- h-1.5 block";
</script>

<template>
  <section
    id="form"
    class="bg-[#2f5d3a] flex mt-14 justify-center md:py-20 md:px-10 py-10 px-4"
  >
    <div
      class="max-w-5xl w-full flex flex-col lg:flex-row justify-between items-start gap-10"
    >
      <!-- LEFT -->
      <div class="max-w-full md:max-w-150 md:mt-5 text-white">
        <h1
          class="relative text-3xl md:text-left sm:text-4xl lg:text-5xl lg:bottom-6 font-medium mb-5"
        >
          lorem ipsum dolor sit amet <br />
          lorem ipsum dolor sit <br />
          Sed do eiusmod tempor
        </h1>

        <p
          class="relative text-sm font-light sm:text-lg lg:text-xl lg:bottom-6 text-white/80 leading-7 mb-9"
        >
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>

        <div class="flex md:mt-14 md:justify-start justify-center items-center gap-9">
          <a href="https://t.me/your_username" target="_blank" rel="noopener noreferrer">
            <img
              src="/Telegramm.svg"
              alt="Telegram"
              width="50"
              height="50"
              class="w-10 h-10 object-contain hover:scale-110 hover:-translate-y-2 transition-all duration-200 ease-in-out drop-shadow-lg"
            />
          </a>
          <a href="https://wa.me/your_number" target="_blank" rel="noopener noreferrer">
            <img
              src="/Whatsapp.svg"
              alt="Whatsapp"
              width="50"
              height="50"
              class="w-10 h-10 object-contain hover:scale-110 hover:-translate-y-2 transition-all duration-200 ease-in-out drop-shadow-lg"
            />
          </a>
          <a href="https://max.ru/u/ВАШ_ХЕШИ" target="_blank" rel="noopener noreferrer">
            <img
              src="/Max.svg"
              alt="Max"
              width="50"
              height="50"
              class="w-10 h-10 object-contain hover:scale-110 hover:-translate-y-2 transition-all duration-200 ease-in-out drop-shadow-lg"
            />
          </a>
        </div>
      </div>

      <!-- RIGHT — FORM -->
      <form
        novalidate
        class="w-full lg:max-w-lg flex flex-col gap-2"
        @submit.prevent="onSubmit"
      >
        <!-- Имя + Телефон -->
        <div class="flex flex-col sm:flex-row gap-2 md:gap-3.5">
          <div class="w-full">
            <input
              v-model="name"
              v-bind="nameAttrs"
              type="text"
              placeholder="Имя"
              :class="inputBase"
            />
            <p :class="errorText">{{ errors.name ?? "" }}</p>
          </div>
          <div class="w-full">
            <input
              v-model="phone"
              v-bind="phoneAttrs"
              type="tel"
              placeholder="Номер тел."
              :class="inputBase"
            />
            <p :class="errorText">{{ errors.phone ?? "" }}</p>
          </div>
        </div>

        <!-- Email -->
        <div>
          <input
            v-model="email"
            v-bind="emailAttrs"
            type="email"
            placeholder="Электронная почта"
            :class="inputBase"
          />
          <p :class="errorText">{{ errors.email ?? "" }}</p>
        </div>

        <!-- Сообщение -->
        <div>
          <textarea
            v-model="message"
            v-bind="messageAttrs"
            placeholder="Опишите задачу"
            rows="4"
            :class="`${inputBase} resize-none`"
          />
          <p :class="`${errorText} -mt-1.5`">{{ errors.message ?? " " }}</p>
        </div>

        <!-- Чекбокс -->
        <div class="ring-1 mb-2 ring-white/40 rounded-lg p-3">
          <div class="flex items-center gap-2">
            <input
              id="terms-checkbox"
              v-model="terms"
              type="checkbox"
              class="w-4 h-4 rounded border-white/60 accent-[#6fa773]"
            />
            <label
              for="terms-checkbox"
              class="text-white/70 text-[0.6rem] font-normal cursor-pointer"
            >
              I accept the terms of personal data processing.
              <a
                href="/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                class="underline underline-offset-2 font-extralight text-[0.6rem] text-[#a8d5ac] hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
            </label>
          </div>
        </div>

        <button
          type="submit"
          :disabled="isSubmitting || showSpinner || !terms"
          class="group relative flex items-center justify-center bg-[#6fa773] hover:bg-[#5e9463] disabled:opacity-90 disabled:cursor-not-allowed text-white py-4 rounded-full text-base sm:text-lg transition"
        >
          <div class="flex items-center justify-center gap-2">
            <span
              class="w-5 h-5 border-2 border-white border-b-transparent border-t-transparent rounded-full animate-spin transition-opacity duration-300"
              :class="showSpinner ? 'opacity-100' : 'opacity-0'"
            />
            <span
              class="whitespace-nowrap transition-opacity duration-300"
              :class="showSpinner ? 'opacity-100' : 'opacity-0'"
            >
              Sending...
            </span>
          </div>

          <span
            class="absolute whitespace-nowrap transition-opacity text-shadow-xs duration-300"
            :class="showSpinner || !terms ? 'opacity-0' : 'opacity-100'"
          >
            Take part
          </span>

          <span
            class="absolute whitespace-nowrap transition-opacity text-shadow-sm duration-300"
            :class="!terms ? 'opacity-100' : 'opacity-0'"
          >
            You must accept the terms
          </span>
        </button>
      </form>
    </div>
  </section>
</template>