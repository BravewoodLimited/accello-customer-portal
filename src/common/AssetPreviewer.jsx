import { useMemo } from "react";
import FileTypeZipSvg from "assets/svgs/file-type-zip.svg";
import ImagePreviewer from "./ImagePreviewer";
import VideoPreviewer from "./VideoPreviewer";
import AudioPreviewer from "./AudioPreviewer";
import PdfPreviewer from "./PdfPreviewer";
import SpreadSheetPreviewer from "./SpreadSheetPreviewer";
import WordDocumentPreviewer from "./WordDocumentPreviewer.jsx";
import AssetType from "enums/AssetType";
import { getAssetInfo } from "utils/asset";

/**
 *
 * @param {AssetPreviewerProps} props
 */
function AssetPreviewer(props) {
  const {
    src,
    ImagePreviewerProps,
    VideoPreviewerProps,
    AudioPreviewerProps,
    PdfPreviewerProps,
    WordDocumentPreviewerProps,
    SpreadSheetPreviewerProps,
    ...rest
  } = props;
  const { name, type } = useMemo(() => getAssetInfo(src), [src]);

  if ([AssetType.JPEG, AssetType.JPG, AssetType.PNG].includes(type))
    return (
      <ImagePreviewer alt={name} src={src} {...rest} {...ImagePreviewerProps} />
    );

  if ([AssetType.WAV, AssetType.WEBM, AssetType.MP4].includes(type))
    return <VideoPreviewer src={src} {...rest} {...VideoPreviewerProps} />;

  if ([AssetType.MP3].includes(type))
    return <AudioPreviewer src={src} {...rest} {...AudioPreviewerProps} />;

  if ([AssetType.PDF].includes(type))
    return <PdfPreviewer src={src} {...rest} {...PdfPreviewerProps} />;

  if ([AssetType.DOC, AssetType.DOCX].includes(type))
    return (
      <WordDocumentPreviewer
        src={src}
        {...rest}
        {...WordDocumentPreviewerProps}
      />
    );

  if ([AssetType.XLS, AssetType.XLSX].includes(type))
    return (
      <SpreadSheetPreviewer
        src={src}
        {...rest}
        {...SpreadSheetPreviewerProps}
      />
    );

  if ([AssetType.ZIP, AssetType.RAR, AssetType.ISO].includes(type))
    return (
      <ImagePreviewer
        alt={name}
        src={FileTypeZipSvg}
        {...rest}
        {...ImagePreviewerProps}
      />
    );

  return null;
}

export default AssetPreviewer;

/**
 * @typedef {{
 * src: File | string;
 * type: keyof typeof AssetType;
 * ImagePreviewerProps: import("./ImagePreviewer").ImagePreviewerProps;
 * VideoPreviewerProps: import("./VideoPreviewer").VideoPreviewerProps;
 * AudioPreviewerProps: import("./AudioPreviewer").AudioPreviewerProps;
 * PdfPreviewerProps: import("./PdfPreviewer").PdfPreviewerProps;
 * SpreadSheetPreviewerProps: import("./SpreadSheetPreviewer").SpreadSheetPreviewerProps;
 * WordDocumentPreviewerProps: import("./WordDocumentPreviewer.jsx").WordDocumentPreviewerProps
 * }} AssetPreviewerProps
 */
