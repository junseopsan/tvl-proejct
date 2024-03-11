<template>
  <div class="flex flex-col space-y-8 px-7 py-7 bg-blue-50 rounded">
    <div
      class="flex text-blue-600 text-sm font-semibold font-sans leading-tight"
    >
      {{ Step5_detailObj.title }}
    </div>

    <div
      class="mx-3 flex flex-col text-gray-600 text-sm leading-normal space-y-2"
    >
      <div class="font-semibold">평가지표</div>
      <div class="font-normal">
        {{ Step5_detailObj.evalIndex }}
      </div>

      <div v-if="Step5_detailObj.evalIndex_Num === '1'" class="flex-col">
      <div class="flex font-normal">
        <li class="font-normal list-disc"></li>{{ Step5_detailObj.evalIndex_content1 }}
      </div>
      </div>

      <div v-if="Step5_detailObj.evalIndex_Num === '2'" class="flex-col">
        <div class="flex font-normal">
        <li class="font-normal list-disc"></li>{{ Step5_detailObj.evalIndex_content1 }}
      </div>
      <div class="flex font-normal">
        <li class="font-normal list-disc"></li>{{ Step5_detailObj.evalIndex_content2 }}
      </div>
      </div>

      <div v-if="Step5_detailObj.evalIndex_Num === '3'" class="flex-cold">
        <div class="flex font-normal">
        <li class="font-normal list-disc"></li>{{ Step5_detailObj.evalIndex_content1 }}
      </div>
      <div class="flex font-normal">
        <li class="font-normal list-disc"></li>{{ Step5_detailObj.evalIndex_content2 }}
      </div>
      <div class="flex font-normal">
        <li class="font-normal list-disc"></li>{{ Step5_detailObj.evalIndex_content2 }}
      </div>
      </div>

      <div v-if="Step5_detailObj.reviewItems === '1'" class="pt-5 flex-col">
      <div class="font-semibold mb-2">검토항목</div>
      <li>생산수율 또는 기능 개선</li>
      <li>원가절감 또는 시간절감</li>
      <li>공정 또는 공법 개선</li>
      <li>사용편의성</li>
      </div>
    
      <div v-if="Step5_detailObj.reviewItems === '2'" class="pt-5 flex-col">
      <div class="font-semibold mb-2">검토항목</div>
      <li>시장을 주도하는 기업으로 인해 시장진입이 어렵다</li>
      <li>제품 차별화 요인이 크지 않아 시장진입이 어렵다</li>
      <li>기존 경쟁자의 유통망이 견고하여 시장진입 어렵다</li>
      <li>시장에 진입하기 위한 소요자본 규모가 크다</li>
      <li>법·제도적인 장애요인이 많다</li>
      </div>

      <div v-if="Step5_detailObj.reviewItems === '3'" class="pt-5 flex-col">
      <div class="font-semibold mb-2">검토항목</div>
      <li>생산인력 확보에 어려움이 없다.</li>
            <li>재료 및 부품가격이 안정적이다.</li>
            <li>물량확보가 용이하고, 수급이 안정적이다.</li>
            <li>다수의 공급자가 존재한다.</li>
            <li>신속한 조달이 가능하다.</li>
            <li>물류비용이 저렴하다.</li>
      </div>
      
      </div>

    <fieldset>
      <legend class="sr-only">Plan</legend>
      <div class="space-y-5">
        <div
          v-for="scoreOption in Step5_detailObj.scoreSelect"
          :key="`${stepname}-${scoreOption.id}`"
          class="relative flex items-start"
        >
          <div class="flex h-6 items-center">
            <input
              :aria-describedby="`${scoreOption.id}-description`"
              type="radio"
              v-model="selectedScoreOption"
              :checked="
                scoreOption.id === String(appStore.task[stepname]?.평가점수)
              "
              :value="scoreOption.id"
              class="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-600"
            />
          </div>
          <div class="flex space-x-2 ml-3 text-sm leading-6">
            <label :for="scoreOption.id" class="font-medium text-gray-900">{{
              scoreOption.score
            }}</label>
            <p :id="`${scoreOption.id}-description`" class="text-gray-900">
              {{ scoreOption.description }}
            </p>
          </div>
        </div>
      </div>
    </fieldset>

    <div
      class="mx-1 flex flex-col text-gray-600 text-sm leading-normal space-y-2 bg-white p-4 rounded-md"
    >
      <div class="font-semibold">AI 추천 근거</div>
      <li class="font-normal list-disc">
        {{ appStore.task[stepname]?.평가근거 || "" }}
      </li>
    </div>

    <div class="self-stretch justify-end items-end gap-2 inline-flex pt-4">
      <button
        type="button"
        class="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      >
        아니요
      </button>

      <button
        type="button"
        @click="btnAction(true)"
        class="rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
      >
        예, 선택합니다
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useAppStore } from "@/store/app";
import { updateTask } from "@/utils/fsdb";

const props = defineProps({
  Step5_detailObj: {
    type: Object,
    default: () => {},
  },
});

const stepname = props.Step5_detailObj.stepname;
const appStore = useAppStore();
const selectedScoreOption = ref(null);

const btnAction = (isTrue) => {
  if (isTrue) {
    const updateData = {};
    updateData[`${stepname}.평가점수`] = selectedScoreOption.value;
    updateTask(appStore.task, updateData).then(() => {
      console.log(stepname + " 평가점수 업데이트", selectedScoreOption.value);
    });
  }
};
</script>
