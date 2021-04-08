export const verifyLike = (arrToVerify: any, id: any) =>
  !!arrToVerify.find((element: any) => element.toString() === id.toString());
