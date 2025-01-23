"use client";
import React from "react";
import Image from "next/image";

interface AccountInfo {
    name: string;
    bank: string;
    account: string;
  }

const accounts = {
  groom: [
    { name: "유영현", bank: "새마을금고", account: "9003-2072-4037-4" },
    { name: "유영현", bank: "새마을금고", account: "9003-2072-4037-4" },
    { name: "유영현", bank: "새마을금고", account: "9003-2072-4037-4" },
  ],
  bride: [
    { name: "김아람", bank: "국민은행", account: "110-000-000000" },
    { name: "김아람", bank: "국민은행", account: "110-000-000000" },
    { name: "김아람", bank: "국민은행", account: "110-000-000000" },
    { name: "김아람", bank: "국민은행", account: "110-000-000000" },
  ],
};

export function Account() {
  return (
    <div id="tel_ul_3" className="bg-white">
      {/* 신랑측 계좌정보 */}
      <AccountSection title="신랑측 계좌번호" accounts={accounts.groom} />

      {/* 신부측 계좌정보 */}
      <AccountSection title="신부측 계좌번호" accounts={accounts.bride} />
    </div>
  );
}

function AccountSection({ title, accounts }: { title: string; accounts: AccountInfo[] }) {
  return (
    <div className="p-5">
      <a className="flex justify-center bg-neutral-100 p-5">
        {title}
        <i className="fa fa-chevron-down"></i>
      </a>
      <ul className="c accordion-list accordion1">
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
            <a className="pay" href="#">
                <Image src="/icons/pay-kakao.svg" alt="카카오페이" width={24} height={24} />
            </a>
        </div>
    </li>
  );
}
