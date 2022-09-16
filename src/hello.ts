import middy from "@middy/core";
import inputOutputLoggerMiddleware from "@middy/input-output-logger";
import httpEventNormalizer from "@middy/http-event-normalizer";

const sayHi = async (event: any) => {
  return {
    body: JSON.stringify(event),
    headers: { "content-type": "application/json" },
    statusCode: 200,
  };
};

export const handler = middy(sayHi)
  .use(httpEventNormalizer())
  .use(inputOutputLoggerMiddleware());
