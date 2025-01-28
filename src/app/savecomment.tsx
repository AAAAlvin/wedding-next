'use client'
import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
  
interface CommentProps {
    showForm: boolean;
    setShowForm: (value: boolean) => void; // 상태 변경 함수 타입 정의
  }
  
export function GuestbookForm({ showForm, setShowForm }: CommentProps) {
    
    const [formData, setFormData] = useState({ name: '', password:'', message: '' });
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false); // 로딩 상태 추가
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };

    const handleClick = () => {
        setShowForm(!showForm); // 상태 변경
    };

  // 폼 제출 핸들러
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage('');
    setErrorMessage('');
    setLoading(true); // 로딩 상태 시작

    try {
        // API 호출 (POST)
        const response = await fetch('/api/comment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData), // formData를 JSON 형태로 보냄
        });
    
        const data = await response.json();
    
        // 응답이 성공적인 경우
        if (response.ok) {
          setSuccessMessage('댓글이 성공적으로 저장되었습니다!');
          setFormData({ name: '', password: '', message: '' }); // 폼 초기화

            // 성공 메시지 표시 후 1초 뒤에 폼을 닫기
            setTimeout(() => {
                setShowForm(false); // 1초 후에 팝업 닫기
            }, 2000);
        } else {
          // 실패한 경우
          setErrorMessage(data.error || '댓글 저장에 실패했습니다.');
        }
      } catch (error) {
        // 네트워크 오류나 다른 오류 발생 시 처리
        setErrorMessage('알 수 없는 오류가 발생했습니다.');
        console.error('Error occurred:', error);
        } finally {
            setLoading(false); // 로딩 상태 종료
        }
    };

return (
    <div className="fixed inset-0 bg-neutral-800 bg-opacity-50 flex items-center justify-center p-4">
      {/* Form Container */}
      <div className="relative w-full max-w-lg bg-white rounded-lg shadow-lg p-8">
        {/* Close Button */}

        <form onSubmit={handleSubmit}>
            <button
            onClick={handleClick}
            className={`absolute top-4 right-4 text-neutral-500 hover:text-red-500 transition duration-200 ${
                loading ? "text-neutral-300 cursor-not-allowed" : ""
            }`}
            aria-label="Close"
            disabled={loading} // 로딩 중일 때 비활성화
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
                value={formData.name}
                onChange={handleChange}
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
                value={formData.password}
                onChange={handleChange}
                className="mt-1 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:border-neutral-500"
                />
            </div>

            {/* Note Field */}
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                내용 <span className="text-red-500">*</span>
                </label>
                <textarea
                id="message"
                placeholder="내용을 작성해 주세요. (최대 500자)"
                name="message"
                autoComplete="off"
                maxLength={500}
                className="mt-1 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:border-neutral-500"
                value={formData.message}
                onChange={handleChange}
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

            {/* 성공/오류 메시지 */}
            {successMessage && (
            <p className="text-green-800 text-sm mt-2 py-2 px-4 bg-green-100 border-l-4 border-green-800 rounded-lg shadow-md transform transition duration-300 ease-in-out animate-fadeIn">
                {successMessage}
            </p>
            )}

            {errorMessage && (
            <p className="text-red-600 text-sm mt-2 py-2 px-4 bg-red-100 border-l-4 border-red-500 rounded-lg shadow-md transform transition duration-300 ease-in-out animate-fadeIn">
                {errorMessage}
            </p>
            )}
        </form>
      </div>
    </div>
  );
}
