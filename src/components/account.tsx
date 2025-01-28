"use client";
import React, { useState } from "react";
import Image from "next/image";
import { MainTitle } from "@/app/maintitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

interface AccountInfo {
    name: string;
    bank: string;
    account: string;
    kakaopayLink: string;
  }

const accounts = {
  groom: [
    { name: "유갑종", bank: "SC은행", account: "596-20-307217", kakaopayLink: "https://qr.kakaopay.com/FbCFOC8GC"},
    { name: "김영심", bank: "하나은행", account: "443-910273-25707", kakaopayLink: "https://qr.kakaopay.com/FVZ007fPi" },
    { name: "유영현", bank: "새마을금고", account: "9003-2072-40374", kakaopayLink: "https://qr.kakaopay.com/FbCFOC8GC" },
  ],
  bride: [
    { name: "김길탁", bank: "기업은행", account: "010-2008-0192", kakaopayLink: "https://qr.kakaopay.com/FbCFOC8GC" },
    { name: "정화숙", bank: "기업은행", account: "1430-4050-501-026", kakaopayLink: "https://qr.kakaopay.com/FbCFOC8GC" },
    { name: "김아람", bank: "국민은행", account: "480402-04-084600", kakaopayLink: "https://qr.kakaopay.com/FbCFOC8GC" },
  ],
};

export function Account() {
  return (
      <div className="bg-white  py-10 p-2">
        <div className="bg-white">
            <MainTitle title="ACCOUNT" subtitle="마음 전하실 곳"/>
            <div className="row-03 p-6">
            <div className="text-center text-gray-600 font-gowun">
                <div className="p-3">
                    참석이 어려우신 분들을 위해
                    <br/>
                    계좌번호를 기재하였습니다.
                    <br/>
                    너그러운 마음으로 양해 부탁드립니다.
                </div>
              </div>
            </div>
        </div>
        
        {/* 신랑측 계좌정보 */}
        <AccountSection title="신랑측 계좌번호" accounts={accounts.groom} />

        {/* 신부측 계좌정보 */}
        <AccountSection title="신부측 계좌번호" accounts={accounts.bride} />

      </div>
  );
}

function AccountSection({
  title,
  accounts,
}: {
  title: string;
  accounts: AccountInfo[];
}) {

  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <div className="p-5 font-gowun">
      <button
        onClick={toggleAccordion}
        className="flex justify-between items-center bg-neutral-100 p-5 w-full"
      >
        <span className="font-semibold text-neutral-600">{title}</span>
        <FontAwesomeIcon
          icon={(isOpen ? faChevronUp : faChevronDown) as IconProp}
        />
      </button>
      
      <ul
        className={`transition-[max-height] duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {accounts.map((account, index) => (
          <AccountItem
            key={index}
            name={account.name}
            bank={account.bank}
            account={account.account}
            kakaopayLink={account.kakaopayLink}
          />
        ))}
      </ul>
    </div>
  );
}

function AccountItem({ name, bank, account, kakaopayLink }: { name: string; bank: string; account: string ; kakaopayLink: string }) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(`${bank} ${account}`);
    alert("계좌 정보가 복사되었습니다!");
  };

  return (
    <li className="flex justify-between items-center border-b p-3 text-neutral-700">
        <div className="flex-col font-gowun py-2">
            <a className="flex" onClick={copyToClipboard}>
                <Image
                  src="/icons/copy.svg"
                  alt="Copy"
                  width={16} // 원하는 너비
                  height={16} // 원하는 높이
                />
                <span className="px-2">{name}</span>
            </a>
            <a className="flex gap-3 text-xs" onClick={copyToClipboard}>
                <span className="bnk">{bank}</span>
                <span className="nmb">{account}</span>
            </a>
        </div>
        
        <div className="inline-flex items-center justify-center w-12 h-12 bg-yellow-300 rounded-full">
            <a className="pay" href={kakaopayLink}>
                <Image src="/icons/pay-kakao.svg" alt="카카오페이" width={24} height={24} />
            </a>
        </div>
    </li>
  );
}

// 나
// https://qr.kakaopay.com/FbCFOC8GC

// 엄마
// https://qr.kakaopay.com/FVZ007fPi