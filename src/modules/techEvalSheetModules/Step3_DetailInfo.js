export const step3_Details = [
  {
    stepname: "step3_1_1",
    title: "기술성 평가 / 평가항목 : 우월성",
    evalIndex: "대상기술의 유형을 파생기술, 응용기술, 원천기술 등으로 구분하고, 기술적 우월성을 판단함. 가장 높은 범주인 원천기술이란 해당 기술군에서 기술표준을 주도하는 기술을 의미함",
    evalIndex_content1: "",
    evalIndex_content2: "",
    evalIndex_content3: "",
    evalIndex_Num: "0",
    reviewItems: "0",
    scoreSelect: [
      {
        id: "1",
        score: "(1점)",
        description: "기술적 우월성이 없음",
      },
      {
        id: "2",
        score: "(2점)",
        description: "파생기술 및 응용기술로서 기술적 우월성이 미흡함",
      },
      {
        id: "3",
        score: "(3점)",
        description: "파생기술 및 응용기술로서 기술적 우월성이 보통임",
      },
      {
        id: "4",
        score: "(4점)",
        description: "원천기술에 근접하는 기술로써 기술적 우월성이 높음",
      },
      {
        id: "5",
        score: "(5점)",
        description: "원천기술로써 기술적 우월성이 매우 높음",
      },
    ],
  },
  {
    stepname: "step3_1_2",
    title: "기술성 평가 / 평가항목 : 기술경쟁강도",
    evalIndex: "현재 목표시장에서 대상기술과 연관이 있는 경쟁기술(유사기술)의 수, 기술 간 상호 경쟁관계 등을 파악하고 기술 간 경쟁구조와 경쟁환경이 대상기술의 사업화에 미치는 영향을 평가함",
    evalIndex_content1: "",
    evalIndex_content2: "",
    evalIndex_content3: "",
    evalIndex_Num: "0",
    reviewItems: "0",
    scoreSelect: [
      {
        id: "1",
        score: "(1점)",
        description: "목표시장에 경쟁기술의 수가 매우 많고 경쟁이 매우 치열함",
      },
      {
        id: "2",
        score: "(2점)",
        description: "목표시장에 경쟁기술의 수가 많고 경쟁이 치열함",
      },
      {
        id: "3",
        score: "(3점)",
        description: "목표시장에 경쟁기술의 수와 경쟁이 보통 수준임",
      },
      {
        id: "4",
        score: "(4점)",
        description: "목표시장에 경쟁기술의 수가 적고 경쟁정도가 낮음",
      },
      { id: "5", score: "(5점)", description: "목표시장에 경쟁기술이 거의 없음" },
    ],
  },
  {
    stepname: "step3_1_3",
    title: "기술성 평가 / 평가항목 : 대체가능성",
    evalIndex: "향후 대상기술을 대체할 수 있는 또 다른 혁신기술이 출현할 가능성을 평가",
    evalIndex_content1: "3년간 대체기술의 출현 가능성을 판단하기 위하여 1) 특허출원 추세, 2) 연관기술의 연구개발 동향, 3) 신제품 출현빈도 등을 종합적으로 고려하여 평가",
    evalIndex_content2: "",
    evalIndex_content3: "",
    evalIndex_Num: "1",
    reviewItems: "0",
    scoreSelect: [
      {
        id: "1",
        score: "(1점)",
        description: "향후 3년간 대체기술이 출현할 가능성이 매우 높음",
      },
      {
        id: "2",
        score: "(2점)",
        description: "향후 3년간 대체기술이 출현할 가능성이 높음",
      },
      {
        id: "3",
        score: "(3점)",
        description: "향후 3년간 대체기술이 출현할 가능성이 보통임",
      },
      {
        id: "4",
        score: "(4점)",
        description: "향후 3년간 대체기술이 출현할 가능성이 낮음",
      },
      {
        id: "5",
        score: "(5점)",
        description: "향후 3년간 대체기술이 출현할 가능성이 거의 없음",
      },
    ],
  },
  {
    stepname: "step3_1_4",
    title: "기술성 평가 / 평가항목 : 모방난이도",
    evalIndex: "기술수준의 고도성 또는 복잡성으로 인해 모방이 어려운 정도를 평가하며, 외부 공개 자료에 의한 모방 가능성 정도, 출시 제품에 대한 리버스 엔지니어링을 통한 모방 가능성 정도 등을 종합적으로 고려함",
    evalIndex_content1: "대상기술의 모방난이도가 높을수록 상당기간 동안 모방이 어렵기 때문에 기술위험이 상대적으로 낮아지고 사업화 위험도 낮아짐",
    evalIndex_content2: "",
    evalIndex_content3: "",
    evalIndex_Num: "1",
    reviewItems: "0",
    scoreSelect: [
      { id: "1", score: "(1점)", description: "대상기술의 모방이 쉬움" },
      { id: "2", score: "(2점)", description: "대상기술의 모방이 비교적 쉬움" },
      { id: "3", score: "(3점)", description: "대상기술의 모방 가능성이 보통임" },
      { id: "4", score: "(4점)", description: "대상기술의 모방이 어려움" },
      { id: "5", score: "(5점)", description: "대상기술의 모방이 매우 어려움" },
    ],
  },
  {
    stepname: "step3_1_5",
    title: "권리성 평가 / 평가항목 : 권리보호강도",
    evalIndex: "대상특허권의 권리범위는 특허출원서에 첨부한 명세서의 특허청구 범위에 기재된 사항에 의하여 결정됨. 따라서 권리범위를 평가하기 위해서 독립항의 주요 구성요소를 구분하여 나열한 후, 1) 청구범위에 한정적인 구성요소가 있는지 여부, 2) 기술적 핵심 구성요소가 청구범위에 언급되었는지 여부를 검토한 후 권리범위의 명확성과 보호강도를 평가함",
    evalIndex_content1: "",
    evalIndex_content2: "",
    evalIndex_content3: "",
    evalIndex_Num: "0",
    reviewItems: "0",
    scoreSelect: [
      {
        id: "1",
        score: "(1점)",
        description: "특허의 청구범위가 좁고 명확하지 않아 보호되기 어려움",
      },
      {
        id: "2",
        score: "(2점)",
        description: "특허의 청구범위가 좁고 보호될 수 있는 부분이 적음",
      },
      {
        id: "3",
        score: "(3점)",
        description: "특허의 청구범위가 주요 기능과 핵심 생산라인 제품만을 보호함",
      },
      {
        id: "4",
        score: "(4점)",
        description:
          "특허의 청구범위가 현재사업의 모든 제품을 보호할 만큼 충분히 넓음",
      },
      {
        id: "5",
        score: "(5점)",
        description:
          "특허의 청구범위가 명확하고 넓으며 잠재적인 사업라인까지도 보호 가능함",
      },
    ],
  },
  {
    stepname: "step3_1_6",
    title: "시장성 평가 / 평가항목 : 시장진입가능성",
    evalIndex: "시장진입 장애요인을 분석하여 대상기술의 시장진입 가능성을 평가함",
    evalIndex_content1: "이미 시장에 진입하여 매출이 발생한 경우에는 보통 이상으로 평가할 수 있음",
    evalIndex_content2: "",
    evalIndex_content3: "",
    evalIndex_Num: "1",
    reviewItems: "2",
    scoreSelect: [
      { id: "1", score: "(1점)", description: "4가지 이상 장애요인 있음" },
      { id: "2", score: "(2점)", description: "3가지 장애요인 있음" },
      { id: "3", score: "(3점)", description: "2가지 장애요인 있음" },
      { id: "4", score: "(4점)", description: "1가지 장애요인 있음" },
      { id: "5", score: "(5점)", description: "장애요인이 없음" },
    ],
  },
  {
    stepname: "step3_1_7",
    title: "시장성 평가 / 평가항목 : 시장경쟁강도",
    evalIndex: "대상기술이 속한 목표시장의 경쟁구조, 시장지배자의 유형, 독과점 여부, 경쟁제품의 수 등 시장의 경쟁강도가 대상기술의 사업화에 미치는 영향을 평가함",
    evalIndex_content1: "일반적으로 독과점 정도가 높을수록 혹은 시장 선도기업들의 경쟁이 치열할수록 시장침투가 용이하지 않기 때문에 시장위험이 상대적으로 커지게 됨. 그러나 대상기업이 경쟁력이 있고 이미 목표시장에 진입한 경우 독과점 시장구조가 사업화에 유리할 수 있음",
    evalIndex_content2: "",
    evalIndex_content3: "",
    evalIndex_Num: "1",
    reviewItems: "0",
    scoreSelect: [
      {
        id: "1",
        score: "(1점)",
        description: "목표시장의 경쟁강도가 대상기술의 사업화에 매우 불리함",
      },
      {
        id: "2",
        score: "(2점)",
        description: "목표시장의 경쟁강도가 대상기술의 사업화에 불리함",
      },
      {
        id: "3",
        score: "(3점)",
        description: "목표시장의 경쟁강도가 대상기술의 사업화에 거의 영향이 없음",
      },
      {
        id: "4",
        score: "(4점)",
        description: "목표시장의 경쟁강도가 대상기술의 사업화에 유리함",
      },
      {
        id: "5",
        score: "(5점)",
        description: "목표시장의 경쟁강도가 대상기술의 사업화에 매우 유리함",
      },
    ],
  },
  {
    stepname: "step3_1_8",
    title: "시장성 평가 / 평가항목 : 시장경쟁의 변화",
    evalIndex: "향후 3~5년 이내 경쟁상황(경쟁제품의 수, 경쟁기업의 수 등)의 변화가 대상기술의 사업화에 미치는 영향을 평가함",
    evalIndex_content1: "",
    evalIndex_content2: "",
    evalIndex_content3: "",
    evalIndex_Num: "0",
    reviewItems: "0",
    scoreSelect: [
      {
        id: "1",
        score: "(1점)",
        description:
          "향후 시장에서 경쟁상황 또는 경쟁구조의 변화가 기술사업화에 매우 부정적인 영향을 미침",
      },
      {
        id: "2",
        score: "(2점)",
        description:
          "향후 시장에서 경쟁상황 또는 경쟁구조의 변화가 기술사업화에 부정적인 영향을 미침",
      },
      {
        id: "3",
        score: "(3점)",
        description:
          "향후 시장에서 경쟁상황 또는 경쟁구조의 변화가 기술사업화에 거의 영향을 미치지 않음",
      },
      {
        id: "4",
        score: "(4점)",
        description:
          "향후 시장에서 경쟁상황 또는 경쟁구조의 변화가 기술사업화에 긍정적인 영향을 미침",
      },
      {
        id: "5",
        score: "(5점)",
        description:
          "향후 시장에서 경쟁상황 또는 경쟁구조의 변화가 기술사업화에 매우 긍정적인 영향을 미침",
      },
    ],
  },
  {
    stepname: "step3_1_9",
    title: "시장성 평가 / 평가항목 : 신제품 출현가능성",
    evalIndex: "향후 3~5년 이내 경쟁상황(경쟁제품의 수, 경쟁기업의 수 등)의 변화가 대상기술의 사업화에 미치는 영향을 평가함",
    evalIndex_content1: "",
    evalIndex_content2: "",
    evalIndex_content3: "",
    evalIndex_Num: "0",
    reviewItems: "0",
    scoreSelect: [
      {
        id: "1",
        score: "(1점)",
        description: "경쟁 신제품이 출현할 가능성이 매우 높음",
      },
      {
        id: "2",
        score: "(2점)",
        description: "경쟁 신제품이 출현할 가능성이 높음",
      },
      {
        id: "3",
        score: "(3점)",
        description: "경쟁 신제품이 출현할 가능성이 있음",
      },
      {
        id: "4",
        score: "(4점)",
        description: "경쟁 신제품이 출현할 가능성이 낮음",
      },
      {
        id: "5",
        score: "(5점)",
        description: "경쟁 신제품이 출현할 가능성이 매우 낮음",
      },
    ],
  },
  {
    stepname: "step3_1_10",
    title: "시장성 평가 / 평가항목 : 예상 시장점유율",
    evalIndex: "시장 내 경쟁자수, 경쟁상황, 대상기술 제품의 경쟁력, 사업주체의 사업화 역량 등을 종합적으로 고려하여 대상기술 제품이 현금흐름 추정기간 동안 목표시장에서 점유할 수 있는 최대 시장점유율을 통해 예상 시장점유율을 평가함. 시장점유율은 현금흐름 추정기간 동안의 최대 예상 시장점유율을 기준으로 함. 목표시장이란 해당 제품 또는 부품 자체가 판매되는 시장으로서, 상위시장과 구분되는 시장임",
    evalIndex_content1: "",
    evalIndex_content2: "",
    evalIndex_content3: "",
    evalIndex_Num: "0",
    reviewItems: "0",
    scoreSelect: [
      {
        id: "1",
        score: "(1점)",
        description:
          "대상기술 제품의 예상 시장점유율이 목표시장에서 매우 낮을 것으로 예상됨",
      },
      {
        id: "2",
        score: "(2점)",
        description:
          "대상기술 제품의 예상 시장점유율이 목표시장에서 하위그룹 수준일 가능성이 높음",
      },
      {
        id: "3",
        score: "(3점)",
        description:
          "대상기술 제품의 예상 시장점유율이 목표시장에서 중간그룹 수준일 가능성이 높음",
      },
      {
        id: "4",
        score: "(4점)",
        description:
          "대상기술 제품의 예상 시장점유율이 목표시장에서 선두그룹 수준일 가능성이 높음",
      },
      {
        id: "5",
        score: "(5점)",
        description:
          "대상기술 제품의 예상 시장점유율이 목표시장에서 선두그룹 수준일 가능성이 매우 높음",
      },
    ],
  },
];
