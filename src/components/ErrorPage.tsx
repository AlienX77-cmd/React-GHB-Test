type ErrorPageProps = {
  status?: number;
  title?: string;
  message?: string;
};

export default function ErrorPage({
  status = 404,
  title = "พบข้อผิดพลาด",
  message = "หน้าที่คุณขอไม่พบ หรือเกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง",
}: ErrorPageProps) {
  return (
    <main className="min-h-screen bg-orange-500 flex items-center justify-center p-6">
      <div className="max-w-xl w-full bg-[#ffa73b] rounded-lg shadow-lg p-8 text-center">
        <div className="flex items-center justify-center mb-6">
          <div className="bg-white/20 rounded-full p-4">
            <svg
              className="w-12 h-12 text-white"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M11.001 10h2v5h-2zM11 16h2v2h-2z"
                fill="currentColor"
                opacity="0.95"
              />
              <path
                d="M12 2a10 10 0 100 20 10 10 0 000-20zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0z"
                fill="currentColor"
                opacity="0.15"
              />
            </svg>
          </div>
        </div>

        <p className="text-sm text-white/90 mb-2">รหัสสถานะ</p>
        <h2 className="text-5xl font-bold text-white mb-2">{status}</h2>
        <h3 className="text-xl font-semibold text-white/95 mb-4">{title}</h3>
        <p className="text-sm text-white/90 mb-6 leading-relaxed">{message}</p>

        <div className="flex gap-3 justify-center">
          <button
            onClick={() => window.history.back()}
            className="px-4 py-2 rounded-md border border-white text-white bg-transparent hover:bg-white/10 transition"
            aria-label="Go back"
          >
            กลับไป
          </button>

          <button
            onClick={() => (window.location.href = "/")}
            className="px-4 py-2 rounded-md bg-white text-orange-600 font-semibold hover:brightness-95 transition"
            aria-label="Go home"
          >
            หน้าแรก
          </button>
        </div>
      </div>
    </main>
  );
}
