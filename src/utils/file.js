function isBase64DataURL(dataURL) {
  if (typeof dataURL !== "string") return false;
  const base64Match = dataURL.match(/^data:[^;]+;base64,([^,]+)$/);

  if (base64Match) {
    const base64Data = base64Match[1];
    try {
      atob(base64Data);
      return true;
    } catch (e) {}
  }

  return false;
}

/**
 *
 * @param {string} dataUrl
 * @returns
 */
export function getBase64FileType(dataUrl) {
  if (!(dataUrl && isBase64DataURL(dataUrl))) return "";

  return dataUrl?.substring(
    dataUrl?.indexOf("/") + 1,
    dataUrl?.indexOf(";base64")
  );
}

/**
 *
 * @param {Blob} blob
 * @param {string} [fileName='file']
 */
export function downloadFile(blob, fileName = "file") {
  if (blob instanceof Blob) {
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();
  }
}

/**
 *
 * @param {Blob} blob
 */
export function blobToBase64(blob) {
  return new Promise((resolve, reject) => {
    if (blob instanceof Blob) {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(blob);
    } else {
      resolve("");
    }
  });
}
