import { useState } from "react";
import { FiUploadCloud } from "react-icons/fi";

type FileInputWithIconProps = {
  id?: string;
  onFileSelect?: (file: File | null) => void;
};

export const FileInputWithIcon: React.FC<FileInputWithIconProps> = ({
  id,
  onFileSelect,
}) => {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      if (onFileSelect) {
        onFileSelect(file);
      }
    }
  };

  return (
    <div className="w-full">
      <label
        htmlFor={id}
        className="group flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-[#9EFF00] transition duration-300 ease-in-out text-center px-4"
      >
        <FiUploadCloud className="text-4xl text-gray-500 group-hover:text-[#9EFF00] mb-2" />
        <span className="text-sm text-gray-600 group-hover:text-[#9EFF00]">
          {fileName || "Click to upload file"}
        </span>
        <input
          id={id}
          type="file"
          className="hidden"
          onChange={handleFileChange}
        />
      </label>
    </div>
  );
};
