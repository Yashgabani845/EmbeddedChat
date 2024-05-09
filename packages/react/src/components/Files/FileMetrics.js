import React from 'react';
import { formatDistance } from 'date-fns';
import useComponentOverrides from '../../theme/useComponentOverrides';
import { Box } from '../Box';
import { appendClassNames } from '../../lib/appendClassNames';
import { Icon } from '../Icon';

import { fileMetricsStyles as styles } from './Files.styles';

export const FileMetrics = ({ className = '', file, style = {}, ...props }) => {
  const { styleOverrides, classNames } = useComponentOverrides(
    'MessageMetrics',
    className,
    style
  );
  return (
    <Box
      css={styles.metrics}
      className={appendClassNames('ec-message-metrics', classNames)}
      style={styleOverrides}
      {...props}
    >
      <div
        css={styles.metricsItem}
        title={new Date(file.uploadedAt).toLocaleString()}
      >
        <Icon size="1.25rem" name="clock" />
        <div css={styles.metricsItemLabel}>
          {formatDistance(new Date(file.uploadedAt), new Date(), {
            addSuffix: true,
          })}
        </div>
      </div>
    </Box>
  );
};
