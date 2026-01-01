# Luciano — Portfólio (React + Vite)

Inclui:
- Foto (`public/assets/luciano.jpg`)
- Currículo em PDF (`public/assets/cv-luciano.pdf`)
- Página única com seções: Sobre, Competências, Projetos, Experiência e Formação

## Rodar local
```bash
npm install
npm run dev
```

## Build de produção
```bash
npm run build
npm run preview -- --host
```

## Publicar com NGINX (Windows)
Após `npm run build`, a pasta gerada é `dist/`.

Exemplo de trecho no `nginx.conf`:
```nginx
server {
  listen 80;
  server_name luciano.seudominio.com.br;

  root C:/caminho/para/dist;
  index index.html;

  location / {
    try_files $uri $uri/ /index.html;
  }
}
```

> Dica: se você já está usando o NGINX como serviço (NSSM), basta atualizar o `root` e dar reload.

