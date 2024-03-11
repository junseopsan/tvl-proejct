import { functions } from "@/tvl_db";
import { httpsCallable } from "firebase/functions";

export const mainprocess_get_patent_info = httpsCallable(
  functions,
  "mainprocess_get_patent_info"
);
export const mainprocess_chat_openai = httpsCallable(
  functions,
  "mainprocess_chat_openai"
);

export const mainprocess_make_message = httpsCallable(
  functions,
  "mainprocess_make_message"
);
export const mainprocess_send_step = httpsCallable(
  functions,
  "mainprocess_send_step"
);
export const mainprocess_send_steps = httpsCallable(
  functions,
  "mainprocess_send_steps"
);
