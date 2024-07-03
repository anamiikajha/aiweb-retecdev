import React from "react";
import { FaCheck } from "react-icons/fa6";
function ContentItem({ itemText }) {
  return (
    <div className="frame-content-item">
      <FaCheck width={24} height={24} alt="" className="icon-box" />
      <div className="frame-item-test">{itemText}</div>
    </div>
  );
}

export default ContentItem;
