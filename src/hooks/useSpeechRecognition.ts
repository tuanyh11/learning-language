import { useEffect, useState } from "react";
import SpeechRecognition, {
  ListeningOptions,
  useSpeechRecognition,
} from "react-speech-recognition";

const useSpeechRecognitionCustom = () => {
  const [error, setError] = useState<string | null>(null);
  const [speaking, setSpeaking] = useState<boolean>(false);

  const startListeningHandler = async ({
    language = "en",
    continuous = false,
    interimResults = false,
  }: ListeningOptions) => {
    try {
      await SpeechRecognition.startListening({
        language,
        continuous,
        interimResults,
      });
    } catch (error) {
      window.alert("Lôĩ ghi âm");
    }
  };

  const stopListeningHandler = async () => {
    try {
      await SpeechRecognition.stopListening();
    } catch (error) {
      alert("Lỗi khi dừng ghi âm");
    }
  };

  const synth: SpeechSynthesis = window.speechSynthesis;

  const {
    transcript,
    resetTranscript,
    listening,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const speak = (text: string, lang = "en-US", repeat = 1, delay = 2000) => {
    const speech = new Speech();
  };

  // Hàm dừng lại (pause) giọng nói
  const pauseSpeaking = () => {
    if (synth.speaking) {
      synth.pause(); // Tạm dừng giọng nói nếu đang đọc
      setSpeaking(false);
    }
  };

  const recordSpeech = (text: string, lang = "en-US") => {
    if (synth.speaking) {
      synth.cancel(); // Hủy bỏ giọng nói đang đọc trước đó nếu có
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;

    const audioChunks: BlobPart[] = [];
    utterance.onend = async () => {
      const blob = new Blob(audioChunks, { type: "audio/wav" }); // Có thể thay đổi kiểu file âm thanh ở đây
      const audioUrl = URL.createObjectURL(blob);
      const audioElement = new Audio(audioUrl);
      try {
        await audioElement.play(); // Sử dụng async/await để phát âm thanh và chờ kết quả của Promise
        console.log("Phát âm thanh thành công.");
      } catch (error) {
        console.error("Lỗi khi phát âm thanh:", error);
      }
    };

    utterance.onpause = () => {
      setSpeaking(false); // Khi ghi giọng nói bị tạm dừng, đánh dấu là đã dừng
    };

    utterance.onresume = () => {
      setSpeaking(true); // Khi tiếp tục ghi giọng nói sau khi tạm dừng, đánh dấu là đang nói
    };

    synth.speak(utterance);
  };

  return {
    transcript,
    listening,
    error,
    startListeningHandler,
    stopListeningHandler,
    resetTranscript,
    speak,
    speaking,
    pauseSpeaking,
    recordSpeech,
    browserSupportsSpeechRecognition,
  };
};

export default useSpeechRecognitionCustom;
