'use client'
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export function GuestbookForm() {
  
return (
    <div className="fixed inset-0 bg-neutral-800 bg-opacity-50 flex items-center justify-center p-4">
      {/* Form Container */}
      <div className="relative w-full max-w-lg bg-white rounded-lg shadow-lg p-8">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-neutral-500 hover:text-red-500 transition duration-200"
          aria-label="Close"
        >
          <FontAwesomeIcon icon={faTimes as IconProp} className="w-6 h-6" />
        </button>

        {/* Title */}
        <h2 className="text-center text-2xl font-bold mb-6">방명록 (축하 글) 작성</h2>

        {/* Form Fields */}
        <div className="space-y-4">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              이름 <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              type="text"
              placeholder="이름을 입력해 주세요."
              name="name"
              autoComplete="off"
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:border-bluneutrale-500"
            />
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              비밀번호 <span className="text-red-500">*</span>
            </label>
            <input
              id="password"
              type="password"
              placeholder="비밀번호를 입력해 주세요."
              name="password"
              autoComplete="off"
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:border-neutral-500"
            />
          </div>

          {/* Note Field */}
          <div>
            <label htmlFor="note" className="block text-sm font-medium text-gray-700">
              내용 <span className="text-red-500">*</span>
            </label>
            <textarea
              id="note"
              placeholder="내용을 작성해 주세요. (최대 500자)"
              name="note"
              autoComplete="off"
              maxLength={500}
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:border-neutral-500"
              rows={5}
            ></textarea>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-6">
          <button
            className="w-full bg-neutral-800 text-white py-3 rounded-lg shadow-lg hover:bg-neutral-700 transition duration-200"
          >
            신랑 &amp; 신부에게 <b>축하 글 전달하기</b>
          </button>
        </div>
      </div>
    </div>
  );
}
