import { Box, Button, Skeleton } from "@mui/material";
import React, { useCallback, useEffect, useState, createRef } from "react";
import { v4 } from "uuid";

type Props = {
  defaultImage?: string;
  onChange: (file: File | null, id: string) => void;
};

const FileUploader: React.VFC<Props> = ({ onChange, defaultImage }) => {
  const [file, setFile] = useState<File | null>(null);
  const [src, setSrc] = useState<string>("");
  const ref = createRef<HTMLInputElement>();
  const onFileInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files[0]) {
        const id = v4();
        console.log(id);
        setFile(e.target.files[0]);
        onChange(e.target.files[0], id);
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
    onChange(null, "");
  }, [onChange]);

  useEffect(() => {
    if (defaultImage) {
      // defaultImageがセットされていたら、URLを獲得してsetSrc
    }
  }, [defaultImage]);

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
            <Box sx={{ height: 210, width: "100%" }}>
              <img
                src={src}
                alt="selected one"
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </Box>
            <Button
              onClick={onClickDelete}
              variant="contained"
              sx={{ margin: "20px auto 20px" }}
            >
              選択を取り消す
            </Button>
          </>
        ) : (
          <>
            <Skeleton
              sx={{ height: 210, width: "100%" }}
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
