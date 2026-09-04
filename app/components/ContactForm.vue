<script setup lang="ts">
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import { z } from "zod";
import { toast } from "vue-sonner";
import { ref } from "vue";
import {
  TransitionRoot,
  Dialog,
  DialogTitle,
  DialogDescription,
  DialogPanel,
} from "@headlessui/vue";

// ─── Dialog ──────────────────────────────────────────────
const isOpen = ref(false);

function setIsOpen(value: boolean) {
  isOpen.value = value;
}

function openModal() {
  setIsOpen(true);
}

// ─── Zod schema ──────────────────────────────────────────────
const schema = z.object({
  name: z
    .string()
    .min(3, "The name must contain at least 3 characters.")
    .max(50, "The name is too long.")
    .regex(/^[a-zA-Zа-яА-ЯёЁ\s]+$/, "The name can only contain letters."),
  phone: z
    .string()
    .min(7, "Please enter a valid phone number")
    .regex(/^[\d\s+\-()]+$/, "Only digits and special characters"),
  email: z.string().email("Please enter a valid email"),
  message: z
    .string()
    .min(10, "Please write a more detailed message (minimum 10 characters).")
    .max(1000, "The message is too long"),
  terms: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms of personal data processing",
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
    const message = err?.data?.message || "Sending error";
    throw new Error(message);
  });
}

const onSubmit = handleSubmit(async (values) => {
  showSpinner.value = true;
  try {
    await sendMail(values);
    toast.success("Request sent!", {
      description: "We will contact you as soon as possible.",
    });
    resetForm();
  } catch (err: unknown) {
    const message =
      err instanceof Error
        ? err.message
        : "Please try again later or contact us directly.";
    toast.error("Failed to send", { description: message });
  } finally {
    setTimeout(() => (showSpinner.value = false), 300);
  }
});

const inputBase =
  "w-full bg-gray-200 rounded-xl px-4 py-3 outline-none transition focus:ring-2 focus:ring-[#5e9463] placeholder:text-gray-500 text-gray-800";
const errorText =
  "text-red-300 text-[0.7rem] md:text-[0.5rem] ml-2 translate-y- h-1.5 block font-roboto font-light";
</script>

