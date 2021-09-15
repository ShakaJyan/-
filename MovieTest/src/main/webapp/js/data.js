/*
정답
1
3
3
2
1
1
2
3
3
1
*/		
const qnaList = [
  {
    q: '1. 존윅이 다시 킬러로 돌아온 계기?',
    a: [
      { answer: 'a. 강아지', type: [3,4,5] },
      { answer: 'b. 친구', type: [0] },
      { answer: 'c. 가족', type: [2] },
    ]
  },
  {
    q: '2. 쿠엔틴 티란티노 감독은 몇편을 찍으면 은퇴한다고 했을까? ',
    a: [
      { answer: 'a. 5편', type: [0] },
      { answer: 'b. 7편', type: [1] },
      { answer: 'c. 10편', type: [2,3,4,5] },
    ]
  },
  {
    q: '3. 마블 페이즈3까지 영화 총 몇편 나왔을까?',
    a: [
      { answer: 'a. 25편', type: [1] },
      { answer: 'b. 20편', type: [0] },
      { answer: 'c. 23편', type: [3,4,5] }
    ]
  },
  {
    q: '4. 사무엘 잭슨이 본인 출연한 영화에서 가장 많이 욕을 한 영화는?',
    a: [
      { answer: 'a. 킬러의 보디가드 ', type: [3] },
      { answer: 'b. 재키브라운 ', type: [5] },
      { answer: 'c. 펄프픽션 ', type: [4] },
    ]
  },
  {
    q: '5. 007영화는 총 몇 편 나왔을까?',
    a: [
      { answer: 'a. 25편', type: [4,5] },
      { answer: 'b. 18편', type: [1]},
      { answer: 'c. 20편', type: [2] },
    ]
  },

  {
    q: '6. 서유기 선리기연의 명대사는?',
    a: [
      { answer: 'a. 만약 사랑의 기한을 정한다면 일만년으로 하겠소', type: [5] },
      { answer: 'b. 행복한지 따져보는 건 우울해지는 지름길이야', type: [4] },
      { answer: 'c. 우리가 앞서 나갈 기회를 자기만 하면 저들이 결승선을 옮겨 놓지', type: [3] },
    ]
  },
  {
    q: '7. 다음 중 재산이 가장 많은 히어로는?',
    a: [
      { answer: 'a. 아이언맨', type: [1] },
      { answer: 'b. 블랙팬서', type: [3,4] },
      { answer: 'c. 배트맨', type: [0] },
    ]
  },
  {
    q: '8. 배트맨 vs 슈퍼맨 누가 전적이 우세할까?',
    a: [
      { answer: 'a. 무승부', type: [1] },
      { answer: 'b. 슈퍼맨', type: [2] },
      { answer: 'c. 배트맨', type: [3,4,5] },
    ]
  },
  {
    q: '9. DC영화에서 조커 역할을 2번 이상 출연한 배우?',
    a: [
      { answer: 'a. 호아킨 피닉스', type: [1] },
      { answer: 'b. 히스 레저', type: [2] },
      { answer: 'c. 자레드 레토', type: [4,5] },
    ]
  },
  {
    q: "10. Eternal Sunshine 영화에서 여자주인공 클레멘타인이 It's gonna be gone soon. What do we do? 라는 대사 이후 남자 주인공이 말하는 대사는?",
    a: [
      { answer: 'a. Enjoy it', type: [4,5] },
      { answer: 'b. Let it be.', type: [1,3] },
      { answer: 'c. What?', type: [0,2] },
    ]
  }
]

const infoList = [
  {
    name: '영화모코코!',
    desc: '재밌는 영화들은 언제나 있으니 도전해보세요!'
  },
  {
    name: '아는게 쪼오오~~~~금 있나보네요',
    desc: '영화에 대해 어느정도 관심이 있으시네요~ 조금 더 재밋는 영화들 찾아서 봅시다!'
  },  
  {
    name: '딱 중간 정도군요',
    desc: '영화에 관심을 더더더더더더더욱 가져 봅시다.'
  },
  {
    name: '오~호!',
    desc: '영화에 대해 잘 아는군요! 좋습니다~'
  },
  {
    name: 'E-YoL!!!!',
    desc: 'ㅗㅜㅑ~ 억지로 틀리라고 낸 문제들을 어느정도 맞췄군요 좋습니다!'
  },
  {
    name: '영화모코코 품앗이 하러갑시다.',
    desc: '영화에 흥미없는 모코코들에게 재밌는 영화들 추전해주러 갑시다!'
  },
]
