import { useState } from "react";

export default function Lottery() {
  const [selectedProduct, setSelectedProduct] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [startingNumber, setStartingNumber] = useState("");
  const [endingNumber, setEndingNumber] = useState("");
  const [startingDate, setStartingDate] = useState("");
  const [endingDate, setEndingDate] = useState("");

  const [loading, setLoading] = useState(false);
  const [resultMessage, setResultMessage] = useState("");

  const handleProductChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    setSelectedProduct(val);

    // clear category when product is not "5"
    if (val !== "5") setSelectedCategory("");
  };

  const handleSubmit = async () => {
    if (
      !selectedProduct ||
      !startingNumber ||
      !endingNumber ||
      !startingDate ||
      !endingDate
    ) {
      setResultMessage("กรุณากรอกข้อมูลให้ครบถ้วน");
      return;
    }

    if (selectedProduct === "5" && !selectedCategory) {
      setResultMessage("กรุณาเลือกหมวดอักษร");
      return;
    }

    if (isNaN(Number(startingNumber)) || isNaN(Number(endingNumber))) {
      setResultMessage("กรุณากรอกเลขสลากให้ถูกต้อง");
      return;
    }

    if (new Date(startingDate) > new Date(endingDate)) {
      setResultMessage("กรุณากรอกวันที่ให้ถูกต้อง");
      return;
    }

    setLoading(true);

    try {
      const payload = {
        product: selectedProduct,
        category: selectedProduct === "5" ? selectedCategory : null,
        startNumber: startingNumber || null,
        endNumber: endingNumber || null,
        startDate: startingDate || null,
        endDate: endingDate || null,
      };

      console.log("Submitting payload:", payload);
    } catch (error) {
      setResultMessage("เกิดข้อผิดพลาดในการตรวจรางวัล");
      console.error("Error during submission:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-orange-500 max-w-screen min-h-screen p-4 ">
      <div className="text-blue-500 font-bold text-2xl justify-center text-center">
        ตรวจรางวัล สลากออมทรัพย์ ธอส.
      </div>
      <div className="bg-[#ffa73b] m-4 p-4 rounded-lg justify-center text-center">
        <div className="bg-[#ffc782] p-4 m-4 rounded-lg flex flex-col gap-4">
          <h1 className="text-center justify-center font-semibold text-2xl">
            ผลิตภัณฑ์
          </h1>
          <select
            className="w-full p-2 rounded-lg bg-white"
            value={selectedProduct}
            onChange={handleProductChange}
          >
            <option value="">- กรุณาเลือกผลิตภัณฑ์ -</option>
            <option value="10">สลากออมทรัพย์ ธอส. 10 ปี</option>
            <option value="5">สลากออมทรัพย์ ธอส. 5 ปี</option>
            <option value="3">สลากออมทรัพย์ ธอส. 3 ปี</option>
          </select>

          <h1 className="text-center justify-center font-semibold text-xl">
            หมวดอักษร
          </h1>
          <select
            className="w-full p-2 rounded-lg bg-white"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            disabled={selectedProduct !== "5"}
          >
            {selectedProduct !== "5" && (
              <option value="" disabled>
                - ไม่มีหมวดอักษรสำหรับผลิตภัณฑ์นี้ -
              </option>
            )}

            {selectedProduct === "5" && (
              <>
                <option value="" disabled>
                  - กรุณาเลือกหมวดอักษร -
                </option>
                <option value="IA">IA</option>
                <option value="IB">IB</option>
              </>
            )}
          </select>
          <div className="bg-[#e39842] p-4 rounded-lg mt-2">
            <h1 className="text-center justify-center font-semibold text-lg">
              เลขสลากเริ่มต้น
            </h1>
            <input
              type="number"
              className="w-full p-2 rounded-lg bg-white mt-3"
              placeholder="กรอกเลขสลากเริ่มต้น"
              value={startingNumber}
              onChange={(e) => setStartingNumber(e.target.value)}
            />
            <h1 className="text-center justify-center font-semibold text-lg mt-4 mb-4">
              ถึง
            </h1>
            <h1 className="text-center justify-center font-semibold text-lg">
              เลขสลากสิ้นสุด
            </h1>
            <input
              type="number"
              className="w-full p-2 rounded-lg bg-white mt-3"
              placeholder="กรอกเลขสลากสิ้นสุด"
              value={endingNumber}
              onChange={(e) => setEndingNumber(e.target.value)}
            />
          </div>
        </div>
        <div className="bg-[#ffc782] mt-5 m-4 p-4 rounded-lg flex flex-col gap-4">
          <h1 className="text-center justify-center font-semibold text-2xl">
            งวดประจำวันที่
          </h1>
          <h1 className="text-center justify-center font-semibold text-lg mt-2">
            ตั้งแต่
          </h1>
          <input
            type="date"
            className="w-full p-2 rounded-lg bg-white"
            value={startingDate}
            onChange={(e) => setStartingDate(e.target.value)}
          />
          <h1 className="text-center justify-center font-semibold text-lg mt-2">
            ถึง
          </h1>
          <input
            type="date"
            className="w-full p-2 rounded-lg bg-white"
            value={endingDate}
            onChange={(e) => setEndingDate(e.target.value)}
          />
        </div>
        <p className="font-semibold text-lg text-blue-600 text-center leading-relaxed">
          กรุณาอย่าระบุเดือนและปี ก่อนวันที่
        </p>
        <p className="font-semibold text-lg text-blue-600 text-center leading-relaxed">
          มีสิทธิ์ถูกรางวัล และหลังวันที่สลาก
        </p>
        <p className="font-semibold text-lg text-blue-600 text-center leading-relaxed">
          ครบอายุ ที่ระบุในสลาก
        </p>
        <button
          className="mt-4 p-4 text-center border-white border-2 rounded-lg bg-orange-600 text-white cursor-pointer"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "กำลังตรวจ..." : "ตรวจรางวัล"}
        </button>

        {resultMessage && (
          <p className="mt-3 text-center text-sm text-white break-word">
            {resultMessage}
          </p>
        )}
      </div>
    </div>
  );
}
