import { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
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
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(true);
  const [finished, setFinished] = useState(false);

  const props = useSpring({
    opacity: show ? 1 : 0,
    config: { duration: 1000 },
  });

  useEffect(() => {
    if (finished) return;

    const interval = setInterval(() => {
      setShow(false);
      setTimeout(() => {
        if (index < lines.length - 1) {
          setIndex(index + 1);
          setShow(true);
        } else {
          setFinished(true);
          setShow(true);
        }
      }, 1000);
    }, 3000);

    return () => clearInterval(interval);
  }, [index, finished]);

  return (
    <div className="App">
      <animated.div style={props} className="line">
        {finished
          ? `Hà Quỳnh Anh à, tớ biết tớ có thể hơi ngốc nghếch,  
có lúc vụng về, nhắn tin toàn typo, nhưng tớ thật sự thích cậu.  
Mỗi lần nghĩ về cậu là tim tớ lại nhảy loạn lên,  
và tớ không thể không muốn nói rằng… tớ muốn được bên cậu,  
chăm sóc cậu, làm cậu cười, kể cả khi tớ không biết làm gì.  
Cậu có chịu đón nhận một anh chàng IT ngốc nghếch như tớ không? ❤️`
          : lines[index]}
      </animated.div>
    </div>
  );
}
