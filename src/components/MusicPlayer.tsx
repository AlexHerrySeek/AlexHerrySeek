import { useEffect, useState } from "react";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import "./MusicPlayer.scss";

export default function MusicPlayer() {
  const [showPopup, setShowPopup] = useState(false);
  const [popupClass, setPopupClass] = useState("fadeInUp");
  const [music, setMusic] = useState<{ title: string; url: string } | null>(null);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    setShowPopup(true);
  }, []);

  const handleDeny = () => {
    setPopupClass("fadeOutDown");
    setTimeout(() => setShowPopup(false), 400);
  };

  const handleAllow = async () => {
    setPopupClass("fadeOutUp");
    setTimeout(async () => {
      setShowPopup(false);
      await playMusic();
    }, 400);
  };

  const playMusic = async () => {
    try {
      const res = await fetch("https://api.thanhdieu.com/rand-music.php");
      const data = await res.json();

      if (audio) {
        audio.pause();
        audio.removeEventListener("ended", handleMusicEnd);
      }

      const audioObj = new Audio(data.musicUrl);
      setAudio(audioObj);
      setMusic({ title: data.titleTracks, url: data.musicUrl });

      document.title = `🎵 ${data.titleTracks} - Nguyễn Minh Nhật`;

      await audioObj.play();

      Toastify({
        text: `🎶 Playing Music: ${data.titleTracks}`,
        duration: 4000,
        gravity: "top",
        position: "center",
        className: "toastify-antd success",
        stopOnFocus: true,
        offset: { x: 0, y: 50 },
      }).showToast();

      audioObj.addEventListener("ended", handleMusicEnd);
    } catch (err) {
      Toastify({
        text: "❌ Cannot play music!",
        duration: 4000,
        gravity: "top",
        position: "center",
        className: "toastify-antd error",
        stopOnFocus: true,
        offset: { x: 0, y: 50 },
      }).showToast();

      console.error(err);
    }
  };

  const handleMusicEnd = () => {
    playMusic();
  };

  useEffect(() => {
    return () => {
      document.title = "Nguyễn Minh Nhật";
    };
  }, []);

  return (
    <>
      {showPopup && (
        <div className={`music-popup ${popupClass}`}>
          <img src="./assets/icons/bugcat.gif" alt="Hà Quỳnh Anh" className="bugcat-icon"/>
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
    </>
  );
}
