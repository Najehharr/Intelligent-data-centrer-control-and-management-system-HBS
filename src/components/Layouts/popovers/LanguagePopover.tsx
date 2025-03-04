import { Box, IconButton, MenuItem, Popover, styled } from "@mui/material";
import { H6 } from "components/Typography";
import { FC, useRef, useState } from "react";

// dummy language options
const languageOptions: {
  [key: string]: { icon: string; label: string };
} = {
  en: {
    icon: "/static/flags/usa.png",
    label: "English",
  },
  es: {
    icon: "/static/flags/spain.png",
    label: "Spanish",
  },
  //   hi: {
  //     icon: '/static/flags/in.png',
  //     label: 'Hindi',
  //   },
};

// custom styled components
const IconWrapper = styled(Box)(() => ({
  display: "flex",
  height: 20,
  width: 20,
  "& img": {
    width: "100%",
    borderRadius: "50%",
    objectFit: "cover",
  },
}));

const ItemWrapper = styled(Box)(() => ({
  display: "flex",
  "& img": { width: "100%" },
}));

const LanguagePopover: FC = () => {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);





  return (
    <>
   
      <Popover
        keepMounted
        open={open}
        onClose={handleClose}
        anchorEl={anchorRef.current}
        anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
        PaperProps={{ sx: { width: 150, padding: "0.5rem 0" } }}
      >
        
      </Popover>
    </>
  );
};

export default LanguagePopover;
