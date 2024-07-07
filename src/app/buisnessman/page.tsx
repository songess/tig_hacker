import Image from 'next/image';
import GroupSVG from '../../../public/svg/group.svg';
import SecondSVG from '../../../public/svg/second.svg';
import ThirdSVG from '../../../public/svg/third.svg';
import FirstSVG from '../../../public/svg/first.svg';
import ScrollSVG from '../../../public/svg/scroll.svg';
import Group2SVG from '../../../public/svg/group2.svg';
import InstagramSVG from '../../../public/svg/instagram.svg';
import StarSVG from '../../../public/svg/star.svg';
import Link from 'next/link';

const reviews: {
  content: string;
  rating: number;
  name: string;
  info: string;
}[] = [
  {
    content:
      '평일 오전에는 손님이 없어서 TIG 즉흥 이벤트 기능을 사용했더니 기존 대비 손님이 많이 와서 좋아요. 시간을 효율적으로 사용할 수 있습니다.',
    rating: 5,
    name: '강남 A 볼링장',
    info: '20대 남성',
  },
  {
    content:
      'TIG에서 다른 동아리나 동호회에 대신 홍보해주니까 단체 손님들이 많이 와요. 기존에 사용했던 광고비보다 마케팅 효과가 더 좋습니다.',
    rating: 5,
    name: '마포 B 볼링장',
    info: '20대 여성',
  },
  {
    content:
      '원래 예약 관리를 자체적으로 해서 실수가 되게 많았는데 TIG에서 관리 툴을 제공해주니까 너무 편하고 좋습니다. 고객에게 리마인드 문자도 가능해서 너무 편해요.',
    rating: 5,
    name: '마포 C 스크린 골프장',
    info: '20대 여성',
  },
  {
    content:
      '이벤트를 진행해도 고객들이 모를 때가 많아서 별로 이득을 못 봤는데 TIG에서 진행하면 고객들이 알아봐주고 더 찾아와주는거 같아요. 똑같은 이벤트를 진행해도 TIG에서 하면 더 이득을 봅니다.',
    rating: 5,
    name: '송파 D 헬스장',
    info: '20대 남성',
  },
  {
    content:
      '음식, 쇼핑 관련 플랫폼은 다 있는데 여가에만 없어서 아쉬웠습니다. 이제 드디어 생겼네요. 여가 사업 종사자 분들은 다들 꼭 쓰셨으면 좋겠습니다!',
    rating: 5,
    name: '마포 E 탁구장',
    info: '마포 E 탁구장',
  },
  {
    content:
      '네이버에 아무리 홍보해도 이벤트를 진행 중인지 사람들이 잘 몰라서 어떻게 마케팅 해야하는지 고민이 많았습니다. 그러다 TIG라는 서비스를 알게 되었고 TIG를 통해 들어오는 고객들이 기존보다 훨씬 많아져서 정말 다행이에요!! 고객과 사업자 모두 이득을 보는 구조가 참 좋습니다.',
    rating: 5,
    name: '강남 F 당구장',
    info: '강남 F 당구장',
  },
];

export default function Page() {
  return (
    <main className="flex w-full h-full flex-col items-center overflow-y-scroll snap-y snap-mandatory relative">
      <Link
        href="/"
        className="z-30 absolute bottom-[20px] right-[20px] w-fit h-[64px] p-[30px] border-none font-semibold text-[28px] text-grey4 flex justify-center items-center rounded-[10px] hover:bg-grey7"
      >
        소비자 이신가요? 클릭!
      </Link>
      <div>
        <ScrollSVG className="z-30 absolute bottom-[25px] mx-auto translate-x-[-50%]" />
        <p className="z-30 absolute bottom-[10px] mx-auto translate-x-[-50%] text-[20px] leading-[40px] tracking-[-0.02em] text-grey6">
          Scroll down to see more
        </p>
      </div>
      <section className="w-full h-full bg-black shrink-0 snap-start flex justify-center items-center gap-[132px]">
        <div className="relative w-[700px]">
          <FirstSVG className="absolute bottom-[-500px]" />
        </div>
        <div className="flex flex-col gap-[208px]">
          <div className="flex flex-col gap-[40px]">
            <GroupSVG />
            <p className="font-semibold text-[34px] tracking-[-0.02em] text-white">
              당신의 여가를 TIG로 즐기세요
            </p>
          </div>
          <div className="flex flex-col text-grey4">
            <p>여가 예약 중개 플랫폼 TIG는</p>
            <p>여가를 더 쉽게 즐길 수 있도록</p>
            <p>솔루션을 제공합니다</p>
          </div>
        </div>
      </section>
      <section className="z-20 w-full h-full bg-grey3 shrink-0 snap-start flex flex-col gap-[30px] justify-center items-center font-bold text-[34px] tracking-[-0.02em] text-grey5">
        <p>
          아직도 무분별한{' '}
          <span className="text-bold text-grey6">
            랜덤 마케팅에 광고비를 지출
          </span>{' '}
          하시나요?
        </p>
        <p>
          고객 유치를 위한{' '}
          <span className="text-bold text-grey6">홍보 수단이 제한적</span>이라
          어려움을 겪고 계신가요?
        </p>
        <p>
          <span className="text-bold text-grey6">예약 관리 툴이 없어 </span>
          사업 진행에 한계를 느끼셨나요?
        </p>
        <p>
          <span className="text-bold text-grey6">
            효율적인 사업 관리가 안 돼
          </span>
          힘드셨나요?
        </p>
      </section>
      <section className="w-full h-full bg-black bg-gradient-to-b from-[#CED3D6] to-white shrink-0 snap-start flex flex-col gap-[35px] justify-center items-center font-bold text-[55px] tracking-[-0.02em] text-grey7">
        <p>걱정마세요,</p>
        <p>
          <span className="text-primary_orange1">TIG</span>가 모두
          해결해드릴게요!
        </p>
      </section>
      <section className="w-full h-full bg-[#F8F9FA] shrink-0 snap-start flex flex-col gap-[60px] justify-center items-center font-semibold text-[36px] tracking-[-0.02em] text-black px-[240px]">
        <p>현재 많은 사업자들이 TIG를 통해 수익을 창출하고 계십니다.</p>
        <div className="w-3/4">
          <Image
            src="/png/dummy.png"
            alt="tigVideo"
            layout="responsive"
            width={1440}
            height={810}
            sizes="(max-width: 1440px) 75vw, 1440px"
          />
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
              날짜별 예약 확인,
              <br /> 고객 예약 리마인드 서비스로
              <br /> 예약을 쉽게 관리하세요!
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
            사업체 방문 고객,
            <br /> 후기 등 사업 관리 툴로
            <br /> 업무 효율을 증진해보세요!
          </p>
        </div>
      </section>
      <section className="w-full h-full bg-white shrink-0 snap-start flex gap-[60px] justify-between items-center font-semibold text-[48px] leading-[70px] tracking-[-0.02em] text-black px-[240px]">
        <div className="flex flex-col gap-[30px]">
          <p>3</p>
          <p>
            즉흥 이벤트 등록으로
            <br /> 고객을 쉽게
            <br /> 유치할 수 있습니다!
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
              className="w-calgap h-fit flex flex-col p-5 justify-around bg-white rounded-[10px]"
            >
              <p className="text-[18px] leading-[28px] font-medium tracking-[-0.02em] text-grey6">
                {review.content}
              </p>
              <StarSVG />
              <div className="flex gap-[10px] text-[18px] leading-[30px] font-medium tracking-[-0.02em] text-grey4">
                <p>{review.name}</p>
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
