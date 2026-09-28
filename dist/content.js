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
    "title": "챌린저스 월드 시즌 4 복귀 유저 정착 경험 분석",
    "status": "Analysis in Progress",
    "summary": "군 복무 이후 복귀해 배틀메이지를 Lv.286까지 육성한 경험을 바탕으로, 성장 지원이 정착과 피로에 미친 영향을 살펴봅니다.",
    "question": "초고속 성장 지원은 복귀 유저의 장기 정착으로 이어지는가? 260레벨 이후에는 어떤 요소가 성장 동기와 피로를 함께 만드는가?",
    "observation": "빠른 레벨 성장과 단계별 장비·보스 목표는 몰입을 높였지만, 반복 사냥과 주간 미션은 보상 동기와 의무감을 동시에 만들었습니다.",
    "hypothesis": "초반 성장 속도가 매우 빠를수록 260레벨 이후의 속도 변화가 크게 체감되며, 반복 보상의 손실 회피가 누적되면 일시적인 이탈로 이어질 수 있습니다.",
    "steps": [
      {
        "label": "Personal Experience",
        "status": "Observation",
        "text": "군 복무 중 이벤트 소식을 접하고 모바일 연동으로 간헐적으로 플레이한 복귀 유저입니다. 전역 후 챌린저스 월드 시즌 4 시작과 함께 배틀메이지를 육성해 마스터 티어를 달성했고, 월드 리프와 짧은 휴식 이후 다시 플레이하여 Lv.286에 도달했습니다."
      },
      {
        "label": "Observation",
        "status": "Observation",
        "text": "하이퍼 블링크의 빠른 200레벨 달성과 259레벨까지 적용된 추가 경험치 5,000%, 버닝 BEYOND의 260~280레벨 1+1 성장, 아이템 버닝 PLUS의 장비·보스 목표가 최신 콘텐츠 진입 부담을 크게 낮췄습니다."
      },
      {
        "label": "Question",
        "status": "Hypothesis",
        "text": "빠른 성장으로 6차 전직에 도달한 복귀 유저가 260레벨 이후 반복 사냥과 일일·주간 콘텐츠를 만났을 때, 계속 플레이하게 만드는 요소와 쉬게 만드는 요소는 무엇일까요?"
      },
      {
        "label": "Hypothesis",
        "status": "Hypothesis",
        "text": "확정 보상은 접속 습관을, 보스의 확률 보상은 기대감을, 다음 보스와 티어는 장기 목표를 만듭니다. 반면 빠른 성장 이후의 속도 차이와 놓치면 손해라는 압박이 누적되면 자발적 플레이가 의무적인 플레이로 바뀔 수 있다는 가설입니다."
      },
      {
        "label": "Data to Verify",
        "status": "Data to be Added",
        "text": "레벨 구간별 플레이 시간과 성장 체감, 접속 계기, 일일·주간 콘텐츠 소요 시간, 외부 공략 검색 사례, 패스 구매 이유, 마스터 달성·휴식·재복귀 시점을 기록합니다. 캐릭터 정보와 이벤트 화면, 공식 공지, 커뮤니티 반응을 함께 수집할 예정입니다."
      },
      {
        "label": "Analysis",
        "status": "Analysis in Progress",
        "text": "경험을 복귀 계기, 초고속 성장, 260레벨 이후 속도 변화, 장비·보스 도전, 반복 접속, 피로와 목표 포기, 재복귀의 일곱 단계로 분류했습니다. 현재는 공식 이벤트 구조와 개인 경험을 대조했으며 정량 기록과 커뮤니티 표본 조사는 진행 전입니다."
      },
      {
        "label": "Insight",
        "status": "Data to be Added",
        "text": "현재의 인사이트 후보는 세 가지입니다. 초고속 성장 이후의 속도 절벽, 보상이 만드는 접속 동기와 의무감의 양면성, 게임 내부 안내보다 외부 공략에 의존하는 복귀 경험입니다. 추가 자료로 검증하기 전까지는 결론이 아닌 후보로 구분합니다."
      },
      {
        "label": "Proposal",
        "status": "Hypothesis",
        "text": "검토 중인 방향은 260레벨 도달 전후의 성장 속도 변화를 미리 안내하고, 캐릭터 상태에 따라 다음 성장·보스 목표를 우선순위로 제시하며, 놓친 일일·주간 보상을 일부 회복할 수 있는 유연한 참여 구조를 제공하는 것입니다."
      },
      {
        "label": "Expected Effect",
        "status": "Hypothesis",
        "text": "다음 행동을 찾는 시간, 외부 공략 의존도와 보상 손실에 대한 압박을 줄이는 것을 목표로 합니다. 효과는 목표 안내 이용률, 추천 콘텐츠 진입률, 주간 미션 참여 패턴과 재접속률로 확인해야 하며 실제 개선 폭은 검증되지 않았습니다."
      },
      {
        "label": "Risk / Trade-off",
        "status": "Hypothesis",
        "text": "추천 목표가 지나치게 강하면 자유로운 플레이를 방해할 수 있고, 보상 회복 기능이 과도하면 꾸준히 참여한 유저가 손해라고 느낄 수 있습니다. 성장 속도를 더 높이는 방식은 이후 구간의 속도 차이를 오히려 키울 가능성도 있습니다."
      },
      {
        "label": "Limitation",
        "status": "Observation",
        "text": "한 명의 복귀 유저 경험에 기반한 자기 관찰입니다. 실제 접속·이탈 데이터가 없고 직업, 과금, 플레이 시간, 챌린저스 월드 환경의 영향을 분리하지 못했습니다. 운영 의도에 대한 내용은 확인된 사실이 아닌 가설입니다."
      },
      {
        "label": "What I Learned",
        "status": "Observation",
        "text": "편의성이 좋아져도 반복에 필요한 시간과 손실 회피 압박은 별개의 문제로 남을 수 있었습니다. 개인 체감, 공식적으로 확인한 이벤트 구조, 아직 검증하지 않은 운영 가설을 구분해야 신뢰할 수 있는 분석이 된다는 점을 배웠습니다."
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
        "label": "공식 이벤트 자료",
        "url": "https://maplestory.nexon.com/news/update/805"
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
