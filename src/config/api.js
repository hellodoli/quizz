export const isDev = process.env.NODE_ENV !== 'production';
export const apiTimeout = 30000;

export const staticDataPath = `${process.env.PUBLIC_URL}/static/data`;
export const staticImgPath = `${process.env.PUBLIC_URL}/static/img`;
export const staticImgBoardPath = `${staticImgPath}/board`;
export const staticImgDetailPath = `${staticImgPath}/detail`;
