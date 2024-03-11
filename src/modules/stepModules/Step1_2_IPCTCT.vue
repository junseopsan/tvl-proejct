<template>
  <div class="flex flex-col space-y-8 px-7 py-7 bg-blue-50 rounded">
    <div class="space-y-3">
      <div class="text-md font-semibold text-gray-900">1.2. 대표 IPC</div>
      <div class="text-sm font-semibold text-gray-500">
        평가대상 특허의 IPC 코드와 TCT 통계값은 아래와 같습니다.
      </div>
    </div>

    <fieldset>
      <legend class="sr-only">IPC Selection</legend>
      <div class="space-y-8">
        <div v-for="(item, index) in appStore.cpcInfo" :key="item.IPC + index">
          <div class="flex items-front space-x-3">
            <input
              :id="item.id"
              :name="item.id"
              type="radio"
              class="mt-[2px] h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              :checked="appStore.cpcInfo[0].IPC === item.IPC"
              @change="changeOption(item)"
            />
            <div class="flex items-front space-x-3">
              <div class="text-sm font-medium text-gray-900">
                {{ item.IPC }}
              </div>
              <div class="text-gray-500 text-sm">
                {{ item.내용 }}
              </div>
            </div>
          </div>
          <div class="p-3 mt-3 bg-white rounded">
            <div
              class="text-gray-600 text-sm font-normal font-sans leading-normal"
            >
              TCT 통계
            </div>
            <div class="mt-2 flex flex-col pl-2 space-y-2">
              <li
                class="text-gray-500 text-sm font-normal font-sans leading-tight"
              >
                평균 : {{ item.평균 }} 년
              </li>

              <div
                class="flex justify-between text-gray-500 text-sm font-normal font-sans leading-tight mr-10"
              >
                <li>Q1 : {{ item.Q1 }} 년</li>
                <li>Q2(중앙값) : {{ item.Q2 }} 년</li>
                <li>Q3 : {{ item.Q3 }} 년</li>
              </div>
            </div>
          </div>
        </div>
        <div class="flex items-center space-x-3">
          <input
            type="radio"
            name="service-selection"
            class="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-600"
          />
          <input
            type="text"
            class="p-2 px-3 border text-sm rounded-md border-blue-200 w-1/2"
            placeholder="IPC 코드 직접입력"
            v-model="directCpcValue"
            @input="directSetCpcCode()"
            maxlength="4"
          />
          <!-- <div v-if="!matchingItem" class="text-red-500 text-sm">IPC 코드가 유효하지 않습니다.</div> -->
        </div>
      </div>
    </fieldset>

    <!-- <StepButtonSimple step="step2_1" @action1="action1" /> -->
    <div class="text-right">
      <div class="self-stretch justify-end items-center gap-2 inline-flex pt-4">
        <button
          type="button"
          @click="btnAction(false)"
          class="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          아니요
        </button>

        <button
          type="button"
          @click="btnAction(true)"
          class="w-36 rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
          :disabled="['a', 'b'].includes(appStore.task.step_abstract?.loading)"
        >
          <div>예, 선택합니다.</div>
        </button>
      </div>

      <div v-if="errorMsg" class="text-xs text-red-500 mt-3 mr-2">
        {{ errorMsg }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useAppStore } from "@/store/app";
import { useRouter } from "vue-router";
import StepButtonSimple from "@/modules/StepButtonSimple.vue";
import { updateTask, getCpcInfo } from "@/utils/fsdb";
import { mainprocess_send_steps } from "@/api";
import { step6_1_17, step6_1_22 } from "@/utils/calculator";

const appStore = useAppStore();
const router = useRouter();
const directCpcValue = ref("");
const cpcInfoSelected = ref(null);

const errorMsg = ref("");

const btnAction = async (isTrue) => {
  if (isTrue) {
    if (!cpcInfoSelected.value) {
      errorMsg.value = "IPC 코드를 선택해주세요.";
      return;
    }

    const eco_life_year_2 = step6_1_22(cpcInfoSelected.value.Q2); // 진부화가능성
    updateTask(appStore.task, {
      cpcSelected: cpcInfoSelected.value,

      step6_1_22: {
        loading: "f",
        평가근거: eco_life_year_2.reason,
        평가점수: eco_life_year_2.score,
      },
    });
    if (appStore.task.status != "send all steps") {
      mainprocess_send_steps({
        tid: appStore.task.tid,
      });
    }
    router.push({ name: "step2" });
  }
};

onMounted(async () => {
  if (!appStore.cpcInfo) {
    appStore.cpcInfo = await getCpcInfo(appStore.task.uid, appStore.task.tid);
  }
  cpcInfoSelected.value = cpcInfoSelected.value || appStore.cpcInfo[0];
});

const changeOption = (item) => {
  console.log("changeOption", item);
  cpcInfoSelected.value = item;
};
const directSetCpcCode = () => {
  console.log("directSetCpcCode", directCpcValue.value);
  cpcInfoSelected.value = directCpcValue.value;
};
</script>
