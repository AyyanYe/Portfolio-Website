import { useState, useEffect, useCallback } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getReadmeUrl, fetchReadme } from "../utils/readme";

const ReadmeModal = ({ isOpen, onClose, project }) => {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const readmeUrl = project ? (project.readme_url || getReadmeUrl(project.source_code_link)) : null;

  const loadReadme = useCallback(async () => {
    if (!readmeUrl) {
      setError("No README available");
      setContent(null);
      return;
    }
    setLoading(true);
    setError(null);
    let result = await fetchReadme(readmeUrl);
    if (result.error && readmeUrl.includes("/main/")) {
      const fallback = readmeUrl.replace("/main/", "/master/");
      result = await fetchReadme(fallback);
    }
    setLoading(false);
    if (result.error) setError(result.error);
    else setContent(result.content);
  }, [readmeUrl]);

  useEffect(() => {
    if (isOpen && project) loadReadme();
    else {
      setContent(null);
      setError(null);
      setLoading(false);
    }
  }, [isOpen, project, loadReadme]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="README"
    >
      <div
        className="relative bg-tertiary rounded-2xl shadow-xl max-w-3xl w-full max-h-[85vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-4 border-b border-white/10 shrink-0 flex-wrap gap-2">
          <h3 className="text-white font-bold text-xl truncate pr-8">
            {project?.name ?? "README"}
          </h3>
          <div className="flex items-center gap-2">
            {project?.demo_url && (
              <a
                href={project.demo_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#915eff] hover:underline"
              >
                Live demo
              </a>
            )}
            {project?.source_code_link && (
              <a
                href={project.source_code_link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#915eff] hover:underline"
              >
                Source
              </a>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-xl leading-none"
            aria-label="Close"
          >
            &times;
          </button>
        </div>
        <div className="overflow-y-auto p-6 flex-1 prose prose-invert prose-sm max-w-none readme-content">
          {loading && (
            <p className="text-secondary animate-pulse">Loading README…</p>
          )}
          {error && !loading && (
            <p className="text-red-400">{error}</p>
          )}
          {content && !loading && (
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReadmeModal;
