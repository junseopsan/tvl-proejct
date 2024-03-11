// export const web_search = async (query, **kwarg) => {
export const web_search = async (query) => {
  const data = {
    model: "wp-watt-3.52-16k",
    content: query,
  };

  const headers = {
    Authorization: "Bearer 5df9a0e4005348ea813258bb37d620f7",
  };

  try {
    const response = await fetch("https://beta.webpilotai.com/api/v1/watt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const resultData = await response.json();
    const result = resultData.content;
    console.log(result);

    const searchResult = {
      query,
      results: result,
      search_engine: "watt",
      created_at: Math.floor(Date.now() / 1000), // 현재 시간을 초 단위로 가져옵니다.
    };

    // 서버 또는 데이터베이스에 결과 업로드 또는 처리하는 코드를 추가하세요.
    // 예: axios, fetch 또는 다른 HTTP 요청을 사용하여 서버에 업로드

    return result;
  } catch (error) {
    console.error(error);
    // 예외 처리를 수행하거나 오류 메시지를 반환합니다.
  }
};
