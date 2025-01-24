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
  }

const accounts = {
  groom: [
    { name: "유갑종", bank: "SC은행", account: "596-20-307217" },
    { name: "김영심", bank: "하나은행", account: "443-910273-25707" },
    { name: "유영현", bank: "새마을금고", account: "9003-2072-40374" },
  ],
  bride: [
    { name: "김길탁", bank: "기업은행", account: "010-2008-0192" },
    { name: "정화숙", bank: "기업은행", account: "1430-4050-501-026" },
    { name: "김아람", bank: "국민은행", account: "480402-04-084600" },
  ],
};

export function Account() {
  return (
      <div className="bg-white p-10">
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
    <div className="p-5">
      <button
        onClick={toggleAccordion}
        className="flex justify-between items-center bg-neutral-100 p-5 w-full"
      >
        <span>{title}</span>
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
          />
        ))}
      </ul>
    </div>
  );
}

function AccountItem({ name, bank, account }: { name: string; bank: string; account: string }) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(`${bank} ${account}`);
    alert("계좌 정보가 복사되었습니다!");
  };

  return (
    <li className="flex justify-between items-center border-t p-3">
        <div className="flex-col font-gowun py-2">
            <a className="flex" onClick={copyToClipboard}>
                <img src="/icons/copy.svg" alt="복사 아이콘" />
                <span className="px-2">{name}</span>
            </a>
            <a className="flex gap-3 text-sm" onClick={copyToClipboard}>
                <span className="bnk">{bank}</span>
                <span className="nmb">{account}</span>
            </a>
        </div>
        
        <div className="inline-flex items-center justify-center w-12 h-12 bg-yellow-300 rounded-full">
            <a className="pay" href="https://qr.kakaopay.com/FbCFOC8GC">
                <Image src="/icons/pay-kakao.svg" alt="카카오페이" width={24} height={24} />
            </a>
        </div>
    </li>
  );
}
