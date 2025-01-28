import { Account } from '@/components/account';
import { MainIntro } from './mainintro';
import { MainLocation } from './mainlocation';
import { MainTop } from './maintop';
import { Comment } from './maincomment';
import { Bgm } from './bgm';
import { GetComment } from './getComment';


export default async function Main() {
  const varComment = await GetComment()

  return (
    <>

      <div>
        <div className="flex flex-col items-center min-h-screen bg-neutral-100"> {/* 화면 중앙에 배치 */}
          <div className="relative max-w-96">
            <Bgm></Bgm>
            <MainTop/>
            <MainIntro />
            <MainLocation/>
            <Comment comments ={varComment}/>
            <Account/>
          </div>
        </div>
      </div>
    </>
  );
}

