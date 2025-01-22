import { MainTitle } from "./maintitle";
import { Map } from "./map";

export function MainLocation() {
    return (
      <div className="bg-white">
        <div className="bg-white p-1">
            <MainTitle title="LOCATION" subtitle="오시는길"/>
            <div className="row-03 p-6">
            <div className="text-center text-gray-600 font-gowun">
                <div className="space-x-1 text-2xl font-bold">
                  <span>수원 노보텔, 샴페인홀</span>
                </div>
                <div className="p-3">
                경기 수원시 팔달구 덕영대로 902
                  <br/>
                  <br/>
                  Tel. 010-3432-5887
                </div>
              </div>
            </div>
        </div>
        <Map></Map>
  
      </div>
    );
  }
  