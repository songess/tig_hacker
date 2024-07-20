import Image from 'next/image';
import GroupSVG from '../../public/svg/group.svg';
import FirstSVG from '../../public/svg/first.svg';
import SecondSVG from '../../public/svg/second.svg';
import ThirdSVG from '../../public/svg/third.svg';
import ScrollSVG from '../../public/svg/scroll.svg';
import Group2SVG from '../../public/svg/group2.svg';
import InstagramSVG from '../../public/svg/instagram.svg';
import StarSVG from '../../public/svg/star.svg';
import Link from 'next/link';
import IphoneFifteenSVG from '../../public/svg/iPhone 15 Pro.svg';
import TigLogoSVG from '../../public/svg/tigLog.svg';

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
      <section className="w-full h-full bg-[#191F28] shrink-0 snap-start flex justify-center items-center gap-[40px]">
        <div className="flex flex-col w-[450px] h-fit justify-start ml-[10%]">
          <TigLogoSVG />
          <span className="font-bold text-[60px] text-white leading-[140%] tracking-[-2%] mt-10">
            스포츠 여가의
          </span>
          <span className="font-bold text-[60px] text-white leading-[140%] tracking-[-2%]">
            새로운 시작
          </span>
          <div className="text-grey5 font-medium text-[26px] leading-[150%] tracking-[-2%] mb-[70px]">
            여가 예약 중개 플랫폼 TIG는 여가를 더 쉽게 즐길 수 있도록 솔루션을
            제공합니다.
          </div>

          <Link
            href={'https://main--testtig.netlify.app/'}
            className="w-fit h-fit py-[26px] px-[50px] rounded-[10px] bg-primary_orange1 font-bold text-[20px] leading-[100%] tracking-[-2%] text-white"
          >
            바로 시작하기
          </Link>
        </div>
        <IphoneFifteenSVG />
      </section>
      <section className="z-20 w-full h-full bg-grey3 shrink-0 snap-start flex flex-col gap-[30px] justify-center px-[200px] font-bold text-[34px] tracking-[-0.02em] text-grey7">
        <p className="font-bold text-[52px] leading-[140%] mb-[10px] text-black">
          스포츠여가,
          <br />
          즐기기 어려우셨나요?
        </p>
        <div className="rounded-[30px] bg-white text-[28px] font-medium w-fit h-[100px] px-[60px] flex items-center">
          원하는 사업체를 찾기 위해{' '}
          <span className="font-semibold text-primary_orange1">
            일일이 검색
          </span>
          해야 해요.
        </div>
        <div className="rounded-[30px] bg-white text-[28px] font-medium w-fit h-[100px] px-[60px] flex items-center self-end">
          사업체마다{' '}
          <span className="font-semibold text-primary_orange1">
            요구하는 예약 방식이 다르거나 예약이 안 돼요.
          </span>
        </div>
        <div className="rounded-[30px] bg-white text-[28px] font-medium w-fit h-[100px] px-[60px] flex items-center">
          예약 따로, 결제 따로...{' '}
          <span className="font-semibold text-primary_orange1">
            너무 번거로워요.
          </span>
        </div>
        <div className="rounded-[30px] bg-white text-[28px] font-medium w-fit h-[100px] px-[60px] flex items-center self-end">
          워크인으로 가서{' '}
          <span className="font-semibold text-primary_orange1">
            자리가 날 때까지 마냥 기다렸어요.
          </span>
        </div>
      </section>
      <section className="w-full h-full bg-black bg-gradient-to-b from-[#CED3D6] to-white shrink-0 snap-start flex flex-col gap-[35px] justify-center items-center font-bold text-[55px] tracking-[-0.02em] text-grey7">
        <p>걱정마세요,</p>
        <p>
          <span className="text-primary_orange1">TIG</span>가 모두
          해결해드릴게요!
        </p>
      </section>
      <section className="w-full h-full bg-[#F8F9FA] shrink-0 snap-start flex flex-col gap-[60px] justify-center items-center font-semibold text-[36px] tracking-[-0.02em] text-black px-[240px]">
        <p className='text-bold'>현재 많은 고객들이 TIG를 통해 여가를 즐기고 계십니다.</p>
          <div className="w-full">
            <video width="100%" height="240" controls preload="none">
              <source src="/path/TIG_소비자편.mp4" type="video/mp4" />
              <track
                src="/path/to/captions.vtt"
                kind="subtitles"
                srcLang="en"
                label="English"
              />
              Your browser does not support the video tag.
            </video>
          </div>
      </section>
      <section className="w-full h-full bg-white shrink-0 snap-start flex gap-[60px] justify-between items-center font-semibold text-[48px] leading-[70px] tracking-[-0.02em] text-black px-[240px]">
        <div className="flex flex-col justify-between h-full py-[130px]">
          <p className="w-fit h-[64px] p-[30px] border border-primary_orange1 rounded-[10px] font-semibold text-[28px] text-primary_orange1 flex justify-center items-center">
            How to use?
          </p>
          <div className="flex flex-col gap-[30px]">
            <p>1</p>
            <p>
              위치, 시간, 가격 등<br /> 필터 설정 후 필요한 정보만
              <br /> 확인하세요!
            </p>
          </div>
        </div>
        <SecondSVG />
      </section>
      <section className="w-full h-full bg-[#FFFBF4] shrink-0 snap-start flex gap-[60px] justify-between items-center font-semibold text-[48px] leading-[70px] tracking-[-0.02em] text-black px-[240px]">
        <ThirdSVG />
        <div className="flex flex-col gap-[30px]">
          <p>2</p>
          <p>
            예약부터 결제까지
            <br /> 통일된 과정으로
            <br /> 한번에 해결하세요!
          </p>
        </div>
      </section>
      <section className="w-full h-full bg-white shrink-0 snap-start flex gap-[60px] justify-between items-center font-semibold text-[48px] leading-[70px] tracking-[-0.02em] text-black px-[240px]">
        <div className="flex flex-col gap-[30px]">
          <p>3</p>
          <p>
            스포츠부터
            <br /> 연극까지 한 번에
            <br /> 예약하세요!
          </p>
        </div>
        <SecondSVG />
      </section>
      <section className="w-full h-full bg-[#F5F6F7] shrink-0 snap-start flex gap-[70px] flex-col justify-center items-center px-[120px]">
        <p className="w-fit h-[64px] p-[30px] border border-primary_orange1 rounded-[10px] font-semibold text-[28px] text-primary_orange1 flex justify-center items-center">
          Customer Review
        </p>
        <div className="flex-wrap	w-full flex gap-[12px]">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="w-calgap h-[180px] flex flex-col p-5 justify-around bg-white rounded-[10px]"
            >
              <p className="text-[18px] leading-[28px] font-medium tracking-[-0.02em] text-grey6">
                {review.content}
              </p>
              <StarSVG />
              <div className="flex gap-[10px] text-[18px] leading-[30px] font-medium tracking-[-0.02em] text-grey4">
                <p>{review.name}</p>
                <p>{review.info}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="w-full h-full bg-white shrink-0 snap-start flex flex-col justify-between items-center pt-[20px]">
        <div className="w-3/4 relative">
          <Image
            src="/png/5.png"
            alt="tigReccommened"
            layout="responsive"
            width={1200}
            height={478}
            sizes="(max-width: 1200px) 75vw, 1200px"
          />
          <p className="absolute left-[60px] top-[60px] text-white text-[30px] leading-[50px] tracking-[-0.02em]">
            TIG는 2024 예비창업패키지 선정 기업으로
            <br /> 정부와 함께 건강한 성장을 하고 있으며,
            <br /> 법인 등록이 완료된 안전한 기업입니다.
          </p>
        </div>
        <div className="w-full flex flex-col px-[240px] gap-[16px] bg-grey6 h-1/3 justify-center">
          <Group2SVG className="shrink-0" />
          <div className="font-medium text-[20px] leading-[40px] tracking-[-0.02em] text-grey5">
            <p>서울특별시 광진구 광나루로 17길 14-4 201-1호</p>
            <p>tel : 010-9159-6485</p>
            <p>E-mail : 2290072@ewhain.net</p>
          </div>
          <InstagramSVG className="shrink-0" />
        </div>
      </section>
    </main>
  );
}
