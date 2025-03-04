import { Apps } from "@mui/icons-material";
import { Avatar, Badge, Box, IconButton, useTheme } from "@mui/material";
import FlexBox from "components/FlexBox";
import { H6, Tiny } from "components/Typography";
import { FC, Fragment, useRef, useState } from "react";
import PopoverLayout from "./PopoverLayout";

// dummy  data


const ServicePopover: FC = () => {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <IconButton ref={anchorRef} onClick={() => setOpen(true)}>
        <Badge color="error" badgeContent={0}>
          <Apps sx={{ color: "text.disabled" }} />
        </Badge>
      </IconButton>

      
    </Fragment>
  );
};

// -----------------------------------------------------------------

type ListItemProps = {
  service: {
    image: string;
    title: string;
    body: string;
  };
};
function ListItem({ service }: ListItemProps) {
  const theme = useTheme();
  const colorbg =
    theme.palette.mode === "light" ? "secondary.light" : "divider";

  return (
    <FlexBox
      p={2}
      alignItems="center"
      sx={{
        cursor: "pointer",
        "&:hover": { backgroundColor: colorbg },
      }}
    >
      <Avatar src={service.image} sx={{ width: 35, height: 35 }} />

      <Box ml={2}>
        <H6>{service.title}</H6>
        <Tiny display="block" fontWeight={500} color="text.disabled">
          {service.body}
        </Tiny>
      </Box>
    </FlexBox>
  );
}

export default ServicePopover;
