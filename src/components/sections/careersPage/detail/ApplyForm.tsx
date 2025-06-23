import { FileInputWithIcon } from "@/components/parts/InputFile";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useApplyJob } from "@/hooks/useApplyJob";
import { applyJobSchema } from "@/validation/formApply";

type Props = {
  onClose: () => void;
  careerId?: string;
};

export const ApplyForm: React.FC<Props> = ({ onClose, careerId }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null as File | null,
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const mutation = useApplyJob(careerId);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleFileChange = (file: File | null) => {
    setFormData((prev) => ({ ...prev, resume: file }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validation = applyJobSchema.safeParse(formData);

    if (!validation.success) {
      const errors = Object.fromEntries(
        validation.error.errors.map((err) => [err.path[0], err.message])
      );
      setFormErrors(errors);
      return;
    }

    const { name, email, phone, resume } = validation.data;

    const formDataToSubmit = new FormData();
    formDataToSubmit.append("name", name);
    formDataToSubmit.append("email", email);
    formDataToSubmit.append("phone", phone);
    formDataToSubmit.append("resume", resume);

    mutation.mutate(formDataToSubmit, {
      onSuccess: () => {
        setFormData({ name: "", email: "", phone: "", resume: null });
        onClose();
      },
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div
        onClick={onClose}
        className="absolute w-screen h-screen bg-black/50 z-10"
      />
      <div className="absolute -top-10 -left-10 w-96 h-96 bg-pink-500 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full opacity-20 blur-3xl"></div>
      <div className="relative z-10 w-full max-w-lg px-8 py-10 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/30 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Full Name
            </label>
            <Input
              id="name"
              type="text"
              className="border-0 border-b-2 rounded-none px-1 mt-2"
              placeholder="Enter your full name"
              required
              value={formData.name}
              onChange={handleChange}
            />
            {formErrors.name && (
              <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
            )}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <Input
              id="email"
              type="email"
              className="border-0 border-b-2 rounded-none px-1 mt-2"
              placeholder="Enter your email"
              required
              value={formData.email}
              onChange={handleChange}
            />
            {formErrors.email && (
              <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
            )}
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-1">
              Phone
            </label>
            <Input
              id="phone"
              type="number"
              className="border-0 border-b-2 rounded-none px-1 mt-2"
              placeholder="Enter your phone number"
              required
              value={formData.phone}
              onChange={handleChange}
            />
            {formErrors.phone && (
              <p className="text-red-500 text-sm mt-1">{formErrors.phone}</p>
            )}
          </div>
          <div>
            <label htmlFor="resume" className="block text-sm font-medium mb-1">
              Resume
            </label>
            <FileInputWithIcon id="resume" onFileSelect={handleFileChange} />
            {formErrors.resume && (
              <p className="text-red-500 text-sm mt-1">{formErrors.resume}</p>
            )}
          </div>
          <Button variant={"primary"} type="submit" className="w-full">
            {mutation.isPending ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </div>
    </div>
  );
};
