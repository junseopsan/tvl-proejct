<template>
  <div
    class="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8"
  >
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <!-- <CompanyLogo /> -->
      <h2
        class="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
      >
        로그인
      </h2>
    </div>

    <div class="mt-5 sm:mx-auto sm:w-full sm:max-w-[480px]">
      <div class="bg-slate-50 px-6 py-12 shadow sm:rounded-lg sm:px-12">
        <div class="space-y-6">
          <div>
            <label
              for="email"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Email address</label
            >
            <div class="relative mt-2">
              <input
                id="email"
                name="email"
                type="email"
                @click="emailMsg = ''"
                v-model="email"
                autocomplete="email"
                required=""
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <div
                v-if="emailMsg"
                class="pointer-events-none absolute inset-y-0 right-2 flex items-center pr-3"
              >
                <ExclamationCircleIcon
                  class="h-5 w-5 text-red-500"
                  aria-hidden="true"
                />
              </div>
            </div>
            <p
              v-if="emailMsg"
              class="mt-2 text-sm text-red-600"
              id="email-error"
            >
              {{ emailMsg }}
            </p>
          </div>

          <div>
            <label
              for="password"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Password</label
            >
            <div class="relative mt-2">
              <input
                id="password"
                name="password"
                type="password"
                @click="passwordMsg = ''"
                v-model="password"
                autocomplete="current-password"
                required=""
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <div
                v-if="passwordMsg"
                class="pointer-events-none absolute inset-y-0 right-2 flex items-center pr-3"
              >
                <ExclamationCircleIcon
                  class="h-5 w-5 text-red-500"
                  aria-hidden="true"
                />
              </div>
            </div>
            <p
              v-if="passwordMsg"
              class="mt-2 text-sm text-red-600"
              id="email-error"
            >
              {{ passwordMsg }}
            </p>
          </div>

          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
              <label
                for="remember-me"
                class="ml-3 block text-sm leading-6 text-gray-900"
                >Remember me</label
              >
            </div>

            <div class="text-sm leading-6">
              <a
                href="#"
                class="font-semibold text-indigo-600 hover:text-indigo-500"
                >Forgot password?</a
              >
            </div>
          </div>

          <div>
            <button
              type="submit"
              @click="submitLogin()"
              class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              로그인
            </button>
          </div>
        </div>

        <!-- <div>
          <div class="relative mt-10">
            <div class="absolute inset-0 flex items-center" aria-hidden="true">
              <div class="w-full border-t border-gray-200" />
            </div>
            <div
              class="relative flex justify-center text-sm font-medium leading-6"
            >
              <span class="bg-white px-6 text-gray-900">Or continue with</span>
            </div>
          </div>

          <div class="mt-6 grid grid-cols-2 gap-4">
            <a
              href="#"
              class="flex w-full items-center justify-center gap-3 rounded-md bg-[#1D9BF0] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D9BF0]"
            >
              <svg
                class="h-5 w-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"
                />
              </svg>
              <span class="text-sm font-semibold leading-6">Twitter</span>
            </a>

            <a
              href="#"
              class="flex w-full items-center justify-center gap-3 rounded-md bg-[#24292F] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24292F]"
            >
              <svg
                class="h-5 w-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="text-sm font-semibold leading-6">GitHub</span>
            </a>
          </div>
        </div> -->
      </div>

      <p class="mt-10 text-center text-sm text-gray-500">
        계정이 없으신가요?
        {{ " " }}
        <a
          href="/signup"
          class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >회원가입</a
        >
      </p>
    </div>
    <Alert v-if="openAlert" :text="alertMsg" @action="alertAction" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import CompanyLogo from "@/modules/CompanyLogo.vue";
import { emailCheck, formCheck } from "@/utils/input";
import { ExclamationCircleIcon } from "@heroicons/vue/20/solid";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Alert from "@/modules/Alert.vue";
import { getUser, setUser, updateUser } from "@/utils/fsdb";

const email = ref("");
const password = ref("");
const emailMsg = ref("");
const passwordMsg = ref("");

const openAlert = ref(false);
const alertMsg = ref("");

const submitLogin = async () => {
  if (!formCheck(emailCheck, email.value)) {
    return setInputError("check/email");
  }
  if (password.value.length < 10) {
    return setInputError("check/password");
  }
  login(email.value, password.value);
};

const setInputError = (errorCode) => {
  switch (errorCode) {
    case "check/email":
      emailMsg.value = "Check your email";
      break;
    case "check/password":
      passwordMsg.value = "Check your password";
      break;
    case "auth/invalid-email":
      emailMsg.value = "Invalid email";
      break;
    case "auth/user-not-found":
      emailMsg.value = "No account with that email was found";
      break;
    case "auth/wrong-password":
      passwordMsg.value = "Incorrect password";
      break;
    case "auth/invalid-credential":
      openAlert.value = true;
      alertMsg.value = "회원정보가 없습니다. 회원가입하시겠습니까?";
      break;
    default:
      alert("Email or password was incorrect");
      break;
  }
};

const alertAction = (isTrue) => {
  openAlert.value = false;
  if (isTrue) {
    location.href = "/signup";
  }
};

const login = async (email, password) => {
  openAlert.value = false;
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then(async (res) => {
      const userData = {
        uid: res.user.uid,
        email: res.user.email,
        displayName: res.user.displayName || res.user.email.split("@")[0],
        createdAt: res.user.metadata.creationTime,
        lastLoginAt: res.user.metadata.lastSignInTime,
      };
      if (await getUser(res.user.uid)) {
        console.log("updateUser");
        await updateUser(res.user.uid, userData);
        location.href = "/";
      } else {
        console.log("setUser");
        await setUser(res.user.uid, userData);
        location.href = "/";
      }
    })
    .catch((error) => {
      console.log("login error", error.code);
      setInputError(error.code);
    });
};
</script>
