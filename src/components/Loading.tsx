import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";

export interface ILoading {
  fixedLoadTime?: number;
  children?: JSX.Element | JSX.Element[];
}

const Loading: React.FC<ILoading> = (props: ILoading) => {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    if (props.fixedLoadTime) {
      var millisecondsToWait = props.fixedLoadTime * 1000;
      setTimeout(function () {
        setShowLoading(false);
      }, millisecondsToWait);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {showLoading && (
        <div style={{ textAlign: "center", padding: "3em" }}>
          <CircularProgress />
        </div>
      )}
      <div style={{ display: `${showLoading ? "none" : "block"}` }}>{props.children}</div>
    </div>
  );
};

export default Loading;
