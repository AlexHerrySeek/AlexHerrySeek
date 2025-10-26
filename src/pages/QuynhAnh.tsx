import { useState, useEffect, useRef } from "react";
import { useSpring, animated } from "react-spring";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import "./QuynhAnh.css";

const lines = [
  "Từ lần đầu gặp cậu, tớ đã biết tim mình không ổn.",
  "Mỗi tin nhắn từ cậu làm tim tớ rung lên từng nhịp.",
  "Tớ đã nghĩ mãi… liệu có nên nói điều này không.",
  "Nhưng nếu không nói thì sẽ tiếc cả đời.",
  "Nên hôm nay, tớ quyết định nói ra...",
  "Tớ thích cậu!",
  "Không phải là thích thoáng qua, mà là thật lòng đấy.",
  "Tớ không mong gì nhiều, chỉ mong được ở bên cạnh cậu, làm cậu cười mỗi ngày.",
  "Nếu cậu cho phép, tớ sẽ chăm sóc và lắng nghe cậu thật nhiều.",
  "Tớ muốn cùng cậu viết tiếp câu chuyện này, từng dòng, từng chương...",
  "Cậu có đồng ý làm chương đầu tiên cùng tớ không?",
  "Tớ biết tình cảm không thể ép buộc, nhưng tớ muốn cho cậu biết tớ nghiêm túc đến nhường nào.",
  "Cậu là lý do khiến mỗi ngày của tớ trở nên đặc biệt hơn.",
  "Chỉ cần một cái gật đầu từ cậu, tớ sẽ nắm tay cậu thật chặt và không buông.",
  "Tớ không hoàn hảo, nhưng tớ thật lòng.",
  "Nếu cậu cho tớ cơ hội, tớ sẽ biến mỗi ngày bên cậu thành một ngày đáng nhớ.",
  "Và nếu cậu cũng có chút rung động giống tớ...",
  "Thì... mình bắt đầu một chuyện tình nhé?",
];

export default function App() {
  const [started, setStarted] = useState(false);
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(true);
  const [finished, setFinished] = useState(false);
  const audioRef = useRef(null);

  const props = useSpring({
    opacity: show ? 1 : 0,
    config: { duration: 1000 },
  });

  useEffect(() => {
    if (!started || finished) return;

    const interval = setInterval(() => {
      setShow(false);
      setTimeout(() => {
        if (index < lines.length - 1) {
          setIndex((prev) => prev + 1);
          setShow(true);
        } else {
          setFinished(true);
          setShow(true);
        }
      }, 1000);
    }, 3000);

    return () => clearInterval(interval);
  }, [index, started, finished]);

  const handleStart = () => {
    setStarted(true);
    const audio = audioRef.current;

    if (audio) {
      try {
        audio.load();
        audio.loop = true;
        audio.muted = false;
        audio.volume = 1.0;

        const playPromise = audio.play();

        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              console.log("🎵 Nhạc phát thành công!");
            })
            .catch((error) => {
              console.warn("🚫 Trình duyệt chặn phát nhạc:", error);
              audio.oncanplay = () => {
                audio.play().catch(() => {
                  Toastify({
                          text: `Nếu không nghe thấy nhạc, hãy nhấn lại 'Bắt đầu' nha 💖`,
                          duration: 4000,
                          gravity: "top",
                          position: "center",
                          className: "toastify-antd success",
                          stopOnFocus: true,
                          offset: { x: 0, y: 50 },
                        }).showToast();
                });
              };
            });
        }
      } catch (err) {
        console.error("❌ Lỗi phát nhạc:", err);
      }
    }
  };

  return (
    <div className="App">
      {!started ? (
        <div className="start-screen">
          <h1>💖 Nhấn Nút Bắt Đầu Có Bất Ngờ =))</h1>
          <center><button className="Btn" onClick={handleStart}>
            Bắt đầu
          </button></center>
          <audio
            ref={audioRef}
            src="https://nguyennhatit.pages.dev/givaychen/caigidaybro/music.mp3"
            preload="auto"
          />
        </div>
      ) : (
        <animated.div style={props} className="line">
          {finished
            ? `💌 Hà Quỳnh Anh à,

Tớ biết… tớ không phải là người giỏi ăn nói,
cũng chẳng biết cách nói những lời ngọt ngào như trong phim.
Tớ chỉ là một anh chàng IT, suốt ngày cắm mặt vào màn hình,
nói chuyện với code còn nhiều hơn nói chuyện với người khác.

Nhưng từ khi gặp cậu, mọi thứ bỗng khác đi hẳn.
Mỗi tin nhắn của cậu đến, tớ lại mỉm cười như thằng ngốc,
mỗi lần nghe cậu gọi tên, tim tớ lại đập nhanh như CPU đang quá tải.
Cậu khiến những ngày nhàm chán của tớ bỗng có màu sắc,
khiến mọi lỗi bug đều trở nên dễ chịu,
vì tớ biết — chỉ cần nghĩ đến cậu là lòng tớ lại bình yên.

Có những lúc đang làm việc, đồng nghiệp nhìn tớ cười rồi hỏi:
“Ê, sao mày vui thế?”
Tớ chẳng biết trả lời sao ngoài câu:
“Chắc tại có người khiến tao thấy cuộc sống đáng yêu hơn.”
Rồi khi bạn bè nhắc đến tên cậu, tớ lại giả vờ thản nhiên,
nhưng trong đầu thì chạy 7749 dòng suy nghĩ về nụ cười của cậu.

Tớ không biết từ khi nào, nhưng chỉ cần cậu nhắn “chúc ngủ ngon”,
tớ lại thấy tim mình ấm,
và khi cậu im lặng, tớ lại nhớ.
Tớ bắt đầu quan tâm đến từng điều nhỏ nhặt —
cậu ăn chưa, cậu có mệt không, cậu có buồn chuyện gì không…
Cậu biết không, với tớ, chỉ cần cậu bình yên thôi, là tớ thấy ngày hôm đó đã đủ đẹp rồi.

Có lẽ tớ không hoàn hảo,
không có vẻ ngoài hào nhoáng,
cũng chẳng biết nói những lời bay bổng,
nhưng tớ thật lòng muốn được ở bên cậu —
để chăm sóc, để lắng nghe, để làm cậu cười mỗi khi mệt mỏi.

Nếu có thể, tớ muốn cùng cậu đi qua những ngày mưa và cả những ngày nắng,
muốn được cùng cậu ăn những bữa tối đơn giản,
và muốn mỗi sáng tỉnh dậy đều được chào ngày mới bằng nụ cười của cậu.

Hà Quỳnh Anh à,
liệu cậu có thể cho anh chàng IT ngốc nghếch này một cơ hội,
được bước vào thế giới của cậu —
và yêu cậu theo cách thật lòng nhất có thể không? ❤️`
            : lines[index]}
        </animated.div>
      )}
    </div>
  );
}
