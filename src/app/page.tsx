import IphoneFifteenSVG from '../../public/svg/iPhone 15 Pro.svg';

const reviews: {
  content: string;
  rating: number;
  name: string;
  info: string;
}[] = [
  {
    content:
      '동아리에서 번개로 만날 때가 잦은데, 그럴 때면 인원 수가 많아서 예약하기가 어려웠습니다. TIG를 알고 난 뒤로 예약이 쉽고 간단하게 되니까 너무 효율적입니다.',
    rating: 5,
    name: '김ㅇㅇ',
    info: '20대 남성',
  },
  {
    content:
      '예약할 때 예약금은 따로 내고 결제는 또 따로 내고... 너무 번거로웠습니다. 그런데 TIG에서 예약부터 결제까지 한 번에 가능하니까 신경쓸 것도 편하네요.',
    rating: 5,
    name: '하ㅇㅇ',
    info: '20대 여성',
  },
  {
    content:
      '예전에는 제가 하나 하나 검색하고 찾느라 너무 번거로웠는데 TIG에서 필터를 설정하고 나니, 제가 원하는 정보만 떠서 너무 좋습니다.',
    rating: 5,
    name: '김ㅇㅇ',
    info: '20대 여성',
  },
  {
    content:
      'TIG 하나로 당구장도 예약하고 대학로 연극도 예약할 수 있어서 뭐 하지 싶을 때 바로 TIG부터 확인합니다. 데이트 계획 세울 때로 위치 설정하고 시간 설정하면 즐길 수 있는 활동이 바로 떠서 애용합니다.',
    rating: 5,
    name: '최ㅇㅇ',
    info: '20대 남성',
  },
  {
    content:
      '친구들이랑 술 마시고 볼링치러 가는데 처음 써봤습니다. 원래 무작정 볼링장 가고 자리가 날 때까지 기다리느라 시간 낭비가 심했는데, 제 라인을 미리 예약하고 가니까 기다리는 시간 없이 바로 칠 수 있어서 너무 좋았습니다.',
    rating: 5,
    name: '이ㅇㅇ',
    info: '30대 남성',
  },
  {
    content:
      '사실 어떤 당구장 가격이 합리적인지 모르고 그냥 소비하고 있었는데 TIG 쓰니까 이제 알았어요.. 제가 그동안 더 비싼 돈을 내면서 당구장을 다니고 있었네요. 저도 모르고 있던 지출을 막아주셔서 감사합니다!',
    rating: 5,
    name: '하ㅇㅇ',
    info: '30대 여성',
  },
];

export default function Home() {
  return (
    <main className="flex w-full h-full flex-col items-center overflow-y-scroll snap-y snap-mandatory relative">
      <section className="w-full h-full bg-[#191F28] shrink-0 snap-start flex justify-center items-center gap-x-[49px]">
        <div className="flex flex-col w-fit h-fit justify-start">
          <span>스포츠 여가의</span>
          <span>새로운 시작</span>
          <div className="text-grey5">
            여가 예약 중개 플랫폼 TIG는 여가를 더 쉽게 즐길 수 있도록 솔루션을
            제공합니다.
          </div>
          <button className="bg-primary_orange1 text-white">
            바로 시작하기
          </button>
        </div>
        <IphoneFifteenSVG />
      </section>
    </main>
  );
}
