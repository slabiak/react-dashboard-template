import { memo, forwardRef } from 'react';

import Box from '@mui/material/Box';

import { SxProps, Theme } from '@mui/material';
import { StyledScrollbar, StyledRootScrollbar } from './styles';

interface Props {
  children: React.ReactNode;
  sx?: SxProps<Theme>;
}

const Scrollbar = forwardRef<HTMLDivElement, Props>(({ children, sx, ...other }: Props, ref) => {
  const userAgent = typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent;

  const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

  if (mobile) {
    return (
      <Box ref={ref} sx={{ overflow: 'auto', ...sx }} {...other}>
        {children}
      </Box>
    );
  }

  return (
    <StyledRootScrollbar>
      <StyledScrollbar
        scrollableNodeProps={{
          ref,
        }}
        clickOnTrack={false}
        sx={sx}
        {...other}
      >
        {children}
      </StyledScrollbar>
    </StyledRootScrollbar>
  );
});

export default memo(Scrollbar);
