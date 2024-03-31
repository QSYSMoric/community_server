export default ({ env }) => ({
  "users-permissions": {
    config: {
      jwt: {
        expiresIn: "7d",
      },
      register: {
        allowedFields: ["nickname", "uuid"],
      },
    },
  },
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        // QQ邮箱服务器和默认端口
        host: env("SMTP_HOST", "smtp.qq.com"),
        port: env("SMTP_PORT", 465),
        auth: {
          // 发送账号和客户端鉴权码
          user: env("SMTP_USERNAME", "183957330@qq.com"),
          pass: env("SMTP_PASSWORD", "earshvmqqxkxbiih"),
        },
      },
      settings: {
        // 默认发送账号
        defaultFrom: "183957330@qq.com",
        // 默认回复账号
        defaultReplyTo: "183957330@qq.com",
      },
    },
  },
});
