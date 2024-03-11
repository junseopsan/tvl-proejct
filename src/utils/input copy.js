export const isLetterOrNumber = (e) => {
  const key = e.key;
  if (key === ".") return e.preventDefault();
  if (key === "e") return e.preventDefault();
};

export const filterInput = (e) => {
  e.target.value = e.target.value.replace(/[^0-9]+/g, "");
};

export const passwordCheck =
  /^.*(?=^.{6,16}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;

export const emailCheck =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

export const nullCheck = /^\s*$/;

export const formCheck = (regEx, value) => regEx.test(value);

export const validateDatas = (data) =>
  data.reduce((acc, cur) => {
    if (cur.value === "") {
      acc = false;
      cur.helperText = cur.errorMessage;
      return acc;
    } else {
      cur.helperText = "";
    }
    if (cur.rule !== "") {
      if (formCheck(cur.rule, cur.value)) {
        acc = true;
        cur.helperText = "";
      } else {
        cur.helperText = cur.errorMessage;
        acc = false;
      }
    }
    return acc;
  }, true);

export const checkSamePassword = (pw, pwCheck) => {
  if (pw.value !== pwCheck.value) {
    pw.helperText = "";
    pwCheck.helperText = "비밀번호를 확인해주세요";
    return false;
  }
  return true;
};
