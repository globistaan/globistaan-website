import { useEffect } from "react";

const AI_TERMS_REGEX =
  /\b(ai|a\.i\.|artificial intelligence|ai tool|ai tools|ai service|ai services|machine learning|ml|llm|llms|chatbot|chatbots|generative ai|genai|neural network|neural networks|deep learning|language model|language models|gpt)\b/i;

const TARGET_TEXT_ELEMENTS = [
  "p",
  "li",
  "blockquote",
  "figcaption",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "span",
].join(", ");

const hasVisibleText = (value) => Boolean(value && value.trim().length > 0);

const shouldSkipElement = (element) => {
  if (!element || element.closest("[data-ai-highlight-ignore='true']")) {
    return true;
  }

  if (element.closest(".ai-themed-text")) {
    return false;
  }

  const hasNestedTarget = element.querySelector(TARGET_TEXT_ELEMENTS);
  return Boolean(hasNestedTarget);
};

const applyAITextHighlights = () => {
  const elements = document.querySelectorAll(TARGET_TEXT_ELEMENTS);

  elements.forEach((element) => {
    if (shouldSkipElement(element)) {
      return;
    }

    const text = element.textContent || "";
    const isMatch = hasVisibleText(text) && AI_TERMS_REGEX.test(text.toLowerCase());

    element.classList.toggle("ai-themed-text", isMatch);
  });
};

export const useAITextHighlight = (trigger) => {
  useEffect(() => {
    let frameId = null;

    const scheduleHighlight = () => {
      if (frameId) {
        cancelAnimationFrame(frameId);
      }

      frameId = requestAnimationFrame(() => {
        applyAITextHighlights();
      });
    };

    scheduleHighlight();

    const observer = new MutationObserver(() => {
      scheduleHighlight();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    return () => {
      if (frameId) {
        cancelAnimationFrame(frameId);
      }
      observer.disconnect();
    };
  }, [trigger]);
};
