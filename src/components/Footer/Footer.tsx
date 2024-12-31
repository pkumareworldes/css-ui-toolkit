import { AppBar, Link, Box, Typography } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { memo } from "react";
import { FooterProps } from "../../types/IFooter";
import pxToRem from '../../helpers/pxToRem';

const Footer = (props: FooterProps) => {
  const { footerTheme, footerLeftPanel, footerRightPanel, footerBottomPanel } = props;
  const theme = createTheme(footerTheme || undefined);

  return (
    <ThemeProvider theme={theme}>
      <Box>
        {footerLeftPanel && (
          <div className="flex flex-grow flex-shrink-0">
            {footerLeftPanel}
          </div>
        )}
        {footerRightPanel && (
          <div className="flex flex-grow flex-shrink-0 px-12 justify-end">
            {footerRightPanel}
          </div>
        )}
      </Box>
      <Box
        sx={(theme) => ({
          padding: 2,
          textAlign: 'center',
          borderTop: `${pxToRem(1)} solid ${theme.palette.divider}`,
        })}
      >

        {footerBottomPanel && footerBottomPanel.length > 0 && (
          <Box
            sx={{
              marginTop: { xs: 1, md: 2 },
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              justifyContent: 'center',
              gap: 2,
            }}
          >
            {footerBottomPanel.map((item, index) => (
              <Typography key={index} variant="body2">
                {item.isLink ? (
                  <Link href={item.value} target="_blank" rel="noopener noreferrer">
                    {item.label}
                  </Link>
                ) : (
                  <>
                    <strong>{item.label}:</strong> {item.value}
                  </>
                )}
              </Typography>
            ))}
          </Box>
        )}
      </Box>
    </ThemeProvider>
  );
};

export default memo(Footer);
