import React from "react"

const RatingCard = (props) => {

  const item = props.item;
    
    //Switch statement to return correct number of red hearts: 
    const renderStars = (x) => {
      let text = "";
      switch (x) {
        case 1:
          text = "❤️🤍🤍🤍🤍🤍🤍🤍🤍🤍";
          break;
        case 2:
          text = "❤️❤️🤍🤍🤍🤍🤍🤍🤍🤍";
          break;
        case 3:
          text = "❤️❤️❤️🤍🤍🤍🤍🤍🤍🤍";
          break;
        case 4:
          text = "❤️❤️❤️❤️🤍🤍🤍🤍🤍🤍";
          break;
        case 5:
          text = "❤️❤️❤️❤️❤️🤍🤍🤍🤍🤍";
          break;
        case 6:
          text = "❤️❤️❤️❤️❤️❤️🤍🤍🤍🤍";
          break;
        case 7:
          text = "❤️❤️❤️❤️❤️❤️❤️🤍🤍🤍";
          break;
        case 8:
          text = "❤️❤️❤️❤️❤️❤️❤️❤️🤍🤍";
          break;
        case 9:
          text = "❤️❤️❤️❤️❤️❤️❤️❤️❤️🤍";
          break;
        case 10:
          text = "❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️";
          break;
        default:
          text = "";
          break;
      }
      return text;
    };

    return (
      <div className="card rating-card">
        <p>{item.date.substring(0, 10)}:</p>
       {/* Pass each score into the switch statement */}
        <p>{renderStars(item.score)}</p>
      </div>
    );
  };
  
  export default RatingCard;