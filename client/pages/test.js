const draw = (newCanvas, image, ctx, padding, resolve, reject) => {
  const canvas = newCanvas;
  canvas.width = image.width;
  canvas.height = image.height;

  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  const { data, width, height } = imageData;

  // 初始化位置
  let startX = width;
  let startY = height;
  let endX = 0;
  let endY = 0;

  // 有色彩则设置裁剪的起点和终点
  for (let col = 0; col < width; col += 1) {
    for (let row = 0; row < height; row += 1) {
      // 网格索引
      const pxStartIndex = (row * width + col) * 4;

      // 实际像素RGBA
      const pxData = {
        r: data[pxStartIndex],
        g: data[pxStartIndex + 1],
        b: data[pxStartIndex + 2],
        a: data[pxStartIndex + 3]
      };

      // 存在色彩：不透明
      const colorExist = pxData.a !== 0;

      if (colorExist) {
        startX = Math.min(col, startX);
        endX = Math.max(col, startX);
        startY = Math.min(row, startY);
        endY = Math.max(row, endY);
      }
    }
  }

  endX += 1;
  endY += 1;

  startX -= padding;
  startY -= padding;
  endX += padding;
  endY += padding;

  const cropCanvas = document.createElement("canvas");
  const cropCtx = cropCanvas.getContext("2d");
  if (!cropCtx) {
    reject(new Error("canvas error"));
    return;
  }

  // 重新裁剪
  cropCanvas.width = endX - startX;
  cropCanvas.height = endY - startY;
  cropCtx.drawImage(
    image,
    startX,
    startY,
    cropCanvas.width,
    cropCanvas.height,
    0,
    0,
    cropCanvas.width,
    cropCanvas.height
  );

  resolve(cropCanvas.toDataURL());
};

export const clear = (url, padding = 0) => {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    const image = new Image();
    image.onload = () => draw(canvas, image, ctx, padding, resolve, reject);
    image.src = url;
    image.crossOrigin = "Anonymous";
  });
};
