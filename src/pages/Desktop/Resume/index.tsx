import type { FC } from "react";
import resume from '../../../assets/pdf/MyResume.pdf';
export const Resume: FC = () => {

    return (
    <div className="relative w-full h-full flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-4 text-yellow-400">My Resume</h1>

      {/* Download button */}
      <a
        href={resume}
        download
        className="mb-6 px-6 py-2 rounded-xl bg-yellow-400 text-black font-semibold hover:bg-yellow-500 transition"
      >
        Download Resume
      </a>

      {/* PDF Viewer */}
      <div className="flex flex-col gap-4 w-full bg-white shadow-lg rounded-xl border-amber-300 p-4 min-h-screen">
      <object
        data={resume}
        type="application/pdf"
        className="w-full h-full flex-1"
      >
        {/* Fallback text */}
        <p>Your browser doesn't support embedded PDFs. <a href={resume}>Download the file</a>.</p>
      </object>
    </div>

    </div>
    );
};
