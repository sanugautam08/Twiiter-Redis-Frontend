import React from "react";
import {
  FaRegCheckCircle,
  FaComment,
  FaRegChartBar,
  FaHeart,
  FaLeaf,
} from "react-icons/fa";
import TrendsKeyword from "./TrendsKeyword";

let count = 0;
const Posts = () => {
  const [state, setState] = React.useState([
    {
      author: "sanu gautam",
      profile: "@sanu",
      img: "/images/profile2.jpeg",
      id: 1,
      post: "",
      content: `शाखों से टूट जाए वो पत्ते नहीं है,
      आँधी से कोई कह दे आँधी से के औकात में रहे।
      
      लोग हर मोड़ पे रूक रूक के संभलते क्यूँ है,
      इतना डरते है तो घर से निकलते क्यूँ है।
      
      हम से पहले भी मुसाफ़िर कई गुज़रे होंगे,
      कम से कम राह के पत्थर तो हटाते जाते।
      
      ये ज़रूरी है कि आँखों का भरम क़ाएम रहे,
      नींद रक्खो या न रक्खो ख़्वाब मेयारी रखो।
      रोज़ तारों को नुमाइश में ख़लल पड़ता है,
      चाँद पागल है अँधेरे में निकल पड़ता है।`,
      likes: "",
      comments: "",
      retweet: "",
      share: "",
    },
    {
      author: "sarthak jain",
      profile: "@sarthak",
      img: "/images/profile1.jpeg",
      id: 2,
      post: "",
      content: "offline is new luxury",
      likes: "",
      comments: "",
      retweet: "",
      share: "",
    },
    {
      author: "saurabh balke",
      profile: "@saurabh",
      img: "/images/profile.jpeg",
      id: 3,
      post: "",
      content: "Not how long, but how well you have lived is the main thing.",
      likes: "",
      comments: "",
      retweet: "",
      share: "",
    },
    {
      author: "sudhanshu ",
      profile: "@sudhanshu",
      img: "",
      id: 3,
      post: "",
      content: `बन के इक हादसा बाज़ार में आ जाएगा,
      जो नहीं होगा वो अखबार में आ जाएगा।
      
      जा के कोई कह दे, शोलों से चिंगारी से,
      फूल इस बार खिले हैं बड़ी तैयारी से।
      
      अजीब लोग हैं मेरी तलाश में मुझको,
      वहां पर ढूंढ रहे हैं जहां नहीं हूं मैं।
      
      सूरज से जंग जीतने निकले थे बेवकूफ,
      सारे सिपाही मोम के थे घुल के आ गए।
      
      जिंदगी है एक सफर और जिंदगी की राह में,
      ज़िन्दगी भी आये तो ठोकर लगानी चाहिए।`,
      likes: "",
      comments: "",
      retweet: "",
      share: "",
    },
    {
      author: "sudhanshu ",
      profile: "@sudhanshu",
      img: "",
      id: 3,
      post: "",
      content: `बन के इक हादसा बाज़ार में आ जाएगा,
      जो नहीं होगा वो अखबार में आ जाएगा।
      
      जा के कोई कह दे, शोलों से चिंगारी से,
      फूल इस बार खिले हैं बड़ी तैयारी से।
      
      अजीब लोग हैं मेरी तलाश में मुझको,
      वहां पर ढूंढ रहे हैं जहां नहीं हूं मैं।
      
      सूरज से जंग जीतने निकले थे बेवकूफ,
      सारे सिपाही मोम के थे घुल के आ गए।
      
      जिंदगी है एक सफर और जिंदगी की राह में,
      ज़िन्दगी भी आये तो ठोकर लगानी चाहिए।`,
      likes: "",
      comments: "",
      retweet: "",
      share: "",
    },
  ]);
  return (
    <div>
      {state.map((keyword) => (
        <div key={keyword.id}>
          <div className="postss">
            <div className="postss__first">
              <div className="posts__first__img">
                <img src={keyword.img} alt="profile img" />
              </div>

              <div className="posts__first__name">
                <strong>{keyword.author}</strong>{" "}
                <FaRegCheckCircle className="verify" />
              </div>
              <br />
              <div className="posts__first__username">
                {keyword.profile}
                <span>6m</span>
              </div>
            </div>
            <div className="postss__details">
              <div className="postss__details__msg">{keyword.content}</div>
              <div className="postss__details__img">
                <img src="/images/post.jpeg" alt="post" />
              </div>
              <div className="reactions">
                <span>
                  <FaComment className="re" /> 45
                </span>
                <span>
                  <FaRegChartBar className="re" /> 4
                </span>
                <span>
                  <FaHeart className="re" /> 345
                </span>
                <span>
                  <FaLeaf className="re" /> 234
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
