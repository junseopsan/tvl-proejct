<template>
  <div class="flex flex-col justify-between overflow-hidden">
    <div class="flex-grow h-96"></div>

    <div class="flex flex-col items-center">
      <div class="flex flex-col items-center space-y-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          class="h-10 w-10 rounded-full border-2 border-solid border-gray-200 p-1.5 text-gray-700"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
          ></path>
        </svg>
        <div class="font-sans text-lg font-bold">
          새로운 가치를 평가해 보시겠습니까?
        </div>
        <div>
          <v-menu
            v-model="menu2"
            :close-on-content-click="false"
            :nudge-right="40"
            lazy
            transition="scale-transition"
            offset-y
            full-width
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="date"
                label="Picker without buttons"
                prepend-icon="event"
                readonly
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="date" @input="menu2 = false"></v-date-picker>
          </v-menu>

        </div>
        <div class="pb-4 mt-4 font-sans text-xs text-gray-500">
          특허 공개/등록번호의 정보를 기반으로 기술가치평가가 시작됩니다.
        </div>
      </div>

      <div class="relative flex w-7/12 mt-6 gap-x-4">
        <input
          type="text"
          class="bg-stone-100 h-12 min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
          placeholder="특허 공개번호(예 10-2019-0059428) 또는 등록번호(예 10-103949)를 입력해주세요."
          v-model="PatentNumber"
          maxlength="15"
          @click="inputFocus"
        />
        <div
          v-if="errorCheck"
          class="absolute inset-y-0 flex items-center pr-6 pointer-events-none right-24"
        >
          <ExclamationCircleIcon
            class="w-5 h-5 text-red-500"
            aria-hidden="true"
          />
        </div>
        <v-btn
          type="submit"
          class="flex-none rounded-md w-24 bg-blue-500 px-2 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          :class="{ 'cursor-not-allowed': loading }"
          @click="submitInput"
        >
          <div
            v-if="loading"
            class="w-4 h-4 mx-auto border-2 border-white rounded-full border-t-transparent animate-spin"
          ></div>
          <div v-else class="w-20">시작하기</div>
      </v-btn>
      </div>
      <p
        v-if="errorCheck && errorMsg"
        class="mt-2 text-sm text-red-600"
        id="email-error"
      >
        {{ errorMsg }}
      </p>
      <p v-else class="mt-2 text-sm text-gray-500" id="email-description">
        특허 공개번호(예 10-2022-1234567) 또는 등록번호(예 10-1234567)를
        입력해주세요.
      </p>
    </div>
  </div>
</template>

<script setup>
import { mainprocess_get_patent_info } from "@/api";
import { useAppStore } from "@/store/app";
import { ExclamationCircleIcon } from "@heroicons/vue/20/solid";
import { ref } from "vue";
import { useRouter } from "vue-router";

const appStore = useAppStore();
const router = useRouter();

const PatentNumber = ref("10-2019-0060427");
const errorCheck = ref(false);
const errorMsg = ref("");
const loading = ref(false);
const date = ref(new Date().toISOString().substr(0, 10));
const menu2 = ref(false);

const inputFocus = () => {
  errorCheck.value = false;
  errorMsg.value = "";
};

const checkInput = () => {
  if (PatentNumber.value === "") {
    errorCheck.value = true;
    errorMsg.value = "특허 공개번호 또는 등록번호를 입력해주세요.";
    return false;
  }
  const regex =
    /^[0-9]{2}-[0-9]{4}-[0-9]{7}$|^[0-9]{2}-[0-9]{7}$|^[0-9]{2}[0-9]{4}[0-9]{7}$|^[0-9]{2}[0-9]{7}$/;
  if (!regex.test(PatentNumber.value.trim())) {
    errorCheck.value = true;
    errorMsg.value = "특허 공개번호 또는 등록번호가 형식에 맞지 않습니다.";
    return false;
  }

  return true;
};

const submitInput = () => {
  if (!checkInput()) return;
  if (appStore.taskList.length >= 3) {
    errorCheck.value = true;
    errorMsg.value = "최대 3개의 특허를 입력할 수 있습니다.";
    return;
  }

  loading.value = true;
  appStore.patentNumber = PatentNumber.value.trim();
  appStore.task = null;

  const payload = {
    select_number: PatentNumber.value,
  };
  mainprocess_get_patent_info(payload)
    .then((res) => {
      console.log(res.data);
      appStore.task = res.data.task;
      localStorage.setItem("tid", appStore.task.tid);
      appStore.cpcInfo = res.data.cpc_info;
      // appStore.similarPatentInfo = res.data.similar_documents;

      loading.value = false;
      router.push({
        name: "step1",
      });
    })
    .catch((err) => {
      console.log(err);
      loading.value = false;
      errorCheck.value = true;
      errorMsg.value = "특허 공개번호 또는 등록번호가 유효하지 않습니다.";
    });
};
</script>
@/fireApi
