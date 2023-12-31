import { cleanEnv, str, port } from 'envalid';

function validateEnv(): void {
  cleanEnv(process.env, {
    NODE_ENV: str({
      choices: ['development', 'production'],
    }),
    MONGO_PASSWORD: str(),
    MONGO_USER: str(),
    MONGO_PATH: str(),
    PORT: port({ default: 8080 }),
  });
}

export default validateEnv;
