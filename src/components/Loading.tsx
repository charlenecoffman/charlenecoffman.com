import { CircularProgress } from "material-ui";
import React, { useEffect, useState } from "react";

export interface ILoading {
  fixedLoadTime?: number;
  children?: JSX.Element | JSX.Element[];
}

const Loading: React.FC<ILoading> = (props: ILoading) => {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    var millisecondsToWait = props.fixedLoadTime;
    setTimeout(function () {
      setShowLoading(false);
    }, millisecondsToWait);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {showLoading && <CircularProgress />}
      {!showLoading && <div>{props.children}</div>}
    </div>
  );
};

export default Loading;
