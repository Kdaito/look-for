import { Box, Button, Skeleton, SxProps } from "@mui/material";
import React, { useCallback, useEffect, useState, createRef } from "react";

type Props = {
  defaultSrc?: string;
  isIcon?: boolean;
  onChange: (file: File | null) => void;
};

const nomalSx: SxProps = { height: 210, width: "100%" };
const iconSx: SxProps = {
  height: 210,
  width: 210,
  borderRadius: 100,
  overflow: "hidden",
  margin: "0 auto",
};

const FileUploader: React.VFC<Props> = ({
  onChange,
  defaultSrc,
  isIcon = false,
}) => {
  const [file, setFile] = useState<File | null>(null);
  const [src, setSrc] = useState<string>("");
  const ref = createRef<HTMLInputElement>();
  const onFileInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files[0]) {
        setFile(e.target.files[0]);
        onChange(e.target.files[0]);
      }
    },
    [onChange]
  );

  const onClickSelect = () => {
    if (ref.current) ref.current.click();
  };

  const onClickDelete = useCallback(() => {
    setFile(null);
    setSrc("");
    onChange(null);
  }, [onChange]);

  useEffect(() => {
    if (defaultSrc && defaultSrc !== "") {
      setSrc(defaultSrc);
    }
  }, [defaultSrc]);

  useEffect(() => {
    if (!file) return;
    const fileReader = new FileReader();
    fileReader.onload = (event) => {
      if (event.target && event.target.result) {
        setSrc(event.target.result as string);
      }
    };
    fileReader.readAsDataURL(file);
  }, [file]);

  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        <input
          type="file"
          accept="image/*"
          onChange={onFileInputChange}
          ref={ref}
          hidden={true}
        />
        {src !== "" ? (
          <>
            <Box sx={isIcon ? iconSx : nomalSx}>
              <img
                src={src}
                alt="selected one"
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </Box>
            <Button
              onClick={onClickDelete}
              variant="contained"
              sx={{ margin: "30px auto 0" }}
            >
              選択を取り消す
            </Button>
          </>
        ) : (
          <>
            <Skeleton
              sx={isIcon ? iconSx : nomalSx}
              animation="wave"
              variant="rectangular"
            />
            <Button
              onClick={onClickSelect}
              variant="contained"
              sx={{ margin: "20px auto 20px" }}
            >
              画像を選択してください
            </Button>
          </>
        )}
      </Box>
    </>
  );
};

export default FileUploader;
