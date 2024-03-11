# Dockerで express へ nginx を使ったリバースプロキシ経由でアクセスするサンプル（SSL版）

## install

※ Docker 及び Docker compose がインストールされていることが前提です。

```bash
docker compose build
```

## Dockerの起動

```bash
docker compose up
```

## 証明書の承認

Dockerを起動したら、オレオレ証明書を使用しているため、ブラウザで警告が出ます。

先に以下の2つのURLにアクセスして、許可を行ってください。

- [https://localhost](https://localhost)
- [https://api.localhost](https://api.localhost)


## ブラウザでアクセス

- [https://localhost](https://localhost)