<template>
  <section
    id="form"
    class="flex mt-14 justify-center md:py-20 md:px-10 py-10 px-4"
  >
    <div
      class="max-w-5xl w-full flex flex-col lg:flex-row justify-between items-start gap-10"
    >
      <!-- LEFT -->
      <div class="max-w-full md:max-w-150 md:mt-5 text-white">
        <h1
          class="relative text-3xl md:text-left sm:text-4xl lg:text-4xl lg:bottom-6 font-medium mb-5"
        >
          lorem ipsum dolor sit amet <br />
          lorem ipsum dolor sit <br />
          Sed do eiusmod tempor
        </h1>

        <p
          class="relative text-sm font-light sm:text-lg lg:text-md lg:bottom-6 text-white/80 leading-7 mb-9"
        >
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div
          class="flex md:mt-14 md:justify-start justify-center items-center gap-9"
        >
          <a
            href="https://t.me/your_username"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/Telegramm.svg"
              alt="Telegram"
              width="50"
              height="50"
              class="w-10 h-10 object-contain hover:scale-110 hover:-translate-y-2 transition-all duration-200 ease-in-out drop-shadow-lg"
            />
          </a>
          <a
            href="https://wa.me/your_number"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/Whatsapp.svg"
              alt="Whatsapp"
              width="50"
              height="50"
              class="w-10 h-10 object-contain hover:scale-110 hover:-translate-y-2 transition-all duration-200 ease-in-out drop-shadow-lg"
            />
          </a>
          <a
            href="https://max.ru/u/ВАШ_ХЕШИ"
            target="_blank"
            rel="noopener noreferrer"
          >
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
              placeholder="Name"
              :class="inputBase"
            />
            <p :class="errorText">{{ errors.name ?? "" }}</p>
          </div>
          <div class="w-full">
            <input
              v-model="phone"
              v-bind="phoneAttrs"
              type="tel"
              placeholder="Phone number"
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
            placeholder="Email"
            :class="inputBase"
          />
          <p :class="errorText">{{ errors.email ?? "" }}</p>
        </div>

        <!-- Сообщение -->
        <div>
          <textarea
            v-model="message"
            v-bind="messageAttrs"
            placeholder="Write a message"
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
              <button
                type="button"
                @click="openModal"
                class="text-white/70 text-[0.6rem] font-normal underline underline-offset-2 hover:text-white transition-colors"
              >
                Privacy Policy
              </button>
              <TransitionRoot
                :show="isOpen"
                as="template"
                enter="duration-300 ease-out"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="duration-900 ease-in"
                leave-from="opacity-100"
                leave-to="opacity-0"
              >
                <Dialog :open="isOpen" @close="setIsOpen" class="relative z-50">
                  <!-- The backdrop, rendered as a fixed sibling to the panel container -->
                  <div class="fixed inset-0 bg-black/30" aria-hidden="true" />

                  <!-- Full-screen scrollable container -->
                  <div class="fixed inset-0 w-screen overflow-y-auto">
                    <!-- Container to center the panel -->
                    <div
                      class="flex min-h-full items-center justify-center p-4"
                    >
                      <!-- The actual dialog panel -->
                      <DialogPanel class="w-full max-w-sm rounded bg-white">
                        <DialogTitle>Privacy Policy</DialogTitle>
                        <!-- {/* Скроллящийся контент */} -->
                        <div
                          className="no-scrollbar max-h-[60vh] overflow-y-auto px-6 py-4"
                        >
                          <div
                            className="text-sm text-gray-700 leading-relaxed space-y-6"
                          >
                            <header className="text-center pb-2">
                              <h2
                                className="text-base font-bold text-gray-900 uppercase tracking-wide"
                              >
                                Политика в отношении обработки персональных
                                данных
                              </h2>
                            </header>

                            <section>
                              <h3 className="font-semibold text-gray-900 mb-2">
                                1. Общие положения
                              </h3>
                              <p>
                                Настоящая политика составлена в соответствии с
                                требованиями Федерального закона от 27.07.2006.
                                №152-ФЗ «О персональных данных» и определяет
                                порядок обработки и меры по обеспечению
                                безопасности, предпринимаемые
                                <strong>
                                  {" "} Ивановым Иваном Ивановичем </strong
                                >{" "} (далее — Оператор).
                              </p>
                              <ul className="list-disc pl-5 mt-2 space-y-1">
                                <li>
                                  Оператор ставит своей целью соблюдение прав и
                                  свобод человека при обработке его персональных
                                  данных.
                                </li>
                                <li>
                                  Политика применяется ко всей информации,
                                  которую Оператор может получить о посетителях
                                  веб-сайта{" "}
                                  <span className="text-blue-600">
                                    https://www.my-site.ru/
                                  </span>
                                  .
                                </li>
                              </ul>
                            </section>

                            <section>
                              <h3 className="font-semibold text-gray-900 mb-2">
                                2. Основные понятия
                              </h3>
                              <p>
                                <strong>Персональные данные</strong> — любая
                                информация, относящаяся к определенному
                                Пользователю веб-сайта.
                                <strong>Обработка</strong> — сбор, запись,
                                накопление, хранение, передача и удаление
                                данных.
                              </p>
                            </section>

                            <section>
                              <h3 className="font-semibold text-gray-900 mb-2">
                                3. Обрабатываемые данные
                              </h3>
                              <p>
                                Через форму обратной связи на сайте могут
                                собираться:
                              </p>
                              <ul
                                className="list-disc pl-5 mt-2 space-y-1 font-medium"
                              >
                                <li>Имя;</li>
                                <li>Адрес электронной почты;</li>
                                <li>Номер телефона;</li>
                                <li>Иная добровольно указанная информация.</li>
                              </ul>
                            </section>

                            <section>
                              <h3 className="font-semibold text-gray-900 mb-2">
                                4. Цели и безопасность
                              </h3>
                              <p>
                                Цель обработки — уточнение деталей запроса и
                                предоставление консультаций. Передача данных
                                осуществляется через{" "}
                                <strong>
                                  протокол SMTP с шифрованием SSL/TLS </strong
                                >{" "} (сервис Яндекс.Почта). Данные никогда не
                                будут переданы третьим лицам без законных
                                оснований.
                              </p>
                            </section>

                            <section>
                              <h3 className="font-semibold text-gray-900 mb-2">
                                5. Срок обработки и отзыв
                              </h3>
                              <p>
                                Срок обработки данных неограничен. Вы можете в
                                любой момент отозвать свое согласие, направив
                                письмо на электронную почту:{" "}
                                <a
                                  href="mailto:mail@yandex.ru"
                                  className="text-blue-600 underline"
                                >
                                  mail@yandex.ru
                                </a>
                                .
                              </p>
                            </section>
                            <footer
                              className="pt-4 border-t border-gray-200 space-y-2"
                            >
                              <p className="text-xs text-gray-500">
                                Актуальная версия Политики доступна по адресу:
                                https://www.my-site.ru/
                              </p>
                              <div
                                className="text-sm text-gray-700 font-medium pt-2"
                              >
                                <p>Оператор: Иванов Иван Иванович</p>
                                <p>Контактный адрес: mail@yandex.ru</p>
                              </div>
                            </footer>
                          </div>
                        </div>
                        <!-- {/* Разделитель */} -->
                        <div className="w-full border-b border-gray-500"></div>

                        <!-- ... -->
                         <button @click="isOpen = false">Close</button>
                      </DialogPanel>
                      
                    </div>
                  </div>
                </Dialog>
              </TransitionRoot>
              <!-- <a
                href="/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                class="underline underline-offset-2 font-extralight text-[0.6rem] text-[#a8d5ac] hover:text-white transition-colors"
              >
                Privacy Policy
              </a> -->
            </label>
          </div>
        </div>

        <button
          type="submit"
          :disabled="isSubmitting || showSpinner || !terms"
          class="group relative flex items-center justify-center bg-gradient-to-r from-[#3ac2a9] via-[#2c9380] via-30% to-[#198773] to-150% hover:bg-[#5e9463] disabled:opacity-90 disabled:cursor-not-allowed text-white py-4 rounded-xl text-base sm:text-lg transition"
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
