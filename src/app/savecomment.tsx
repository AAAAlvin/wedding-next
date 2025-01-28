import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

interface CommentProps {
  showForm: boolean;
  setShowForm: (value: boolean) => void;
  onAddComment: (newComment: { id: string; user_nm: string; comment: string }) => void; // 새 댓글 추가 함수
}

export function GuestbookForm({ showForm, setShowForm, onAddComment }: CommentProps) {
  const [formData, setFormData] = useState({ name: "", password: "", message: "" });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleClick = () => {
    setShowForm(!showForm);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");
    setLoading(true);

    try {
      const response = await fetch("/api/comment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      
      if (response.ok) {
        setSuccessMessage("댓글이 성공적으로 저장되었습니다!");
        setFormData({ name: "", password: "", message: "" });
        
        // 새 댓글을 부모 컴포넌트로 전달하여 상태 업데이트
        onAddComment({ id: data.data[0].id, user_nm: formData.name, comment: formData.message });

        setTimeout(() => {
          setShowForm(false);
        }, 1000);
      } else {
        setErrorMessage(data.error || "댓글 저장에 실패했습니다.");
      }
    } catch (error) {
      setErrorMessage("알 수 없는 오류가 발생했습니다.");
      console.error("Error occurred:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-neutral-800 bg-opacity-50 flex items-center justify-center p-4">
      <div className="relative w-full max-w-lg bg-white rounded-lg shadow-lg p-8">
        <form onSubmit={handleSubmit}>
          <button
            onClick={handleClick}
            className={`absolute top-4 right-4 text-neutral-500 hover:text-red-500 transition duration-200 ${loading ? "text-neutral-300 cursor-not-allowed" : ""}`}
            aria-label="Close"
            disabled={loading}
          >
            <FontAwesomeIcon icon={faTimes as IconProp} className="w-6 h-6" />
          </button>

          <h2 className="text-center text-2xl font-bold mb-6">방명록(축하 글) 작성</h2>

          <div className="space-y-4">
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
                className="mt-1 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-neutral-500 text-neutral-700"
              />
            </div>

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
                className="mt-1 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-neutral-500 text-neutral-700"
              />
            </div>

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
                className="mt-1 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-neutral-500 text-neutral-700"
                value={formData.message}
                onChange={handleChange}
                rows={5}
              ></textarea>
            </div>
          </div>

          <div className="mt-6">
            <button className="w-full bg-neutral-800 text-white py-3 rounded-lg shadow-lg hover:bg-neutral-700 transition duration-200">
              신랑 &amp; 신부에게 <b>축하 글 전달하기</b>
            </button>
          </div>

          {successMessage && (
            <p className="text-green-800 text-sm mt-2 py-2 px-4 bg-green-100 border-l-4 border-green-800 rounded-lg shadow-md">
              {successMessage}
            </p>
          )}

          {errorMessage && (
            <p className="text-red-600 text-sm mt-2 py-2 px-4 bg-red-100 border-l-4 border-red-500 rounded-lg shadow-md">
              {errorMessage}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
