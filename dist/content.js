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
    { name: 'FC Online', genre: 'Sports / Football', duration: '간헐적으로 장기간 이용', description: '경기 빈도는 높지 않았지만, 이벤트 참여 → 보상 획득 → 재화 축적 → 선수 구매 → 스쿼드 구성으로 다시 접속한 경험' }
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
    "title": "챌린저스 월드 시즌 4 복귀 육성 사례 분석",
    "status": "Case Study Complete",
    "summary": "시즌 시작일에 생성한 배틀메이지를 Lv.286까지 육성한 기록을 바탕으로, 초고속 성장 이후의 목표 전환·정보 탐색·유료 패스 선택을 분석합니다.",
    "question": "강한 성장 지원으로 복귀 유저를 빠르게 핵심 구간에 진입시킨 뒤, 어떤 장치가 다음 성장과 보스 도전으로 연결하며 어느 지점에서 부담이 커지는가?",
    "observation": "공식 성장 지원, Lv.286 캐릭터, 마스터 티어, 보스 격파와 패스 구매 기록을 교차 확인했습니다. 빠른 레벨 진입 뒤에는 보스·티어·장비가 연속 목표를 제공했고, 필요한 정보는 공식 안내와 외부 공략을 함께 사용해 보완했습니다.",
    "hypothesis": "이 사례에서 핵심 과제는 성장 속도를 더 높이는 것이 아니라, 260 이후 달라지는 성장 단위와 여러 목표의 우선순위를 복귀 유저가 예측하고 선택할 수 있게 만드는 것입니다. 전체 유저 효과는 별도 데이터로 검증해야 합니다.",
    "executiveSummary": [
      { "label": "대상", "title": "복귀 유저 1인 사례", "text": "시즌 시작일부터 배틀메이지를 Lv.286까지 육성한 자기 관찰" },
      { "label": "핵심 문제", "title": "260 이후 선택 충돌", "text": "사냥·보스·장비·심볼이 동시에 중요해 우선순위 판단이 필요" },
      { "label": "확인 행동", "title": "공략 탐색 후 진행 변경", "text": "시즌 공략을 확인하고 아이템 버닝의 낮은 단계 보스부터 진행" },
      { "label": "제안", "title": "목표 기반 성장 가이드", "text": "시간·보상·가능 여부를 비교해 다음 활동을 선택하도록 지원" }
    ],
    "meta": [
      { "label": "플레이 유형", "value": "군 복무 후 복귀 유저 · 자기 관찰" },
      { "label": "월드 / 캐릭터", "value": "챌린저스 월드 1 · 배틀메이지" },
      { "label": "육성 결과", "value": "마스터 티어 · Lv.286" },
      { "label": "마스터 달성", "value": "2026.07.25 21:00" },
      { "label": "플레이 패턴", "value": "평균 1시간 이상 · 일부 미접속일 존재" },
      { "label": "현재 목표", "value": "Lv.290 · 최초의 대적자 및 카링 최저 난이도" }
    ],
    "milestones": [
      { "date": "06.18", "title": "복귀 육성 시작", "text": "시즌 시작일에 챌린저스 월드 1 배틀메이지 생성" },
      { "date": "07.05", "title": "초기 보스 확장", "text": "하드 힐라·하드 루시드 1인 격파 업적 확인" },
      { "date": "07.16", "title": "상위 보스 진입", "text": "하드 진 힐라·하드 듄켈 1인 격파 업적 확인" },
      { "date": "07.24", "title": "검은 마법사 격파", "text": "하드 검은 마법사 1인 격파 업적 확인" },
      { "date": "07.25", "title": "마스터 티어 달성", "text": "챌린저스 월드 시즌 4 마스터 달성" },
      { "date": "08.01", "title": "이지 칼로스 격파", "text": "상위 보스로 다음 목표를 확장" },
      { "date": "09.27", "title": "Lv.286 성장 확인", "text": "Maple.GG와 캐릭터 정보 화면에서 현재 상태 확인" }
    ],
    "decisionSummary": [
      { "label": "분석 대상 유료 상품", "value": "3종", "detail": "제네시스·프라임·프리미엄 모멘텀 패스" },
      { "label": "확인된 상품 금액", "value": "99,600원", "detail": "30,000원 + 39,800원 + 29,800원" },
      { "label": "구매 후 체감", "value": "시간 부담 완화", "detail": "더 플레이해야 한다는 압박보다 목표 달성 여유를 체감한 개인 사례" }
    ],
    "playerJourney": [
      { "stage": "유입", "title": "빠른 성장 기대", "text": "챌린저스 월드의 성장 지원을 계기로 시즌 시작일에 복귀" },
      { "stage": "초기 만족", "title": "260·6차 전직 진입", "text": "개선된 전직 과정과 빠른 레벨업으로 핵심 성장 구간에 진입" },
      { "stage": "선택 충돌", "title": "사냥과 보스 사이의 우선순위", "text": "아이템 버닝 보스와 레벨업 사냥이 모두 중요해 진행 순서를 고민" },
      { "stage": "정보 탐색", "title": "시즌 공략 확인", "text": "챌린저스 서버 공략을 검색한 뒤 낮은 단계 보스부터 진행" },
      { "stage": "목표 확장", "title": "장비·보스·티어", "text": "장비와 재화 확보를 다음 보스와 마스터 티어 목표로 연결" },
      { "stage": "지속 플레이", "title": "패스로 시간 부담 조절", "text": "목표 달성 시간을 줄이는 상품을 선택하고 다음 목표를 유지" }
    ],
    "actualRoutine": [
      { "label": "매일", "title": "일일 퀘스트·몬스터파크", "text": "일일 퀘스트는 개인 플레이 기준 10분 미만. 지역별 100마리를 약 3~4회 생성 주기로 처치한 뒤 몬스터파크를 수행" },
      { "label": "주요 활동", "title": "사냥", "text": "경험치와 메소, 성장 재화, 이벤트 보상을 함께 얻을 수 있어 가장 높은 우선순위로 판단" },
      { "label": "여유 시간", "title": "보스 연습", "text": "연습 모드에서 패턴을 익힌 뒤 실제 격파에 도전" },
      { "label": "후순위", "title": "주간 보스", "text": "반복 피로가 생기면 초기화 전에 몰아서 진행한 개인 패턴" }
    ],
    "quantifiedNotes": [
      { "topic": "일일 퀘스트", "value": "10분 미만", "detail": "지역별 100마리 처치 · 개인 플레이 측정치", "meaning": "짧은 시간으로 완료할 수 있어 시간이 부족한 날에도 유지" },
      { "topic": "제네시스 패스", "value": "예상 6주 → 체감 약 1개월", "detail": "상위 보스 초행·낮은 숙련도를 고려한 개인 예상", "meaning": "시간 단축이 구매 전 기대보다 크게 체감됨" },
      { "topic": "주간 보스 수입", "value": "약 5~6억 메소", "detail": "본인 캐릭터 기준 주간 획득 체감", "meaning": "후반 심볼 강화 1회 비용과 비슷한 수준" },
      { "topic": "심볼 강화비", "value": "뉴비 구간 약 6~10억 메소", "detail": "초반 1억 미만 · 중반 약 10억 · 엔드 구간의 비싼 강화는 40억 이상으로 관찰", "meaning": "성장할수록 주간 수입만으로 감당하기 어려워 장비 구매와 심볼 강화가 경쟁" }
    ],
    "bmInsights": [
      { "product": "제네시스 패스", "reason": "강한 장비 자체보다 해방까지 필요한 시간과 부담을 줄이는 상품으로 판단", "change": "빠른 무기 해방 이후 보스 플레이의 편의와 성장 체감을 확인", "level": "구매·사용 내역 확인 / 효과는 개인 체감" },
      { "product": "프라임 모멘텀 패스", "reason": "현재 성장 구간에 필요한 경험치와 성장 재화를 사냥 시간보다 효율적으로 확보하려고 구매", "change": "직접 사냥 부담을 줄이고 성장 속도를 보완", "level": "구매 내역 확인 / 동기는 자기 보고" },
      { "product": "프리미엄 모멘텀 패스", "reason": "단기간 레벨 성장을 목표로 추가 보상을 선택", "change": "가격 대비 효율 계산보다 보상 규모에서 더 높은 만족을 느낌", "level": "구매 내역 확인 / 만족은 자기 보고" }
    ],
    "prototype": {
      "title": "260 이후, 다음 성장 목표를 선택하세요",
      "description": "콘텐츠를 전부 나열하기보다 현재 캐릭터의 다음 단계에 필요한 활동을 시간·보상·가능 여부와 함께 제시합니다.",
      "goal": "선택 목표 · 장비와 재화 확보 → 스펙 상승 → 상위 보스 도전",
      "activities": [
        { "name": "몬스터파크", "time": "약 10분", "reward": "경험치 ★★★", "state": "오늘 2회 가능", "priority": "추천도 높음" },
        { "name": "주간 보스", "time": "약 20분", "reward": "메소·장비 ★★★", "state": "현재 스펙 클리어 가능", "priority": "보상 확인" },
        { "name": "에픽 던전", "time": "약 30분", "reward": "경험치·성장 재화 ★★", "state": "이번 주 미완료", "priority": "주간 활동" }
      ],
      "controls": ["목표 변경", "전체 콘텐츠 보기", "오늘은 건너뛰기"],
      "timing": "표시 시점은 260레벨 달성 직후와 6차 전직 완료 후 중 실제 사용자 테스트로 비교"
    },
    "takeaways": [
      { "title": "빠른 진입은 다음 목표가 있을 때 이어졌습니다", "text": "레벨 지원 뒤 아이템 버닝, 보스 격파와 티어 보상이 연속 목표를 만들었고 실제 업적도 7월 초부터 8월 초까지 단계적으로 확장됐습니다.", "basis": "공식 이벤트 구조 + 보스 업적" },
      { "title": "260 이후에는 속도보다 우선순위가 중요했습니다", "text": "필요 경험치가 크게 늘어나는 동시에 심볼·장비·보스·주간 미션이 병렬로 열렸습니다. 제한된 시간에서는 모든 콘텐츠보다 다음 목표에 필요한 활동을 고르는 과정이 중요했습니다.", "basis": "경험치 표 + 개인 플레이 관찰" },
      { "title": "주간 수입과 심볼 비용이 장비 성장을 경쟁시켰습니다", "text": "본인 기준 주간 보스 수입은 약 5~6억 메소였지만 신규 유저가 접하는 심볼 강화 상단은 약 6~10억, 중반은 약 10억으로 관찰했습니다. 엔드 구간의 비싼 강화는 40억을 넘기도 해 장비 구매를 미루고 심볼을 우선한 경험이 있었습니다.", "basis": "개인 재화 기록·관찰 · 공식 평균 아님" },
      { "title": "패스는 플레이 압박보다 시간 부담을 낮췄습니다", "text": "제네시스 패스 구매 전에는 약 6주를 예상했지만 실제로는 약 한 달로 체감했습니다. 본인 사례에서는 추가 플레이 의무감보다 해방에 필요한 시간을 줄였다는 편안함으로 이어졌습니다.", "basis": "상품 사용 내역 + 구매자 자기 보고" }
    ],
    "competencies": [
      { "title": "근거 분류", "text": "공식 정보, 제3자 통계, 본인 캡처와 개인 회상을 구분했습니다." },
      { "title": "유저 여정 구조화", "text": "복귀 → 성장 → 장비 → 보스 → 티어 → 다음 목표의 흐름으로 정리했습니다." },
      { "title": "가설과 지표 설계", "text": "개선 효과를 단정하지 않고 재방문·목표 선택·콘텐츠 진입 지표를 제시했습니다." },
      { "title": "트레이드오프 검토", "text": "안내 강화가 자유로운 탐색을 방해할 가능성과 추천 오류 위험을 함께 적었습니다." }
    ],
    "validationPlan": [
      { "title": "복귀 유저 표본 보강", "text": "260레벨 전후 복귀 유저 5명 이상에게 우선순위 혼란과 공략 탐색 여부를 확인" },
      { "title": "노출 시점 비교", "text": "260 달성 직후와 6차 전직 완료 후 중 성장 가이드의 이해도와 목표 선택률을 비교" },
      { "title": "비용 자료 교차 검증", "text": "심볼 종류·레벨별 실제 강화 비용을 공식 또는 재현 가능한 표로 정리해 개인 회상을 대체" }
    ],
    "problems": [
      {
        "rank": "1순위",
        "title": "초고속 성장 이후 목표 전환이 급격함",
        "evidence": "하이퍼 블링크와 버닝 BEYOND는 핵심 구간 진입을 단축하지만, 필요 경험치는 259→260 약 2,434억에서 260→261 약 1조 7,319억으로 상승합니다. 이후 성장은 사냥·일일 콘텐츠·심볼·장비·보스 목표가 함께 시작됩니다.",
        "impact": "복귀 유저가 260 이전의 속도를 기준으로 기대하면 이후 무엇을 먼저 해야 하는지 판단하기 어렵고 체감 속도 차이가 크게 느껴질 수 있습니다.",
        "confidence": "시스템 수치 검증 완료 · 유저 영향은 단일 사례"
      },
      {
        "rank": "2순위",
        "title": "동시에 제시되는 목표의 우선순위가 불명확함",
        "evidence": "챌린저스 패스는 접속·몬스터파크·보스·사냥 미션을 병렬로 제시하고, 아이템 버닝과 티어 보상은 별도의 장비·보스 목표를 제공합니다. 본인은 공식 안내 외에도 종합 공략을 확인해 진행 순서를 정했습니다.",
        "impact": "콘텐츠는 풍부하지만 제한된 시간으로 복귀한 유저는 자신의 목표에 맞는 활동과 생략 가능한 활동을 구분하기 어렵습니다.",
        "confidence": "공식 구조 검증 완료 · 우선순위 혼란은 개인 관찰"
      },
      {
        "rank": "3순위",
        "title": "정보 확인과 최적화가 외부 공략에 분산됨",
        "evidence": "이벤트 재화 사용, 시즌 진행 동선과 보스 패턴을 유튜브·인벤에서 확인했습니다. 시즌 4 종합 공략 영상 한 편은 약 40만 조회를 기록했습니다.",
        "impact": "정보 탐색에 익숙하지 않은 복귀 유저는 보상을 놓치거나 비효율적인 선택을 할 수 있지만, 외부 공략 이용 자체가 게임 안내 부족을 의미하지는 않습니다.",
        "confidence": "개인 행동과 공개 조회수 확인 · 인과관계 미검증"
      }
    ],
    "proposals": [
      {
        "title": "260 이후 성장 전환 브리핑",
        "forProblem": "목표 전환",
        "idea": "255~260 구간에서 이후 성장 방식이 레벨업 중심에서 심볼·일일 콘텐츠·보스·장비의 병행 구조로 바뀐다는 점을 미리 안내합니다. 예상 소요 시간을 단정하기보다 유저가 선택할 수 있는 단기 목표 세 가지를 보여줍니다.",
        "metrics": "브리핑 확인률 · 목표 선택률 · 260 달성 후 7일 재방문 · 265 도달률",
        "risk": "필수 동선처럼 보이면 자유로운 플레이를 방해할 수 있으므로 건너뛰기와 목표 변경을 제공해야 합니다."
      },
      {
        "title": "플레이 목적 기반 주간 우선순위",
        "forProblem": "목표 과밀",
        "idea": "성장·보스·재화·가벼운 참여 중 이번 주 목적을 고르면 관련 미션과 보상을 우선 표시하고, 나머지는 선택 활동으로 접어둡니다. 보상량이나 완료 조건은 바꾸지 않고 정보 배열을 개인화합니다.",
        "metrics": "목적 선택률 · 추천 미션 완료율 · 주간 목표 변경률 · 미션 화면 이탈률",
        "risk": "추천이 잘못되면 손해를 유도했다는 인상을 줄 수 있어 추천 이유와 전체 미션 보기를 함께 제공해야 합니다."
      },
      {
        "title": "상황별 공식 가이드 연결",
        "forProblem": "정보 분산",
        "idea": "캐릭터 레벨, 장비와 진행 중인 이벤트를 기준으로 필요한 공식 설명을 짧은 체크리스트로 연결하고, 보스 공략처럼 숙련이 필요한 항목은 핵심 용어와 연습 목표를 먼저 제시합니다.",
        "metrics": "가이드 진입률 · 가이드 이후 콘텐츠 시작률 · 동일 도움말 재방문 · 외부 이탈 전 도움말 사용률",
        "risk": "패치 이후 낡은 안내가 남으면 신뢰가 더 크게 떨어지므로 버전과 갱신 날짜를 명확히 표시해야 합니다."
      }
    ],
    "evidenceImages": [
      { "src": "assets/maplestory/master-tier-20260725.png", "alt": "챌린저스 월드 시즌 4 마스터 티어 달성 화면", "caption": "마스터 티어 달성 · 2026년 7월 25일 21시" },
      { "src": "assets/maplestory/character-lv286.png", "alt": "배틀메이지 캐릭터 Lv.286 정보 화면", "caption": "배틀메이지 Lv.286 캐릭터 정보" },
      { "src": "assets/maplestory/purchase-20260620.png", "alt": "2026년 6월 20일 메이플스토리 상품 사용 내역", "caption": "시즌 초 상품 사용 내역 · 제네시스 패스 30,000원 포함" },
      { "src": "assets/maplestory/purchase-20260927.png", "alt": "2026년 9월 27일 모멘텀 패스 사용 내역", "caption": "프라임·프리미엄 모멘텀 패스 사용 내역" },
      { "src": "assets/maplestory/boss-achievements-01.png", "alt": "2026년 7월 초 보스 업적 화면", "caption": "시즌 초 보스 격파 업적 · 2026년 7월 5~7일" },
      { "src": "assets/maplestory/boss-achievements-02.png", "alt": "2026년 7월 중순 보스 업적 화면", "caption": "보스 격파 업적 · 2026년 7월 9~16일" },
      { "src": "assets/maplestory/boss-achievements-03.png", "alt": "검은 마법사 등 보스 업적 화면", "caption": "검은 마법사 1인 격파 포함 · 2026년 7월 23~24일" },
      { "src": "assets/maplestory/boss-achievements-04.png", "alt": "이지 칼로스 1인 격파 업적 화면", "caption": "이지 칼로스 1인 격파 · 2026년 8월 1일" }
    ],
    "steps": [
      {
        "label": "Personal Experience",
        "status": "Observation",
        "text": "군 복무 중 이벤트 소식을 접하고 모바일 연동으로 간헐적으로 플레이한 뒤, 전역 후 본격적으로 복귀했습니다. 시즌 시작일인 2026년 6월 18일 챌린저스 월드 1에서 배틀메이지를 생성했습니다. Maple.GG에는 같은 날짜가 캐릭터 생성일로 표시됩니다."
      },
      {
        "label": "Observation",
        "status": "Observation",
        "text": "200레벨까지 약 15분, 200~260레벨까지 약 30분이 걸린 것으로 기억합니다. 개인 측정 기록은 없으므로 일반적인 소요 시간이 아닌 개인 체감치로 한정합니다. 공개 시즌 공략에는 최적화된 260레벨 30분 사례와 약 50~60분 안내가 함께 존재해 준비 상태와 동선에 따라 편차가 큽니다. 공식적으로는 하이퍼 블링크의 추가 경험치 5,000%와 버닝 BEYOND의 260~280레벨 1+1 효과를 확인했습니다."
      },
      {
        "label": "Observation",
        "status": "Verified Result",
        "text": "공개 필요 경험치 표에서 259→260은 약 2,434억, 260→261은 약 1조 7,319억으로 증가합니다. 이후에도 265·270·275·280 구간에서 필요 경험치가 크게 상승합니다. 버닝 BEYOND가 실제 레벨업 횟수를 줄여주지만, 260 이후 성장에 필요한 절대 경험치가 커지는 구조는 수치로 확인할 수 있습니다."
      },
      {
        "label": "Observation",
        "status": "Verified Result",
        "text": "시즌 종료 직후인 2026년 9월 27일 Maple.GG의 Lv.260 이상 표본에서 챌린저스 월드는 1.6%, 챌린저스3은 1.1%, 챌린저스2는 1.0%, 챌린저스4는 0.1%로 표시됐습니다. 월드 1 계열의 표본 비중이 가장 높다는 참고 자료이지만, 시즌 시작 당시의 실제 접속 인구를 증명하지는 않습니다."
      },
      {
        "label": "Data to Verify",
        "status": "Data to be Added",
        "text": "Maple.GG에서 생성일과 현재 레벨은 확인되지만 공개 레벨 히스토리는 제공되지 않아 260·280레벨 달성 날짜는 복원하지 못했습니다. 구간별 소요 시간과 마스터 달성 후 휴식 기간은 개인 회상으로만 남기며 분석 근거로 일반화하지 않습니다."
      },
      {
        "label": "Analysis",
        "status": "Verified Result",
        "text": "마스터 티어는 2026년 7월 25일 21시에 달성했습니다. 보스 업적 화면에서는 7월 5일 하드 힐라·루시드, 7월 16일 하드 진 힐라·듄켈, 7월 24일 하드 검은 마법사 1인 격파, 8월 1일 이지 칼로스 1인 격파를 확인할 수 있습니다. 검은 마법사 도전에 약 7시간이 들었다는 내용은 별도 시간 기록이 없는 개인 회상입니다."
      },
      {
        "label": "Analysis",
        "status": "Analysis in Progress",
        "text": "이벤트 재화 사용, 성장 동선과 보스 패턴을 확인하기 위해 공개 공략을 참고했습니다. 시즌 4 종합 공략 영상 한 편은 약 40만 조회를 기록해 통합 정보에 대한 높은 관심을 보여줍니다. 다만 조회수만으로 게임 내부 안내가 부족하다고 결론 내릴 수 없어, 현재는 이를 문제점이 아닌 정보 탐색 행동으로 분류합니다."
      },
      {
        "label": "Personal Experience",
        "status": "Verified Result",
        "text": "제네시스 패스 30,000원, 프라임 모멘텀 패스 39,800원, 프리미엄 모멘텀 패스 29,800원의 사용 내역을 확보했습니다. 제네시스 패스는 해방까지의 시간 부담을 낮추는 상품, 모멘텀 패스는 경험치와 성장 재화를 사냥 시간보다 효율적으로 보완하는 상품으로 판단해 구매했습니다. 구매 이유와 만족도는 구매자의 자기 보고입니다."
      },
      {
        "label": "Personal Experience",
        "status": "Observation",
        "text": "260 직후에는 일일 퀘스트와 사냥을 우선했고, 시간이 부족해도 몬스터파크를 수행했습니다. 아이템 버닝 보스와 사냥 중 무엇을 먼저 할지 고민한 뒤 공개 공략을 확인했고, 낮은 단계 보스부터 진행하는 행동 변화가 있었습니다. 외부 공략은 진행 순서를 결정하는 데 사용한 것으로 분류했습니다."
      },
      {
        "label": "Question",
        "status": "Hypothesis",
        "text": "실제 플레이 루틴과 세 패스의 구매 이유, 공략 사용 목적은 자기 인터뷰로 보완했습니다. 다음 검증 과제는 260레벨 달성 직후와 6차 전직 완료 후 중 추천 화면의 적절한 노출 시점, 추천 활동의 실제 선택률, 다른 복귀 유저에게도 같은 선택 충돌이 나타나는지입니다."
      },
      {
        "label": "Limitation",
        "status": "Observation",
        "text": "한 명의 복귀 유저 경험에 기반한 자기 관찰입니다. Maple.GG는 Nexon Open API 기반의 제3자 통계이며 전체 이용자를 뜻하지 않습니다. 공개 레벨 히스토리가 없어 구간별 성장 날짜를 검증하지 못했고, 접속·이탈 데이터와 다른 복귀 유저 표본도 없습니다."
      },
      {
        "label": "What I Learned",
        "status": "Observation",
        "text": "공식 이벤트 구조, 제3자 공개 통계, 본인 캡처와 개인 회상을 분리해야 분석의 신뢰도가 높아진다는 점을 확인했습니다. 현재 단계에서는 구매와 플레이 결과를 사실로 기록하되, 피로·이탈·구매 동기처럼 원인을 설명하는 문장은 추가 검증 전까지 결론으로 제시하지 않습니다."
      }
    ],
    "artifacts": [
      {
        "label": "Analysis Document",
        "url": "assets/maplestory/maplestory-case-study.html"
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
      },
      {
        "label": "통합 메이플 옥션 가이드",
        "url": "https://maplestory.nexon.com/Guide/N23GameInformation/Articles/394"
      },
      {
        "label": "Maple.GG 캐릭터 정보",
        "url": "https://maple.gg/u/%EC%95%BC%EC%95%88%EB%96%A1"
      },
      {
        "label": "Maple.GG 월드 통계",
        "url": "https://maple.gg/trends/world"
      },
      {
        "label": "레벨별 필요 경험치 표",
        "url": "https://www.maplerhouse.com/ko/guide/basic/experience-table"
      },
      {
        "label": "시즌 4 공개 공략 영상",
        "url": "https://www.youtube.com/watch?v=Q-b20FJZ0jQ"
      }
    ]
  },
  {
    "id": "fc-online",
    "visible": false,
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
    "visible": false,
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
