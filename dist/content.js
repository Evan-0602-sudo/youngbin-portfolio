// 게임 정보, 프로젝트, 스킬, 연락처는 이 파일에서 수정합니다.
// 연락처 링크는 이 배열에서 수정합니다.
window.PORTFOLIO = {
  contacts: [
    { label: '이메일', text: 'cyb050602@gmail.com', url: 'mailto:cyb050602@gmail.com' },
    { label: '전화번호', text: '010-3059-3201', url: 'tel:01030593201' },
    { label: 'GitHub', text: 'Evan-0602-sudo/youngbin-portfolio', url: 'https://github.com/Evan-0602-sudo/youngbin-portfolio' }
  ],
  coreGames: [
    { name: 'League of Legends', genre: 'MOBA / AOS', metric: '10,000+', unit: '게임', period: '시즌 3부터 장기간 플레이', detail: '복수 계정 기준 누적 10,000게임 이상', description: '장기간의 챔피언, 아이템, 메타, 밸런스 및 시스템 변화 경험', tags: ['메타 & 밸런스', '시스템 변화'] },
    { name: 'MapleStory', genre: 'MMORPG', metric: '286', unit: 'LEVEL', period: '중학생 시절부터 장기간 플레이', detail: '최근 챌린저스 서버에서 새로 육성하여 Lv.286 달성', description: '성장, 이벤트, 경제, 보상 구조 및 장기 라이브서비스 변화 경험', tags: ['성장 & 보상', '게임 경제'] }
  ],
  // featured: true는 중간 카드, 생략하거나 false이면 작은 목록으로 표시합니다.
  experiencedGames: [
    { name: 'Rainbow Six Siege', genre: 'Tactical FPS', duration: '약 375시간', featured: true },
    { name: 'Eternal Return', genre: 'MOBA / Battle Royale', duration: '약 175시간', featured: true },
    { name: 'Terraria', genre: 'Sandbox / Adventure', duration: '약 200시간', featured: true },
    { name: 'Valorant', genre: 'Tactical FPS', duration: '약 3년 플레이', featured: true },
    { name: 'KartRider', genre: 'Racing', duration: '약 300시간', featured: true, description: '캐주얼 레이싱과 경쟁 콘텐츠를 장기간 경험' },
    { name: 'Tekken', genre: 'Fighting', duration: '약 20시간' },
    { name: 'Vampire Survivors', genre: 'Roguelike / Survival', duration: '약 30시간' },
    { name: 'PUBG: Battlegrounds', genre: 'Battle Royale', duration: '약 70시간' },
    { name: 'Overwatch', genre: 'Hero Shooter', duration: '약 70시간' },
    { name: 'Lost Ark', genre: 'MMORPG', duration: '단기 플레이 경험' },
    { name: 'TalesRunner', genre: 'Casual Racing / Platform', duration: '약 50시간', description: '캐주얼 경쟁 및 다양한 게임 모드 경험' },
    { name: 'Elsword', genre: 'Action RPG', duration: '약 50시간', description: '캐릭터 성장과 액션 RPG 콘텐츠 경험' },
    { name: 'FC Online', genre: 'Sports / Football', duration: '간헐적으로 장기간 이용', description: '경기 빈도는 높지 않았지만, 이벤트 참여 → 보상 획득 → 재화 축적 → 선수 구매 → 스쿼드 구성으로 다시 접속한 경험', caseStudy: 'fc-online' }
  ],
  mobileGames: [
    { name: 'Seven Knights Re:BIRTH', genre: '수집형 RPG', duration: '약 1년 6개월', featured: true },
    { name: 'CookieRun: Kingdom', genre: '수집형 RPG / 건설', duration: '약 2년', featured: true },
    { name: 'GODDESS OF VICTORY: NIKKE', genre: '슈팅 RPG', duration: '약 3개월째', note: '플레이 중' },
    { name: 'Brown Dust 2', genre: '턴제 RPG', duration: '최근 시작', note: '현재 지속적으로 플레이 중' }
  ],
  pastMobileGames: ['Monster Taming (몬스터길들이기)', '모두의마블', '무한의계단'],
  "caseStudies": [
  {
    "id": "maplestory",
    "game": "MapleStory",
    "title": "신규·복귀 유저 정착 경험 분석",
    "status": "Analysis in Progress",
    "summary": "장기 플레이와 챌린저스 서버의 새로운 육성 경험에서 출발한 신규·복귀 유저 정착 가설입니다.",
    "question": "신규·복귀 유저는 어느 구간까지 자연스럽게 성장하고, 어느 순간부터 피로를 느끼거나 떠날 가능성이 커질까?",
    "observation": "빠른 성장과 지속적인 보상이 정착을 돕는 요소로 느껴졌습니다. 개인 플레이 경험에 기반한 관찰입니다.",
    "hypothesis": "이해해야 하는 시스템이 늘고 다음 목표가 불명확해지거나 체감 성장 속도가 낮아질 때 이탈 가능성이 커질 수 있습니다.",
    "steps": [
      {
        "label": "Personal Experience",
        "status": "Observation",
        "text": "중학생 시절부터 플레이했고, 최근 챌린저스 서버에서 새로운 캐릭터를 처음부터 육성해 Lv.286에 도달했습니다. 장기 유저와 새롭게 육성하는 유저의 시선으로 살펴봅니다."
      },
      {
        "label": "Observation",
        "status": "Observation",
        "text": "빠른 성장과 지속적인 보상은 다시 플레이할 동기를 주는 요소로 느껴졌습니다. 이는 개인 경험이며 전체 신규·복귀 유저를 대표하지 않습니다."
      },
      {
        "label": "Question",
        "status": "Hypothesis",
        "text": "성장 속도가 달라지는 시점과 다음 목표가 모호해지는 시점은 접속 동기에 어떤 영향을 줄까요?"
      },
      {
        "label": "Hypothesis",
        "status": "Hypothesis",
        "text": "성장 단계가 높아질수록 학습해야 할 시스템과 목표가 증가할 수 있습니다. 목표 공백과 체감 성장 둔화가 피로 및 이탈과 연결될 수 있다는 가설입니다."
      },
      {
        "label": "Data to Verify",
        "status": "Data to be Added",
        "text": "초기 성장 속도, 단계별 보상, 목표의 명확성, 콘텐츠 해금, 학습해야 할 시스템의 양, 성장 속도의 변화, 반복 플레이 피로도를 기록할 예정입니다. 실제 플레이 기록·게임 화면·시스템 구조·공개 정보를 모아 신규·복귀 유저의 장기 정착 과정을 살펴보려 합니다."
      },
      {
        "label": "Analysis",
        "status": "Analysis in Progress",
        "text": "현재는 질문과 가설을 정리하는 초기 단계입니다. 데이터 수집과 정량 분석은 아직 수행하지 않았습니다. 향후 성장 단계별 기록을 비교하고 목표·보상·학습 부담이 달라지는 구간을 검토할 예정입니다."
      },
      {
        "label": "Insight",
        "status": "Data to be Added",
        "text": "검증된 인사이트는 아직 없습니다. 기록과 근거를 확보한 뒤 가설을 지지하는 내용과 반대되는 내용을 함께 정리할 예정입니다."
      },
      {
        "label": "Proposal",
        "status": "Hypothesis",
        "text": "검토 중인 방향: 성장 단계별 다음 목표 명확화, 현재 필요한 시스템 우선 안내, 빠른 성장 이후의 목표 공백 완화, 다음 핵심 콘텐츠로 이어지는 동선 설계. 최종 개선안이 아닌 검증할 아이디어입니다."
      },
      {
        "label": "Expected Effect",
        "status": "Hypothesis",
        "text": "목표를 찾는 부담과 시스템 학습 부담을 줄일 수 있을 것으로 예상합니다. 실제 정착률 개선 여부와 효과 크기는 확인되지 않았습니다."
      },
      {
        "label": "Risk / Trade-off",
        "status": "Hypothesis",
        "text": "안내가 많아지면 오히려 피로를 높이거나 자유로운 탐색을 방해할 수 있습니다. 유저 경험에 따른 안내 수준 차이도 검토해야 합니다."
      },
      {
        "label": "Limitation",
        "status": "Observation",
        "text": "한 사람의 육성 경험에 기반합니다. 실제 유저별 접속·이탈 데이터가 없으며, 서버 환경과 이벤트의 영향을 분리하지 못했습니다."
      },
      {
        "label": "What I Learned",
        "status": "Data to be Added",
        "text": "검증 이후 기록 예정입니다. 현재는 개인 체감과 유저 전체에 대한 결론을 구분하는 것을 분석 원칙으로 삼고 있습니다."
      }
    ],
    "artifacts": [
      {
        "label": "Analysis Document",
        "url": ""
      },
      {
        "label": "Excel / Google Sheets",
        "url": ""
      },
      {
        "label": "PPT",
        "url": ""
      },
      {
        "label": "Notion",
        "url": ""
      },
      {
        "label": "Screenshot",
        "url": ""
      },
      {
        "label": "Research Sources",
        "url": ""
      }
    ]
  },
  {
    "id": "fc-online",
    "game": "FC Online",
    "title": "이벤트 중심 유저의 재방문 구조 분석",
    "status": "Analysis in Progress",
    "summary": "경기 플레이 빈도가 낮아도 다시 접속했던 이유를 이벤트와 스쿼드 성장의 관점에서 살펴봅니다.",
    "question": "핵심 플레이를 많이 하지 않는 유저도 이벤트와 성장 시스템으로 유지될 수 있을까? 이 유저를 경기 플레이로 다시 연결할 수 있을까?",
    "observation": "실제 경기 빈도가 높지 않아도 이벤트 보상과 선수·스쿼드 구성은 다시 접속할 이유가 되었습니다.",
    "hypothesis": "이벤트 보상의 매력이 낮아지면 이벤트 중심 유저는 이탈하기 쉬울 수 있습니다. 보상 이후의 스쿼드 개선을 경기 플레이로 연결할 수 있을지 검토합니다.",
    "loop": [
      "Event",
      "Reward",
      "Player Acquisition",
      "Squad Improvement",
      "Match Play"
    ],
    "steps": [
      {
        "label": "Personal Experience",
        "status": "Observation",
        "text": "경기 플레이 빈도는 높지 않았지만 이벤트 참여 → 보상 획득 → 재화 축적 → 선수 구매 → 스쿼드 구성 과정을 즐기며 간헐적으로 장기간 접속했습니다."
      },
      {
        "label": "Observation",
        "status": "Observation",
        "text": "본인에게 이벤트와 보상은 경기 플레이 외의 재접속 이유였습니다. 선수 획득과 스쿼드 구성의 즐거움이 접속 동기와 연결됐습니다."
      },
      {
        "label": "Question",
        "status": "Hypothesis",
        "text": "이벤트로 유지되는 유저가 새롭게 획득한 선수를 실제 경기에 사용하게 하려면 어떤 연결 경험이 필요할까요?"
      },
      {
        "label": "Hypothesis",
        "status": "Hypothesis",
        "text": "유저 유형을 경기 중심, Squad / Collection 중심, Event-driven 중심으로 나누어 볼 수 있다는 가설입니다. 본인의 행동은 Squad / Collection + Event-driven에 가까웠습니다. 이벤트 보상의 매력도가 낮아질 때 이탈 가능성이 커질 수 있습니다."
      },
      {
        "label": "Data to Verify",
        "status": "Data to be Added",
        "text": "본인의 접속 목적, 이벤트 참여, 보상·재화 획득, 선수 구매, 스쿼드 변경, 경기 참여 기록을 수집할 예정입니다. 전체 유저에 대한 검증에는 이벤트 참여 전후의 접속 유지와 경기 전환 데이터가 추가로 필요합니다."
      },
      {
        "label": "Analysis",
        "status": "Analysis in Progress",
        "text": "현재는 개인 경험과 유저 유형 가설을 정리한 단계입니다. 수집 데이터에 대한 분석은 아직 없습니다. 향후 이벤트 참여부터 경기 플레이까지의 행동 흐름을 기록하고 연결이 끊기는 지점을 살펴볼 예정입니다."
      },
      {
        "label": "Insight",
        "status": "Data to be Added",
        "text": "전체 유저에 적용할 검증된 결과는 없습니다. 이벤트 접속과 핵심 플레이가 어떤 관계인지 추가 확인이 필요합니다."
      },
      {
        "label": "Proposal",
        "status": "Hypothesis",
        "text": "이벤트로 새로운 선수를 획득한 뒤 스쿼드에 편성하고 경기를 경험하도록 자연스럽게 안내하는 구조를 검토합니다. 단순 보상 증량보다 Event → Reward → Player Acquisition → Squad Improvement → Match Play의 연결 가능성을 분석하려 합니다."
      },
      {
        "label": "Expected Effect",
        "status": "Hypothesis",
        "text": "선수 획득의 만족감을 실제 경기 경험으로 확장할 수 있다는 기대입니다. 경기 전환이나 유지율 개선은 아직 검증하지 않았습니다."
      },
      {
        "label": "Risk / Trade-off",
        "status": "Hypothesis",
        "text": "경기 참여를 강제하면 수집·스쿼드 구성 자체를 즐기는 유저에게 부담이 될 수 있습니다. 선택권과 보상 압박, 기존 유저와의 형평성을 함께 고려해야 합니다."
      },
      {
        "label": "Limitation",
        "status": "Observation",
        "text": "자기 보고에 기반한 단일 경험입니다. 정확한 플레이 시간과 전체 유저 행동 데이터가 없으므로 유저 유형의 비중이나 인과관계는 주장하지 않습니다."
      },
      {
        "label": "What I Learned",
        "status": "Data to be Added",
        "text": "분석 완료 후 기록 예정입니다. 현재는 본인의 재접속 동기를 출발점으로 삼되 다른 유저도 같을 것이라고 가정하지 않는 원칙을 두고 있습니다."
      }
    ],
    "artifacts": [
      {
        "label": "Analysis Document",
        "url": ""
      },
      {
        "label": "Excel / Google Sheets",
        "url": ""
      },
      {
        "label": "PPT",
        "url": ""
      },
      {
        "label": "Notion",
        "url": ""
      },
      {
        "label": "Screenshot",
        "url": ""
      },
      {
        "label": "Research Sources",
        "url": ""
      }
    ]
  },
  {
    "id": "mobile",
    "game": "모바일 라이브 서비스",
    "title": "모바일 게임의 유저 경험 비교 분석",
    "status": "Project Preparing",
    "summary": "현재 플레이 중인 NIKKE 또는 Brown Dust 2 중 하나를 선택해 분석할 예정입니다.",
    "question": "일상 루틴과 수집·성장·보상은 다시 접속할 이유와 피로에 어떻게 연결될까?",
    "observation": "NIKKE는 약 3개월째, Brown Dust 2는 최근 시작해 지속적으로 플레이 중입니다. 분석 대상은 아직 선정하지 않았습니다.",
    "hypothesis": "게임 선정 및 기록 수집 이후 구체적인 가설을 설정할 예정입니다.",
    "steps": [
      {
        "label": "Personal Experience",
        "status": "Observation",
        "text": "현재 NIKKE와 Brown Dust 2를 플레이하고 있습니다."
      },
      {
        "label": "Observation",
        "status": "Data to be Added",
        "text": "분석을 위한 관찰 기록은 추후 추가할 예정입니다."
      },
      {
        "label": "Question",
        "status": "Hypothesis",
        "text": "온보딩과 반복 루틴이 재접속 동기 및 피로에 어떻게 연결되는지 살펴볼 예정입니다."
      },
      {
        "label": "Hypothesis",
        "status": "Data to be Added",
        "text": "아직 구체적인 가설을 설정하지 않았습니다."
      },
      {
        "label": "Data to Verify",
        "status": "Data to be Added",
        "text": "신규 유저 온보딩, Daily Routine, Event, Character Collection, Growth, Reward, BM, Return Motivation, Churn Point를 기록할 예정입니다."
      },
      {
        "label": "Analysis",
        "status": "Data to be Added",
        "text": "Project Preparing — 데이터 수집 및 분석 전입니다."
      },
      {
        "label": "Insight",
        "status": "Data to be Added",
        "text": "분석 결과 없음."
      },
      {
        "label": "Proposal",
        "status": "Data to be Added",
        "text": "관찰과 분석 이후 검토 예정입니다."
      },
      {
        "label": "Expected Effect",
        "status": "Data to be Added",
        "text": "개선안 설정 이후 검토 예정입니다."
      },
      {
        "label": "Risk / Trade-off",
        "status": "Data to be Added",
        "text": "개선안과 함께 부작용을 검토할 예정입니다."
      },
      {
        "label": "Limitation",
        "status": "Observation",
        "text": "분석 대상 선정과 데이터 수집 전입니다."
      },
      {
        "label": "What I Learned",
        "status": "Data to be Added",
        "text": "프로젝트 진행 후 추가 예정입니다."
      }
    ],
    "artifacts": [
      {
        "label": "Analysis Document",
        "url": ""
      },
      {
        "label": "Excel / Google Sheets",
        "url": ""
      },
      {
        "label": "PPT",
        "url": ""
      },
      {
        "label": "Notion",
        "url": ""
      },
      {
        "label": "Screenshot",
        "url": ""
      },
      {
        "label": "Research Sources",
        "url": ""
      }
    ]
  }
],
  "interests": [
  "유저 리텐션",
  "유저 이탈",
  "라이브 서비스",
  "유저 경험",
  "BM",
  "이벤트 설계",
  "게임 경제",
  "데이터 분석",
  "AI 보조 업무 과정"
],
  "serviceSteps": [
  {
    "title": "플레이",
    "text": "직접 유저 입장에서 플레이"
  },
  {
    "title": "관찰",
    "text": "재미, 불편함, 반복 행동, 이벤트, 보상, UI와 유저 반응 관찰"
  },
  {
    "title": "질문",
    "text": "왜 이런 행동이 발생하는지 질문"
  },
  {
    "title": "가설 설정",
    "text": "가능한 원인을 가설로 설정"
  },
  {
    "title": "분석",
    "text": "게임 데이터, 시스템, BM, 경쟁 게임과 유저 반응 조사"
  },
  {
    "title": "개선안 제안",
    "text": "근거를 바탕으로 개선안 제시"
  },
  {
    "title": "검증",
    "text": "효과를 검증하고 부작용과 한계도 검토"
  }
],
  "dataAnalysis": {
  "topics": [
    "게임 내 패키지 가격",
    "유료재화 효율",
    "성장재화 효율",
    "이벤트 보상",
    "하루 획득 가능 재화",
    "목표 보상까지 필요한 기간",
    "성장 속도",
    "이벤트 참여 효율",
    "경쟁게임 BM",
    "유저 반응 데이터"
  ],
  "images": [],
  "documents": []
},
  "aiSteps": [
  {
    "title": "문제 정의",
    "text": "문제와 목표를 먼저 직접 정의"
  },
  {
    "title": "질문 설계",
    "text": "필요한 프롬프트와 질문 작성"
  },
  {
    "title": "자료 탐색",
    "text": "AI로 아이디어와 자료 탐색"
  },
  {
    "title": "직접 검증",
    "text": "AI가 제시한 정보와 결과를 직접 검토"
  },
  {
    "title": "보완",
    "text": "본인의 판단과 경험을 반영해 수정"
  },
  {
    "title": "결과물 제작",
    "text": "분석자료, 데이터, 문서, 웹사이트 등 결과물 제작"
  }
],
  "skills": [
  {
    "title": "게임 서비스 분석",
    "subtitle": "관찰과 가설 검증 역량을 키우는 중",
    "items": [
      "게임 서비스 구조 분석",
      "유저 리텐션 분석",
      "유저 경험 분석",
      "라이브 서비스 분석",
      "경쟁작 조사",
      "BM 구조 분석"
    ]
  },
  {
    "title": "데이터 활용",
    "subtitle": "게임 서비스를 숫자로 이해하기 위한 학습",
    "items": [
      "Excel",
      "Google Sheets",
      "기초 데이터 분석"
    ]
  },
  {
    "title": "AI 활용 및 생산성",
    "subtitle": "직접 판단하고 검토하는 AI 활용",
    "items": [
      "ChatGPT",
      "Codex",
      "프롬프트 설계",
      "AI 보조 리서치",
      "AI 보조 프로토타이핑"
    ]
  },
  {
    "title": "문서화 및 커뮤니케이션",
    "subtitle": "분석을 정리하고 전달하는 도구",
    "items": [
      "PowerPoint",
      "Notion",
      "Figma 기초"
    ]
  }
],
};
