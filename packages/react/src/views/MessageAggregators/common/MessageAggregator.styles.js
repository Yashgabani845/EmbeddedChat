import { css } from '@emotion/react';

const useMessageAggregatorStyles = () => {
  const styles = {
    listContainerStyles: css`
      flex: 1;
      overflow: auto;
      display: flex;
      flex-direction: column;
      justify-content: initial;
      align-items: initial;
      overflow-x: hidden;
      max-width: 100%;
    `,

    noMessageStyles: css`
      justify-content: center;
      align-items: center;
    `,

    centerColumnStyles: css`
      display: flex;
      flex-direction: column;
      align-items: center;
    `,
  };

  return styles;
};

export default useMessageAggregatorStyles;
