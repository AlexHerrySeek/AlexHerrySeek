import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./MusicPlayer.scss";

export default function MusicPlayer() {
  const [showPopup, setShowPopup] = useState(false);
  const [music, setMusic] = useState<{ title: string; url: string } | null>(null);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    setShowPopup(true);
  }, []);

  const handleDeny = () => {
    setShowPopup(false);
  };

  const handleAllow = async () => {
    setShowPopup(false);
    await playMusic();
  };

  const playMusic = async () => {
    try {
      const res = await fetch("https://api.thanhdieu.com/rand-music.php");
      const data = await res.json();

      // Nếu có bài đang phát thì dừng trước
      if (audio) {
        audio.pause();
        audio.removeEventListener("ended", handleMusicEnd);
      }

      const audioObj = new Audio(data.musicUrl);
      setAudio(audioObj);
      setMusic({ title: data.titleTracks, url: data.musicUrl });

      audioObj.play();

      toast.info(`🎵: ${data.titleTracks}`, {
        position: "top-right",
        autoClose: 4000,
      });

      // Khi nhạc kết thúc → phát bài mới
      audioObj.addEventListener("ended", handleMusicEnd);
    } catch (err) {
      toast.error("Cannot play music!", { position: "top-right" });
      console.error(err);
    }
  };

  const handleMusicEnd = () => {
    // Phát bài mới khi bài hiện tại hết
    playMusic();
  };

  return (
    <>
      {showPopup && (
        <div className="music-popup">
          <div className="popup-inner">
            <p>Do you want to allow listening to music while browsing the web?</p>
            <div className="popup-actions">
              <button className="deny" onClick={handleDeny}>
                No, see you next time
              </button>
              <button className="allow" onClick={handleAllow}>
                Always allow it
              </button>
            </div>
          </div>
        </div>
      )}

      {music && (
        <div className="music-info">
          <p>🎶 <strong>{music.title}</strong></p>
          <button
            onClick={() => {
              audio?.pause();
              playMusic();
            }}
          >
            🔁 Play another song
          </button>
        </div>
      )}

      <ToastContainer />
    </>
  );
}
